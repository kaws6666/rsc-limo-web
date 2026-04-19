"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const CORMORANT = "var(--font-cormorant, 'Cormorant Garamond', Georgia, serif)";
const TOTAL    = 121;
const DURATION = 5.04;

function pad4(n: number) { return String(n).padStart(4, "0"); }
function frameUrl(i: number) { return `/frames/frame_${pad4(i + 1)}.jpg`; }

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cW: number, cH: number,
) {
  const vr = img.naturalWidth / img.naturalHeight;
  const cr = cW / cH;
  let dw: number, dh: number, dx: number, dy: number;
  if (vr > cr) {
    dh = cH; dw = dh * vr; dx = (cW - dw) / 2; dy = 0;
  } else {
    dw = cW; dh = dw / vr; dx = 0; dy = (cH - dh) / 2;
  }
  ctx.drawImage(img, dx, dy, dw, dh);
}

export function CinematicHeroSection() {
  const heroRef     = useRef<HTMLElement>(null);
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const framesRef   = useRef<HTMLImageElement[]>([]);
  const hintRef     = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const logoRef     = useRef<HTMLDivElement>(null);
  const card1Ref    = useRef<HTMLDivElement>(null);
  const card2Ref    = useRef<HTMLDivElement>(null);
  const card3Ref    = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const fadeRef     = useRef<HTMLDivElement>(null);

  const [loadPct, setLoadPct] = useState(0);
  const [ready,   setReady]   = useState(false);

  /* ── Load all frames in parallel ── */
  useEffect(() => {
    const imgs: HTMLImageElement[] = new Array(TOTAL);
    let loaded = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const cvs = canvasRef.current!;
    cvs.width  = Math.round(window.innerWidth  * dpr);
    cvs.height = Math.round(window.innerHeight * dpr);

    const onOne = (img: HTMLImageElement, idx: number) => {
      imgs[idx] = img;
      loaded++;
      setLoadPct(Math.round((loaded / TOTAL) * 100));
      if (idx === 0) {
        const ctx = cvs.getContext("2d");
        if (ctx) drawCover(ctx, img, cvs.width, cvs.height);
      }
      if (loaded === TOTAL) { framesRef.current = imgs; setReady(true); }
    };

    for (let i = 0; i < TOTAL; i++) {
      const img = new Image();
      const idx  = i;
      img.onload  = () => onOne(img, idx);
      img.onerror = () => {
        loaded++;
        setLoadPct(Math.round((loaded / TOTAL) * 100));
        if (loaded === TOTAL) { framesRef.current = imgs; setReady(true); }
      };
      img.src = frameUrl(i);
    }
  }, []);

  /* ── Scroll animation ── */
  useEffect(() => {
    if (!ready) return;

    const reduced  = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis    = new Lenis({ lerp: 0.05 });
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);

    const frames   = framesRef.current;
    const canvas   = canvasRef.current!;
    const ctx      = canvas.getContext("2d")!;
    const cW       = canvas.width;
    const cH       = canvas.height;
    const scrollVH = Math.round(Math.min(Math.max(DURATION * 40, 200), 450));

    gsap.set([card1Ref.current, card2Ref.current, card3Ref.current], { opacity: 0 });
    gsap.set(ctaRef.current,  { opacity: 0, y: 60 });
    gsap.set(hintRef.current, { opacity: 1 });
    gsap.set(logoRef.current, { opacity: 1, scale: 1 });
    gsap.set(fadeRef.current, { opacity: 0 });

    const t = (pct: number) => DURATION * pct;

    let rafId = 0, targetIdx = 0;

    const render = () => {
      const idx = Math.min(Math.round(targetIdx), frames.length - 1);
      const img = frames[idx];
      if (img?.complete) drawCover(ctx, img, cW, cH);
      rafId = requestAnimationFrame(render);
    };
    render();

    if (reduced) return () => { cancelAnimationFrame(rafId); lenis.destroy(); };

    const gsapCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          pin: true, scrub: 0.5,
          start: "top top",
          end: `+=${scrollVH}%`,
          anticipatePin: 1,
          onUpdate(self) {
            targetIdx = self.progress * (TOTAL - 1);
            if (progressRef.current)
              gsap.set(progressRef.current, { scaleX: self.progress });
          },
        },
      });

      /* Parallax: canvas slowly zooms out and drifts up */
      tl.fromTo(
        canvasRef.current,
        { scale: 1.08, y: "4%" },
        { scale: 1.00, y: "-3%", ease: "none", duration: DURATION },
        0,
      );

      tl.to(hintRef.current, { opacity: 0, duration: t(0.05) }, 0);

      /* Logo fades out, then text cards take over */
      tl.to(logoRef.current, { opacity: 0, scale: 0.88, duration: t(0.10), ease: "power2.in" }, t(0.08));

      // Card 1 (top-left) fades in early, holds until card 3 arrives
      tl.to(card1Ref.current, { opacity: 1, duration: t(0.06), ease: "power2.out" }, t(0.18));
      tl.to(card1Ref.current, { opacity: 0, duration: t(0.06), ease: "power2.in"  }, t(0.68));

      // Card 2 (bottom-right) fades in shortly after card 1, also holds until card 3 arrives
      tl.to(card2Ref.current, { opacity: 1, duration: t(0.06), ease: "power2.out" }, t(0.30));
      tl.to(card2Ref.current, { opacity: 0, duration: t(0.06), ease: "power2.in"  }, t(0.68));

      // Card 3 (center tagline) — midway through the scroll
      tl.to(card3Ref.current, { opacity: 1, duration: t(0.06), ease: "power2.out" }, t(0.70));
      tl.to(card3Ref.current, { opacity: 0, duration: t(0.05), ease: "power2.in"  }, t(0.82));

      // CTA surfaces first — centred, fully visible before darkness closes in
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: t(0.07), ease: "power2.out" }, t(0.84));

      // Fade to dark only after CTA is fully on screen — linear so it feels like dusk not a cut
      tl.fromTo(fadeRef.current, { opacity: 0 }, { opacity: 0.92, duration: t(0.11), ease: "none" }, t(0.89));
    });

    return () => { cancelAnimationFrame(rafId); gsapCtx.revert(); lenis.destroy(); };
  }, [ready]);

  return (
    <section ref={heroRef} id="cinematic-hero" className="relative overflow-hidden" style={{ height: "100svh" }}>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0, willChange: "transform", transformOrigin: "center center" }}
      />

      {/* Loading overlay */}
      {!ready && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A]" style={{ zIndex: 50 }}>
          <p style={{ color: "rgba(212,168,67,0.5)", fontSize: "0.58rem", letterSpacing: "0.5em", textTransform: "uppercase", marginBottom: "2rem" }}>
            Preparing experience
          </p>
          <div style={{ width: 200, height: 1, background: "rgba(212,168,67,0.12)", position: "relative" }}>
            <div style={{
              position: "absolute", inset: 0, background: "#D4A843",
              transformOrigin: "left", transform: `scaleX(${loadPct / 100})`,
              transition: "transform 0.1s linear",
            }} />
          </div>
          <p style={{ color: "rgba(212,168,67,0.3)", fontSize: "0.58rem", letterSpacing: "0.3em", marginTop: "1rem" }}>
            {loadPct}%
          </p>
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: "linear-gradient(to bottom, rgba(10,10,10,0.25) 0%, transparent 30%, transparent 55%, rgba(10,10,10,0.75) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2, background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,10,10,0.45) 100%)" }} />

      {/* Logo */}
      <div ref={logoRef} className="absolute pointer-events-none select-none" style={{ zIndex: 20, top: "clamp(3rem, 5vh, 4rem)", left: "clamp(1.5rem, 3vw, 3rem)", transformOrigin: "top left" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Royal Stallion Chauffeurs" style={{ height: "clamp(3rem, 6vh, 5rem)", width: "auto", objectFit: "contain", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.6))" }} />
      </div>

      {/* Card 1 — "Your journey," top-left, restrained */}
      <div ref={card1Ref} className="absolute pointer-events-none select-none" style={{ zIndex: 10, top: "18vh", left: "7vw" }}>
        <p style={{ fontFamily: CORMORANT, fontWeight: 300, fontSize: "clamp(1.4rem, 2.8vw, 3.6rem)", lineHeight: 1.25, letterSpacing: "0.06em", color: "rgba(245,245,240,0.95)", textShadow: "0 1px 40px rgba(0,0,0,0.7)" }}>
          Your journey,
        </p>
      </div>

      {/* Card 2 — "our pleasure." bottom-right, italic gold */}
      <div ref={card2Ref} className="absolute pointer-events-none select-none text-right" style={{ zIndex: 10, bottom: "18vh", right: "7vw" }}>
        <p style={{ fontFamily: CORMORANT, fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.4rem, 2.8vw, 3.6rem)", lineHeight: 1.25, letterSpacing: "0.06em", color: "#D4A843", textShadow: "0 1px 40px rgba(0,0,0,0.6)" }}>
          our pleasure.
        </p>
      </div>

      {/* Card 3 — centred tagline, minimal */}
      <div ref={card3Ref} className="absolute inset-0 pointer-events-none select-none flex flex-col items-center justify-center gap-4 px-6 text-center" style={{ zIndex: 10 }}>
        <p style={{ fontFamily: CORMORANT, fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.6rem, 3vw, 3.8rem)", lineHeight: 1.3, letterSpacing: "0.04em", color: "rgba(245,245,240,0.9)", textShadow: "0 1px 50px rgba(0,0,0,0.65)" }}>
          Every ride, handled with care.
        </p>
        <span style={{ display: "block", width: "2rem", height: "1px", background: "rgba(212,168,67,0.6)", margin: "0 auto" }} />
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 300, fontSize: "clamp(0.55rem, 0.9vw, 0.75rem)", letterSpacing: "0.35em", textTransform: "uppercase", color: "rgba(212,168,67,0.7)" }}>
          Singapore&rsquo;s trusted chauffeur service
        </p>
      </div>

      {/* Fade-to-dark overlay — sits below the CTA so buttons stay visible */}
      <div ref={fadeRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 15, background: "#0A0A0A" }} />

      {/* CTA panel — centred on screen, surfaces above the fade */}
      <div ref={ctaRef} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" style={{ zIndex: 25 }}>
        <p style={{ color: "rgba(212,168,67,0.65)", fontSize: "0.62rem", letterSpacing: "0.42em", textTransform: "uppercase", marginBottom: "1.75rem" }}>
          Book your ride
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="inline-flex items-center justify-center gap-3 font-medium px-14 py-5 hover:opacity-90 transition-opacity" style={{ background: "#D4A843", color: "#0A0A0A", fontSize: "0.95rem", letterSpacing: "0.04em" }}>
            Book Your Ride <span aria-hidden>→</span>
          </a>
          <a href="tel:+6586860775" className="inline-flex items-center justify-center gap-3 font-medium px-14 py-5 border hover:bg-white/5 transition-colors" style={{ borderColor: "rgba(212,168,67,0.45)", color: "#F5F5F0", fontSize: "0.95rem", letterSpacing: "0.04em" }}>
            <span>📞</span> +65 8686 0775
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div ref={hintRef} className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none pointer-events-none" style={{ zIndex: 30, bottom: "2.5rem", color: "#777" }}>
        <div className="flex justify-center pt-1.5" style={{ width: 20, height: 32, border: "1px solid rgba(212,168,67,0.35)", borderRadius: 9999 }}>
          <div className="animate-bounce rounded-full bg-amber-400" style={{ width: 2, height: 6 }} />
        </div>
        <span style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase" }}>Scroll</span>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 inset-x-0" style={{ zIndex: 30, height: 2, background: "rgba(255,255,255,0.06)" }}>
        <div ref={progressRef} className="h-full bg-amber-400 origin-left" style={{ transform: "scaleX(0)" }} />
      </div>
    </section>
  );
}

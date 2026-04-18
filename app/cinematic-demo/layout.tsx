import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cinematic Preview — RSC Limo",
  robots: { index: false, follow: false },
};

export default function CinematicDemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

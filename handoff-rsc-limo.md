# RSC Limo WordPress — Handoff Reference

**Site:** rsclimo.com.sg
**Stack:** WordPress 6.9.9 + Elementor Pro + Hello Elementor Child theme
**Admin:** wp-admin / WPCode Lite for JS only; CSS via child theme file
**Brand colours:** Navy `#0D1B3E` · Footer `#07101C` · Gold `#C9A55A` · Ivory `#FAFAF7`

---

## Architecture (Current)

All CSS is in the **Hello Elementor Child theme** — not WPCode.

| File | Path | Purpose |
|------|------|---------|
| `style.css` | `/wp-content/themes/hello-elementor-child/style.css` | Theme declaration (WordPress requires this) |
| `functions.php` | `/wp-content/themes/hello-elementor-child/functions.php` | Enqueues custom.css with filemtime cache-buster |
| `custom.css` | `/wp-content/themes/hello-elementor-child/custom.css` | All site CSS (~516 lines) |

**To edit CSS:**
```bash
ssh rsclimo
nano ~/public_html/wp-content/themes/hello-elementor-child/custom.css
# save → browser auto-gets fresh CSS (filemtime cache-buster)
```

No WPCode, no AJAX, no proxy issues. Just edit the file.

**CSS custom properties (brand variables):**
```css
:root {
  --rsc-navy:   #0D1B3E;
  --rsc-gold:   #C9A55A;
  --rsc-ivory:  #FAFAF7;
  --rsc-footer: #07101C;
}
```

**Adding new CSS in future:** Add to the relevant section in `custom.css` with a comment. If it's a new page, add a new section header. Never put CSS back into WPCode.

---

## WPCode Snippets — Current State

Only JS snippets are active. All CSS snippets have been migrated to `custom.css` and deactivated.

| ID | Name | Type | Status | Notes |
|----|------|------|--------|-------|
| 3161 | Our Fleet — flip card + homepage fleet image injection | JS | **Active** | Keep — targets page-id-620 |
| 3173 | Vehicle pages — gallery image injection | JS | **Active** | Keep — targets specific page IDs |
| 3162 | Vehicle pages — full theme standardisation | CSS | Deactivated | Migrated to custom.css |
| 3164 | Site-wide audit fixes — buttons, fonts, weights | CSS | Deactivated | Migrated to custom.css |
| 3195 | Mobile responsive — sticky header + 2x2 grids | CSS | Deactivated | Migrated to custom.css |
| 3197 | About Us — company logo size fix | CSS | Deactivated | Migrated to custom.css |
| 3228 | Mobile fleet layout fix (JS) | JS | Deactivated | Converted to CSS in custom.css |

> **Convention going forward:** CSS always goes in `custom.css`. JS that needs page-targeting goes in WPCode. No exceptions.

> **Deactivated snippets:** Do NOT delete yet — wait until confirmed stable for 1+ week, then delete #3162, #3164, #3195, #3197, #3228.

---

## CRITICAL: WPCode Snippet Cache (`wpcode_snippets`)

WPCode stores all active snippet content in a **PHP-serialized** `wp_options` row named `wpcode_snippets`. This is what PHP actually executes on every page load — NOT `wp_posts.post_content` directly.

**The safe way to update a snippet:**
1. Fix `wp_posts.post_content` via MySQL (SSH)
2. Navigate to the snippet in WP Admin → WPCode editor (fresh page load — reads from `wp_posts`)
3. Sync CodeMirror: `textarea.value = cm.getValue()` in console
4. Click Update — this re-serialises and writes the correct `wpcode_snippets`

**NEVER do `REPLACE()` on `wpcode_snippets` in MySQL** — PHP serialized data encodes string lengths (`s:26:"..."`) and a text replace changes string length without updating the count, causing `unserialize()` to silently return empty, breaking all snippets site-wide.

**If snippets stop loading:** Check `wpcode_snippets` in `wp_options`. If corrupt/empty, set it to `a:0:{}`, then save any snippet from the WPCode editor to rebuild it.

---

## Snippet #3161 — Our Fleet flip cards + homepage fleet fronts (JS)

**Two parts in one snippet:**

**Part 1 (lines 1–30):** Injects flip card back-face (vehicle image + category + "View Details" button) on `/our-fleet/` page (page-id-620). Guards with `document.body.classList.contains('page-id-620')`.

| Section ID | Vehicle | Image filename |
|------------|---------|---------------|
| `00001b67` | Toyota Alphard | `AlphardAG40-Clear-BG.png` |
| `00001b71` | Mercedes S-Class | `Mercs-Sclass-clear-bg.png` |
| `00001b7b` | Mercedes E-Class | `Mercs-Eclass-clear-bg.png` |
| `00001b86` | Mercedes V-Class | `Mercs-Vclass-clear-bg.png` |
| `00001b90` | 13-Seater Minibus | `Toyota-hiace-Combi-Clear-BG.png` |
| `00001b9a` | 40-Seater Coach | `Bus-clear-BG.png` |

**Part 2 (lines 31+):** Injects vehicle images into fleet card fronts on homepage.

| Column ID | Vehicle | Image filename |
|-----------|---------|---------------|
| `00000c2c` | Toyota Alphard | `AlphardAG40-Clear-BG.png` |
| `00000c34` | Mercedes S-Class | `Mercs-Sclass-clear-bg.png` |
| `00000c3c` | Mercedes E-Class | `Mercs-Eclass-clear-bg.png` |
| `00000c44` | Mercedes V-Class | `Mercs-Vclass-clear-bg.png` |
| `00000c4c` | 13-Seater Minibus | `Toyota-hiace-Combi-Clear-BG.png` |
| `2bb7eaf` | 40-Seater Coach | `Bus-clear-BG.png` |

Image base URL: `https://www.rsclimo.com.sg/wp-content/uploads/2026/04/`

---

## Snippet #3173 — Vehicle photo injection (JS)

Injects the vehicle PNG into the "Vehicle photo coming soon" placeholder widget on each vehicle page. Also hides the RSC logo above the photo and adds a disclaimer underneath.

**Does NOT touch the gallery widget** — that is left free for direct Elementor editing.

| Page ID | Vehicle | Photo widget data-id | Image filename |
|---------|---------|----------------------|----------------|
| 3078 | Toyota Alphard AG40 | 3aslc2g | AlphardAG40-Clear-BG-1.png |
| 3073 | Mercedes S-Class | 5f8vl9z | Mercs-Sclass-clear-bg.png |
| 3076 | Mercedes E-Class | pcdm5c1 | Mercs-Eclass-clear-bg.png |
| 3077 | Mercedes V-Class | qls6ykw | Mercs-Vclass-clear-bg.png |
| 3074 | 13-Seater Toyota Hiace | j6wmmyt | Toyota-hiace-Combi-Clear-BG-1.png |
| 3075 | 40-Seater Coach | pao7qzj | Bus-clear-BG-1.png |

> Note: The `-1` filenames above are intentional for the vehicle product pages (these are the WordPress media library copies). The `/our-fleet/` flip cards use the originals without `-1`.

---

## Vehicle Pages — Elementor widget data-ids

| Vehicle | Page URL | Page ID | Photo widget | Gallery widget | Pricing section |
|---------|----------|---------|-------------|----------------|----------------|
| Alphard | /fleet-toyota-alphard/ | 3078 | 3aslc2g | 117q4dg | alp_pr1 |
| S-Class | /fleet-mercedes-s-class/ | 3073 | 5f8vl9z | zprk94l | scs_pr1 |
| E-Class | /fleet-mercedes-e-class/ | 3076 | pcdm5c1 | lkhqzlj | ecl_pr1 |
| V-Class | /fleet-mercedes-v-class/ | 3077 | qls6ykw | 8pesszh | vcl_pr1 |
| Hiace | /fleet-toyota-hiace/ | 3074 | j6wmmyt | dqzi3li | min_pr1 |
| Bus | /fleet-40-seater-bus/ | 3075 | pao7qzj | iluqprh | cch_pr1 |

---

## Header Template — Elementor IDs (post ID 102)

| Element | data-id | Notes |
|---------|---------|-------|
| Logo image widget | `fbc780f` | Link set to `https://www.rsclimo.com.sg/` via `link_to: custom` |
| Logo column | `461a1829` | — |
| Icons column | `4f8f22d3` | Hidden on mobile via custom.css |
| Hamburger column | `111e1a72` | — |
| Mobile header section | `287b63ae` | — |

**Logo link fix:** Set via DB script `fix_logo_link.php`. Elementor Image widget requires BOTH `link_to: "custom"` AND `link.url` to render an anchor — setting only `link.url` is not enough. After any DB change to post 102, delete `_elementor_element_cache` and `_elementor_css` postmeta rows and the CSS file `wp-content/uploads/elementor/css/post-102.css`.

---

## How to Edit the Pricing Table

1. **wp-admin → Pages** → open the vehicle page in **Elementor**
2. Scroll to the pricing/surcharge section
3. Click the pricing table (it's a **Text Editor** widget — e.g. `alp_pr6` for Alphard)
4. Edit the HTML directly in the Text Editor panel (switch to Text/HTML view for table markup)
5. Click **Update**

---

## WPCode Save — Critical Gotchas

The WPCode Update button uses AJAX. When a local proxy is active (scraping tools), all XHR/fetch calls hang indefinitely — the Update button appears to work but silently fails.

**Reliable save method when proxy is active:**
1. Create a **new PHP snippet** (new snippets use form POST, not AJAX — works through proxy)
2. In the new snippet's PHP code, directly write to the target snippet's `post_content` via `$wpdb->update($wpdb->posts, ...)`
3. Also delete WPCode transients: `$wpdb->query("DELETE FROM ... WHERE option_name LIKE '_transient_wpcode%'")`
4. After running, navigate to snippet in WPCode editor → sync CM → click Update to rebuild `wpcode_snippets` properly

**Do NOT `REPLACE()` the `wpcode_snippets` option directly** — it's PHP serialized with byte-length headers. String length changes corrupt the serialization. Always rebuild via WPCode editor save.

---

## Known CSS Gotchas

1. **White `<tr>` backgrounds** — Hello Elementor applies `background: rgb(255,255,255)` to `<tr>` by default. Fix: `tbody tr { background-color: transparent !important; }`.

2. **`!important` required on `<td>`** — WordPress editor injects inline `background-color` styles on `<td>`.

3. **Elementor flex columns** — Columns use `flex: 1 1 0%`. Must use `flex: 0 0 <width> !important` (not just `width`/`max-width`) to change column widths on mobile.

4. **flex-wrap on containers** — Parent `.elementor-container` has `flex-wrap: nowrap`. Must set `flex-wrap: wrap !important` for columns to wrap.

5. **CSS parser failure kills all downstream rules** — One malformed selector (e.g. a corrupted `data-id` rule) causes the browser to stop parsing at that point. All @media blocks and rules after it are silently ignored. Always count `document.styleSheets[n].cssRules.length` after editing to verify rules are reaching the browser.

6. **Elementor element cache** — Post meta key `_elementor_element_cache` stores pre-rendered HTML for Theme Builder templates (headers, footers). It bypasses the elementor_data JSON entirely. Always delete it when changing template data via DB, along with `_elementor_css` and the CSS file in `uploads/elementor/css/post-{ID}.css`.

7. **Child theme enqueue dependency** — Parent Hello Elementor theme's registered handle is `hello-elementor` (DOM id: `hello-elementor-css`). Using `hello-elementor-style` as dependency silently fails — CSS is not enqueued.

---

## SSH Access

```bash
ssh rsclimo   # connects to rsclimoc@163.47.73.130 via ~/.ssh/id_ed25519_hostinger
```

DB credentials (from wp-config.php):
- DB: `rsclimoc_wp1` · User: `rsclimoc_wp1` · Pass: `H.Uxlco3gyQDlE85TdW79`

> ⚠️ `~/.ssh/id_ed25519` is for the **Vultr betting VPS** — do NOT use for rsclimo.

---

## Completed Tasks (all sessions)

- [x] Services page card text colors
- [x] Footer Quick Links width
- [x] Testimonials Google Review logo
- [x] Join Us — card color theme + centering
- [x] PHP upload limit 2MB → 64MB
- [x] Vehicle images (all 6) — 404 fixed
- [x] Fleet images — uniform height + S-Class scale boost
- [x] WPCode snippets 3056 + 3096 migrated to functions.php (deactivated in WPCode)
- [x] SSH access established
- [x] Fleet listing page `/our-fleet/` — flip card images (snippet #3161)
- [x] About Us `/about-us/` — company logo capped at 200px (snippet #3197)
- [x] Join Us `/join-us/` — removed "uniform provided" text
- [x] All 6 vehicle pages — pricing tables updated (surcharges, contact row)
- [x] Snippet #3164 fully repaired (176 lines)
- [x] Mobile header logo — tap-to-homepage + 90px size
- [x] Mobile header — hamburger right, logo left, icons hidden
- [x] Homepage fleet cards — 2-per-row on mobile
- [x] `/our-fleet/` page cards — 1-per-row on mobile
- [x] Maintenance mode turned off (LightStart plugin disabled via PHP #3230)
- [x] `/our-fleet/` broken images (Alphard, Hiace, Bus) — fixed filename mismatch in snippet #3161
- [x] Contact page — left column padding (80px left) + icon-list uniform alignment
- [x] Contact page — form input padding `10px 14px` (was 0px — squeezy)
- [x] Snippet #3164 corrupted footer rule fixed (`[data-id="ftr2s001"]`) — was breaking all CSS after rule 18
- [x] One-shot PHP snippets deleted: #3182, #3186, #3187, #3188, #3196, #3222–3224, #3226–3227, #3229–3233
- [x] **Child theme created** — Hello Elementor Child with `custom.css` (516 lines), CSS variables for brand colours
- [x] **All CSS migrated** from WPCode snippets #3162, #3164, #3195, #3197, #3228 → `custom.css`
- [x] **WPCode CSS snippets deactivated** — #3162, #3164, #3195, #3197, #3228 (keep JS: #3161, #3173)
- [x] **Logo link fixed** — `fbc780f` widget now has `link_to: custom` + URL in Elementor data

---

## Pending Tasks

### WordPress (hold — site is stable, no urgent fixes)
- [ ] Add actual gallery images to each vehicle page (all currently showing placeholder text)
- [ ] Change WP Admin password (Gerald to do himself — security)
- [ ] Instagram link (handle not ready yet)
- [ ] Delete deactivated CSS WPCode snippets after 1 week: #3162, #3164, #3195, #3197, #3228

### Frontend Rebuild — v0 + Sanity CMS (NEXT PRIORITY)
See section below.

---

## Rollback Plan

If child theme causes any issue:
1. WP Admin → Themes → Switch back to Hello Elementor (parent)
2. Re-activate WPCode snippets #3162, #3164, #3195, #3197, #3228

Two steps, 30 seconds. No data loss.

---

## Roadmap

1. ✅ WordPress revamp (live, maintenance mode off)
2. 🔲 **Frontend rebuild** — Replace WordPress with v0 design + Sanity CMS ← NEXT
3. 🔲 B2B + Admin Portal — `admin.rsclimo.com.sg`
4. 🔲 Driver App — React Native + Expo

---

## Frontend Rebuild — v0 Design + Sanity CMS

### Decision (agreed 2026-04-07)
Replace WordPress/Elementor with the v0.app template + Sanity CMS for content editing.

**Why:**
- v0 design is significantly better for a luxury brand — dark navy/gold aesthetic
- WordPress/Elementor can't replicate it accurately
- Site hasn't launched yet — zero migration cost
- Sanity CMS gives Gerald a simple admin panel (simpler than WP Admin) to update prices, text, testimonials etc. without touching code
- Vercel hosting is free (replaces Hostinger VPS cost)

### v0 Template
**URL:** `https://vm-u7c1r6bd995sqs6mozvxlv.vusercontent.net/`
**Sections:** Hero · Services grid · Fleet cards · About · Testimonials · Contact form
**Colours:** Black/dark bg · Gold accents — needs to be updated to RSC brand (navy `#0D1B3E` + gold `#C9A55A` + ivory `#FAFAF7`)

### Stack
| Layer | Choice | Notes |
|---|---|---|
| Frontend | React (v0 export) | Export source from v0.app |
| Hosting | Vercel (free) | Connect GitHub → auto-deploy |
| CMS | Sanity (free tier) | Gerald edits at `rsclimo.sanity.studio` |
| Contact form | Formspree (free) | Replaces WPForms |
| DNS | Crazy Domains | Point `rsclimo.com.sg` A record → Vercel IP |

### Build Steps
- [ ] Export v0 source code from v0.app
- [ ] Create GitHub repo, push code
- [ ] Deploy to Vercel, confirm preview URL works
- [ ] Update brand colours from v0 defaults → RSC navy/gold/ivory
- [ ] Replace placeholder content with real RSC content (copy from current WP site)
- [ ] Set up Sanity project, define schema (pages: home, fleet, pricing, services, testimonials, contact)
- [ ] Wire Sanity content into React components (replace hardcoded strings)
- [ ] Set up Formspree for contact form (replace hardcoded form)
- [ ] Add all 6 vehicle pages (Alphard, S-Class, E-Class, V-Class, Hiace, Bus)
- [ ] Upload vehicle images to Sanity media
- [ ] Test on mobile (all breakpoints)
- [ ] Point `rsclimo.com.sg` DNS → Vercel
- [ ] Show Gerald how to use Sanity CMS (pricing updates, testimonials, etc.)

### Content to Migrate from WordPress
All text content is already on the live WordPress site — copy from there:
- Vehicle names, descriptions, passenger counts, starting prices
- Pricing tables (all 6 vehicles) — see `handoff-rsc-limo.md` for current prices
- Services list
- About Us copy
- Testimonials
- Contact details: `hello@rsclimo.com.sg` · `+65 8686 0775`
- Footer: email, phone, Facebook (Instagram TBD — handle not ready)

### What Happens to WordPress
- Keep WordPress running on Hostinger as a **backup/reference** until new site is confirmed stable
- Once new site is live and stable for 2+ weeks → cancel Hostinger plan

---

## B2B + Admin Portal — Architecture Plan

**Target URL:** `admin.rsclimo.com.sg`
**DNS:** Crazy Domains — add CNAME `admin` → Vercel target once deployed

**Why Hostinger can't host it:** Server has no Node.js (shared hosting, kernel 3.10). Next.js requires Node.

### Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js (App Router) | SSR + API routes in one project |
| Hosting | Vercel (free tier) | Native Next.js, zero config |
| Database + Auth | Supabase (free tier) | PostgreSQL + row-level security + built-in auth |
| UI | shadcn/ui + Tailwind | Rapid, professional B2B look |
| Email | Resend or Brevo | Booking confirmations, invoice emails |

### Accounts needed (all free)
1. GitHub — github.com
2. Vercel — vercel.com (sign up with GitHub)
3. Supabase — supabase.com (sign up with GitHub)

### User Roles
- **Admin** (Gerald/ops) — full CRUD: bookings, clients, pricing tiers, driver assignment
- **Corporate client** — submit booking requests, view status, download invoices

### Planned Routes
```
/login                  — email + password for both roles
/dashboard              — admin: all bookings, clients, stats
/bookings               — admin: manage / assign / update bookings
/clients                — admin: corporate accounts + pricing tiers
/portal                 — corporate client: submit request, view history
/portal/invoice/:id     — downloadable PDF invoice
```

### Setup status
- [ ] GitHub repo created
- [ ] Vercel project linked
- [ ] Supabase project created
- [ ] Next.js scaffold committed
- [ ] Supabase env vars added to Vercel
- [ ] CNAME added in Crazy Domains
- [ ] Auth (login/logout) working
- [ ] Admin dashboard scaffold
- [ ] Corporate portal scaffold

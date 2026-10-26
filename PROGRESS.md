# Oxxoglass landing page: PROGRESS

Source: Figma file `i7ShFs4Hfhi9k3OWvS7w8z` ("Mecatronics"), page **final** → section **"oxxoglass french"** (`31:2927`), root frame `31:2928` (1440 × 10072).
Stack: Next.js 16.4.2 (App Router, `src/`, Cache Components on), React 19.3, TypeScript strict, Tailwind CSS 4.3 (`@theme` tokens in `src/app/globals.css`), ESLint 9, `motion` 12.43.0.
Project path: `C:\xampp\htdocs\faker\oxxoglass`. Dev: `npm run dev` (I used port 3107: `npx next dev --port 3107`).

---

## Phase status

- [x] Phase 0: Inventory
- [x] Phase 1: Design system (tokens, fonts, assets, icons)
- [x] Phase 2: Shared components + layout
- [x] Phase 3: Pages (`/`), with `npm run build` + `npm run lint` clean
- [x] Motion pass (Figma prototype interactions + scroll reveals)

### Open items (need input or Figma access)

- [x] **GC EPICPRO font**: loaded from `src/fonts/GCEpicProDemo-ExtraBold.ttf` with `next/font/local`. The tracking compensation and the `h2-xs` size are removed (see Decisions #7).
- [ ] **Full GC EPICPRO licence**: the demo files only contain A–Z / a–z, so digits, punctuation and accented letters fall back to Unbounded. The licensed font should include the full character set. The demo licence may also not allow commercial use.
- [ ] **Motion end-states**: the Figma variant targets (`1:176`, `1:115`, `1:199`, `1:222`, `1:273`, `1:590`, `72:3390`) could not be fetched (API rate limit, see below). The motions follow each interaction's trigger, duration and easing, with the end-states inferred. Compare them with the Figma prototype when access is back.
- [ ] Hero video: if the source video exists (the still has a "Veo" watermark), replace the still image.
- [ ] Footer links "BLOG" (and any real pages for Nos offres / Nos centres): currently on-page anchors or `#`.

---

## Routes

- [x] `/`: Landing page (`31:2928`): `src/app/page.tsx`

### Landing page sections → components

| # | Figma node | Section | Component | Anchor |
|---|---|---|---|---|
| 1 | `31:2929` | Header + Hero | `layout/SiteHeader`, `sections/HeroSection` | `#accueil` |
| 2 | `31:2963` | Offer + animated card | `sections/OfferSection` | `#offres` |
| 3 | `31:2981` | Nos Services carousel | `sections/ServicesSection` + `ServicesCarousel` (client) | `#services` |
| 4 | `31:3096` | Avantages grid | `sections/AdvantagesSection` | `#comment-ca-marche` |
| 5 | `31:3229` | Pourquoi nous choisir | `sections/WhyUsSection` | `#pourquoi-nous-choisir` |
| 6 | `31:3311` | Réseau map + cities | `sections/NetworkSection` + `MapPins` (client) | `#emplacements` |
| 7 | `31:3449` | Parrainage card | `sections/ReferralSection` | — |
| 8 | `31:3476` | 3 steps | `sections/StepsSection` + `StepsTimeline` (client) | — |
| 9 | `31:3536` | Enquire form | `sections/EnquirySection` + `EnquiryForm` (client) | `#rendez-vous` |
| 10 | `31:3577` | Avis slider | `sections/ReviewsSection` + `ReviewsCarousel` (client) | `#avis` |
| 11 | `31:3587` | Marques du groupe marquee | `sections/PartnersSection` | — |
| 12 | `31:3479` | Footer | `layout/SiteFooter` | — |

Hidden layers ignored: `31:3310` (image 20), `31:3477`, `31:3478`, and `image 11` inside the offer card (hidden behind its shape).

---

## Code map

- `src/app/globals.css`: all design tokens (`@theme`), keyframes and custom utilities (`scrollbar-none`, `animation-delay-*`, `animate-paused`), reduced-motion handling.
- `src/app/layout.tsx`: fonts (GC Epicpro via next/font/local; Roboto, Inter, Manrope and the Unbounded glyph fallback via next/font/google), `MotionProvider` (`reducedMotion="user"`), skip link, header and footer.
- `src/components/ui/`: `Button` (variants `light | glass | brand | brand-soft`, sizes `md | sm`, icons `arrow | phone`), `Eyebrow`, `Heading` + `Accent`, `SectionIntro`, `TextLink`, `Container`, `Watermark`, `FormField` (`TextField`, `TextArea`, `Checkbox`).
- `src/components/layout/`: `SiteHeader` (client: mobile menu, Escape closes), `SiteFooter`, `Logo`.
- `src/components/motion/`: `Reveal` (scroll-in fade/slide), `MotionProvider`.
- `src/components/icons/`: SVG icon components generated from Figma vector geometry.
- `src/data/site.ts` (nav, contact, footer, socials) and `src/data/landing.ts` (services, advantages, cities, map pins, steps, reviews, partners): typed static content.
- `public/images/`: real Figma image fills plus `france-map.svg` and `offer-card.svg` (generated from Figma vectors).

### Figma access notes (for a resuming session)

- The Figma MCP server is not authorized here. I used the REST API with the user's personal token.
- After about 6 calls, the token got `429` with `Retry-After ≈ 220 000 s` (rate-limit tier "low"). File, node and image-render endpoints are blocked for about 2.5 days from 2026-10-23. `/files/:key/images` (image fills) still worked.
- The full node tree with `geometry=paths` was fetched before the limit hit. Icons and SVGs were built from that geometry with a local script (`%TEMP%\oxxotools\svg.js`). Cached JSON and renders are in `%TEMP%\oxxofig`.

---

## Design tokens (in `globals.css`)

- **Colors:** `brand #FA5B2E`, `brand-light #FF7A54`, `brand-glow #FF6033`, `brand-soft #FFD1C4`, `brand-amber #FFA21F`, `brand-deep #94361B`, `brand-shadow #FF977A`, `ink #232323`, `night #1A0E1A`, `graphite #272727`, `muted #696D76`, `paper #FCFCFC`, `surface #F6F6F6`, `surface-strong #F4F4F4`, `line #EAEAEA`, `line-strong #D2D2D2`, `line-dark #5B5B5B`, `glass-border #EFEFEF`, `panel-border #CDCDCD`. The default Tailwind palette is disabled (`--color-*: initial`).
- **Fonts:** `font-display` (GC Epicpro 800, then Unbounded 800 for glyphs missing from the demo file), `font-sans` Roboto 300–800, `font-inter` Inter 400 (form fields), `font-manrope` Manrope 300 (footer bar).
- **Type (px):** xs 14, sm 15.26, base 16, title 18, cta 19.86, offer 21.8, h3 24, lead 26.7, offer-lg 38.2, h2-sm 55.3, h2 58, hero 78, watermark-sm 108, number 151, watermark-md 196, watermark-lg 384.
- **Layout:** `max-w-page` 1440 with 80px gutters (`Container`), `max-w-content` 1280, extra breakpoint `page:` at 1440px.
- **Radii:** field 8, card 16, offer 22.7, panel 48. Pills use `rounded-full`.
- **Blur** (Figma radius ÷ 2): tag 8, glass 9.5, object 4.5, shadow 5.35, glow 43, glow-md 52, form 88, glow-xl 180.
- **Shadows:** `offer-card` (white glow), `cta-inset`, `step-active` (inset #FF977A), `card-hover`.
- **Easings:** `figma-snap` cubic-bezier(1,-0.012,0,0.992), `figma-out` cubic-bezier(0,0,0,1.01).

---

## Motions implemented

| Element | Figma interaction | Implementation |
|---|---|---|
| Offer card (`31:2980`) | after 7 s / inner after 0.8 s, snap easing | Card floats (`animate-float`). The inner glow drifts with the Figma snap easing (`animate-glow-drift`). A light sweep runs every 7 s (`animate-shine`). |
| Feature cards (`31:3107`) | hover, 100 ms linear | Card lifts and turns white with a shadow (100 ms linear). The icon scales up. |
| Map pins (`Component 14` ×18) | after load, 500 ms linear | The pins are hidden in the base variant. They pop in one by one (500 ms linear, staggered), then pulse continuously. |
| Steps (`31:3476`) | hover, 1 s linear | The connector curve draws from 18% to 100% over 1 s linear, and markers 2 and 3 turn orange at 0.5 s and 1 s. It triggers on hover or 0.8 s after entering the viewport (touch devices). |
| Reviews (`31:3586`) | after 2 s, 1 s cubic-bezier(0,0,0,1.01) | Auto slider: holds 2 s, slides 1 s with the Figma easing, and loops. It pauses on hover or focus and does not auto-advance with reduced motion. |
| Partners (`72:3428`) | after load, 10 s linear | Infinite marquee (30 s per loop over 4 repeats), paused on hover. |
| Extra (requested) | — | Hero background Ken Burns zoom. Header slides in. Scroll reveals (fade and slide up) on section intros, cards, city list, images and the form. Services cards slide in staggered. Button arrow badges rotate to ↗ on hover. Mobile menu animates in and out. |

Everything respects `prefers-reduced-motion` (`MotionConfig reducedMotion="user"` plus a global CSS override).

---

## Responsive decisions (Figma has desktop 1440 only)

- **Breakpoints:** mobile <640, `sm` 640, `lg` 1024, `xl` 1280, `page` 1440 (exact Figma offsets).
- **Header:** below `lg`, the pill nav and CTA are replaced by a hamburger. It opens a dark glass panel with the links and the CTA, and Escape closes it.
- **Headings:** they scale down (`text-3xl` → `sm:text-5xl` → `lg:` Figma size), with 0 letter spacing as in Figma. From `lg`, headings use Figma's explicit line breaks (`<LineBreak />`). Below `lg`, those breaks are ignored and lines are balanced (`text-balance`).
- **Hero / Offer:** columns stack. The offer card is centered under the copy and keeps its 549px height.
- **Services:** the snap-scroll rail stays horizontal. Cards are 83% wide with the image on top on mobile, and image + text side by side from `sm`.
- **Avantages:** 1 → 2 → 3 columns. The icon/text gap is 16px on mobile and 46px from `lg`.
- **Why us:** image stacked above the dark card below `lg`, two columns from `lg`, and the exact overlapping Figma composition from 1440px.
- **Cities:** 1 → 2 → 4 columns, filled column-first like the design.
- **Referral:** stacked, with the photo below the copy and only two banknotes on mobile. The heading drops to `text-2xl` under 640px.
- **Steps:** below `lg`, a vertical list with a straight progress line. The Figma curve layout applies from `lg`.
- **Enquiry:** the photo panel sits above the form. The name fields form one column on mobile and two from `sm`.
- **Reviews:** 1 / 2 / 4 cards per view.
- **Footer:** columns stack, with 2 columns at `sm`.

Checked at 375, 768, 1024 and 1440 px with no horizontal overflow. At 1440 the page is 9 968px tall (Figma: 10 072px).

---

## Ambiguities / decisions log

1. **Figma link vs. request:** the link's `node-id=31-8001` is "Ness glass french". Confirmed with the user: build **"oxxoglass french" (`31:2927`)**.
2. **Alternate version:** the English landing on page `oxxoglass` (`229:16489`) is not used.
3. **Mixed languages:** English copy in services 03–06, review slide 2, "Claim It", "Send my request", "Enquire Form" and "OFFERS" is kept as designed.
4. **Typo / truncated copy:** "OXIQ GLASS" became "Oxxoglass". Step 1 "Notre Formulaire Et Partagez…" became "Remplissez Notre Formulaire Et Partagez…" (a verb was missing).
5. **"(GO DOWN MAP)"** was a designer note. It is rendered as a link to `#emplacements` with the note dropped, and "agrée" is corrected to "agréé".
6. **Hero background** uses the exported still (`hero-windshield-rain.png`). There's no video file.
7. **Display font:** "GC EPICPRO Demo" ExtraBold is loaded locally (`src/fonts/`; the other 7 weights are unused and not bundled). Its generated Arial fallback is disabled (`adjustFontFallback: false`) so missing glyphs reach **Unbounded 800**. That covers digits, punctuation (`. , - + * ’ € :`) and accented capitals (É, À, Ç, Ê, Ù), none of which are in the demo file. Figma shows the same gaps as "RéPARé" and "SéCURITé". Letter spacing is 0 and all Figma sizes are restored, including the referral title at 55.3px.
8. **Heading line breaks:** Figma's explicit line breaks are reproduced at `lg`+ (hero, offer, services, avantages, why us, network, steps, reviews). The hero heading uses the full 910px column, as in Figma, so "Faut. Où Que Vous" stays on one line (with a space after "Faut.", which the Figma copy lacks). Centered section headings can be up to 1000px wide because "Un Service Vitrage Conçu" measures 967px.
9. **Footer links:** Bienvenue → `#accueil`, Nos offres → `#offres`, Nos centres → `#emplacements`, Contact → `#rendez-vous`, BLOG → `#`. Social links point to the network home pages (no real URLs in Figma).
10. **Copyright** "2024" kept as designed.
11. **Phone link:** `tel:+33218889428`, from "02 18 88 94 28". "Demander un rappel" also uses the phone link.
12. **Form:** there's no backend. Submit validates natively, resets, and shows a local confirmation message (`role="status"`).
13. **Checkbox tick:** the Figma tick vector has no geometry (hidden). The checkbox reuses the step check icon.
14. **Partner logos:** Figma sets blend mode LUMINOSITY on a transparent backdrop, which has no visual effect, so the logos are shown in color as in the render.
15. **"Techniciens Certifiés" and "Vitrage De Qualité"** use the same icon in Figma (`Group 48`). Kept.
16. **Map:** the small black mark near Perpignan (`31:3323`) is part of the Figma map vector and is kept.

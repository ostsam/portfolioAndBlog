## Portfolio Blog Revamp Plan

### Baseline assumptions

- Minimalist, content-forward portfolio with a few projects and a blog.
- Next.js App Router, Tailwind v4, light/dark themes.
- Goal: premium, calm, intentional; avoid “template” vibes.

### Step 1 — Visual direction and design system

- Color (OkLCH; neutrals + one accent)
  - Light surface: oklch(0.98 0 0). Dark surface: oklch(0.15 0.03 265).
  - Text ink: oklch(0.22 0.04 265). Accent: oklch(0.68 0.16 255).
  - Use hairline borders at 10–14% opacity; one radius token (8px).
- Typography
  - Headings: Geist/Inter Tight with slight negative tracking.
  - Body: 16/28 mobile, 18/30 desktop, max width ~68–72ch.
  - Small caps for section labels; consistent type scale.
- Spacing
  - 4pt base; prefer 8/12/16/24/32/48/64. Sections: 80–96px vertical rhythm.
- Iconography and imagery
  - One icon set (Lucide/Tabler), 18–20px, 1.5px stroke.
  - Subtle grain texture (1–2%) on hero/project media.
- Links and buttons
  - Underline offset + color transition 150–200ms. Simple ghost/soft buttons.

### Step 2 — Page structure and layout rhythm

- Grid/container
  - Max-w 1200–1280px, 20–24px padding mobile, 32–40px desktop.
  - 12-col grid; 16–20px gutters mobile, 24px desktop.
- Hero
  - Kicker label, concise H1, short subhead; 112–128px top spacing.
  - Optional right-rail image at lg.
- Projects
  - 1/2/3-column responsive grid; uniform cards; clamped descriptions.
  - CTA row: “Live demo”, “View code”, optional “Case study”.
- Case studies
  - Problem → Constraints → Approach → Implementation → Results → Next steps.
  - 68–72ch reading column; occasional full-bleed images.
- Blog index
  - Two-column layout at desktop (date column + content column).
  - Pagination after ~12–15 posts; no infinite scroll unless high volume.
- Post page
  - ToC for >1200 words (sticky right rail at ≥1280px). Pull quotes/callouts.
- About
  - 2–3 paragraphs + “Now” list + small timeline; single portrait.
- Nav/footer
  - Three primary links; one right-aligned CTA (Resume/Email). Minimal footer.

### Step 3 — Microinteractions and motion

- Durations: 150–200ms hover/focus; 200–300ms reveals. Enter: (0.16,1,0.3,1).
- Reduced motion: fall back to color/opacity.
- Links: underline offset animation; consistent focus ring (2px + 2px offset).
- Buttons: slight lift on hover; pressed returns to baseline.
- Cards: translateY(-2px) + image scale 1.02 on hover.
- Navbar: 1px top border + blur after 8px scroll; 200ms transition.
- Page transitions: thin top progress bar on route change.
- Carousel: keyboard support; dots with subtle expansion; drag threshold 16–24px.

### Step 4 — Project presentation and case studies

- Cards: image (16:9, 8px radius) → title → one-line description → meta → tags.
- Micro-metric: one tiny fact (e.g., build time or perf stat).
- Case study hero: synopsis, role/time/stack, optional 6–8s silent loop.
- Evidence: link to PRs/issues/perf reports; “What I’d do differently” section.

### Step 5 — Blog reading experience

- Body 18/30 desktop, 16/28 mobile; text-balance and text-pretty.
- Metadata row under H1: date, reading time, 1–2 tags.
- ToC sticky on wide screens; collapsible on mobile.
- Code blocks: labeled, copy button, 1px border, 8px radius, horizontal scroll.
- Figures with captions; optional lightbox (respects reduced motion).
- Pagination at end; 2 related posts by tag.

### Step 6 — Navigation and footer polish

- Navbar: Home, Projects, Blog; right CTA (Resume/Email).
- Active link: animated 2px underline; no weight jumps.
- Mobile menu: accessible sheet with aria-expanded/controls and ESC close.
- Footer: RSS · Email · GitHub in one quiet line; thin divider above.

### Step 7 — Theming and accessibility nuance

- Light/dark parity; accent behaves the same in both modes.
- Focus ring: 2px accent + 2px offset; add faint outer halo on dark surfaces.
- Gate motion behind prefers-reduced-motion; avoid heavy blurs + transforms.
- Color contrast: AA for body, 3:1 for large type; test ring/link pairs.
- Drive all colors via CSS variables; avoid hard-coded hex in utilities.

### Step 8 — Finishing touches (polish & QA)

- Icons/manifest: favicon set, apple-touch-icon, mask-icon, webmanifest; theme-color meta (light/dark).
- OG: single confident template; validate on X/LinkedIn; include og:image:alt.
- 404/500: simple, consistent states; primary “Go home” CTA.
- Print CSS: hide nav/footers, show link URLs, page breaks for headings/figures.
- Accessibility QA: skip link, keyboard path, contrast of code/pull quotes.
- Performance: next/font swap, image sizes/blur-up, budgets (LCP<1.8s, CLS<0.05, TTI<2.5s).
- Analytics: minimal; outbound project clicks and time-on-page; honor DNT.
- SEO: Person JSON-LD (home), BreadcrumbList (posts), canonical URLs.

### Quick wins to implement first

1. Skip link + route-change progress bar.
2. Refined project cards with uniform images and clamped descriptions.
3. Post ToC for long articles and improved code blocks with copy button.
4. Custom 404 with calm, minimal layout.

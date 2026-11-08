# Digital Marketing Agency Website: Enhanced Design Specification (v2)

> **v2.2:** removed Blog, Case Study and Service Detail pages (scope reduction). **v2.1:** now fully responsive for both mobile and desktop (section 8). **What changed from v1:** fixed duplicate section numbering, merged the glassmorphism rules into the design system, added a full token set (type scale, spacing, radius, elevation, motion), specified every component with states, added per-section layout and copy direction, added a footer, 404 and legal pages, SEO and analytics requirements, and a build-ready acceptance checklist.

---

## 1. Project Overview

Create a modern, multi-page digital marketing agency website that feels **premium, minimal, creative, and technology-focused**, not like a generic marketing template.

**Brand personality:** confident, precise, a little playful. Think "growth lab" rather than "ad shop".

**Visual direction**
- **Background:** near-black `#080808`
- **Text:** off-white `#F5F5F5`
- **Accent:** electric lime `#C0FF3E` (used sparingly; it should feel like a highlighter)
- **Surfaces:** charcoal `#151515`, soft grey `#EDEDED` for rare light panels
- **Style:** minimal layouts, oversized typography, generous whitespace, hairline borders, rounded media frames, restrained glow
- **Motion:** smooth scrolling, subtle entrance reveals, staggered content, responsive hover states

**Rule of thumb:** 75% minimal dark design, 25% selective glassmorphism. Lime covers no more than about 5% of any viewport.

Use supplied screenshots as inspiration only. Replace all example company names, people, metrics, projects and contact details with approved agency content. Mark placeholder content clearly during development.

---

## 2. Information Architecture

| # | Page | Anchor / Route | Primary goal |
|---|---|---|---|
| 01 | Home | `/` | Explain the offer, drive enquiries |
| 02 | About | `/about` | Build trust |
| 03 | Services | `/services` | Clarify offerings |
| 04 | Portfolio | `/portfolio` | Prove quality and impact |
| 05 | Contact | `/contact` | Capture qualified enquiries |
| Utility | 404, Privacy Policy, Terms, Thank-you | | Completeness and compliance |

If the first release is a single long page, these become sections with matching anchors. Keep content modular so each can become its own route later.

**Primary conversion path:** Hero CTA, Contact form. **Secondary:** Portfolio, Services overview, WhatsApp link.

---

## 3. Design System

### 3.1 Colour tokens

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#080808` | Page background |
| `--color-surface` | `#151515` | Cards and panels |
| `--color-surface-soft` | `#202020` | Secondary panels, inputs |
| `--color-text` | `#F5F5F5` | Primary text |
| `--color-muted` | `#A5A5A5` | Supporting text (min 4.5:1 on bg) |
| `--color-accent` | `#C0FF3E` | CTAs, highlights, active states |
| `--color-accent-hover` | `#D4FF76` | Accent hover |
| `--color-accent-press` | `#A8E62E` | Accent pressed |
| `--color-border` | `#303030` | Dividers, card borders |
| `--color-light` | `#F2F2EF` | Rare light contrast panels |
| `--color-dark-text` | `#101010` | Text on lime or light panels |
| `--color-error` | `#FF6B6B` | Form errors (always with icon + text) |
| `--color-success` | `#C0FF3E` | Success states (always with icon + text) |

Never use lime for long paragraphs or small low-contrast text. Text on lime is always `#101010`.

### 3.2 Typography

- **Display / headings:** *Space Grotesk* or *Sora* (700). Tight leading (1.0 to 1.1), slight negative tracking (-0.02em).
- **Body / UI:** *Inter* (400, 500, 600).
- **Mono accents** (eyebrows, tags, numbers): *JetBrains Mono* or *IBM Plex Mono*, uppercase, 0.08em tracking.
- Fallback stack: `system-ui, -apple-system, "Segoe UI", sans-serif`. Use `font-display: swap`.

| Style | Desktop | Mobile | Weight |
|---|---|---|---|
| Display (hero) | 88 / 92px | 44 / 48px | 700 |
| H1 | 64 / 68px | 38 / 42px | 700 |
| H2 | 48 / 54px | 30 / 36px | 700 |
| H3 | 28 / 34px | 22 / 28px | 600 |
| Body L | 20 / 32px | 18 / 28px | 400 |
| Body | 16 / 26px | 16 / 26px | 400 |
| Caption / eyebrow | 12 / 16px | 12 / 16px | 500 mono |

Use `clamp()` for fluid sizing. Max line length: 65 to 70 characters. A single highlighted word per headline may be set in lime or in an italic serif accent for editorial contrast.

### 3.3 Spacing, layout and shape

- **Spacing scale (8pt):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128
- **Section padding:** 128px desktop, 96px tablet, 64px mobile
- **Container:** max 1280px, 24px side padding on mobile, 48px on desktop
- **Grid:** 12 columns desktop, 8 tablet, 4 mobile, 24px gutter
- **Radius:** 8px (inputs, tags), 16px (cards), 24px (media frames, large panels), 999px (pills, buttons)
- **Borders:** 1px hairlines in `--color-border`
- **Elevation:** avoid heavy shadows; depth comes from borders, glass and subtle lime glow

### 3.4 Motion tokens

```css
:root {
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 180ms;
  --dur-base: 250ms;
  --dur-reveal: 600ms;
}
```

### 3.5 Glass tokens

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.055);
  --glass-bg-hover: rgba(255, 255, 255, 0.085);
  --glass-border: rgba(255, 255, 255, 0.14);
  --glass-highlight: rgba(255, 255, 255, 0.22);
  --glass-blur: 16px;
  --glass-shadow: 0 12px 40px rgba(0, 0, 0, 0.28);
  --glass-accent-glow: rgba(192, 255, 62, 0.12);
}
.glass-panel {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  -webkit-backdrop-filter: blur(var(--glass-blur));
  backdrop-filter: blur(var(--glass-blur));
  border-radius: 18px;
}
.glass-panel:hover {
  background: var(--glass-bg-hover);
  border-color: rgba(192, 255, 62, 0.28);
}
.glass-navbar {
  background: rgba(8, 8, 8, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.10);
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
}
@supports not (backdrop-filter: blur(1px)) {
  .glass-panel  { background: rgba(21, 21, 21, 0.94); }
  .glass-navbar { background: rgba(8, 8, 8, 0.96); }
}
```

**Where to use glass**

| Element | Treatment |
|---|---|
| Sticky navbar | Dark translucent glass, backdrop blur, fine bottom border after scroll |
| Hero | Clean typography; one optional glass panel for supporting details (e.g. a floating "live stats" chip) |
| Service cards | Subtle translucent charcoal, thin border, mild hover highlight |
| Portfolio | Imagery dominant; glass only for tags, filters and overlay metadata |
| Statistics | Compact glass panels with high-contrast numbers |
| Contact form | Glass panel, with **solid** readable inputs |
| Footer | Clean solid dark surface, no glass |

**Glass rules:** keep text white or near-white; never stack translucent layers; blur 12 to 18px max; lime only as small highlights; solid fallback where unsupported; fewer layers and more opacity on mobile; reduce or remove blur on low-power devices.

### 3.6 Atmosphere and background

- Hero: faint 64px dark grid (`rgba(255,255,255,0.04)` lines) fading out at the edges with a radial mask, plus one soft lime radial glow (about 12% opacity) off-centre.
- Optional 2 to 3% film-grain noise overlay for texture (static, not animated).
- Section dividers: hairline borders or generous space, not heavy bars.
- Use a large outlined or low-opacity oversized word (e.g. "GROWTH") as a decorative background element in one or two sections only.

### 3.7 Imagery and iconography

- **Photography:** high-contrast, desaturated or monochrome team and workspace shots; lime used only as a small accent. Consistent ratios per card group (16:10 for projects, 4:5 for team).
- **Project visuals:** device mockups or campaign visuals on dark backgrounds with soft lime rim light.
- **Icons:** one consistent outline set (e.g. Lucide or Phosphor), 1.5px stroke, 24px grid.
- `object-fit: cover`, lazy-loading below the fold, meaningful alt text (empty alt for decorative images). Do not use reference screenshots as final assets.

---

## 4. Components

Each component needs default, hover, focus-visible, active/pressed and disabled states.

| Component | Specification |
|---|---|
| **Primary button** | Solid lime, `#101010` text, pill, 48px height (56px in hero), 24px side padding. Hover: lighter lime, arrow icon slides 4px right, lift 1px. Focus: 2px white outline with 2px offset. |
| **Secondary button** | Transparent, 1px `--color-border`, white text. Hover: border turns lime, text stays white. |
| **Text link** | White with lime underline that animates from left on hover. |
| **Header** | 72px desktop, 60px mobile. Logo left; links centre; "Let's Talk" lime button right. Becomes glass with border after 24px scroll. Active link has a lime dot or underline. |
| **Mobile menu** | Full-screen solid dark overlay, large stacked links, CTA pinned at bottom, focus trap, `Esc` to close, `aria-expanded` on the toggle. |
| **Section heading** | Mono eyebrow (lime or muted), H2, optional 1 to 2 line intro, optional right-aligned "View all" link. |
| **Service card** | Glass surface, icon in a bordered circle, title, 2-line description, "Learn more" arrow. Hover: lift 3px, border tints lime. Optional large faded index number (01 to 07). |
| **Project card** | 16:10 image, 24px radius, glass tag row (industry, services) and title overlay at the bottom. Hover: image scales 1.03, arrow badge appears top-right. |
| **Team card** | 4:5 monochrome portrait, name, role; colour or lime ring on hover. |
| **Statistic item** | Large number (display font), unit in lime, label beneath, short context line. Count-up runs once. |
| **Process step** | Number, icon, title, 1 to 2 sentence description, connected by a thin line (horizontal on desktop, vertical on mobile). |
| **Testimonial card** | Quote, name, role, company, optional avatar. Carousel with keyboard-accessible arrows and pause on hover. |
| **Form field** | Solid `#202020` background, 1px border, 12px radius, visible label above, helper text below, focus ring in lime, error state with icon, message and `aria-describedby`. |
| **Tag / pill** | Mono uppercase 12px, glass or outline. |
| **Footer** | See section 6. |

---

## 5. Scroll and Motion System

### 5.1 Behaviour

1. Use normal document scrolling. No nested scroll containers.
2. Smooth anchor navigation with `scroll-margin-top` equal to the header height plus 16px.
3. Sections begin hidden but layout-preserving and animate in at about 15 to 20% visibility.
4. Stagger children so headings, text, cards and images do not appear together.
5. Reveals play **once**; elements stay visible afterwards.
6. Animate only `transform` and `opacity`.
7. Lazy-load below-the-fold images with reserved aspect ratios (no layout shift).
8. Skeletons only for genuinely delayed media or API data; essential text renders immediately.
9. Hero loads with a short sequenced entrance (eyebrow, headline words, paragraph, CTAs, visual) totalling under 1.2s.
10. Respect `prefers-reduced-motion`: show everything immediately, disable parallax, count-ups, marquee and large movement.

### 5.2 Reveal timings

| Element | Effect | Duration | Stagger |
|---|---|---|---|
| Section heading | Fade + up 20px | 600ms | n/a |
| Paragraph | Fade + up 14px | 550ms | 80ms |
| Image / visual | Fade + scale from 0.97 | 750ms | 100ms |
| Cards | Fade + up 18px | 550ms | 90ms |
| Statistics | Fade, then count up once | 900ms | 100ms |

### 5.3 Signature micro-interactions (pick a few, keep subtle)

- Client-logo row as a slow, pausable marquee (static under reduced motion).
- Cursor-following soft lime glow on service cards (desktop, pointer-fine only).
- Portfolio card hover: image zoom plus "View project" pill.
- Header progress line (2px lime) showing page scroll progress.
- Headline word-by-word fade-up in the hero.

### 5.4 Implementation

Use an `IntersectionObserver` reveal system: shared `.reveal` class, `threshold: 0.15`, `rootMargin: "0px 0px -40px 0px"`, add `.is-visible`, then `unobserve`. Disable the hidden state when reduced motion is on or JavaScript is unavailable (`<noscript>` fallback). Stagger via `--reveal-delay` on children.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity var(--dur-reveal) var(--ease-out),
    transform var(--dur-reveal) var(--ease-out);
}
.reveal.is-visible { opacity: 1; transform: none; }
.reveal-stagger > * { transition-delay: var(--reveal-delay, 0ms); }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal, .reveal.is-visible { opacity: 1; transform: none; transition: none; }
}
```

```js
const items = document.querySelectorAll(".reveal");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduce || !("IntersectionObserver" in window)) {
  items.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach((el) => io.observe(el));
}
```

---

## 6. Global Layout

### Header
Logo left, links (Home, About, Services, Portfolio, Process, Contact), lime **Let's Talk** button. Sticky; glass with fine border after scroll. Active-section highlighting via observer. Mobile: accessible menu button, menu closes on link selection. Fully keyboard operable, with a "Skip to content" link as the first focusable element.

### Footer (solid dark)
- Top band: large closing line ("Have a project in mind?") with a lime CTA.
- Four columns: brand and short blurb; Pages; Services; Contact (email, phone/WhatsApp, address).
- Newsletter signup (single field, clear consent text).
- Bottom bar: copyright, Privacy, Terms, social icons, "Back to top" button.

### Floating elements
- Optional WhatsApp button, bottom-right, 56px, must not cover content or the cookie banner.
- Cookie / consent banner (compact, non-blocking) if analytics or marketing cookies are used.

---

## 7. Page and Section Specifications

### 01. Home
**Goal:** explain what the agency does and start a conversation. Aim for 9 sections.

1. **Hero**: eyebrow "Digital Growth & Creative Strategy"; headline "We Build Brands. We Create Digital Growth." (one phrase highlighted); 1 to 2 line supporting paragraph; CTAs "Start a Project" (primary) and "Explore Our Work" (secondary). Right side or below: abstract visual, device mockup or a floating glass chip with a verified metric. Small "scroll" indicator. Grid and lime-glow background.
2. **Trusted clients**: "Trusted by growing brands" caption, 5 to 8 monochrome logos (approved only), marquee.
3. **Services overview**: 7 service cards in a bento or 3-column grid, plus a "View all services" link.
4. **About preview**: split layout with large headline, short paragraph, 2 to 3 differentiators, monochrome team image, link to About.
5. **Featured projects**: 3 to 4 large project cards (one wide, others standard), link to full portfolio.
6. **Results and statistics**: 3 to 4 verified metrics in glass panels, each with a context label (timeframe, client type).
7. **Working process**: compact five-step strip linking to Process.
8. **Testimonials**: carousel or 3-up grid with approved quotes, names, roles.
9. **Contact CTA**: full-width closing statement, CTA button, email and WhatsApp links.

### 02. About
Large editorial headline; company story and what makes the agency different; mission and vision side by side; 4 to 6 values with icons; team grid; milestones as a vertical or horizontal timeline (verified only); closing CTA. Layout: split editorial with monochrome imagery; lime only on selected words, icons and accents.

### 03. Services
Grid of seven services (SEO, Social Media Marketing, Google and Meta Ads, Content Marketing, Branding and Creative Design, Website Development, Email Marketing). Each service card shows an icon in a bordered circle, name, one-line value proposition and a "Learn more" arrow. End the page with a compact process teaser and a closing CTA band. **Responsible claims:** never promise guaranteed rankings, leads, revenue or ad results; describe outcomes carefully and back them with evidence.

### 04. Portfolio
Gallery with strong thumbnails; filter pills by service or industry (All, SEO, Social, Ads, Branding, Web) — show filters only when 6 or more projects exist. Cards are 16:10 with glass tag overlays (industry, service) and title. Hover reveals image zoom and a "View project" pill. Load more button at the bottom; no infinite scroll that traps the footer. Label concept work clearly; use only approved client assets.

### 05. Contact
Headline and short invitation. Two-column layout: glass form panel plus contact details.
- **Fields:** Name*, Email*, Phone, Company, Service interested in (select), Project budget (select), Project description*; WhatsApp link; consent checkbox.
- **States:** inline validation, loading on submit, success (only after server confirmation), error with retry, preserved input on failure.
- **Spam protection:** honeypot field plus a rate limit or CAPTCHA alternative (e.g. Turnstile).
- Show business email, phone/WhatsApp, office location (optional map), working hours and expected response time.

### Utility pages
- **404:** large "404" with lime accent, friendly line, links home and to contact.
- **Thank-you:** confirmation, what happens next, link to portfolio.
- **Privacy / Terms:** clean long-form reading layout.

---

## 8. Responsive Behaviour (Mobile and Desktop)

The website must work equally well on **mobile and desktop**. Neither is secondary: design a dedicated desktop layout (1440px) and a dedicated mobile layout (390px) with the same brand, content and features, and make sure tablet sizes adapt cleanly in between. Mobile should never feel like a shrunken desktop, and desktop should never feel like a stretched phone layout.

### 8.1 Breakpoints and testing

| Name | Width | Columns | Notes |
|---|---|---|---|
| Small phone | 320 to 359px | 4 | Must not break or overflow |
| Phone (mobile design target) | 360 to 480px | 4 | Design at 390px |
| Large phone / small tablet | 481 to 767px | 4 to 8 | Two-column cards where space allows |
| Tablet | 768 to 1023px | 8 | Two-column grids, split layouts |
| Desktop | 1024 to 1439px | 12 | Editorial layouts; design at 1440px |
| Wide | 1440px+ | 12 | Max container 1280px, centred |

Verify at 320, 375, 390, 768, 1024, 1280 and 1536px, in portrait and landscape, on real iOS Safari and Android Chrome (not only browser emulation).

### 8.2 Required technical setup

- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`; never disable pinch-zoom.
- Respect safe areas: `padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)` on the header, bottom bars and full-screen menu.
- Use `100dvh` (with a `100vh` fallback) for full-height sections so the mobile browser toolbar does not cause jumps.
- `<meta name="theme-color" content="#080808">` so the browser chrome matches the site.
- Body text 16px minimum on inputs (prevents iOS auto-zoom on focus).
- `touch-action: manipulation` on buttons and links; remove the 300ms tap delay.
- `-webkit-tap-highlight-color` set to a subtle lime tint or transparent, with a clear pressed state instead.
- Add a web app manifest and icons (optional PWA install); include an Apple touch icon.

### 8.3 Touch and ergonomics

- Minimum touch target 44 x 44px, with at least 8px between targets.
- Place primary actions in the thumb zone (lower half of the screen).
- Primary buttons are full width on phones, stacked with 12px spacing.
- Hover effects get touch equivalents: use `:active` pressed states (scale 0.98, border tint) and wrap hover-only styling in `@media (hover: hover) and (pointer: fine)`.
- No hover-only information. Anything revealed on hover (e.g. project overlays) must be visible by default on touch.
- Avoid tiny text links in dense clusters; use larger tappable rows.

### 8.4 Mobile navigation

- **Header:** 60px high, compact logo left, hamburger right, and a small lime "Talk" icon-button or text button next to it. Header becomes glass with a hairline border after scrolling 24px.
- **Menu:** full-screen solid dark overlay (`#080808`, nearly opaque), large stacked links (28 to 32px, Space Grotesk), numbered 01 to 07, "Let's Talk" lime button pinned at the bottom, social/WhatsApp row beneath. Slide-fade in (250ms). Focus is trapped, `Esc` closes it, background scroll is locked, `aria-expanded` is set, and the menu closes after a link is selected.
- **Sticky bottom action bar (optional, after the hero scrolls out of view):** a slim glass bar with two actions, "Start a Project" (lime) and a WhatsApp icon button. It hides while the menu or keyboard is open and must not cover the footer or cookie banner.
- **Back-to-top** button appears after long scrolls, positioned clear of the bottom bar.

### 8.5 Mobile layout by section

| Section | Mobile treatment |
|---|---|
| Hero | Eyebrow, headline at 40 to 44px (4 to 5 lines max), 2-line paragraph, stacked full-width CTAs, then the visual below the text. Reduce grid and glow intensity to save paint cost. |
| Trusted clients | Two-row logo grid or a slow single-row marquee; pause under reduced motion. |
| Services | Single column of compact cards (icon, title, one line, arrow); or a horizontal snap-scroll carousel with peeking next card. |
| About preview | Image first (4:3), then headline, copy and differentiators as a vertical list. |
| Featured projects | One card per row at 4:5 or 16:10, tags visible by default, "View project" always visible; or a snap carousel with dots. |
| Statistics | 2 x 2 grid of compact glass panels, numbers at 36 to 40px. |
| Process | Vertical timeline with a thin line on the left, number and icon, title and text on the right. |
| Testimonials | Swipeable single-card carousel with dots and visible arrows for keyboard users. |
| Contact CTA | Full-width band, stacked buttons, tap-to-call and tap-to-email links. |
| Footer | Accordion or stacked link groups, large tap targets, newsletter field full width, social icons in a row. |

**Page-specific**
- **About:** team cards in a 2-column grid; timeline becomes vertical.
- **Portfolio:** filter pills in a single-row horizontal scroll with fade edges; 1-column grid, "Load more" button.
- **Contact:** form first, contact details after; WhatsApp and call buttons large and prominent.

### 8.6 Mobile forms

- One column, labels always visible above fields (no placeholder-only labels).
- Correct input types and attributes: `type="email"` with `inputmode="email"`, `type="tel"` with `inputmode="tel"`, and `autocomplete` values (`name`, `email`, `tel`, `organization`).
- Selects use native pickers for Service and Budget.
- Keep the submit button visible and reachable above the on-screen keyboard (no fixed elements covering fields; scroll the focused field into view).
- Errors are shown inline under each field with an icon and text; on submit failure, scroll to and focus the first error.
- Preserve typed input if submission fails; show a clear loading and success state.

### 8.7 Mobile typography and spacing

- Headings use `clamp()` so they scale smoothly between 320px and desktop.
- Body 16px, line-height 1.6; line length stays naturally short.
- Section padding 64px vertical, 20 to 24px horizontal gutters.
- Avoid text over busy images; add a dark gradient scrim beneath overlaid text.
- No horizontal overflow at any width; wide content (tables, code) scrolls inside its own container.

### 8.8 Mobile performance budget

- Target 4G/mid-range Android: LCP under 2.5s, CLS under 0.1, INP under 200ms; initial JS under 170KB gzipped.
- Serve smaller image variants with `srcset` and `sizes`; AVIF/WebP; hero image under 120KB on mobile.
- Do not autoplay heavy video on mobile; use a poster image or a lightweight loop under 1MB, and honour data-saver.
- Reduce or remove `backdrop-filter` on low-power devices and use more opaque surfaces on mobile (blur 8 to 12px, never full-screen blur).
- Limit simultaneous animated elements; disable parallax and cursor-following effects on touch devices.
- Preload only the hero image and primary font; self-host and subset fonts.

### 8.9 Mobile gestures and motion

- Horizontal carousels use CSS scroll-snap (`scroll-snap-type: x mandatory`), show a peek of the next card, and never trap vertical scrolling.
- Do not override native pull-to-refresh or edge-swipe back gestures.
- Reveal animations remain subtle (shorter 14px travel, 450 to 550ms) and still obey `prefers-reduced-motion`.

### 8.10 Mobile acceptance checklist

- [ ] Works from 320px to 1536px with no horizontal scrolling.
- [ ] All tap targets are at least 44px; primary CTAs are thumb-reachable.
- [ ] Menu opens, traps focus, locks scroll, closes on link tap and `Esc`.
- [ ] Safe areas respected on notched devices; no content hidden behind the bottom bar.
- [ ] No hover-only content; touch states exist for every interactive element.
- [ ] Forms use correct keyboards and autocomplete; no iOS zoom-on-focus.
- [ ] `100dvh` sections do not jump when the browser toolbar shows or hides.
- [ ] Carousels swipe smoothly and also have non-swipe controls.
- [ ] Lighthouse mobile 90+ on a throttled connection.
- [ ] Tested on a real iPhone and a real Android device, in portrait and landscape.

---

## 9. Accessibility and Performance

**Accessibility**
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and logical heading order (one H1 per page).
- Visible focus state on every interactive element (2px white or lime ring, 2px offset).
- WCAG 2.2 AA contrast; meaning never conveyed by colour alone.
- Labels for all form controls; errors linked via `aria-describedby`; live region for form status.
- Carousels and marquees are pausable and keyboard accessible.
- Honour `prefers-reduced-motion` and, where practical, `prefers-contrast`.

**Performance targets**
- Lighthouse 90+ on mobile; LCP under 2.5s, CLS under 0.1, INP under 200ms.
- Responsive images (`srcset`, AVIF/WebP), lazy loading, preload only the hero image and primary font.
- Limit to two font families and 3 to 4 weights; subset fonts.
- Avoid animating layout properties; keep third-party scripts minimal and deferred.

---

## 10. Content Loading Rules

- Render page structure and essential text immediately.
- Lazy-load images, video and other heavy media below the fold.
- API-driven sections show a lightweight skeleton in that section only.
- Fetch the next portfolio batch near the end of the list; prevent duplicate requests and show a retry state on failure.
- Do not use infinite scroll that traps the footer. Provide pagination or "Load more" as a fallback.

---

## 11. SEO, Analytics and Compliance

- Unique title (under 60 characters) and meta description (under 160) per page; canonical URLs; Open Graph and Twitter cards.
- Structured data: `Organization`, `Service`, `BreadcrumbList`.
- `sitemap.xml`, `robots.txt`, clean slugs, descriptive alt text.
- Analytics events: CTA clicks, form start, form submit, WhatsApp click, portfolio views, scroll depth.
- Cookie consent and privacy policy before enabling non-essential tracking.

---

## 12. Suggested Tech Stack (optional)

Next.js or Astro, Tailwind CSS with the tokens above, Framer Motion or GSAP for motion, and a form backend with email delivery and spam protection.

---

## 13. Acceptance Checklist

- [ ] All five main pages/sections plus utility pages exist and are linked.
- [ ] Theme consistently uses black, white and `#C0FF3E`; lime stays a small accent.
- [ ] Glass is used selectively (about 25%) with solid fallbacks.
- [ ] Page scrolls normally with no nested-scroll trap.
- [ ] Reveals are smooth, run once and cause no layout shift.
- [ ] Below-the-fold images lazy-load with reserved space.
- [ ] Reduced-motion preference is respected.
- [ ] Mobile checklist in section 8.10 passes.
- [ ] Contact form validation, success and error states work; spam protection is active.
- [ ] Every component has hover, focus, active and disabled states.
- [ ] Portfolio, team, client, testimonial and metric claims use approved real content.
- [ ] Keyboard-only navigation works with visible focus.
- [ ] No horizontal overflow or inaccessible hidden content.
- [ ] Lighthouse targets met; SEO metadata present on every page.

---

## 14. Open Content Needed Before Launch

Agency name, logo and brand assets; mission, vision and company introduction; confirmed services and descriptions; team names, roles and approved photos; client names/logos with permission; portfolio visuals and verified results; testimonials with permission to publish; business email, phone/WhatsApp and office address; budget ranges and enquiry recipient; privacy policy and terms text.

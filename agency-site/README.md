# Growth Lab — Digital Marketing Agency Website

Premium, minimal, creative digital marketing agency site built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Tech Stack

- Next.js 16 + App Router + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- Framer Motion (scroll reveals, staggered cards, clip-path image reveal, parallax)
- Lucide React icons

## Project Structure

```
agency-site/
├── src/
│   ├── app/              # App Router routes (/, /about, /services, /portfolio, /contact, ...)
│   ├── components/       # Home sections, layout (Header/Footer/MobileMenu), ContactForm
│   └── lib/              # motion.tsx (Framer Motion primitives), constants.ts
├── public/images/projects/  # Placeholder project SVGs
├── design.md             # Design specification (v2.3)
└── CONTINUATION.md       # Project status & scope
```

## How to Run

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
cd agency-site
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
```

### Start production server
```bash
npm start
```

### Lint
```bash
npm run lint
```

## Routes

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Portfolio | `/portfolio` |
| Contact | `/contact` |
| Thank You | `/thank-you` |
| Privacy Policy | `/privacy` |
| Terms of Service | `/terms` |
| 404 | `/not-found` |

## Notes

- Project images in `public/images/projects/` are placeholder SVGs — replace with approved client assets before launch (see `design.md` section 14).
- The contact form is UI-only (no backend wired yet — see `CONTINUATION.md` section 3).
- Branding is placeholder; swap in real agency name, logo, and content before launch.

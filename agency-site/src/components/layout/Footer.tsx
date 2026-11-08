"use client";

import Link from "next/link";

const FOOTER_LINKS = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "SEO", href: "/services" },
    { label: "Social Media", href: "/services" },
    { label: "Ads", href: "/services" },
    { label: "Content", href: "/services" },
    { label: "Branding", href: "/services" },
    { label: "Web Development", href: "/services" },
    { label: "Email Marketing", href: "/services" },
  ],
  Contact: [
    { label: "hello@growthlab.example", href: "mailto:hello@growthlab.example" },
    { label: "+1 (555) 010-2030", href: "tel:+15550102030" },
    { label: "WhatsApp", href: "https://wa.me/15550102030" },
  ],
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-heading text-2xl font-bold text-text mb-4">
              Have a project in mind?
            </h2>
            <p className="text-muted text-sm mb-6 max-w-xs leading-relaxed">
              Growth Lab helps brands grow with strategy, creative and
              performance marketing that works.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-dark-text font-semibold text-sm hover:bg-accent-hover transition-colors active:bg-accent-press touch-manipulation"
            >
              Start a Project <ArrowIcon />
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-6">
              Pages
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Pages.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-muted mb-6">
              Contact
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.Contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block text-sm text-muted hover:text-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            © 2026 Growth Lab. Placeholder branding — replace before launch.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-text transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-text transition-colors"
            >
              Terms
            </Link>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted hover:text-accent transition-colors" aria-label="Twitter">
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 2v12M12 2v12M16 2v12M22 18l-4 4-4-4" />
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors" aria-label="Instagram">
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-accent transition-colors" aria-label="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <path d="M10.34 8.85A6.6 6.6 0 0114 8c1.04 0 2 0 2.73.21M8 15a2 2 0 100-4 2 2 0 000 4zM22 12c0 5-5 10-10 10S2 17 2 12c0-2.23.86-4.29 2.18-5.78" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

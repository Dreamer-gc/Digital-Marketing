"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled ? "glass-navbar border-b" : ""
        } border-transparent`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-heading text-xl font-bold tracking-tight text-text"
            >
              Growth Lab
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/" className="text-muted hover:text-text transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted hover:text-text transition-colors">
                About
              </Link>
              <Link href="/services" className="text-muted hover:text-text transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-muted hover:text-text transition-colors">
                Portfolio
              </Link>
              <Link href="/contact" className="text-muted hover:text-text transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2 rounded-full bg-accent text-dark-text font-semibold text-sm hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
                aria-label="Let&apos;s Talk"
              >
                Let&apos;s Talk
              </Link>
              <button
                className="md:hidden p-2 text-text hover:text-accent transition-colors"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div
      className="fixed inset-0 z-[60] bg-bg/98 backdrop-blur-md flex flex-col"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="absolute top-4 right-4 p-2 text-text hover:text-accent transition-colors"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close menu"
      >
        <X className="h-6 w-6" />
      </div>

      <nav className="flex-1 flex flex-col justify-center py-20 px-6">
        <ul className="space-y-6">
          {links.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block text-3xl font-heading font-bold text-text tracking-tight hover:text-accent transition-colors"
                onClick={onClose}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-border p-6 mt-auto">
        <Link
          href="/contact"
          className="block w-full py-3 px-4 rounded-full bg-accent text-dark-text text-center font-semibold text-sm hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
          onClick={onClose}
        >
          Let&apos;s Talk
        </Link>
        <p className="mt-4 text-xs text-muted text-center">
          &copy; 2026 Growth Lab
        </p>
      </div>
    </div>
  );
}

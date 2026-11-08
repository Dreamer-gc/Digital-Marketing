import Link from "next/link";
import { FadeUp } from "@/lib/motion";

export function ClosingCTA() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeUp className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text">
            Ready to grow?
          </h2>
          <p className="text-muted text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Let’s talk about your next project. Email us or message us on
            WhatsApp — we respond within one business day.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-accent text-dark-text font-semibold text-sm hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
            >
              Start a Project
            </Link>
            <a
              href="mailto:hello@growthlab.example"
              className="px-8 py-3.5 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors touch-manipulation text-sm font-semibold"
            >
              hello@growthlab.example
            </a>
          </div>
          <a
            href="https://wa.me/15550102030"
            className="mt-6 inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 12c0-4.714-3.823-8.536-8.536-8.536S5 7.286 5 12c0 3.327 2.039 6.176 5 7.565V22l4-3.435c2.961-1.389 5-4.238 5-7.565" />
            </svg>
            WhatsApp
          </a>
        </FadeUp>
      </div>
    </section>
  );
}

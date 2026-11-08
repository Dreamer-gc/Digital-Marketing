import Link from "next/link";
import { FadeUp } from "@/lib/motion";

export function AboutPreview() {
  return (
    <section className="py-28 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeUp className="space-y-6">
              <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                About us
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-text leading-tight">
                Built for brands that outgrow the ordinary.
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-lg">
                We’re a growth lab, not an ad shop. Strategy, creative and
                performance marketing engineered for real outcomes — no
                vanity metrics, no guaranteed rankings.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">›</span>
                  <p className="text-sm text-muted leading-relaxed">
                    Editorial creative that earns attention.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">›</span>
                  <p className="text-sm text-muted leading-relaxed">
                    Performance media backed by evidence.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent mt-0.5">›</span>
                  <p className="text-sm text-muted leading-relaxed">
                    Partnerships built on transparency.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors touch-manipulation"
              >
                Learn more about us
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </FadeUp>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="glass-panel p-1 rounded-24 h-[420px] w-full">
              <div className="h-full rounded-22 border border-white/10 overflow-hidden relative">
                <div className="absolute inset-0 bg-surface/60" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

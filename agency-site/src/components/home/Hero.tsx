import Link from "next/link";
import { FadeUp, Parallax } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center items-center pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      aria-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient:135deg,#080808_0%,#0b0b0b_100%]" />
        <Parallax speed={0.12} className="pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[140px] mix-blend-overlay"
          />
        </Parallax>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-dark-text text-[10px] font-mono font-bold uppercase tracking-wider">
              Digital Growth &amp; Creative Strategy
            </div>
          </FadeUp>

          <FadeUp delay={0.12}>
            <h1 className="font-heading text-[clamp(3.5rem,8vw,6rem)] font-bold leading-[1.02] tracking-tight text-text">
              We Build Brands.{" "}
              <span className="text-accent">We Create Digital Growth.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.24}>
            <p className="text-lg text-muted leading-relaxed max-w-xl">
              A growth lab for ambitious brands. Strategy, creative and
              performance marketing — built to convert, not just to look good.
            </p>
          </FadeUp>

          <FadeUp delay={0.36} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent text-dark-text font-semibold hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors touch-manipulation"
            >
              Explore Our Work
            </Link>
          </FadeUp>

          <FadeUp delay={0.48}>
            <div className="mt-10 flex items-center gap-2 text-xs text-muted uppercase tracking-widest">
              <span className="w-px h-3 bg-border" />
              <span>Scroll to explore</span>
            </div>
          </FadeUp>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[24px] border border-border/50 bg-surface/40 backdrop-blur-sm shadow-2xl"
            />
            <div className="absolute inset-1 rounded-[22px] border border-white/10" />
            <div className="absolute inset-0 rounded-[24px] opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 right-0 glass-panel p-4 max-w-xs animate-[float_3s_ease-in-out_infinite]">
            <div className="text-mono text-xs font-bold text-accent uppercase">12+</div>
            <div className="text-sm font-medium text-text">years combined</div>
          </div>
        </div>
      </div>
    </section>
  );
}

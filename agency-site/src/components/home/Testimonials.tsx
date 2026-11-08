import { FadeUp, StaggerContainer, StaggerItem } from "@/lib/motion";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-12">
          <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
            What partners say
          </span>
          <h2 className="font-heading text-3xl font-bold text-text mt-3">
            Real feedback from real partners
          </h2>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <StaggerItem key={t.id} delay={index * 0.09}>
              <div className="glass-panel p-8 rounded-24 border border-border">
                <div className="text-accent text-4xl font-serif mb-4">“</div>
                <p className="text-lg text-text leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="space-y-1">
                  <p className="font-heading text-sm font-bold text-text">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted">{t.role}, {t.company}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

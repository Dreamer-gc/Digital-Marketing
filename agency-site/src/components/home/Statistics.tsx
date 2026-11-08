import { StaggerContainer, StaggerItem } from "@/lib/motion";
import { STATS } from "@/lib/constants";

export function Statistics() {
  return (
    <section className="py-28 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <StaggerItem key={stat.number} delay={index * 0.09}>
              <div className="glass-panel p-8 rounded-24 border border-border flex flex-col items-center text-center">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading text-3xl lg:text-5xl font-bold text-text">
                    {stat.number}
                  </span>
                  <span className="text-accent font-semibold">{stat.unit}</span>
                </div>
                <p className="font-heading text-sm font-bold text-text uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-xs text-muted mt-1 max-w-xs mx-auto leading-relaxed">
                  {stat.context}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

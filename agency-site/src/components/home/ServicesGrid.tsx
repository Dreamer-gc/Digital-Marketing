import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem } from "@/lib/motion";
import { SERVICES } from "@/lib/constants";
import { Search, Share2, Target, FileText, PenTool, Code2, Mail } from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Share2,
  Target,
  FileText,
  PenTool,
  Code2,
  Mail,
};

export function ServicesGrid() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
            Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text mt-3">
            Everything you need to grow
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Seven core disciplines, one growth engine. No guaranteed rankings —
            just honest, evidence-backed work.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon] || Search;
            return (
              <StaggerItem key={service.id} delay={index * 0.09}>
                <div className="glass-panel p-8 rounded-24 border border-border hover:border-accent/40 transition-colors group flex flex-col h-full">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                    <Icon className="h-5 w-5 text-muted group-hover:text-accent" />
                  </div>
                  <span className="text-mono text-[10px] font-bold text-muted uppercase tracking-widest mb-3">
                    {service.index}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-text mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {service.valueProp}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline transition-colors"
                  >
                    Learn more
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-12 text-center">
          <FadeUp>
            <Link
              href="/services"
              className="text-sm font-semibold text-text hover:text-accent transition-colors uppercase tracking-widest"
            >
              View all services
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

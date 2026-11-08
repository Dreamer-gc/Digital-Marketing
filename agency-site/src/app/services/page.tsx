import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export const metadata = {
  title: "Services — Growth Lab",
  description: "SEO, social media, ads, content, branding, web development and email marketing from Growth Lab.",
};

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp className="space-y-6">
              <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-text leading-tight">
                Seven disciplines, one growth engine.
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-xl">
                Honest, evidence-backed performance marketing. We never
                promise guaranteed rankings or revenue — we promise rigorous
                work that compounds.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            <div className="mt-16 border-t border-border/50 pt-12 flex flex-col lg:flex-row items-center justify-between gap-6">
              <FadeUp>
                <p className="text-muted text-sm uppercase tracking-widest font-semibold">
                  Responsible claims
                </p>
                <p className="text-muted text-sm leading-relaxed mt-2 max-w-lg">
                  We never promise guaranteed rankings, leads, revenue or ad
                  results. Outcomes are described carefully and backed with
                  evidence.
                </p>
              </FadeUp>
              <FadeUp delay={0.1}>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-accent text-dark-text font-semibold hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
                >
                  Start a Project
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

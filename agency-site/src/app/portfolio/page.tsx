import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/lib/motion";
import { PROJECTS } from "@/lib/constants";

const FILTERS = ["All", "SEO", "Social", "Ads", "Branding", "Web"] as const;

export const metadata = {
  title: "Portfolio — Growth Lab",
  description: "Selected client work across branding, web, content, social and performance marketing.",
};

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <FadeUp className="space-y-6">
              <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                Featured work
              </span>
              <h1 className="font-heading text-4xl font-bold text-text leading-tight">
                Proven impact, real results
              </h1>
              <p className="text-muted text-lg leading-relaxed max-w-xl">
                Selected client work across branding, web, content, social and
                performance marketing. Concept work is labeled clearly.
              </p>
            </FadeUp>

            <FadeUp className="mt-12 flex flex-wrap gap-2 overflow-x-auto pb-4 no-scrollbar">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  className="whitespace-nowrap px-4 py-1.5 rounded-full border border-border text-xs font-mono font-bold text-muted uppercase tracking-widest hover:text-text hover:border-accent transition-colors touch-manipulation"
                >
                  {filter}
                </button>
              ))}
              <span className="px-4 py-1.5" />
            </FadeUp>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((project, index) => (
                <StaggerItem key={project.id} delay={index * 0.09}>
                  <div className="relative group overflow-hidden rounded-24 border border-border/50">
                    <div className="h-[320px] rounded-24 overflow-hidden bg-surface">
                      <div
                        className="absolute inset-0 bg-surface group-hover:scale-105 transition-transform duration-700"
                        style={{
                          backgroundImage: `url('${project.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 glass-panel p-4">
                      <span className="text-mono text-[10px] font-bold text-accent uppercase">
                        {project.industry} • {project.service}
                      </span>
                      <h3 className="font-heading text-lg font-bold text-text mt-1">
                        {project.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link
                        href="/contact"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-dark-text text-[10px] font-bold uppercase touch-manipulation"
                      >
                        View project
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <div className="mt-12 flex justify-center">
              <button
                className="px-8 py-3 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors touch-manipulation text-sm font-semibold"
              >
                Load more
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

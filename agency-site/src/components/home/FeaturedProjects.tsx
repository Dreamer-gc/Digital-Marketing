import Link from "next/link";
import { FadeUp, StaggerContainer, StaggerItem, ClipReveal } from "@/lib/motion";
import { PROJECTS } from "@/lib/constants";

export function FeaturedProjects() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          <div className="space-y-3">
            <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
              Featured work
            </span>
            <h2 className="font-heading text-3xl font-bold text-text">
              Proven impact, real results
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm font-semibold text-text hover:text-accent transition-colors"
          >
            View all projects
          </Link>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <StaggerItem className="lg:col-span-5 relative group" delay={0}>
            <ClipReveal className="h-[420px]">
              <div
                className="absolute inset-0 bg-surface"
                style={{
                  backgroundImage: "url('/images/projects/vertex.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass-panel p-4">
                <span className="text-mono text-[10px] font-bold text-accent uppercase">
                  SaaS • Branding
                </span>
                <h3 className="font-heading text-lg font-bold text-text mt-1">
                  Vertex — Brand Identity
                </h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Link
                  href="/portfolio"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-dark-text text-[10px] font-bold uppercase touch-manipulation"
                >
                  View project
                </Link>
              </div>
            </ClipReveal>
          </StaggerItem>

          {PROJECTS.slice(1, 4).map((project, index) => (
            <StaggerItem
              key={project.id}
              className="relative group lg:col-span-3"
              delay={(index + 1) * 0.09}
            >
              <ClipReveal className="h-[280px]">
                <div
                  className="absolute inset-0 bg-surface"
                  style={{
                    backgroundImage: `url('${project.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
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
                    href="/portfolio"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent text-dark-text text-[10px] font-bold uppercase touch-manipulation"
                  >
                    View project
                  </Link>
                </div>
              </ClipReveal>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp, StaggerContainer, StaggerItem } from "@/lib/motion";

const VALUES = [
  {
    name: "Evidence over guesswork",
    desc: "Every decision is backed by data, testing, and measurable outcomes.",
  },
  {
    name: "Transparent partnerships",
    desc: "No black boxes. You always know what we’re doing and why.",
  },
  {
    name: "Growth, not vanity",
    desc: "We optimize for revenue and retention, not impressions.",
  },
  {
    name: "Craft and clarity",
    desc: "Premium design paired with honest, direct communication.",
  },
  {
    name: "Long-term thinking",
    desc: "Sustainable acquisition models that compound over time.",
  },
  {
    name: "No guaranteed outcomes",
    desc: "We promise rigorous work, not impossible rankings.",
  },
] as const;

export const metadata = {
  title: "About — Growth Lab",
  description: "Learn about Growth Lab, our story, values, and how we help brands grow.",
};

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                About us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-text mt-3 leading-tight">
                A growth lab for ambitious brands.
              </h1>
              <p className="text-muted text-lg mt-6 leading-relaxed">
                We’re not an ad shop. We’re a growth lab — strategy, creative
                and performance marketing engineered for real outcomes. No
                vanity metrics, no guaranteed rankings, no black boxes.
              </p>
            </FadeUp>
          </div>
        </section>

        <section className="py-28 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <FadeUp>
                  <h2 className="font-heading text-3xl font-bold text-text">
                    Our story
                  </h2>
                  <p className="text-muted text-lg leading-relaxed mt-4">
                    Growth Lab was founded on the belief that marketing should
                    be measurable, honest, and creative. We partner with
                    ambitious brands to build systems that compound — not
                    campaigns that expire.
                  </p>
                </FadeUp>

                <FadeUp delay={100} className="glass-panel p-8 rounded-24 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-dark-text flex items-center justify-center font-bold text-xs uppercase">
                      M
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-text">
                        Mission
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mt-2">
                        Help brands grow through strategy, creative and
                        performance marketing that earns trust and converts.
                      </p>
                    </div>
                  </div>
                </FadeUp>

                <FadeUp delay={200} className="glass-panel p-8 rounded-24 border border-border mt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-dark-text flex items-center justify-center font-bold text-xs uppercase">
                      V
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-text">
                        Vision
                      </h3>
                      <p className="text-muted text-sm leading-relaxed mt-2">
                        A world where growth is earned through evidence, not
                        bought through hype.
                      </p>
                    </div>
                  </div>
                </FadeUp>
          </div>

              <div className="hidden lg:block">
                <div className="glass-panel p-1 rounded-24 h-[520px] w-full">
                  <div className="h-full rounded-22 border border-white/10 overflow-hidden relative bg-surface">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp className="space-y-8">
              <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                Core values
              </span>
              <h2 className="font-heading text-3xl font-bold text-text">
                How we work
              </h2>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((value, i) => (
                <StaggerItem key={value.name} delay={i * 0.09}>
                  <div className="glass-panel p-8 rounded-24 border border-border">
                    <span className="text-mono text-[10px] font-bold text-muted uppercase tracking-widest">
                      0{i + 1}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-text mt-3 mb-3">
                      {value.name}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-28 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <FadeUp>
                  <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                    Team
                  </span>
                  <h2 className="font-heading text-3xl font-bold text-text">
                    The people behind the growth
                  </h2>
                </FadeUp>
              </div>

              <div className="order-1 lg:order-2 grid md:grid-cols-2 gap-4">
                {[
                  { name: "Alex Rivera", role: "Founder & Strategy" },
                  { name: "Samira Khan", role: "Creative Director" },
                  { name: "Jordan Lee", role: "Performance Lead" },
                  { name: "Casey Moyo", role: "Growth Designer" },
                ].map((member, i) => (
                  <StaggerItem key={member.name} delay={i * 0.09}>
                    <div className="relative group h-[320px] rounded-24 overflow-hidden glass-panel border border-border p-6 flex flex-col">
                      <div className="absolute inset-0 bg-surface opacity-60" />
                      <div className="relative z-10">
                        <h3 className="font-heading text-lg font-bold text-text">
                          {member.name}
                        </h3>
                        <p className="text-mono text-xs font-bold text-accent uppercase tracking-widest mt-1">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeUp>
              <h2 className="font-heading text-3xl font-bold text-text">
                Ready to grow?
              </h2>
              <p className="text-muted text-lg mt-4 max-w-xl mx-auto leading-relaxed">
                Let’s talk about your next project. We respond within one
                business day.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-dark-text font-semibold hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
              >
                Start a Project
              </Link>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

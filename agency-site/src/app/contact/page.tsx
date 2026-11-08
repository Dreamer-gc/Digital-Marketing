import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp } from "@/lib/motion";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact — Growth Lab",
  description: "Get in touch with Growth Lab. Start your project or send us a message.",
};

const CONTACTS = [
  { label: "Email", value: "hello@growthlab.example", href: "mailto:hello@growthlab.example", icon: "@" },
  { label: "Phone / WhatsApp", value: "+1 (555) 010-2030", href: "tel:+15550102030", icon: "☎" },
  { label: "Location", value: "Remote-first — worldwide", href: "", icon: "📍" },
] as const;

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 space-y-6">
                <FadeUp>
                  <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                    Get in touch
                  </span>
                  <h1 className="font-heading text-3xl lg:text-4xl font-bold text-text">
                    Start a project
                  </h1>
                  <p className="text-muted text-lg leading-relaxed">
                    Have a project in mind? Send us your details and we’ll
                    respond within one business day.
                  </p>
                </FadeUp>

                <FadeUp delay={100} className="space-y-6">
                  {CONTACTS.map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs text-muted">
                        {c.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-text text-sm">{c.label}</p>
                        {c.href ? (
                          <a href={c.href} className="text-muted text-sm hover:text-accent transition-colors">
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-muted text-sm">{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </FadeUp>
              </div>

              <div className="order-1 lg:order-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

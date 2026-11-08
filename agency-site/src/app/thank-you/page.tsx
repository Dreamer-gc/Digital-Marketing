import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp } from "@/lib/motion";

export const metadata = {
  title: "Thank you — Growth Lab",
  description: "Thank you for contacting Growth Lab.",
};

export default function ThankYou() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <FadeUp>
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent text-dark-text mx-auto mb-8">
                <span className="text-2xl">✓</span>
              </div>
              <h1 className="font-heading text-4xl font-bold text-text">Thank you.</h1>
              <p className="text-muted text-lg mt-6 leading-relaxed">
                Your message has been sent. We’ll review your details and get
                back to you within one business day.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/portfolio"
                  className="px-8 py-3.5 rounded-full bg-accent text-dark-text font-semibold hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
                >
                  View our work
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3.5 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors touch-manipulation"
                >
                  Back home
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

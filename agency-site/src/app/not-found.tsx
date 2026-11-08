import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp } from "@/lib/motion";

export const metadata = {
  title: "404 — Growth Lab",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <h1 className="font-heading text-[10rem] font-bold text-text leading-none">404</h1>
            <h2 className="font-heading text-2xl font-bold text-text mt-6">
              Page not found
            </h2>
            <p className="text-muted mt-4 max-w-xs mx-auto leading-relaxed">
              The page you’re looking for doesn’t exist. Head back home or
              start a conversation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="px-8 py-3.5 rounded-full bg-accent text-dark-text font-semibold hover:bg-accent-hover active:bg-accent-press transition-colors touch-manipulation"
              >
                Back home
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border border-border text-text hover:border-accent hover:text-accent transition-colors touch-manipulation"
              >
                Contact us
              </Link>
            </div>
          </FadeUp>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp } from "@/lib/motion";

export const metadata = {
  title: "Terms of Service — Growth Lab",
  description: "Growth Lab terms of service.",
};

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <FadeUp>
              <span className="text-mono text-xs font-bold text-accent uppercase tracking-widest">
                Legal
              </span>
              <h1 className="font-heading text-3xl font-bold text-text mt-3">
                Terms of Service
              </h1>
              <p className="text-muted text-sm uppercase tracking-widest mt-6 mb-8">
                Placeholder — replace with approved copy before launch.
              </p>

              <div className="space-y-6 text-muted text-sm leading-relaxed max-w-xl">
                <p>
                  These terms govern your use of growthlab.example (the &quot;Site&quot;)
                  and the services provided by Growth Lab (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
                </p>
                <p>
                  By contacting us or using the Site, you agree to these terms.
                  If you do not agree, please do not use the Site.
                </p>
                <p>
                  All content on the Site is the property of Growth Lab or its
                  licensors and is protected by copyright. Client names and
                  logos are shown with permission and are placeholders pending
                  approved brand assets.
                </p>
                <p>
                  Growth Lab makes no guarantees of specific outcomes such as
                  rankings, leads, revenue or ad performance. Services are
                  delivered with reasonable care and skill.
                </p>
                <p>
                  Questions? Email hello@growthlab.example.
                </p>
                <p>
                  This is a placeholder. Replace with approved legal copy
                  before launch.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/"
                  className="text-sm font-semibold text-accent hover:underline"
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

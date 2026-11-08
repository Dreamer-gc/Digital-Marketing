import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FadeUp } from "@/lib/motion";

export const metadata = {
  title: "Privacy Policy — Growth Lab",
  description: "Growth Lab privacy policy.",
};

export default function Privacy() {
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
                Privacy Policy
              </h1>
              <p className="text-muted text-sm uppercase tracking-widest mt-6 mb-8">
                Placeholder — replace with approved copy before launch.
              </p>

              <div className="space-y-6 text-muted text-sm leading-relaxed max-w-xl">
                <p>
                  Growth Lab (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting
                  your privacy. This policy explains how we collect, use, and
                  protect your personal information when you contact us through
                  our website.
                </p>
                <p>
                  We collect information you voluntarily provide, such as your
                  name, email address, phone number and company, when you
                  submit our contact form. We use this information to respond
                  to your enquiry and to communicate about our services.
                </p>
                <p>
                  We do not sell your personal data. We may use third-party
                  providers for email delivery and analytics, and only share
                  data as necessary to operate the site or as required by law.
                </p>
                <p>
                  You may request access to, correction of, or deletion of your
                  data by emailing hello@growthlab.example.
                </p>
                <p>
                  This is a placeholder policy. Replace with approved legal
                  copy before launch.
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

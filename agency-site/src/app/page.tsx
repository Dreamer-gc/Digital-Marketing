import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { ClosingCTA } from "@/components/home/ClosingCTA";

export const metadata = {
  title: "Growth Lab — Digital Growth & Creative Strategy",
  description:
    "Premium digital marketing agency. We build brands and create digital growth through strategy, creative, and performance marketing.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main id="main-content" className="flex-1">
        <Hero />
        <TrustedBy />
        <ServicesGrid />
        <AboutPreview />
        <FeaturedProjects />
        <Statistics />
        <Testimonials />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}

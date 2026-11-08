import { FadeUp } from "@/lib/motion";

export function TrustedBy() {
  const logos = [
    "Vertex Studio",
    "North & Co",
    "Lumen",
    "Aalto",
    "Summit",
    "Bloom",
    "Orbit",
    "Kin",
  ];

  return (
    <section className="py-24 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text">
              Trusted by growing brands
            </h2>
            <p className="text-muted text-sm mt-2">
              Approved client partners only.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs text-muted uppercase tracking-widest">
            <span className="w-[1px] h-4 bg-border" />
            <span>01 / Partners</span>
          </div>
        </FadeUp>

        <FadeUp className="relative overflow-hidden">
          <div
            className="flex items-center gap-16 animate-marquee"
            style={{ animationDuration: "24s" }}
          >
            {logos.map((logo) => (
              <div key={logo} className="flex-shrink-0">
                <span className="text-[12px] font-mono font-medium text-muted opacity-50">
                  {logo}
                </span>
              </div>
            ))}
            {logos.map((logo) => (
              <div key={logo + "-2"} className="flex-shrink-0">
                <span className="text-[12px] font-mono font-medium text-muted opacity-50">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

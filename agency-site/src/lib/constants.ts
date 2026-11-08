export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "seo",
    name: "SEO",
    index: "01",
    valueProp:
      "Search visibility built on structure, authority and intent — not shortcuts.",
    icon: "Search",
  },
  {
    id: "social",
    name: "Social Media Marketing",
    index: "02",
    valueProp:
      "Paid and organic social that turns scrollers into qualified leads.",
    icon: "Share2",
  },
  {
    id: "ads",
    name: "Google & Meta Ads",
    index: "03",
    valueProp:
      "Performance media with clear targeting, creative testing and honest reporting.",
    icon: "Target",
  },
  {
    id: "content",
    name: "Content Marketing",
    index: "04",
    valueProp:
      "Editorial content that ranks, earns trust and converts at scale.",
    icon: "FileText",
  },
  {
    id: "branding",
    name: "Branding & Creative Design",
    index: "05",
    valueProp:
      "Identity systems and creative that look premium and work everywhere.",
    icon: "PenTool",
  },
  {
    id: "web",
    name: "Website Development",
    index: "06",
    valueProp:
      "Fast, accessible sites engineered for conversion and growth.",
    icon: "Code2",
  },
  {
    id: "email",
    name: "Email Marketing",
    index: "07",
    valueProp:
      "Lifecycle campaigns that retain customers and drive repeat revenue.",
    icon: "Mail",
  },
] as const;

export const CLIENT_LOGOS = [
  "Vertex Studio",
  "North & Co",
  "Lumen",
  "Aalto",
  "Summit",
  "Bloom",
  "Orbit",
  "Kin",
] as const;

export const PROJECTS = [
  {
    id: "p1",
    title: "Vertex — Brand Identity",
    industry: "SaaS",
    service: "Branding",
    image: "/images/projects/vertex.svg",
    alt: "Vertex brand identity mockup",
  },
  {
    id: "p2",
    title: "North & Co — Ecommerce",
    industry: "Retail",
    service: "Web Development",
    image: "/images/projects/north.svg",
    alt: "North & Co ecommerce storefront",
  },
  {
    id: "p3",
    title: "Lumen — Campaign",
    industry: "Finance",
    service: "Ads",
    image: "/images/projects/lumen.svg",
    alt: "Lumen performance campaign",
  },
  {
    id: "p4",
    title: "Aalto — Social Launch",
    industry: "Hospitality",
    service: "Social Media",
    image: "/images/projects/aalto.svg",
    alt: "Aalto social campaign assets",
  },
  {
    id: "p5",
    title: "Summit — Content Hub",
    industry: "Health",
    service: "Content Marketing",
    image: "/images/projects/summit.svg",
    alt: "Summit editorial content hub",
  },
  {
    id: "p6",
    title: "Bloom — SEO Migration",
    industry: "Ecommerce",
    service: "SEO",
    image: "/images/projects/bloom.svg",
    alt: "Bloom SEO migration results",
  },
  {
    id: "p7",
    title: "Orbit — App Interface",
    industry: "Productivity",
    service: "Web Development",
    image: "/images/projects/orbit.svg",
    alt: "Orbit app interface design",
  },
  {
    id: "p8",
    title: "Kin — Brand Refresh",
    industry: "Wellness",
    service: "Branding",
    image: "/images/projects/kin.svg",
    alt: "Kin brand refresh visuals",
  },
] as const;

export const STATS = [
  { number: "12+", unit: "years", label: "combined experience", context: "across performance and creative" },
  { number: "400+", unit: "brands", label: "supported", context: "from seed to Series C" },
  { number: "3.2x", unit: "avg ROAS", label: "across paid media", context: "last 12 months" },
  { number: "98%", unit: "retention", label: "client retention", context: "year over year" },
] as const;

export const TESTIMONIALS = [
  {
    id: "t1",
    quote:
      "Growth Lab restructured our entire acquisition model. The results speak for themselves.",
    name: "Mira Chen",
    role: "Head of Marketing",
    company: "Vertex Studio",
  },
  {
    id: "t2",
    quote:
      "A true creative partner. Every campaign they ship feels like our best work yet.",
    name: "Daniel Ortiz",
    role: "Founder",
    company: "North & Co",
  },
  {
    id: "t3",
    quote:
      "Transparent reporting and performance that actually moves the needle.",
    name: "Sarah Ndlovu",
    role: "CMO",
    company: "Lumen",
  },
] as const;

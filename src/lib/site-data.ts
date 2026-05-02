export const site = {
  name: "Émile Vasari",
  role: "Software Engineer",
  shortBio:
    "I design and build systems for realtime products — from edge infra to the pixel a user clicks.",
  longBio: [
    "I'm a software engineer based in Lisbon, working at the intersection of distributed systems and product. For the last decade I've shipped infrastructure that runs underneath things people actually use — collaborative editors, ML platforms, design tools, payments.",
    "I care about latency, legibility, and the quiet engineering decisions that age well. I believe the best systems are the ones a small team can hold in their head on a Tuesday morning.",
    "I write occasionally about what I learn. I work best with teams that take the craft seriously and the politics lightly.",
  ],
  email: "hello@example.com",
  social: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
  location: "Lisbon, Portugal",
  available: true,
};

export const skillGroups = [
  {
    group: "Languages",
    items: [
      { name: "TypeScript", level: 95 },
      { name: "Rust", level: 85 },
      { name: "Go", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "React / TanStack", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Tokio / Axum", level: 80 },
      { name: "Next / Remix", level: 85 },
    ],
  },
  {
    group: "Infrastructure",
    items: [
      { name: "Postgres", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "Kafka / Redis", level: 85 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    group: "Practices",
    items: [
      { name: "Distributed Systems", level: 90 },
      { name: "Performance", level: 90 },
      { name: "API Design", level: 90 },
      { name: "Mentorship", level: 85 },
    ],
  },
];

export const techMarquee = [
  "TypeScript",
  "Rust",
  "Go",
  "Postgres",
  "React",
  "WebGL",
  "CRDTs",
  "Kubernetes",
  "Redis",
  "Kafka",
  "GraphQL",
  "WASM",
  "Tokio",
  "tRPC",
  "Vite",
];

export type ExperienceItem = {
  type: "work" | "education";
  title: string;
  org: string;
  dates: string;
  location?: string;
  bullets: string[];
  tech?: string[];
};

export const experience: ExperienceItem[] = [
  {
    type: "work",
    title: "Lead Engineer",
    org: "Atlas Collaborative",
    dates: "2024 — Present",
    location: "Remote",
    bullets: [
      "Architected an edge-first realtime engine sustaining 40k concurrent editors per region.",
      "Mentored a team of seven engineers across Rust, distributed systems, and on-call practice.",
      "Reduced infra cost 38% while doubling the user base.",
    ],
    tech: ["Rust", "Postgres", "Kubernetes", "Redis"],
  },
  {
    type: "work",
    title: "Staff Engineer",
    org: "Noctua AI",
    dates: "2022 — 2024",
    location: "Berlin",
    bullets: [
      "Built a multi-tenant ML inference platform serving 6B predictions per day.",
      "Drove cold-start p95 from 4.2s to 190ms via CUDA snapshot-restore.",
    ],
    tech: ["Go", "CUDA", "gRPC", "Triton"],
  },
  {
    type: "work",
    title: "Founding Engineer",
    org: "Lumen Design",
    dates: "2020 — 2022",
    location: "Berlin",
    bullets: [
      "Shipped the first design-to-code pipeline; 240+ components in production.",
      "Hired and onboarded the first three engineers.",
    ],
    tech: ["TypeScript", "SWC", "React"],
  },
  {
    type: "work",
    title: "Senior Software Engineer",
    org: "Vector Studio",
    dates: "2017 — 2020",
    location: "London",
    bullets: [
      "Led the rewrite of a high-traffic media platform from a Rails monolith to event-driven services.",
      "Owned the SRE rotation; cut MTTR from 47 minutes to under 9.",
    ],
    tech: ["Node.js", "Kafka", "Postgres"],
  },
  {
    type: "education",
    title: "MSc Computer Science",
    org: "ETH Zürich",
    dates: "2015 — 2017",
    bullets: [
      "Specialization in distributed systems and programming languages.",
      "Thesis on lock-free data structures for high-throughput stream processing.",
    ],
  },
  {
    type: "education",
    title: "BSc Computer Science",
    org: "University of Lisbon",
    dates: "2012 — 2015",
    bullets: ["Graduated with distinction. Teaching assistant for compilers."],
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "the-shape-of-good-systems",
    title: "The shape of good systems",
    excerpt:
      "Most production systems fail not from a missing feature but from accumulated cleverness. A short defense of boring architecture.",
    date: "2026-03-12",
    readingTime: "8 min",
    body: [
      "Every team I've worked with has, at some point, mistaken complexity for sophistication. The cleverest engineer in the room ships the cleverest service, and three quarters later nobody can read it without a guide.",
      "Boring architecture isn't an absence of thought. It's thought concentrated in the right places — interfaces, invariants, naming — so that the moving parts can be loud about what they do.",
      "I've started rating designs by how quickly a new engineer can answer three questions: Where does a request enter? Where does it touch state? Where does it leave? If the answer takes more than five minutes, the design owes me an explanation.",
    ],
  },
  {
    slug: "latency-is-a-feature",
    title: "Latency is a feature",
    excerpt:
      "Why a 60ms p95 changes the product, not just the metric — and how to budget for it from day one.",
    date: "2026-01-04",
    readingTime: "6 min",
    body: [
      "Performance is not a tax you pay before launch. It's the texture of the product — the difference between a tool that disappears under your fingers and one you have to wrestle with.",
      "I've found that teams who write down a latency budget on day one ship faster than teams who optimize later. The budget makes hard tradeoffs into legible ones.",
    ],
  },
  {
    slug: "writing-rust-without-the-religion",
    title: "Writing Rust without the religion",
    excerpt:
      "After three years of Rust in production, here's what I'd tell my younger self about when to reach for it — and when not to.",
    date: "2025-09-22",
    readingTime: "11 min",
    body: [
      "Rust is a great language. It is also a language that asks you to make a lot of decisions before you've earned them. The trick is knowing when those decisions are worth making.",
      "I now use Rust where the cost of a wrong abstraction is high and the system will outlive its first author. For everything else — internal tools, glue code, prototypes — TypeScript is still my default.",
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

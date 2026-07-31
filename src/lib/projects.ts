export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  timeline: string;
  tags: string[];
  stack: string[];
  cover: string; // background gradient/style identifier
  liveUrl?: string;
  repoUrl?: string;
  context: string;
  goals: string[];
  approach: { title: string; body: string }[];
  highlights: { title: string; body: string; code?: string; lang?: string }[];
  challenges: string[];
  outcomes: { label: string; value: string }[];
  learned: string;
  diagram?: string;
};

export const projects: Project[] = [
  {
    slug: "envest",
    title: "Envest Africa",
    summary:
      "A polished, conversion-focused digital presence for Envest Africa, built to communicate the brand clearly and guide visitors toward meaningful action.",
    year: "2025",
    role: "Frontend Developer",
    timeline: "1 month",
    tags: ["Branding", "Web", "Marketing"],
    stack: ["React", "Vite", "TypeScript", "Tailwind", "Figma"],
    cover: "crimson",
    liveUrl: "https://envestafrica.com",
    context:
      "The client needed a modern website that felt credible, polished, and easy to navigate while presenting a growing business in a simple and compelling way.",
    goals: [
      "Create a strong first impression for a growing African brand",
      "Improve clarity around services and value proposition",
      "Deliver a site that is easy to update and scale over time",
    ],
    approach: [
      {
        title: "Content-led experience",
        body: "Structured the site around clear messaging and audience needs so visitors could quickly understand the business and move confidently toward the next step.",
      },
      {
        title: "Modern, responsive UI",
        body: "Built a refined interface with thoughtful typography, layout, and visual rhythm to reflect a premium and trustworthy brand presence.",
      },
    ],
    highlights: [
      {
        title: "Conversion-ready design",
        body: "Focused the experience on clarity, trust, and approachable storytelling, making the site feel both professional and welcoming.",
      },
    ],
    challenges: [
      "Balancing visual polish with lightweight performance and keeping the content flexible for future updates required careful planning.",
    ],
    outcomes: [
      { label: "Experience", value: "Modern & responsive" },
      { label: "Messaging", value: "Clearer" },
      { label: "Launch", value: "Fast delivery" },
    ],
    learned:
      "A strong website succeeds when design, content, and user intent are aligned from the very beginning. Clarity often matters more than complexity.",
    diagram: `graph TD
  A[Brand Story] --> B[Homepage Experience]
  B --> C[Service Pages]
  B --> D[Contact / CTA]
  C --> E[Responsive UI]
  D --> E
  style A fill:transparent,stroke:currentColor
  style B fill:transparent,stroke:currentColor
  style C fill:transparent,stroke:currentColor
  style D fill:transparent,stroke:currentColor
  style E fill:transparent,stroke:currentColor`,
  },
  {
    slug: "advouch",
    title: "Advouch",
    summary:
      "A digital advertising and business discovery platform that helps small businesses reach customers through trusted listings, verification, and automated marketing workflows.",
    year: "2025",
    role: "Full Stack Developer",
    timeline: "5 months",
    tags: ["Marketplace", "Fintech", "Automation"],
    stack: ["Flutter", "Next.js", "Django", "PostgreSQL", "N8N"],
    cover: "aurora",
    liveUrl: "https://advouch.com",
    context:
      "Small businesses in Ethiopia often face limited visibility and inconsistent access to customers. Advouch was built to make marketing simpler, more trustworthy, and more scalable for growing brands.",
    goals: [
      "Enable trustworthy discovery through FAYDA-backed verification",
      "Automate marketing and onboarding workflows with minimal manual effort",
      "Provide a seamless experience across mobile and web",
    ],
    approach: [
      {
        title: "Hybrid product experience",
        body: "Used Flutter for a polished mobile experience and Next.js for web dashboards, creating a connected product that felt native on both platforms.",
      },
      {
        title: "Automated operations",
        body: "Integrated N8N to streamline onboarding, notifications, and reputation updates, reducing repetitive work for both businesses and administrators.",
      },
    ],
    highlights: [
      {
        title: "Reputation-driven trust",
        body: "Built a review and verification system in Django that helped surface credible businesses while keeping the platform fair and transparent.",
      },
    ],
    challenges: [
      "Integrating FAYDA verification required careful handling of sensitive data, edge cases, and secure communication between services.",
    ],
    outcomes: [
      { label: "Business onboarding", value: "Automated" },
      { label: "Verification", value: "FAYDA-integrated" },
      { label: "Platform", value: "Cross-device" },
    ],
    learned:
      "Automation is a force multiplier for marketplaces. When the operational layer is reliable, businesses can focus on growth instead of repetitive admin work.",
    diagram: `graph LR
  subgraph Frontend
    A[Flutter Mobile]
    B[Next.js Web]
  end
  subgraph Backend
    C[Django Core API]
    D[(PostgreSQL)]
    E[N8N Workflow Automation]
  end
  A <-->|REST| C
  B <-->|REST| C
  C <--> D
  C <--> E
  E -.-> F[FAYDA Verification]
  style A fill:transparent,stroke:currentColor
  style B fill:transparent,stroke:currentColor
  style C fill:transparent,stroke:currentColor
  style D fill:transparent,stroke:currentColor
  style E fill:transparent,stroke:currentColor
  style F fill:transparent,stroke:currentColor,stroke-dasharray: 5 5`,
  },
  {
    slug: "study-buddy",
    title: "Study Buddy",
    summary:
      "An AI-powered study companion designed to help students learn more effectively through summarization, conversational assistance, and offline-friendly workflows.",
    year: "2025",
    role: "Lead Architect",
    timeline: "2 months",
    tags: ["AI", "Education", "Offline-First"],
    stack: ["Flutter", "Go", "OpenAI GPT", "SQLite", "Redis"],
    cover: "midnight",
    repoUrl: "https://github.com/DanielAbabu/StudyBuddy",
    context:
      "Students in low-bandwidth environments often lose access to valuable learning tools. Study Buddy was designed to remain useful even when connectivity is inconsistent or unavailable.",
    goals: [
      "Deliver fast AI interaction with minimal latency",
      "Support full learning workflows even in offline or low-bandwidth conditions",
      "Generate helpful study materials from course content automatically",
    ],
    approach: [
      {
        title: "Offline-first architecture",
        body: "Built a local-first sync model with SQLite and caching so students could keep studying and reviewing notes even without a stable connection.",
      },
      {
        title: "Context-aware AI",
        body: "Used prompt engineering and structured responses to make the assistant feel more helpful, relevant, and tailored to individual study needs.",
      },
    ],
    highlights: [
      {
        title: "Real-time AI chat",
        body: "Implemented a streaming backend in Go to keep the experience responsive and natural while handling dynamic AI responses.",
      },
    ],
    challenges: [
      "Managing long-form prompts and large language model context in a mobile-first setting required careful chunking, compression, and summarization strategies.",
    ],
    outcomes: [
      { label: "AI latency", value: "< 500ms" },
      { label: "Offline support", value: "Built-in" },
      { label: "Experience", value: "Conversational" },
    ],
    learned:
      "Offline-first thinking changes the entire product experience. It pushes you to design around resilience, clarity, and local continuity rather than just online convenience.",
    diagram: `graph TD
  subgraph Client
    A[Flutter App]
    B[(Local SQLite)]
    A <-->|Sync| B
  end
  subgraph Infrastructure
    C[Go Streaming API]
    D[(Redis Cache)]
    E[OpenAI GPT]
  end
  A <-->|gRPC / WebSockets| C
  C <--> D
  C <--> E
  style A fill:transparent,stroke:currentColor
  style B fill:transparent,stroke:currentColor
  style C fill:transparent,stroke:currentColor
  style D fill:transparent,stroke:currentColor
  style E fill:transparent,stroke:currentColor`,
  },
  {
    slug: "genzebe",
    title: "Genzebe",
    summary:
      "A financial coordination tool for personal and group expenses that simplifies tracking, debt settlement, and balance reconciliation with precision.",
    year: "2024",
    role: "Backend Lead",
    timeline: "2 months",
    tags: ["Fintech", "Backend", "Security"],
    stack: ["Go", "MongoDB", "JWT", "OAuth", "Redis"],
    cover: "ember",
    repoUrl: "https://github.com/DanielAbabu/Loan-Tracker-API",
    context:
      "Managing shared expenses in groups often leads to confusion, manual errors, and friction between friends or collaborators. Genzebe was designed to remove that complexity through automation and clear logic.",
    goals: [
      "Ensure accurate debt settlement calculations",
      "Protect user data through secure authentication flows",
      "Keep balances synchronized in near real time",
    ],
    approach: [
      {
        title: "Reliable financial modeling",
        body: "Modeled transactions with strong consistency rules in MongoDB so every debit and credit remained accurate across shared balances.",
      },
      {
        title: "Optimized settlement logic",
        body: "Developed a settlement engine that reduced complex IOU relationships into the simplest and most efficient set of payments.",
      },
    ],
    highlights: [
      {
        title: "Settlement engine",
        body: "The backend logic transforms a web of balances into a clean and practical repayment flow, improving both trust and usability.",
      },
    ],
    challenges: [
      "Keeping updates consistent across multiple active devices during high-concurrency sessions required a resilient Redis-backed event flow.",
    ],
    outcomes: [
      { label: "Calculation accuracy", value: "High" },
      { label: "Synchronization", value: "Real-time" },
      { label: "Experience", value: "Less friction" },
    ],
    learned:
      "Financial software lives or dies by trust. Accuracy, transparency, and consistency matter more than flashy features when people are relying on the system with real money.",
    diagram: `graph LR
  A[Client Devices] <-->|HTTPS/WSS| B[Go Settlement Engine]
  B <-->|Transactions| C[(MongoDB cluster)]
  B <-->|Pub/Sub| D[(Redis)]
  B --> E[OAuth Provider]
  style A fill:transparent,stroke:currentColor
  style B fill:transparent,stroke:currentColor
  style C fill:transparent,stroke:currentColor
  style D fill:transparent,stroke:currentColor
  style E fill:transparent,stroke:currentColor`,
  },
  {
    slug: "acelink",
    title: "AceLink",
    summary:
      "A practical link-sharing platform built to help users discover, organize, and share valuable resources in a simple and approachable way.",
    year: "2025",
    role: "Full Stack Developer",
    timeline: "1 month",
    tags: ["Productivity", "Web", "Developer Tools"],
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    cover: "sage",
    repoUrl: "https://github.com/DanielAbabu/AceLink",
    context:
      "Sharing useful links often becomes messy and hard to manage over time. AceLink was created to make bookmarks and references feel easier to organize, revisit, and share with others.",
    goals: [
      "Create a clean experience for saving and organizing links",
      "Make shared resources easy to discover and revisit",
      "Keep the product lightweight without sacrificing usability",
    ],
    approach: [
      {
        title: "Simple, focused UX",
        body: "Designed the experience around clarity and speed so users could add, categorize, and access links without unnecessary friction.",
      },
      {
        title: "Flexible content structure",
        body: "Built the product so it could grow from a personal bookmarking tool into a more shareable knowledge hub over time.",
      },
    ],
    highlights: [
      {
        title: "Organized discovery",
        body: "The experience emphasizes structure and findability, helping users turn scattered links into an accessible library of resources.",
      },
    ],
    challenges: [
      "Designing the experience to feel simple while still supporting future growth required attention to information hierarchy and interaction patterns.",
    ],
    outcomes: [
      { label: "Focus", value: "Simple" },
      { label: "Organization", value: "Clear" },
      { label: "Growth", value: "Scalable" },
    ],
    learned:
      "Good product design often comes from resisting the urge to overbuild. A clear and focused workflow can be far more valuable than a crowded feature list.",
    diagram: `graph TD
  A[User] --> B[Link Creation]
  B --> C[Organization Layer]
  C --> D[Shared Discoverability]
  style A fill:transparent,stroke:currentColor
  style B fill:transparent,stroke:currentColor
  style C fill:transparent,stroke:currentColor
  style D fill:transparent,stroke:currentColor`,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

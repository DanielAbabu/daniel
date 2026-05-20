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
    slug: "advouch",
    title: "Advouch",
    summary:
      "A digital advertising platform connecting small businesses with customers, featuring FAYDA verification and automated workflows.",
    year: "2025",
    role: "Full Stack Developer",
    timeline: "5 months",
    tags: ["Marketplace", "Fintech", "Automation"],
    stack: ["Flutter", "Next.js", "Django", "PostgreSQL", "N8N"],
    cover: "crimson",
    context:
      "Small businesses in Ethiopia often struggle with advertising gaps and market access. Advouch was built to bridge this gap by providing an intuitive platform for ad management and multimedia campaigns.",
    goals: [
      "Enable intuitive discovery and trust via FAYDA verification",
      "Automate complex marketing workflows using N8N",
      "Provide a seamless cross-platform experience (Mobile & Web)",
    ],
    approach: [
      {
        title: "Hybrid Frontend Strategy",
        body: "Used Flutter for the mobile experience to ensure smooth animations and offline capabilities, while Next.js powered the administrative and consumer web dashboards.",
      },
      {
        title: "Automated Workflows",
        body: "Integrated N8N to automate business onboarding, campaign notifications, and reputation system updates, reducing manual overhead.",
      },
    ],
    highlights: [
      {
        title: "Reputation System",
        body: "Built a custom reputation engine in Django that weights customer reviews and verification status to rank businesses fairly.",
      },
    ],
    challenges: [
      "Integrating FAYDA (national ID) verification required robust error handling and secure data transmission protocols.",
    ],
    outcomes: [
      { label: "Business Onboarding", value: "Automated" },
      { label: "Verification", value: "FAYDA-integrated" },
      { label: "Platform", value: "Cross-device" },
    ],
    learned:
      "Automation is the key to scaling small business platforms. By offloading campaign management to N8N, we allowed business owners to focus on their craft rather than marketing logistics.",
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
      "An AI-powered study companion with offline-first architecture, automated summarization, and real-time conversational AI.",
    year: "2025",
    role: "Lead Architect",
    timeline: "2 months",
    tags: ["AI", "Education", "Offline-First"],
    stack: ["Flutter", "Go", "OpenAI GPT", "SQLite", "Redis"],
    cover: "ink",
    context:
      "Students in low-bandwidth environments often lose access to AI tools. Study Buddy was designed to be resilient, providing AI assistance even with intermittent connectivity.",
    goals: [
      "Sub-second AI response latency",
      "Full functionality in offline/low-bandwidth modes",
      "Automated flashcard generation from course materials",
    ],
    approach: [
      {
        title: "Offline-First Architecture",
        body: "Implemented a local-first synchronization strategy using SQLite and caching, ensuring students can study and view notes without an active connection.",
      },
      {
        title: "Context-Aware AI",
        body: "Leveraged OpenAI GPT APIs with custom prompt engineering to provide specific, curriculum-aware answers and summarizations.",
      },
    ],
    highlights: [
      {
        title: "Real-time AI Chat",
        body: "Built a streaming backend in Go to handle AI responses with low latency, providing a natural conversation feel.",
      },
    ],
    challenges: [
      "Managing large language model context in a mobile-first environment required aggressive text chunking and summarization strategies.",
    ],
    outcomes: [
      { label: "AI Latency", value: "< 500ms" },
      { label: "Offline Support", value: "100%" },
      { label: "App Rating", value: "4.8/5" },
    ],
    learned:
      "The 'offline-first' mindset completely changes how you design APIs. It's not just about caching; it's about treating the local state as the source of truth.",
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
      "A financial tracker for personal and group expenses, simplifying debt settlements and balance tracking with high accuracy.",
    year: "2024",
    role: "Backend Lead",
    timeline: "2 months",
    tags: ["Fintech", "Backend", "Security"],
    stack: ["Go", "MongoDB", "JWT", "OAuth", "Redis"],
    cover: "warm",
    context:
      "Managing shared expenses in groups often leads to calculation errors and social friction. Genzebe automates this process with a focus on accuracy and ease of use.",
    goals: [
      "Zero-error debt settlement calculations",
      "Secure user data with JWT and OAuth",
      "Real-time balance synchronization across group members",
    ],
    approach: [
      {
        title: "Core Financial Workflows",
        body: "Modeled financial transactions with strict consistency in MongoDB, ensuring that every debit has a corresponding credit across group balances.",
      },
      {
        title: "Optimized Settlements",
        body: "Developed an algorithm to minimize the number of transactions required to settle all debts within a group.",
      },
    ],
    highlights: [
      {
        title: "Settlement Engine",
        body: "The engine uses a greedy approach to resolve debts, reducing a complex graph of IOUs into the simplest set of payments.",
      },
    ],
    challenges: [
      "Ensuring real-time updates across multiple devices during high-concurrency periods required a robust Redis-backed notification system.",
    ],
    outcomes: [
      { label: "Calculation Errors", value: "0%" },
      { label: "User Growth", value: "+200%" },
      { label: "Sync Speed", value: "Real-time" },
    ],
    learned:
      "Financial systems are all about trust. If the numbers are off by even a fraction, users leave. Accuracy is the most important feature.",
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
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

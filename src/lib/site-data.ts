export const site = {
  name: "Daniel Ababu Tegegen",
  role: "Software Engineer",
  shortBio:
    "I build scalable backend systems and high-performance applications — from distributed systems to AI-powered platforms.",
  longBio: [
    "I'm a software engineer and competitive programmer with a passion for building robust, scalable systems. With a strong foundation in data structures and algorithms, I've solved over 1200+ problems on LeetCode and Codeforces.",
    "I've worked on everything from pharmacy management systems and financial trackers to AI-powered study companions and ingredient purchasing platforms. My expertise lies in Go, Python, and distributed systems architecture.",
    "As a former trainer at A2SV (African to Silicon Valley), I've mentored over 150 students in backend development and competitive programming, helping them bridge the gap between theory and production-quality engineering.",
  ],
  email: "danielababu0966@gmail.com",
  social: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Email", href: "mailto:danielababu0966@gmail.com" },
  ],
  location: "Addis Ababa, Ethiopia",
  available: true,
};

export const skillGroups = [
  {
    group: "Languages",
    items: [
      { name: "Go", level: 95 },
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
    ],
  },
  {
    group: "Frameworks",
    items: [
      { name: "Gin", level: 95 },
      { name: "Django", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "React", level: 85 },
    ],
  },
  {
    group: "Infrastructure",
    items: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Git", level: 95 },
    ],
  },
  {
    group: "Practices",
    items: [
      { name: "Competitive Programming", level: 95 },
      { name: "Distributed Systems", level: 85 },
      { name: "Clean Architecture", level: 90 },
      { name: "TDD", level: 85 },
    ],
  },
];

export const techMarquee = [
  "Go",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Django",
  "Gin",
  "React",
  "Next.js",
  "Docker",
  "Git",
  "Redis",
  "AWS",
  "Supabase",
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
    title: "Platform & Automation Lead",
    org: "Envest Technologies",
    dates: "Sep 2025 — Mar 2026",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Engineered course platforms and community tools serving active users.",
      "Developed end-to-end automation systems for onboarding, notifications, and operations.",
      "Set up CI/CD pipelines via GitHub Actions to enable automated build, testing, and deployment workflows.",
    ],
    tech: ["Python", "GitHub Actions", "Automation"],
  },
  {
    type: "work",
    title: "Software Developer & Trainer",
    org: "A2SV (African to Silicon Valley)",
    dates: "Sep 2024 — Feb 2026",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Designed and executed a coding curriculum for 150+ students in data structures, algorithms, and backend development.",
      "Trained 30+ backend developer interns in Go and MongoDB, accelerating project delivery.",
      "Automated student progress tracking using Python and Google Apps Script.",
    ],
    tech: ["Go", "Python", "MongoDB", "Google Apps Script"],
  },
  {
    type: "work",
    title: "Software Developer",
    org: "Tenanet",
    dates: "May 2025 — Sep 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Developed a mobile pharmacy inventory and prescription management system.",
      "Architected a backend using Go, Gin, and Supabase (PostgreSQL) with RBAC.",
      "Integrated OTP verification via Twilio, strengthening user authentication.",
    ],
    tech: ["Go", "Gin", "Supabase", "PostgreSQL", "Twilio"],
  },
  {
    type: "work",
    title: "Backend Developer Intern",
    org: "Eskalate",
    dates: "Aug 2024 — Sep 2024",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Led a team of 4 engineers to develop backend services for a social media platform.",
      "Implemented secure authentication mechanisms using OAuth2 and JWT.",
      "Applied Clean Architecture and Test-Driven Development (TDD) to core features.",
    ],
    tech: ["Go", "Gin", "MongoDB", "OAuth2", "JWT"],
  },
  {
    type: "education",
    title: "BSc in Software Engineering",
    org: "Addis Ababa Science and Technology University",
    dates: "May 2022 — Jun 2026",
    bullets: [
      "Relevant Courses: Data Structures, Distributed Systems, Operating Systems, ML, Database Systems.",
      "Co-Founder and Technical Lead of the Competitive Programming Club.",
    ],
  },
  {
    type: "education",
    title: "Coding Academy Graduate",
    org: "A2SV (African to Silicon Valley)",
    dates: "Oct 2023 — Oct 2024",
    bullets: [
      "Strong foundation in Advanced DSA, solving 1300+ problems on LeetCode and Codeforces.",
      "Promoted to leadership role after performing in the top 10% of the cohort.",
    ],
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
    slug: "competitive-programming-mindset",
    title: "The Competitive Programming Mindset",
    excerpt:
      "How solving 1200+ problems on LeetCode shaped my approach to software engineering and system design.",
    date: "2026-04-10",
    readingTime: "5 min",
    body: [
      "Competitive programming isn't just about speed; it's about clarity of thought. When you're faced with a complex constraint, you learn to see the underlying pattern quickly.",
      "I've found that the same principles apply to backend engineering. Choosing the right data structure for a cache or the right algorithm for a scheduler can be the difference between a system that scales and one that collapses.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);

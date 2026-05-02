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
};

export const projects: Project[] = [
  {
    slug: "atlas-realtime",
    title: "Atlas",
    summary:
      "A realtime collaboration engine powering 40k concurrent editors across documents, whiteboards, and code.",
    year: "2025",
    role: "Lead Engineer",
    timeline: "8 months",
    tags: ["Realtime", "Backend", "Infra"],
    stack: ["Rust", "WebSockets", "CRDTs", "Postgres", "Redis", "Kubernetes"],
    cover: "crimson",
    liveUrl: "#",
    repoUrl: "#",
    context:
      "The existing collaboration layer was a Node.js monolith pinned to single-region websockets. Latency spiked above 600ms for users outside the US, and the operational team was paged twice a week for memory pressure.",
    goals: [
      "Sub-80ms median sync latency worldwide",
      "Linearly scale to 100k concurrent editors per region",
      "Zero-downtime deploys with cross-region failover",
    ],
    approach: [
      {
        title: "Edge-first architecture",
        body: "Replaced the central WebSocket gateway with regional edge nodes that hold a sharded subscription map. Clients connect to the closest edge; cross-region traffic only flows when a document spans regions.",
      },
      {
        title: "CRDT over operational transform",
        body: "Switched the document model to a Yjs-inspired CRDT in Rust. Convergence is local-first; no central authority is needed to resolve conflicts, which removes an entire class of race conditions.",
      },
      {
        title: "Tiered persistence",
        body: "Hot edits live in Redis streams for 60 seconds, then snapshot to Postgres. A background worker compacts CRDT history to keep document size bounded.",
      },
    ],
    highlights: [
      {
        title: "Subscription fan-out",
        body: "Each edge node uses a lock-free trie keyed by document id. A single broadcast traverses the trie in O(log n) and writes to per-connection ring buffers.",
        code: `pub fn broadcast(&self, doc: DocId, op: &Op) {
    if let Some(subs) = self.tree.get(&doc) {
        for sub in subs.iter() {
            sub.ring.push(op.clone());
        }
    }
}`,
        lang: "rust",
      },
      {
        title: "Backpressure-aware client",
        body: "When a client falls behind, the edge node coalesces ops into a single state-vector diff instead of streaming every update — the slow client catches up without blocking the room.",
      },
    ],
    challenges: [
      "CRDT garbage collection across regions required a consensus checkpoint every 30s — solved with a lightweight Raft group per shard.",
      "Initial Rust build pulled 1,400 crates and took 12 minutes; cut to 90 seconds with workspace-level sccache and a leaner async runtime.",
    ],
    outcomes: [
      { label: "Median sync latency", value: "62ms" },
      { label: "Concurrent editors", value: "40,000" },
      { label: "Pager incidents", value: "−92%" },
      { label: "Infra cost", value: "−38%" },
    ],
    learned:
      "Local-first systems are easier to reason about under partition than any central coordinator I've shipped. The hard problem moves from concurrency to garbage collection — and that's a much friendlier problem.",
  },
  {
    slug: "noctua-ml",
    title: "Noctua",
    summary:
      "An ML inference platform that serves 6B predictions per day with cold starts under 200ms.",
    year: "2024",
    role: "Staff Engineer",
    timeline: "11 months",
    tags: ["ML Infra", "Performance", "Backend"],
    stack: ["Go", "CUDA", "gRPC", "Kafka", "Triton", "Terraform"],
    cover: "ink",
    liveUrl: "#",
    context:
      "Model serving was scattered across team-owned services with wildly different SLOs. We needed a single substrate that any team could push a model to, with autoscaling, batching, and observability included.",
    goals: [
      "Cold start under 250ms p95",
      "Multi-model GPU sharing with no head-of-line blocking",
      "Self-serve deployment in under 5 minutes",
    ],
    approach: [
      {
        title: "Shared GPU runtime",
        body: "Built a request scheduler on top of Triton that packs requests from multiple models into the same CUDA stream when shapes are compatible, raising GPU utilization from 18% to 71%.",
      },
      {
        title: "Snapshot-restore cold starts",
        body: "Models are warmed once, then their CUDA context is snapshotted. Cold start becomes a memcpy + handle re-bind, not a full load.",
      },
    ],
    highlights: [
      {
        title: "Adaptive batching",
        body: "The scheduler tracks per-model queue depth and tail latency, then chooses batch size to maximize throughput without crossing the SLO. A simple PID loop tuned over a week of production traffic.",
      },
    ],
    challenges: [
      "Snapshot-restore broke when CUDA driver versions changed; pinned the driver per node pool and added a canary that catches drift before rollout.",
    ],
    outcomes: [
      { label: "Predictions / day", value: "6B" },
      { label: "Cold start p95", value: "190ms" },
      { label: "GPU utilization", value: "71%" },
      { label: "Time to deploy", value: "4 min" },
    ],
    learned:
      "Most ML serving wins come from removing waste, not raw compute. The biggest single improvement was admitting that 80% of models could share a GPU.",
  },
  {
    slug: "lumen-design",
    title: "Lumen",
    summary:
      "A design-system tooling suite that generates type-safe components from Figma in under a second.",
    year: "2024",
    role: "Founding Engineer",
    timeline: "6 months",
    tags: ["Frontend", "DX", "Compiler"],
    stack: ["TypeScript", "SWC", "React", "Figma API", "WASM"],
    cover: "warm",
    liveUrl: "#",
    repoUrl: "#",
    context:
      "Designers shipped components in Figma; engineers re-built them in code days later. The drift was constant and painful. We wanted a single source of truth that produced production-ready React.",
    goals: [
      "Generated code indistinguishable from hand-written",
      "Round-trip a change from Figma to PR in under 60 seconds",
      "Zero runtime — emit pure TSX",
    ],
    approach: [
      {
        title: "IR between Figma and code",
        body: "Designed an intermediate representation that captures layout, tokens, and variants without leaking Figma node ids. Both the importer and the codegen target the IR, so each side evolves independently.",
      },
      {
        title: "SWC plugin for token folding",
        body: "A custom SWC pass inlines design tokens at build time, removing a runtime theme lookup that was costing 8ms per render in lists.",
      },
    ],
    highlights: [
      {
        title: "Variant explosion",
        body: "A naive cartesian product of variants produced 18,000 component combinations. The IR detects orthogonal variants and emits a single component with discriminated props instead.",
      },
    ],
    challenges: [
      "Figma's API rate-limits aggressively for large files; built a delta sync that diffs against the last successful import and only fetches changed nodes.",
    ],
    outcomes: [
      { label: "Components shipped", value: "240+" },
      { label: "Generation time", value: "780ms" },
      { label: "Render cost", value: "−43%" },
    ],
    learned:
      "Codegen is only useful if the output reads like something a thoughtful human would write. We rewrote the emitter three times to get there.",
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

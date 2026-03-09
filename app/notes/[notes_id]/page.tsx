import Link from "next/link";

type Note = {
  title: string;
  date?: string;
  tags?: string[];
  excerpt: string;
  content: string;
};

const NOTES: Record<string, Note> = {
  "queuectl-design": {
    title: "queueCTL — Design notes",
    date: "2024-11-02",
    tags: ["Go", "CLI", "Concurrency"],
    excerpt:
      "Design notes for queueCTL: a distributed background job queue with worker pools, back-pressure, and graceful shutdown.",
    content: `### Summary

queueCTL is a CLI-first background job system designed to be simple to operate while providing good defaults for reliability. It uses a worker-pool model with bounded queues and back-pressure to avoid overloading downstream systems.

Key points
- Worker pools with configurable concurrency
- At-least-once delivery with exponential backoff retries
- Idempotent job handlers to tolerate duplicate runs
- Graceful shutdown: drain in-flight tasks and expose health endpoints

Implementation notes
- Keep the scheduler single-threaded to reduce coordination complexity.
- Use persistent job queue (local WAL + optional central store) for durability.
`,
  },
  "gammadb-storage": {
    title: "GammaDB — Storage design notes",
    date: "2024-08-15",
    tags: ["Go", "Storage", "Compaction"],
    excerpt:
      "Design exploration for GammaDB — a log-structured key-value store focusing on compaction strategies and efficient reads.",
    content: `### Summary

GammaDB is a log-structured store with segment compaction. The design focuses on write amplification and read performance trade-offs.

Key ideas
- Append-only segments with periodic compaction
- In-memory indexes for hot keys
- Tombstones to represent deletes and reclaim space during compaction
`,
  },
  "api-gateway-architecture": {
    title: "API Gateway — Architecture notes",
    date: "2025-01-10",
    tags: ["Go", "Proxy", "Rate limiting"],
    excerpt:
      "Notes on designing a high-throughput API gateway for AI workloads with per-tenant rate limiting, fan-out, and aggregation.",
    content: `### Summary

The gateway routes requests to multiple model backends, enforces per-tenant limits, and provides caching for hot responses. Token-bucket rate limiting and circuit breakers protect downstream services.
`,
  },
  "hybrid-ids-car-hacking": {
    title: "Hybrid Event-Triggered IDS — Research notes",
    date: "2024-06-20",
    tags: ["Python", "ML", "Networking"],
    excerpt:
      "Research notes for a hybrid intrusion detection system targeting CAN bus traffic, combining lightweight rules with ML to reduce inference cost.",
    content: `### Summary

The hybrid IDS uses cheap rule-based filters to reduce the data fed to an ML model, lowering inference costs while preserving detection recall.

Design reminders
- Evaluate false negative risk introduced by prefilters
- Measure end-to-end latency under load
- Focus on memory-efficient models for edge deployment
`,
  },
};

export default function NotePage({
  params,
}: Readonly<{ params: { notes_id: string } }>) {
  const id = params.notes_id;
  const note = NOTES[id];

  if (!note) {
    return (
      <article className="space-y-4">
        <h1 className="text-2xl font-bold text-white">Note not found</h1>
        <p className="text-gray-200">
          We do not have a note for <span className="font-mono">{id}</span> yet.
        </p>
        <p className="text-gray-200">
          You can go back to the <Link href="/projects" className="text-blue-400 hover:underline">projects</Link> page or the <Link href="/" className="text-blue-400 hover:underline">home</Link>.
        </p>
      </article>
    );
  }

  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-bold text-white">{note.title}</h1>
      <p className="text-sm text-slate-400">
        {note.date} {note.tags ? `• ${note.tags.join(" · ")}` : null}
      </p>

      <p className="text-gray-200">{note.excerpt}</p>

      <div className="prose prose-invert text-gray-200 whitespace-pre-wrap">{note.content}</div>

      <div className="mt-6">
        <Link href="/projects" className="text-blue-400 hover:underline">
          ← Back to projects
        </Link>
      </div>
    </article>
  );
}

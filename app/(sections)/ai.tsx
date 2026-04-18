const AI_POINTS = [
  {
    title: "API integration",
    description: "Connecting LLMs (Claude, GPT-4, Gemini) to mobile apps — chat interfaces, content generation, smart search, contextual suggestions.",
  },
  {
    title: "Workflow automation",
    description: "Using AI to automate repetitive engineering tasks: PR reviews, release notes, CI/CD decisions, test generation.",
  },
  {
    title: "On-device & edge",
    description: "Integrating on-device ML models and edge inference for features that need to work offline or with low latency.",
  },
  {
    title: "Practical, not hype",
    description: "I add AI where it genuinely solves a problem — not as a feature checkbox. The product comes first.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          AI & LLM Integration
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          AI as a tool, not a headline.
        </h2>
        <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--text-2)" }}>
          Over the past two years I've worked hands-on with LLM APIs and AI-assisted
          tooling — integrating them into mobile products and engineering workflows where
          they genuinely add value. I'm comfortable owning this layer end-to-end alongside
          the mobile work.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AI_POINTS.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border p-5"
              style={{
                background: "var(--bg-2)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                  {point.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

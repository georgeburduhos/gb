const AI_POINTS = [
  {
    title: "LLM integration",
    description: "Connecting LLMs (Claude, GPT-4, Gemini) to products — chat interfaces, content generation, smart search, contextual suggestions.",
  },
  {
    title: "AI-assisted engineering",
    description: "Using AI to automate parts of the engineering process itself: PR reviews, release notes, CI/CD decisions, test generation.",
  },
  {
    title: "Agentic workflows & orchestration",
    description: "Designing systems where specialized AI agents build, review, and verify real work under explicit roles and boundaries — see the Siteworks case study below.",
  },
  {
    title: "On-device & edge",
    description: "Integrating on-device ML models and edge inference for features that need to work offline or with low latency.",
  },
];

export function AISection() {
  return (
    <section id="ai" className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          AI Engineering
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          From LLM integration to agentic engineering systems.
        </h2>
        <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--text-2)" }}>
          Three years ago this was calling LLM APIs from mobile apps. It's grown into
          designing <span style={{ color: "var(--text)" }}>Agentic AI</span> systems — where
          specialized agents research, build, review, and verify real work with defined
          responsibilities, not a single model doing everything unsupervised.{" "}
          <a href="#siteworks" className="underline underline-offset-2 transition-colors hover:text-[var(--text)]">
            Siteworks
          </a>{" "}
          is the clearest evidence of that, below.
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

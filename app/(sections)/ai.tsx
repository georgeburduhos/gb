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
    <section id="ai" className="section-alt py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <p className="eyebrow mb-3">
          AI Engineering
        </p>
        <h2 className="section-title mb-4">
          From LLM integration to agentic engineering systems.
        </h2>
        <p className="section-intro mb-10 md:mb-12">
          Three years ago this was calling LLM APIs from mobile apps. It's grown into
          designing <span style={{ color: "var(--text)" }}>Agentic AI</span> systems — where
          specialized agents research, build, review, and verify real work with defined
          responsibilities, not a single model doing everything unsupervised.{" "}
          <a href="#siteworks" className="link">
            Siteworks
          </a>{" "}
          and{" "}
          <a href="#mylo" className="link">
            MYLO
          </a>{" "}
          are where that shows up in practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {AI_POINTS.map((point) => (
            <div key={point.title} className="card p-6">
              <div className="flex items-center gap-2 mb-2">
                <span
                  aria-hidden
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <h3 className="card-title">
                  {point.title}
                </h3>
              </div>
              <p className="card-body">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

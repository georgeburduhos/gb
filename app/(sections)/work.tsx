import workData from "@/content/work.json";

type WorkItem = {
  id: string;
  category: string;
  summary: string;
  contribution: string;
  stack: string[];
  featured?: boolean;
  highlights?: string[];
};

export function WorkSection() {
  const all = workData as WorkItem[];
  const featured = all.filter((i) => i.featured);
  const items = all.filter((i) => !i.featured);

  return (
    <section id="work" className="section-alt py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <p className="eyebrow mb-3">Work</p>
        <h2 className="section-title mb-4">
          Products I&apos;ve helped build.
        </h2>
        <p className="section-intro mb-10 md:mb-12">
          Professional work across mobile, web, and backend. Some of it is confidential — I&apos;m
          happy to go into scope, architecture, and outcomes in a{" "}
          <a href="mailto:george.burduhos@gmail.com" className="link">
            conversation
          </a>
          .
        </p>

        {featured.map((item) => (
          <article key={item.id} className="card card-accent p-6 md:p-8 mb-4 grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-6 md:gap-10">
            <div className="flex flex-col">
              <p className="label-mono mb-3" style={{ color: "var(--accent-text)" }}>
                {item.contribution}
              </p>
              <h3 className="text-balance text-2xl leading-[30px] font-semibold tracking-[-0.02em] mb-3" style={{ color: "var(--text)" }}>
                {item.category}
              </h3>
              <p className="text-base leading-[26px] text-pretty mb-6 flex-1" style={{ color: "var(--text-2)" }}>
                {item.summary}
              </p>
              <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                {item.stack.map((s) => (
                  <li key={s} className="chip font-mono">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {item.highlights && (
              <div className="md:border-l md:pl-10" style={{ borderColor: "var(--border)" }}>
                <p className="label-mono mb-4" style={{ color: "var(--text-3)" }}>
                  What I worked on
                </p>
                <ul className="flex flex-col gap-2.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[15px] leading-6" style={{ color: "var(--text)" }}>
                      <span aria-hidden className="mt-[9px] w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <article key={item.id} className="card p-6 flex flex-col">
              <p className="label-mono mb-3" style={{ color: "var(--accent-text)" }}>
                {item.contribution}
              </p>
              <h3 className="text-balance text-xl leading-[26px] font-semibold tracking-[-0.01em] mb-2" style={{ color: "var(--text)" }}>
                {item.category}
              </h3>
              <p className="card-body mb-5 flex-1">
                {item.summary}
              </p>
              <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
                {item.stack.map((s) => (
                  <li key={s} className="chip font-mono">
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          className="mt-4 rounded-xl border border-dashed px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-x-5 gap-y-1"
          style={{ borderColor: "var(--border-strong)" }}
        >
          <span className="label-mono whitespace-nowrap" style={{ color: "var(--text-3)" }}>
            Where it started
          </span>
          <span className="card-body">
            A decade of native iOS apps — consumer, media, and enterprise — growing into tech lead and project management roles.
          </span>
        </div>
      </div>
    </section>
  );
}

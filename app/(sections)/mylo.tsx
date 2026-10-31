import { ChevronDown } from "lucide-react";
import myloData from "@/content/mylo.json";
import { MyloDiagram, StatusChip, type MyloStatus } from "@/components/mylo-diagram";

type Component = {
  id: string;
  title: string;
  status: MyloStatus;
  description: string;
};

export function MyloSection() {
  const components = myloData.components as Component[];

  return (
    <section id="mylo" className="py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <p className="eyebrow mb-3">Currently building</p>
        <h2 className="section-title mb-4">MYLO — a personal assistant, engineered end to end.</h2>
        <p className="section-intro mb-10 md:mb-12">
          An evolving personal engineering project that I design, build, and run myself. A
          local-first core service on a dedicated always-on machine handles background
          automation, scheduling, reminders, and monitoring; a native macOS app is the
          interface; conversational AI is being added on top.
        </p>

        <MyloDiagram />

        <div className="hidden md:block mt-8">
          <ComponentList components={components} />
        </div>

        <details className="group md:hidden mt-6 mb-6 rounded-xl border" style={{ borderColor: "var(--border)" }}>
          <summary
            className="flex items-center justify-between gap-3 px-4 py-3.5 cursor-pointer list-none rounded-xl [&::-webkit-details-marker]:hidden"
            style={{ color: "var(--text)" }}
          >
            <span className="text-[15px] font-medium">Explore components</span>
            <span aria-hidden className="flex items-center gap-2 text-sm" style={{ color: "var(--text-3)" }}>
              {components.length}
              <ChevronDown size={16} aria-hidden className="transition-transform duration-200 group-open:rotate-180" />
            </span>
          </summary>
          <div className="px-4">
            <ComponentList components={components} />
          </div>
        </details>

        <div className="mt-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <ul className="flex flex-wrap gap-1.5 flex-shrink-0" aria-label="MYLO stack">
            {myloData.stack.map((s) => (
              <li key={s} className="chip font-mono">
                {s}
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed text-pretty" style={{ color: "var(--text-3)" }}>
            Some parts run daily; others are early or experimental — marked above. Proactive
            assistance, such as briefings built from what MYLO has actually observed, is in progress.
          </p>
        </div>
      </div>
    </section>
  );
}

function ComponentList({ components }: { components: Component[] }) {
  return (
    <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
      {components.map((c) => (
        <div key={c.id} className="border-t pt-4 pb-6" style={{ borderColor: "var(--border)" }}>
          <dt className="flex items-start justify-between gap-3 mb-2">
            <span className="card-title">{c.title}</span>
            <StatusChip status={c.status} />
          </dt>
          <dd className="card-body">{c.description}</dd>
        </div>
      ))}
    </dl>
  );
}

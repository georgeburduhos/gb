import automationsData from "@/content/automations.json";
import { ArrowUpRight, Mail } from "lucide-react";

type Automation = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  link?: string;
};

export function AutomationsSection() {
  return (
    <section id="automations" className="py-20 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          Automation
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          I build the tools I use.
        </h2>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-2)" }}>
          If I find myself doing something more than twice, I write code for it. The result is a
          growing set of personal tools — bots, dashboards, systems — that handle the repetitive
          work so I can focus on the hard parts. These aren&apos;t side projects. They run every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {(automationsData as Automation[]).map((item) => (
            <AutomationCard key={item.id} item={item} />
          ))}
          <TeaserCard />
        </div>
      </div>
    </section>
  );
}

function AutomationCard({ item }: { item: Automation }) {
  return (
    <div
      className="rounded-xl border p-5 flex flex-col gap-3"
      style={{ background: "var(--bg)", borderColor: "var(--border-subtle)" }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
          {item.title}
        </h3>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-3)" }}
          >
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      <div>
        <p className="text-xs mb-1.5" style={{ color: "var(--text-3)" }}>
          {item.problem}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
          {item.solution}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {item.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-0.5 rounded border"
            style={{
              color: "var(--text-3)",
              borderColor: "var(--border-subtle)",
              background: "var(--bg-2)",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function TeaserCard() {
  return (
    <div
      className="rounded-xl border border-dashed p-5 flex flex-col justify-between gap-4"
      style={{ borderColor: "var(--border-strong)", background: "var(--bg)" }}
    >
      <div>
        <p className="text-sm font-medium leading-snug mb-2" style={{ color: "var(--text)" }}>
          Think of something you do on a regular basis.
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-3)" }}>
          I probably have a way to automate it — or can build one.
        </p>
      </div>
      <a
        href="mailto:george.burduhos@gmail.com"
        className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
        style={{ color: "var(--accent)" }}
      >
        <Mail size={14} />
        Let&apos;s talk
      </a>
    </div>
  );
}

import siteworksData from "@/content/siteworks.json";
import { ScanSearch, Cpu, Eye, GitCompare, CheckCircle2, type LucideIcon } from "lucide-react";
import { FlowSteps } from "@/components/flow-steps";

type Step = {
  icon: string;
  num: string;
  title: string;
  desc: string;
  tag: string | null;
  accent: boolean;
};

type Principle = { title: string; description: string };

const ICONS: Record<string, LucideIcon> = { ScanSearch, Cpu, Eye, GitCompare, CheckCircle2 };

export function SiteworksSection() {
  const steps = (siteworksData.steps as Step[]).map((s) => ({ ...s, icon: ICONS[s.icon] }));
  const principles = siteworksData.principles as Principle[];

  return (
    <section id="siteworks" className="py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-x-16 gap-y-4 items-end mb-10">
          <div>
            <p className="eyebrow mb-3">Case Study</p>
            <h2 className="section-title mb-4">BG Siteworks — Agentic AI, in production.</h2>
            <p className="section-intro">
              Siteworks builds real business websites — but the point is the engineering system
              behind them: a multi-agent pipeline where a builder agent and an independent reviewer
              have separate responsibilities, and neither is trusted blindly.
            </p>
          </div>
          <p className="text-sm leading-relaxed lg:border-l lg:pl-6 text-pretty" style={{ color: "var(--text-3)", borderColor: "var(--border)" }}>
            Claude Code and OpenAI Codex are today&apos;s implementation — the roles are what matter.
          </p>
        </div>

        <div className="mb-6">
          <FlowSteps steps={steps} variant="compact" />
        </div>

        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border"
          style={{ background: "var(--border)", borderColor: "var(--border)" }}
          aria-label="Principles"
        >
          {principles.map((p) => (
            <li key={p.title} className="p-5" style={{ background: "var(--card-bg)" }}>
              <h3 className="text-[15px] leading-5 font-semibold mb-1.5 text-balance" style={{ color: "var(--text)" }}>
                {p.title}
              </h3>
              <p className="text-[13.5px] leading-5 text-pretty" style={{ color: "var(--text-2)" }}>
                {p.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

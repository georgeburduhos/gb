import siteworksData from "@/content/siteworks.json";
import { ScanSearch, Cpu, Eye, GitCompare, CheckCircle2, type LucideIcon } from "lucide-react";

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
  const steps = siteworksData.steps as Step[];
  const principles = siteworksData.principles as Principle[];

  return (
    <section id="siteworks" className="py-20 px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          Case Study
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--text)" }}>
          BG Siteworks — Agentic AI, in production.
        </h2>
        <p className="text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--text-2)" }}>
          Siteworks builds real business websites, but the product isn&apos;t the point — the
          engineering system behind it is. It&apos;s a multi-agent pipeline where a builder agent
          and an independent reviewer agent have separate responsibilities, and neither one is
          trusted blindly, including by me.
        </p>

        {/* Workflow */}
        <div className="flex flex-col md:flex-row items-stretch mb-10 gap-3 md:gap-0">
          {steps.map((step, i) => {
            const Icon = ICONS[step.icon];
            return (
              <div key={step.num} className="flex md:contents">
                <div
                  className="flex-1 rounded-xl border p-4 flex flex-col"
                  style={{
                    background: "var(--bg)",
                    borderColor: step.accent ? "rgba(198,37,46,0.18)" : "var(--border-subtle)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{
                      background: step.accent ? "rgba(198,37,46,0.1)" : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <Icon size={15} style={{ color: step.accent ? "var(--accent)" : "var(--text-3)" }} />
                  </div>
                  <p
                    className="text-xs font-mono mb-1.5"
                    style={{ color: step.accent ? "rgba(198,37,46,0.45)" : "rgba(255,255,255,0.2)" }}
                  >
                    {step.num}
                  </p>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                    {step.title}
                  </p>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-3)" }}>
                    {step.desc}
                  </p>
                  {step.tag && (
                    <p className="text-xs mt-3 font-mono" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {step.tag}
                    </p>
                  )}
                </div>

                {i < steps.length - 1 && (
                  <>
                    <div className="hidden md:flex flex-shrink-0 items-start justify-center w-6 pt-[22px]">
                      <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px", lineHeight: 1 }}>›</span>
                    </div>
                    <div className="flex md:hidden justify-start pl-1" style={{ color: "rgba(255,255,255,0.15)", fontSize: "14px" }}>
                      ↓
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border p-5"
              style={{ background: "var(--bg)", borderColor: "var(--border-subtle)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                  {p.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm leading-relaxed mt-8 max-w-2xl" style={{ color: "var(--text-3)" }}>
          Claude Code and OpenAI Codex are the current implementation — the roles are what matter.
          A builder with deep context, an independent reviewer with none, and explicit boundaries
          around what either one is allowed to do on its own.
        </p>
      </div>
    </section>
  );
}

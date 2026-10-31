import type { LucideIcon } from "lucide-react";

export type FlowStep = {
  icon: LucideIcon;
  num: string;
  title: string;
  desc: string;
  tag: string | null;
  accent: boolean;
};

function IconBadge({ step }: { step: FlowStep }) {
  const Icon = step.icon;
  return (
    <span
      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: step.accent ? "var(--accent-dim)" : "var(--bg-3)" }}
    >
      <Icon size={14} aria-hidden style={{ color: step.accent ? "var(--accent)" : "var(--text-3)" }} />
    </span>
  );
}

function StepText({ step }: { step: FlowStep }) {
  return (
    <>
      <p className="text-[15px] leading-5 font-semibold mb-1 text-balance" style={{ color: "var(--text)" }}>
        {step.title}
      </p>
      <p className="text-[13.5px] leading-5 flex-1 text-pretty" style={{ color: "var(--text-2)" }}>
        {step.desc}
      </p>
      {step.tag && (
        <p className="label-mono mt-3" style={{ color: step.accent ? "var(--accent-text)" : "var(--text-3)" }}>
          {step.tag}
        </p>
      )}
    </>
  );
}

/**
 * card    — boxed steps joined by hairlines (used in the automation modal).
 * compact — a vertical timeline on mobile, a tight row of steps from lg up.
 */
export function FlowSteps({ steps, variant = "card" }: { steps: FlowStep[]; variant?: "card" | "compact" }) {
  if (variant === "compact") {
    return (
      <ol className="grid grid-cols-1 lg:grid-cols-5 lg:gap-3">
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <li
              key={step.num}
              className={`relative grid grid-cols-[28px_minmax(0,1fr)] gap-x-3.5 lg:flex lg:flex-col lg:p-4 lg:border lg:rounded-xl lg:bg-[var(--card-bg)] ${last ? "" : "pb-6 lg:pb-4"}`}
              style={{ borderColor: step.accent ? "var(--accent-mid)" : "var(--border)" }}
            >
              {!last && (
                <>
                  <span aria-hidden className="lg:hidden absolute left-[13.5px] top-9 bottom-2 border-l" style={{ borderColor: "var(--border-strong)" }} />
                  <span aria-hidden className="hidden lg:block absolute top-1/2 -right-3 w-3 border-t" style={{ borderColor: "var(--border-strong)" }} />
                </>
              )}
              <div className="flex items-start lg:items-center justify-between lg:mb-3">
                <IconBadge step={step} />
                <span className="hidden lg:inline font-mono text-xs" style={{ color: "var(--text-3)" }}>
                  {step.num}
                </span>
              </div>
              <div className="flex flex-col pt-1 lg:pt-0 lg:flex-1">
                <StepText step={step} />
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0">
      {steps.map((step, i) => (
        <li key={step.num} className="flex flex-col md:flex-row md:flex-1">
          <div
            className="card flex-1 p-4 flex flex-col"
            style={step.accent ? { borderColor: "var(--accent-mid)" } : undefined}
          >
            <div className="flex items-center justify-between mb-3">
              <IconBadge step={step} />
              <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>
                {step.num}
              </span>
            </div>
            <StepText step={step} />
          </div>

          {i < steps.length - 1 && (
            <div aria-hidden className="flex items-center justify-center md:w-5 h-4 md:h-auto flex-shrink-0">
              <span className="block w-px h-full md:w-full md:h-px" style={{ background: "var(--border-strong)" }} />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}

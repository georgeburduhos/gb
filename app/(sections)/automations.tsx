"use client";

import { useState, useEffect } from "react";
import automationsData from "@/content/automations.json";
import { ArrowUpRight, Mail, X, FileText, BotMessageSquare, MonitorCog, CheckCircle2 } from "lucide-react";

type Automation = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  link?: string;
};

const FLOW_STEPS = [
  {
    icon: FileText,
    num: "01",
    title: "Snap or scan",
    desc: "Photo or PDF — any format works.",
    tag: null,
    accent: false,
  },
  {
    icon: BotMessageSquare,
    num: "02",
    title: "Bot receives file",
    desc: "Validates format, confirms receipt, queues upload.",
    tag: "via Telegram",
    accent: true,
  },
  {
    icon: MonitorCog,
    num: "03",
    title: "Headless upload",
    desc: "Logs in, navigates to expenses, uploads and saves.",
    tag: "runs in background",
    accent: true,
  },
  {
    icon: CheckCircle2,
    num: "04",
    title: "Confirmed",
    desc: "Expense logged. Bot replies with success.",
    tag: "logged automatically",
    accent: false,
  },
];

export function AutomationsSection() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setModalOpen(false); };
    if (modalOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
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
              <AutomationCard
                key={item.id}
                item={item}
                onClick={item.id === "invoice-bot" ? () => setModalOpen(true) : undefined}
              />
            ))}
            <TeaserCard />
          </div>
        </div>
      </section>

      {modalOpen && <FlowModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

function AutomationCard({ item, onClick }: { item: Automation; onClick?: () => void }) {
  const clickable = !!onClick;
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border p-5 flex flex-col gap-3 ${clickable ? "cursor-pointer group" : ""}`}
      style={{
        background: "var(--bg)",
        borderColor: "var(--border-subtle)",
        transition: "border-color 200ms",
      }}
      onMouseEnter={e => { if (clickable) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.15)"; }}
      onMouseLeave={e => { if (clickable) (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
          {item.title}
        </h3>
        {clickable ? (
          <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>
            view flow →
          </span>
        ) : item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-3)" }}
          >
            <ArrowUpRight size={15} />
          </a>
        ) : null}
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

function FlowModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(8, 10, 18, 0.85)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl rounded-2xl border p-7 md:p-10 relative"
        style={{
          background: "var(--bg-2)",
          borderColor: "var(--border)",
          animation: "modalIn 180ms cubic-bezier(0.22,1,0.36,1) both",
        }}
        onClick={e => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: scale(0.96) translateY(8px); }
            to   { opacity: 1; transform: scale(1) translateY(0); }
          }
        `}</style>

        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-lg p-1.5 transition-colors"
          style={{ color: "var(--text-3)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}
        >
          <X size={16} />
        </button>

        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-1" style={{ color: "var(--accent)" }}>
          Automation
        </p>
        <h2 className="text-xl font-semibold tracking-tight mb-1" style={{ color: "var(--text)" }}>
          Invoice Upload Flow
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-3)" }}>
          Zero manual steps — from receipt to solo.ro in seconds.
        </p>

        {/* Flow steps */}
        <div className="flex flex-col md:flex-row items-stretch mb-8 gap-3 md:gap-0">
          {FLOW_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex md:contents">
                {/* Step card */}
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
                  <p className="text-xs font-mono mb-1.5" style={{ color: step.accent ? "rgba(198,37,46,0.45)" : "rgba(255,255,255,0.2)" }}>
                    {step.num}
                  </p>
                  <p className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                    {step.title}
                  </p>
                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-3)" }}>
                    {step.desc}
                  </p>
                  {step.tag && (
                    <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.18)" }}>
                      {step.tag}
                    </p>
                  )}
                </div>

                {/* Connector */}
                {i < FLOW_STEPS.length - 1 && (
                  <>
                    {/* Desktop: horizontal arrow */}
                    <div className="hidden md:flex flex-shrink-0 items-start justify-center w-6 pt-[22px]">
                      <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "18px", lineHeight: 1 }}>›</span>
                    </div>
                    {/* Mobile: vertical arrow */}
                    <div className="flex md:hidden justify-start pl-1" style={{ color: "rgba(255,255,255,0.15)", fontSize: "14px" }}>
                      ↓
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-5" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="flex flex-wrap gap-2">
            {["Python", "Telegram API", "Playwright", "launchd · always-on"].map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded border font-mono"
                style={{ color: "var(--text-3)", borderColor: "var(--border-subtle)", background: "var(--bg)" }}>
                {t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs font-mono" style={{ color: "#3D8C5E" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#3D8C5E", boxShadow: "0 0 6px rgba(61,140,94,0.7)" }} />
            Running in production
          </div>
        </div>
      </div>
    </div>
  );
}

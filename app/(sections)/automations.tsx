"use client";

import { useState, useEffect, useRef } from "react";
import automationsData from "@/content/automations.json";
import { ArrowUpRight, Mail, X, FileText, BotMessageSquare, MonitorCog, CheckCircle2 } from "lucide-react";
import { FlowSteps, type FlowStep } from "@/components/flow-steps";

type Automation = {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  link?: string;
};

const FLOW_STEPS: FlowStep[] = [
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
  const triggerRef = useRef<HTMLElement | null>(null);

  const closeModal = () => {
    setModalOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      <section id="automations" className="section-alt py-20 md:py-24 px-4 md:px-8">
        <div className="max-w-[1100px] mx-auto">
          <p className="eyebrow mb-3">Automation</p>
          <h2 className="section-title mb-4">
            I build the tools I use.
          </h2>
          <p className="section-intro mb-10 md:mb-12">
            If I find myself doing something more than twice, I write code for it. The result is a
            growing set of personal tools — bots, dashboards, systems — that handle the repetitive
            work so I can focus on the hard parts. These aren&apos;t side projects. They run every day.
            The same instinct, taken further, is what became{" "}
            <a href="#siteworks" className="link">
              Siteworks
            </a>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(automationsData as Automation[]).map((item) => (
              <AutomationCard
                key={item.id}
                item={item}
                onOpen={
                  item.id === "invoice-bot"
                    ? (el) => {
                        triggerRef.current = el;
                        setModalOpen(true);
                      }
                    : undefined
                }
              />
            ))}
            <TeaserCard />
          </div>
        </div>
      </section>

      {modalOpen && <FlowModal onClose={closeModal} />}
    </>
  );
}

function AutomationCard({ item, onOpen }: { item: Automation; onOpen?: (el: HTMLElement) => void }) {
  const clickable = !!onOpen;
  return (
    <div
      onClick={clickable ? (e) => onOpen(e.currentTarget) : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpen(e.currentTarget);
              }
            }
          : undefined
      }
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      aria-haspopup={clickable ? "dialog" : undefined}
      className={`card p-6 flex flex-col gap-3 ${clickable ? "cursor-pointer hover:border-[var(--border-strong)]" : ""}`}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="card-title">
          {item.title}
        </h3>
        {clickable ? (
          <span className="label-mono whitespace-nowrap" style={{ color: "var(--accent-text)" }}>
            View flow →
          </span>
        ) : item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.title} (opens in new tab)`}
            onClick={(e) => e.stopPropagation()}
            className="transition-colors hover:text-[var(--text)]"
            style={{ color: "var(--text-3)" }}
          >
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ) : null}
      </div>

      <div>
        <p className="text-sm leading-5 mb-2 text-pretty" style={{ color: "var(--text-3)" }}>
          {item.problem}
        </p>
        <p className="card-body">
          {item.solution}
        </p>
      </div>

      <ul className="flex flex-wrap gap-1.5 mt-auto" aria-label="Stack">
        {item.stack.map((s) => (
          <li key={s} className="chip font-mono">
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeaserCard() {
  return (
    <div
      className="rounded-xl border border-dashed p-6 flex flex-col justify-between gap-4"
      style={{ borderColor: "var(--border-strong)", background: "var(--card-bg)" }}
    >
      <div>
        <p className="card-title mb-2">
          Think of something you do on a regular basis.
        </p>
        <p className="card-body">
          I probably have a way to automate it — or can build one.
        </p>
      </div>
      <a
        href="mailto:george.burduhos@gmail.com"
        className="link inline-flex items-center gap-2 text-sm self-start no-underline hover:underline"
      >
        <Mail size={14} aria-hidden />
        Let&apos;s talk
      </a>
    </div>
  );
}

function FlowModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      style={{ background: "color-mix(in srgb, var(--gb-neutral-975) 72%, transparent)" }}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="flow-modal-title"
        className="w-full max-w-3xl rounded-2xl border p-6 md:p-10 relative my-auto"
        style={{
          background: "var(--bg-2)",
          borderColor: "var(--border)",
          boxShadow: "var(--gb-shadow-lg)",
          ["--card-bg" as string]: "var(--bg)",
          animation: "modalIn 200ms ease-out both",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; transform: translateY(8px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 rounded-lg p-2 transition-colors hover:text-[var(--text)]"
          style={{ color: "var(--text-3)" }}
        >
          <X size={16} aria-hidden />
        </button>

        <p className="eyebrow mb-2">Automation</p>
        <h2 id="flow-modal-title" className="text-xl font-semibold tracking-[-0.01em] mb-1" style={{ color: "var(--text)" }}>
          Invoice Upload Flow
        </h2>
        <p className="text-sm mb-8" style={{ color: "var(--text-3)" }}>
          Zero manual steps — from receipt to my accounting platform in seconds.
        </p>

        <div className="mb-8">
          <FlowSteps steps={FLOW_STEPS} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-5" style={{ borderTop: "1px solid var(--border)" }}>
          <ul className="flex flex-wrap gap-2" aria-label="Stack">
            {["Python", "Telegram API", "Playwright", "launchd · always-on"].map((t) => (
              <li key={t} className="chip font-mono">
                {t}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 font-mono text-xs" style={{ color: "var(--text-2)" }}>
            <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={{ background: "#2F9E64" }} />
            Running in production
          </div>
        </div>
      </div>
    </div>
  );
}

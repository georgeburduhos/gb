import type { ReactNode } from "react";

export type MyloStatus = "running" | "in-development" | "experimental";

export const STATUS_LABEL: Record<MyloStatus, string> = {
  running: "Running",
  "in-development": "In development",
  experimental: "Experimental",
};

export function StatusMark({ status }: { status: MyloStatus }) {
  if (status === "running") {
    return <span aria-hidden className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />;
  }
  return (
    <span
      aria-hidden
      className="w-1.5 h-1.5 rounded-full flex-shrink-0 border"
      style={{ borderColor: status === "in-development" ? "var(--gb-violet-text)" : "var(--text-3)" }}
    />
  );
}

export function StatusChip({ status }: { status: MyloStatus }) {
  const color = status === "in-development" ? "var(--gb-violet-text)" : status === "experimental" ? "var(--text-3)" : "var(--text-2)";
  const borderStyle = status === "in-development" ? "dashed" : status === "experimental" ? "dotted" : "solid";
  return (
    <span
      className="chip font-mono uppercase tracking-[0.08em] text-[11px]! inline-flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
      style={{ color, borderStyle, borderColor: status === "running" ? undefined : color }}
    >
      <StatusMark status={status} />
      {STATUS_LABEL[status]}
    </span>
  );
}

type Node = { title: string; note: string; status: MyloStatus };

const INTERFACES: Node[] = [
  { title: "macOS Companion", note: "Native SwiftUI app", status: "running" },
  { title: "AI assistant", note: "Conversational, via MCP", status: "experimental" },
];

const CONNECTS_TO: Node[] = [
  { title: "Background automation", note: "Monitored for interruptions", status: "running" },
  { title: "GitHub · GitLab", note: "Read-only sync", status: "in-development" },
];

const CORE_MODULES: { label: string; status: MyloStatus }[] = [
  { label: "Scheduling & reminders", status: "running" },
  { label: "Monitoring & incidents", status: "running" },
  { label: "Events · inbox · notifications", status: "running" },
  { label: "MCP server", status: "experimental" },
  { label: "Integrations sync", status: "in-development" },
];

const LEFT_LINKS: { label: string; status: MyloStatus }[] = [
  { label: "API", status: "running" },
  { label: "MCP", status: "experimental" },
];

const RIGHT_LINKS: { label: string; status: MyloStatus }[] = [
  { label: "watches", status: "running" },
  { label: "reads", status: "in-development" },
];

function DiagramNode({ node }: { node: Node }) {
  const dashed = node.status !== "running";
  return (
    <div
      className="rounded-lg border px-3.5 py-3"
      style={{
        borderColor: "var(--border-strong)",
        borderStyle: dashed ? "dashed" : "solid",
        background: "var(--bg)",
      }}
    >
      <div className="flex items-center gap-2">
        <StatusMark status={node.status} />
        <p className="text-sm font-semibold leading-5" style={{ color: "var(--text)" }}>
          {node.title}
        </p>
      </div>
      <p className="text-[13px] leading-5 mt-0.5 pl-3.5" style={{ color: "var(--text-3)" }}>
        {node.note}
        <span className="sr-only">, {STATUS_LABEL[node.status]}</span>
      </p>
    </div>
  );
}

function Connector({ label, status }: { label: string; status: MyloStatus }) {
  return (
    <div className="flex flex-col items-center gap-1 w-full">
      <span className="font-mono text-[11px] leading-4 uppercase tracking-[0.08em]" style={{ color: "var(--text-3)" }}>
        {label}
      </span>
      <span
        className="block w-full border-t"
        style={{ borderColor: "var(--border-strong)", borderStyle: status === "running" ? "solid" : "dashed" }}
      />
    </div>
  );
}

function ColumnLabel({ children }: { children: ReactNode }) {
  return (
    <p className="label-mono mb-3" style={{ color: "var(--text-3)" }}>
      {children}
    </p>
  );
}

function VerticalLink() {
  return (
    <div aria-hidden className="md:hidden flex justify-center py-1">
      <span className="block h-6 border-l" style={{ borderColor: "var(--border-strong)" }} />
    </div>
  );
}

export function MyloDiagram() {
  return (
    <figure className="card p-5 md:p-7">
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_76px_minmax(0,1.25fr)_76px_minmax(0,1fr)] md:items-stretch">
        <div className="flex flex-col">
          <ColumnLabel>Interfaces</ColumnLabel>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:flex-1 md:content-around">
            {INTERFACES.map((n) => (
              <DiagramNode key={n.title} node={n} />
            ))}
          </div>
        </div>

        <div aria-hidden className="hidden md:flex flex-col justify-around pt-7 px-2">
          {LEFT_LINKS.map((l) => (
            <Connector key={l.label} {...l} />
          ))}
        </div>
        <VerticalLink />

        <div className="flex flex-col">
          <ColumnLabel>MYLO Core</ColumnLabel>
          <div className="card-accent rounded-lg border flex-1 px-4 py-3.5" style={{ borderColor: "var(--border-strong)", background: "var(--bg)" }}>
            <p className="text-[13px] leading-5 mb-2" style={{ color: "var(--text-3)" }}>
              Always-on, local-first service
            </p>
            <ul className="flex flex-col">
              {CORE_MODULES.map((m, i) => (
                <li
                  key={m.label}
                  className={`flex items-center gap-2.5 py-1.5 text-sm leading-5 ${i > 0 ? "border-t" : ""}`}
                  style={{ borderColor: "var(--border)", color: m.status === "running" ? "var(--text)" : "var(--text-2)" }}
                >
                  <StatusMark status={m.status} />
                  <span className="flex-1">{m.label}</span>
                  {m.status !== "running" && (
                    <span
                      className="font-mono text-[11px] leading-4 uppercase tracking-[0.08em]"
                      style={{ color: m.status === "in-development" ? "var(--gb-violet-text)" : "var(--text-3)" }}
                    >
                      {m.status === "in-development" ? "In dev" : "Exp"}
                      <span className="sr-only"> ({STATUS_LABEL[m.status]})</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div aria-hidden className="hidden md:flex flex-col justify-around pt-7 px-2">
          {RIGHT_LINKS.map((l) => (
            <Connector key={l.label} {...l} />
          ))}
        </div>
        <VerticalLink />

        <div className="flex flex-col">
          <ColumnLabel>Connects to</ColumnLabel>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:flex-1 md:content-around">
            {CONNECTS_TO.map((n) => (
              <DiagramNode key={n.title} node={n} />
            ))}
          </div>
        </div>
      </div>

      <figcaption className="mt-5 pt-4 border-t flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]" style={{ borderColor: "var(--border)", color: "var(--text-3)" }}>
        <span className="sr-only">
          MYLO architecture: the macOS Companion talks to MYLO Core over its API; an AI assistant connects through an
          experimental MCP server. Core runs scheduling, reminders, monitoring, incidents, events, inbox and
          notifications, watches a background automation, and syncs read-only with GitHub and GitLab (in development).
        </span>
        {(["running", "in-development", "experimental"] as MyloStatus[]).map((s) => (
          <span key={s} aria-hidden className="inline-flex items-center gap-2">
            <StatusMark status={s} />
            {STATUS_LABEL[s]}
          </span>
        ))}
        <span aria-hidden className="inline-flex items-center gap-2">
          <span className="block w-5 border-t border-dashed" style={{ borderColor: "var(--border-strong)" }} />
          In development or experimental
        </span>
      </figcaption>
    </figure>
  );
}

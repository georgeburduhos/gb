import experienceData from "@/content/experience.json";
import { Lock } from "lucide-react";

type Engagement = {
  id: string;
  company: string | null;
  role: string;
  period: string;
  location: string | null;
  nda: boolean;
  freelance?: boolean;
  description: string;
  stack: string[];
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6" style={{ background: "var(--bg-2)" }}>
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          Experience
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-6" style={{ color: "var(--text)" }}>
          16 years in mobile development.
        </h2>

        <div
          className="rounded-xl border p-4 mb-10 text-sm leading-relaxed"
          style={{
            background: "var(--bg)",
            borderColor: "var(--border-subtle)",
            color: "var(--text-2)",
          }}
        >
          Most of my client work since 2023 comes through a long-term agency partnership.
          The projects are under NDA, but the scope, stack, and outcomes are available
          to discuss directly.{" "}
          <a
            href="mailto:george.burduhos@gmail.com"
            className="underline underline-offset-2"
            style={{ color: "var(--accent)" }}
          >
            Reach out
          </a>{" "}
          if you&apos;d like details.
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <div className="space-y-5">
            {(experienceData as Engagement[]).map((eng) => (
              <div key={eng.id} className="md:pl-10 relative">
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-4 w-3.5 h-3.5 rounded-full border-2 hidden md:block"
                  style={{
                    background: eng.nda ? "var(--bg-3)" : "var(--accent)",
                    borderColor: eng.nda ? "var(--border-strong)" : "var(--accent)",
                  }}
                />

                <div
                  className="rounded-xl border p-5"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                        {eng.company ?? (eng.freelance ? "Freelance" : "Client projects")}
                      </h3>
                      <span className="text-sm" style={{ color: "var(--text-3)" }}>·</span>
                      <p className="text-sm" style={{ color: "var(--accent)" }}>
                        {eng.role}
                      </p>
                      {eng.nda && (
                        <span
                          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded border"
                          style={{
                            color: "var(--text-3)",
                            borderColor: "var(--border)",
                            background: "var(--bg-2)",
                          }}
                        >
                          <Lock size={10} /> NDA
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>
                      {eng.period}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--text-2)" }}>
                    {eng.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {eng.stack.map((s) => (
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

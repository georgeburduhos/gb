import labsData from "@/content/labs.json";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  tagline: string;
  summary: string;
  stack: string[];
  link: string | null;
  status: "shipped" | "beta";
};

export function LabsSection() {
  const shipped = (labsData as Project[]).filter((p) => p.status === "shipped");
  const building = (labsData as Project[]).filter((p) => p.status === "beta");

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          Selected Projects
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-3" style={{ color: "var(--text)" }}>
          Built and shipped.
        </h2>
        <p className="text-sm leading-relaxed mb-10 max-w-2xl" style={{ color: "var(--text-3)" }}>
          A selection of projects I can talk about publicly. There are 4–5 more in production
          that I can&apos;t present due to NDA — happy to discuss them in a call.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {shipped.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Currently building */}
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          Currently Building
        </p>
        <h3 className="text-xl font-semibold tracking-tight mb-8" style={{ color: "var(--text)" }}>
          Personal AI projects.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {building.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="rounded-xl border p-5 flex flex-col"
      style={{ background: "var(--bg)", borderColor: "var(--border-subtle)" }}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm" style={{ color: "var(--text)" }}>
            {project.title}
          </h3>
          {project.status === "beta" && (
            <span
              className="text-xs px-2 py-0.5 rounded-full border"
              style={{
                color: "#2563eb",
                background: "rgba(37,99,235,0.08)",
                borderColor: "rgba(37,99,235,0.25)",
              }}
            >
              beta
            </span>
          )}
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-3)" }}
          >
            <ArrowUpRight size={15} />
          </a>
        )}
      </div>

      <p className="text-xs mb-2 font-medium" style={{ color: "var(--accent)" }}>
        {project.tagline}
      </p>

      <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-2)" }}>
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.stack.map((s) => (
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

import stackData from "@/content/stack.json";

type Skill = { id: string; label: string; category: string };

const CATEGORY_ORDER = ["Mobile", "Language", "Backend", "Database", "Blockchain", "Testing", "DevOps", "Design", "Process"];

export function StackSection() {
  const byCategory = CATEGORY_ORDER.reduce<Record<string, Skill[]>>((acc, cat) => {
    const items = (stackData as Skill[]).filter((s) => s.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.15em] mb-2" style={{ color: "var(--accent)" }}>
          Skills & Stack
        </p>
        <h2 className="text-3xl font-semibold tracking-tight mb-10" style={{ color: "var(--text)" }}>
          Technologies I work with.
        </h2>

        <div className="space-y-5">
          {Object.entries(byCategory).map(([category, skills]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-x-4">
              <span
                className="text-xs font-mono uppercase tracking-widest sm:w-24 flex-shrink-0"
                style={{ color: "var(--text-3)" }}
              >
                {category}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s.id}
                    className="text-xs px-2.5 py-1 rounded-md border"
                    style={{
                      color: "var(--text-2)",
                      borderColor: "var(--border)",
                      background: "var(--bg-2)",
                    }}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

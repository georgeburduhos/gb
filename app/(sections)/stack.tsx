import stackData from "@/content/stack.json";

type Skill = { id: string; label: string; category: string };

const CATEGORY_ORDER = ["Mobile", "Language", "AI", "Backend", "Database", "Blockchain", "Testing", "DevOps", "Design", "Process"];

export function StackSection() {
  const byCategory = CATEGORY_ORDER.reduce<Record<string, Skill[]>>((acc, cat) => {
    const items = (stackData as Skill[]).filter((s) => s.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  return (
    <section id="skills" className="py-20 md:py-24 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <p className="eyebrow mb-3">
          Skills & Stack
        </p>
        <h2 className="section-title mb-10">
          Technologies I work with.
        </h2>

        <div className="space-y-5 border-t pt-8" style={{ borderColor: "var(--border)" }}>
          {Object.entries(byCategory).map(([category, skills]) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-x-4">
              <span
                className="label-mono sm:w-32 flex-shrink-0"
                style={{ color: "var(--text-3)" }}
              >
                {category}
              </span>
              <ul className="flex flex-wrap gap-2" aria-label={category}>
                {skills.map((s) => (
                  <li
                    key={s.id}
                    className="text-[13px] leading-5 px-2.5 py-1 rounded border"
                    style={{
                      color: "var(--text-2)",
                      borderColor: "var(--border)",
                      background: "var(--card-bg)",
                    }}
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

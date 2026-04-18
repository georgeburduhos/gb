import { MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start">
          {/* Left */}
          <div>
            <h1
              className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15] mb-3"
              style={{ color: "var(--text)" }}
            >
              Cross-Platform
              <br />
              <span style={{ color: "var(--accent)" }}>Engineer.</span>
            </h1>

            <p className="text-base mb-6 font-medium" style={{ color: "var(--text-3)" }}>
              Mobile · Web · AI Integration
            </p>

            <p
              className="text-lg leading-relaxed mb-6 max-w-2xl"
              style={{ color: "var(--text-2)" }}
            >
              16+ years building for mobile — React Native, Expo, iOS, Android. Because I use
              Expo across all my projects, the web version comes naturally: one codebase, all
              platforms. Experienced across fintech, blockchain, media, and enterprise.
            </p>

            <p className="text-base leading-relaxed mb-5 max-w-2xl" style={{ color: "var(--text-2)" }}>
              Comfortable with the full stack — TypeScript, Node.js, REST APIs, CI/CD — and
              hands-on with AI/LLM integration where it genuinely improves the product.
            </p>

            <p className="text-sm mb-8 max-w-2xl" style={{ color: "var(--text-3)" }}>
              Currently building two AI-native apps in production —{" "}
              <a href="https://statsos.io" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-[var(--text)]">
                StatsOS
              </a>{" "}
              and{" "}
              <a href="https://dayos.io" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2 transition-colors hover:text-[var(--text)]">
                DayOS
              </a>.
            </p>

            <div className="flex items-center gap-2 mb-8 text-sm" style={{ color: "var(--text-3)" }}>
              <MapPin size={14} />
              Cluj-Napoca, Romania
            </div>

            <div className="flex flex-wrap gap-2">
              {["React Native", "Expo", "iOS · Android · Web", "TypeScript", "Node.js", "AI Integration"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full border font-medium"
                  style={{
                    color: "var(--text-2)",
                    borderColor: "var(--border)",
                    background: "var(--bg-2)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex flex-row lg:flex-col gap-4 lg:gap-3 flex-wrap">
            {[
              { value: "16+", label: "Years in mobile" },
              { value: "7+", label: "Years React Native" },
              { value: "iOS · Android · Web", label: "Platforms" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border p-5 text-center min-w-[130px]"
                style={{
                  background: "var(--bg-2)",
                  borderColor: "var(--border-subtle)",
                }}
              >
                <div className="text-2xl font-bold mb-1" style={{ color: "var(--accent)" }}>
                  {stat.value}
                </div>
                <div className="text-xs" style={{ color: "var(--text-3)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

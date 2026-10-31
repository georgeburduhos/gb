import { MapPin } from "lucide-react";

const STATS = [
  { value: "16+", label: "Years in mobile" },
  { value: "7+", label: "Years React Native" },
  { value: "iOS · Android · Web", label: "Platforms" },
];

export function HeroSection() {
  return (
    <section id="top" className="hero-wash pt-32 md:pt-40 pb-20 md:pb-28 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-end">
          <div className="max-w-[640px]">
            <p className="eyebrow mb-5">React Native · Web Development · AI &amp; Automation</p>

            <h1
              className="text-[44px] leading-[48px] md:text-[60px] md:leading-[64px] font-semibold tracking-[-0.03em] mb-6"
              style={{ color: "var(--text)" }}
            >
              Software
              <br />
              <span style={{ color: "var(--accent-text)" }}>Engineer.</span>
            </h1>

            <div className="brand-rule w-24 mb-8" aria-hidden />

            <p className="text-xl leading-[30px] mb-5 text-pretty" style={{ color: "var(--text)" }}>
              I build mobile and web applications, automation systems, and software
              products — from architecture to production.
            </p>

            <p className="text-base leading-[26px] mb-3 text-pretty" style={{ color: "var(--text-2)" }}>
              16+ years shipping mobile products with React Native, Expo, iOS, and Android — one
              TypeScript codebase across native apps, web, and PWAs — for fintech, blockchain,
              media, and enterprise.
            </p>
            <p className="text-base leading-[26px] mb-10 text-pretty" style={{ color: "var(--text-2)" }}>
              Full-stack across Node.js, REST APIs, and CI/CD, and increasingly focused on AI
              Engineering: agentic workflows where specialized agents build, review, and verify
              real work.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mb-10">
              <a href="mailto:george.burduhos@gmail.com" className="btn-primary">
                Get in touch
              </a>
              <a href="#work" className="link text-sm font-medium">
                See selected work →
              </a>
            </div>

            <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-3)" }}>
              <p className="text-pretty">
                <span className="label-mono mr-2" style={{ color: "var(--accent-text)" }}>
                  Now
                </span>
                Building{" "}
                <a href="#mylo" className="link">
                  MYLO
                </a>{" "}
                — a local-first personal assistant with its own core service and a native macOS app.
              </p>
              <p className="inline-flex items-center gap-1.5">
                <MapPin size={14} aria-hidden />
                Cluj-Napoca, Romania
              </p>
            </div>
          </div>

          <dl
            className="grid grid-cols-3 lg:grid-cols-1 lg:w-56 border-t lg:border-t-0 lg:border-l pt-6 lg:pt-0 lg:pl-8 gap-x-4"
            style={{ borderColor: "var(--border)" }}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse justify-end gap-1.5 lg:py-5 ${i > 0 ? "lg:border-t" : ""}`}
                style={{ borderColor: "var(--border)" }}
              >
                <dt className="label-mono text-[11px] sm:text-xs" style={{ color: "var(--text-3)" }}>
                  {stat.label}
                </dt>
                <dd className="text-lg leading-6 sm:text-2xl sm:leading-8 font-semibold tracking-[-0.02em]" style={{ color: "var(--text)" }}>
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

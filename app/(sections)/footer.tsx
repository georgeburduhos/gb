import { Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="px-4 md:px-8 pb-10" style={{ background: "var(--bg-2)" }}>
      <div className="brand-rule max-w-[1100px] mx-auto" aria-hidden />
      <div className="max-w-[1100px] mx-auto pt-14 md:pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="eyebrow mb-3">Contact</p>
            <h2 className="section-title mb-3">
              Let&apos;s talk.
            </h2>
            <a href="mailto:george.burduhos@gmail.com" className="link inline-flex items-center gap-2 text-base">
              <Mail size={16} aria-hidden />
              george.burduhos@gmail.com
            </a>
          </div>
          <a href="mailto:george.burduhos@gmail.com" className="btn-primary self-start md:self-auto">
            Get in touch
          </a>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mark-gradient.svg" alt="" width={26} height={32} className="h-8 w-auto" loading="lazy" />
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>George Burduhos</p>
              <p className="inline-flex items-center gap-1.5 text-xs" style={{ color: "var(--text-3)" }}>
                <MapPin size={12} aria-hidden />
                Cluj-Napoca, Romania
              </p>
            </div>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-[0.12em]" style={{ color: "var(--text-3)" }}>
            © {new Date().getFullYear()} George Burduhos
          </p>
        </div>
      </div>
    </footer>
  );
}

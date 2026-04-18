import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="px-6 py-12 border-t"
      style={{ borderColor: "var(--border-subtle)", background: "var(--bg-2)" }}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="George Burduhos" width={28} height={28} />
          <div>
            <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>George Burduhos</p>
            <p className="text-xs" style={{ color: "var(--text-3)" }}>Cluj-Napoca, Romania</p>
          </div>
        </div>

        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          © {new Date().getFullYear()} George Burduhos
        </p>

        <a
          href="mailto:george.burduhos@gmail.com"
          className="text-xs px-4 py-2 rounded-md transition-opacity hover:opacity-80"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Get in touch
        </a>
      </div>
    </footer>
  );
}

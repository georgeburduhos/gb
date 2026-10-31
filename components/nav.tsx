"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "MYLO", href: "#mylo", id: "mylo" },
  { label: "AI Engineering", href: "#ai", id: "ai" },
  { label: "Siteworks", href: "#siteworks", id: "siteworks" },
  { label: "Automations", href: "#automations", id: "automations" },
  { label: "Skills", href: "#skills", id: "skills" },
];

export function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const sectionVisibility: Record<string, number> = {};

    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          sectionVisibility[id] = entry.intersectionRatio;
          const top = Object.entries(sectionVisibility).sort((a, b) => b[1] - a[1])[0];
          if (top && top[1] > 0) setActiveId(top[0]);
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: "-20% 0px -60% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (!activeId || !navRef.current) return;
    const linkEl = linkRefs.current[activeId];
    if (!linkEl) return;

    const navRect = navRef.current.getBoundingClientRect();
    const linkRect = linkEl.getBoundingClientRect();

    setIndicatorStyle({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
      opacity: 1,
    });
  }, [activeId]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8"
      style={{
        background: "color-mix(in srgb, var(--bg) 92%, transparent)",
        backdropFilter: "saturate(140%) blur(10px)",
        WebkitBackdropFilter: "saturate(140%) blur(10px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1100px] mx-auto h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#top" aria-label="George Burduhos — home" className="flex items-center flex-shrink-0 rounded-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/mark-gradient.svg" alt="" width={26} height={32} className="h-8 w-auto sm:hidden" />
          <span className="hidden sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/lockup-horizontal-light.svg" alt="" width={174} height={40} className="logo-lockup-light h-10 w-auto" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/lockup-horizontal-dark.svg" alt="" width={174} height={40} className="logo-lockup-dark h-10 w-auto" />
          </span>
        </a>

        <div className="flex items-center gap-3 lg:gap-8">
          <nav ref={navRef} aria-label="Primary" className="hidden lg:flex items-center gap-7 relative">
            <span
              aria-hidden
              className="absolute bottom-[-22px] h-[2px] rounded-full transition-all duration-300 ease-out"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
                background: "var(--accent)",
              }}
            />
            {LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  ref={(el) => { linkRefs.current[link.id] = el; }}
                  aria-current={isActive ? "true" : undefined}
                  className="text-sm whitespace-nowrap transition-colors duration-200 hover:text-[var(--text)]"
                  style={{ color: isActive ? "var(--text)" : "var(--text-2)" }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <ThemeToggle />

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-200"
            style={{ color: "var(--text)", borderColor: "var(--border)" }}
          >
            {menuOpen ? <X size={16} aria-hidden /> : <Menu size={16} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="lg:hidden -mx-4 md:-mx-8 px-4 md:px-8 pb-4 pt-2 border-t"
          style={{ borderColor: "var(--border)", background: "var(--bg)", animation: "menuIn 180ms ease-out both" }}
        >
          <style>{`@keyframes menuIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: none; } }`}</style>
          <ul className="flex flex-col">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-base border-b"
                  style={{
                    color: activeId === link.id ? "var(--text)" : "var(--text-2)",
                    borderColor: "var(--border)",
                  }}
                >
                  {link.label}
                  {activeId === link.id && (
                    <span aria-hidden className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

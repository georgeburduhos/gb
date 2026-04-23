"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { label: "AI", href: "#ai", id: "ai" },
  { label: "Automations", href: "#automations", id: "automations" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
];

export function Nav() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef<HTMLElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6"
      style={{
        background: "var(--bg)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-[1100px] mx-auto h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <Image src="/logo.png" alt="George Burduhos" width={28} height={28} />
          <span className="font-semibold text-sm tracking-tight hidden sm:block" style={{ color: "var(--text)" }}>
            George Burduhos
          </span>
        </a>

        <nav ref={navRef} className="flex items-center gap-5 md:gap-8 relative overflow-x-auto">
          {/* Sliding indicator — desktop only */}
          <span
            className="absolute bottom-[-18px] h-[2px] rounded-full transition-all duration-300 ease-out hidden md:block"
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
                className="text-sm whitespace-nowrap transition-colors duration-200"
                style={{ color: isActive ? "var(--text)" : "var(--text-2)" }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

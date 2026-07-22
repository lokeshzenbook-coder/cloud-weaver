import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUser, HiOutlineSparkles, HiOutlineBriefcase,
  HiOutlineCube, HiOutlineCog, HiOutlineCollection,
  HiOutlineBadgeCheck, HiOutlineMail,
} from "react-icons/hi";
import { NAV_LINKS } from "@/lib/portfolio-data";
import type { IconType } from "react-icons";

const ICONS: Record<string, IconType> = {
  "#about": HiOutlineUser,
  "#skills": HiOutlineSparkles,
  "#experience": HiOutlineBriefcase,
  "#k8s-ops": HiOutlineCube,
  "#pipeline": HiOutlineCog,
  "#projects": HiOutlineCollection,
  "#certifications": HiOutlineBadgeCheck,
  "#contact": HiOutlineMail,
};

export function BottomNav() {
  const [active, setActive] = useState<string>(NAV_LINKS[0].href);

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(`#${current}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-5 sm:pb-7"
    >
      <div className="pointer-events-auto max-w-full">
        <ul
          className="glass-strong flex items-center gap-1 overflow-x-auto rounded-full border border-white/10 px-2 py-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:gap-2 sm:px-3"
          style={{ scrollbarWidth: "none" }}
        >
          {NAV_LINKS.map(link => {
            const Icon = ICONS[link.href] ?? HiOutlineSparkles;
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative shrink-0">
                <a
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-medium transition-all duration-200 sm:gap-2 sm:px-3.5 sm:py-2 sm:text-[13px] ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="bottomnav-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-aurora-1)]/25 via-[var(--color-aurora-2)]/20 to-[var(--color-aurora-3)]/25 ring-1 ring-white/15 shadow-[0_0_20px_-2px_var(--color-aurora-2)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-1.5 sm:gap-2">
                    <Icon
                      className={`h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110 sm:h-[22px] sm:w-[22px] ${
                        isActive ? "scale-105" : ""
                      }`}
                      aria-hidden="true"
                    />
                    <span className="hidden sm:inline">{link.label}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

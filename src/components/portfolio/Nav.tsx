import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import resume from "@/assets/resume.pdf.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--color-aurora-1)] via-[var(--color-aurora-2)] to-[var(--color-aurora-3)]"
      />
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className={`flex w-full items-center justify-between rounded-full px-4 py-2 transition-all ${scrolled ? "glass-strong" : ""}`}>
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--color-aurora-1)] to-[var(--color-aurora-2)] text-[11px] font-bold text-background">GL</span>
              <span className="hidden sm:inline">{PROFILE.name}</span>
            </a>
            <div className="hidden md:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <a
                href={resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
              >
                Resume
              </a>
              <button
                className="rounded-full p-2 text-foreground/80 hover:bg-white/5 md:hidden"
                onClick={() => setOpen(v => !v)}
                aria-label="Toggle navigation"
                aria-expanded={open}
              >
                {open ? <HiX size={20} /> : <HiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto mt-2 max-w-6xl px-4 md:hidden"
            >
              <div className="glass-strong flex flex-col rounded-2xl p-2">
                {NAV_LINKS.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 rounded-lg bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

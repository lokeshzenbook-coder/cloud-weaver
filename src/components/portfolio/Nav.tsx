import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { HiMenu, HiX, HiDownload, HiExternalLink } from "react-icons/hi";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import resume from "@/assets/resume.pdf.asset.json";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!previewOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreviewOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [previewOpen]);

  const openPreview = () => {
    setPreviewOpen(true);
    setOpen(false);
  };

  const downloadResume = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(resume.url, { credentials: "omit" });
      if (!res.ok) throw new Error(String(res.status));
      const blob = await res.blob();
      const pdfBlob = blob.type === "application/pdf" ? blob : new Blob([blob], { type: "application/pdf" });
      const objectUrl = URL.createObjectURL(pdfBlob);
      const a = document.createElement("a");
      a.href = objectUrl;
      a.download = "Lokesh_GR_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    } catch {
      window.open(resume.url, "_blank", "noopener,noreferrer");
    }
  };

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
        <div className="section-container flex items-center justify-between px-4 sm:px-6">
          <div className={`flex w-full items-center justify-between rounded-full px-4 py-2 transition-all ${scrolled ? "glass-strong" : ""}`}>
            <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--color-aurora-1)] to-[var(--color-aurora-2)] text-[11px] font-bold text-background">GL</span>
              <span className="hidden sm:inline">{PROFILE.name}</span>
            </a>
            <nav className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openPreview}
                className="hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex"
              >
                Resume
              </button>
              <button
                className="rounded-full p-2 text-foreground/80 hover:bg-foreground/5 md:hidden"
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
              className="section-container mt-2 px-4 md:hidden"
            >
              <div className="glass-strong flex flex-col rounded-2xl p-2">
                {NAV_LINKS.map(l => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <button
                  type="button"
                  onClick={openPreview}
                  className="mt-1 rounded-lg bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
                >
                  View Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-background/90 backdrop-blur-sm p-3 sm:p-6"
            onClick={() => setPreviewOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            <div
              className="mx-auto flex w-full max-w-5xl flex-1 flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-2 border-b border-foreground/10 px-4 py-3">
                <div className="text-sm font-medium">{resume.original_filename}</div>
                <div className="flex items-center gap-2">
                  <a
                    href={resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 text-xs font-medium text-foreground/80 hover:bg-foreground/5"
                  >
                    <HiExternalLink size={14} /> Open
                  </a>
                  <button
                    type="button"
                    onClick={downloadResume}
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:scale-[1.03] transition-transform"
                  >
                    <HiDownload size={14} /> Download
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewOpen(false)}
                    aria-label="Close preview"
                    className="rounded-full p-1.5 text-foreground/70 hover:bg-foreground/5"
                  >
                    <HiX size={18} />
                  </button>
                </div>
              </div>
              <object
                data={resume.url}
                type="application/pdf"
                className="h-full w-full flex-1 bg-foreground/5"
                aria-label="Resume PDF preview"
              >
                <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center text-sm text-muted-foreground">
                  <p>Your browser can't display the PDF inline.</p>
                  <a
                    href={resume.url}
                    download="Lokesh_GR_Resume.pdf"
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background"
                  >
                    <HiDownload size={14} /> Download Resume
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

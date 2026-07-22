import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function useCounter(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return { ref, value: val };
}

export function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, value } = useCounter(target);
  const isFloat = target % 1 !== 0;
  return (
    <span ref={ref} className="tabular-nums">
      {isFloat ? value.toFixed(1) : Math.floor(value).toLocaleString()}
      {suffix}
    </span>
  );
}

export function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children, className = "", href, onClick, ariaLabel,
}: { children: ReactNode; className?: string; href?: string; onClick?: () => void; ariaLabel?: string }) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const tx = useTransform(sx, v => v);
  const ty = useTransform(sy, v => v);

  const handle = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.25);
    y.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const reset = () => { x.set(0); y.set(0); };

  const base = "relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60";
  const Cmp: any = href ? motion.a : motion.button;
  return (
    <Cmp
      ref={ref as never}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      className={`${base} ${className}`}
    >
      {children}
    </Cmp>
  );
}

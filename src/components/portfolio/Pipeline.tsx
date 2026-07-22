import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineX, HiOutlinePlay, HiOutlinePause, HiOutlineRefresh, HiCheck, HiX } from "react-icons/hi";
import {
  PIPELINE_STAGES, PIPELINE_FILTERS, PIPELINE_STATS,
  type PipelineStage, type StageCategory, type Tool,
} from "@/lib/pipeline-data";

type Status = "waiting" | "running" | "success" | "failed" | "retrying" | "skipped";

const statusStyle: Record<Status, { ring: string; dot: string; label: string; glow: string }> = {
  waiting:  { ring: "border-white/10",         dot: "bg-white/30",                    label: "Idle",     glow: "" },
  running:  { ring: "border-cyan-400/60",      dot: "bg-cyan-300 animate-pulse",      label: "Running",  glow: "shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)]" },
  success:  { ring: "border-emerald-400/60",   dot: "bg-emerald-400",                 label: "Passed",   glow: "shadow-[0_0_40px_-10px_rgba(52,211,153,0.55)]" },
  failed:   { ring: "border-rose-400/70",      dot: "bg-rose-400",                    label: "Failed",   glow: "shadow-[0_0_40px_-10px_rgba(244,63,94,0.55)]" },
  retrying: { ring: "border-amber-400/70",     dot: "bg-amber-300 animate-pulse",     label: "Retrying", glow: "shadow-[0_0_40px_-10px_rgba(251,191,36,0.55)]" },
  skipped:  { ring: "border-white/10 opacity-40", dot: "bg-white/20",                 label: "Skipped",  glow: "" },
};

/** Official brand logo tile — SVG when available, monogram fallback with brand color. */
function LogoTile({ tool, size = 40 }: { tool: Tool; size?: number }) {
  const Icon = tool.icon;
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
      title={tool.name}
      aria-label={tool.name}
      className="group/logo relative grid place-items-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-colors hover:border-white/25"
      style={{ width: size, height: size }}
    >
      {/* brand-color glow on hover */}
      <span
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100"
        style={{ boxShadow: `0 0 22px 2px ${tool.color}55, inset 0 0 0 1px ${tool.color}66` }}
      />
      {Icon ? (
        <Icon aria-hidden style={{ color: tool.color, width: size * 0.55, height: size * 0.55 }} />
      ) : (
        <span
          className="font-mono text-[10px] font-bold tracking-tight"
          style={{ color: tool.color }}
        >
          {tool.mono ?? tool.name.slice(0, 2).toUpperCase()}
        </span>
      )}
    </motion.div>
  );
}

export function Pipeline() {
  const [filter, setFilter] = useState<(typeof PIPELINE_FILTERS)[number]>("All");
  const [active, setActive] = useState<PipelineStage | null>(null);
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    () => Object.fromEntries(PIPELINE_STAGES.map(s => [s.id, "waiting" as Status]))
  );
  const [retried, setRetried] = useState<Record<string, boolean>>({});
  const [running, setRunning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const idxRef = useRef(0);
  const retryRef = useRef<Record<string, number>>({});

  const matchesFilter = (s: PipelineStage) =>
    filter === "All" || s.categories.includes(filter as StageCategory);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const runStage = (i: number, isRetry = false) => {
    const stage = PIPELINE_STAGES[i];
    setStatuses(prev => ({ ...prev, [stage.id]: isRetry ? "retrying" : "running" }));
    timerRef.current = window.setTimeout(() => {
      const attempts = (retryRef.current[stage.id] ?? 0) + (isRetry ? 0 : 1);
      retryRef.current[stage.id] = attempts;
      const baseFailRate = stage.categories.includes("Security") ? 0.32 : 0;
      const willFail = Math.random() < (isRetry ? 0.15 : baseFailRate);
      if (willFail && !isRetry) {
        setStatuses(prev => ({ ...prev, [stage.id]: "failed" }));
        setRetried(prev => ({ ...prev, [stage.id]: true }));
        timerRef.current = window.setTimeout(() => runStage(i, true), 700);
        return;
      }
      setStatuses(prev => ({ ...prev, [stage.id]: willFail ? "failed" : "success" }));
      idxRef.current = i + 1;
      timerRef.current = window.setTimeout(tick, 260);
    }, isRetry ? 620 : 520);
  };

  const tick = () => {
    const i = idxRef.current;
    if (i >= PIPELINE_STAGES.length) { setRunning(false); return; }
    runStage(i, false);
  };

  const start = () => {
    if (running) return;
    setRunning(true);
    if (idxRef.current >= PIPELINE_STAGES.length) {
      idxRef.current = 0;
      retryRef.current = {};
      setRetried({});
      setStatuses(Object.fromEntries(PIPELINE_STAGES.map(s => [s.id, "waiting" as Status])));
    }
    tick();
  };
  const pause = () => { setRunning(false); clearTimer(); };
  const reset = () => {
    pause();
    idxRef.current = 0;
    retryRef.current = {};
    setRetried({});
    setStatuses(Object.fromEntries(PIPELINE_STAGES.map(s => [s.id, "waiting" as Status])));
  };

  useEffect(() => () => clearTimer(), []);

  const progress = useMemo(() => {
    const done = Object.values(statuses).filter(s => s === "success" || s === "failed").length;
    return Math.round((done / PIPELINE_STAGES.length) * 100);
  }, [statuses]);

  return (
    <section id="pipeline" className="relative px-4 py-24 sm:px-6">
      {/* aurora backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
             style={{ background: "conic-gradient(from 90deg, var(--color-aurora-1), var(--color-aurora-2), var(--color-aurora-3), var(--color-aurora-1))" }} />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ DevSecOps Pipeline</span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            An enterprise control plane — from commit to production.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            22 stages · 90+ production tools with official logos. Signed artifacts, policy-gated deploys, real-time observability. Hover any logo, click any stage.
          </p>
        </div>

        {/* Dashboard stats */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {PIPELINE_STATS.map(s => (
            <div key={s.label} className="glass rounded-xl p-3">
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-lg font-semibold" style={{ color: s.accent }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {PIPELINE_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === f
                    ? "border-primary/60 bg-primary/10 text-foreground"
                    : "border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="glass hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs sm:flex">
              <span className="text-muted-foreground">Progress</span>
              <div className="h-1.5 w-32 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-[var(--color-aurora-1)] via-[var(--color-aurora-2)] to-[var(--color-aurora-3)]"
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>
              <span className="tabular-nums text-muted-foreground">{progress}%</span>
            </div>
            <button
              onClick={running ? pause : start}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background hover:bg-foreground/90"
            >
              {running ? <><HiOutlinePause /> Pause</> : <><HiOutlinePlay /> Start Pipeline</>}
            </button>
            <button
              onClick={reset}
              className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs hover:bg-white/10"
            >
              <HiOutlineRefresh /> Reset
            </button>
          </div>
        </div>

        {/* Pipeline grid — logo-first cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PIPELINE_STAGES.map((stage, i) => {
            const status = statuses[stage.id];
            const dim = !matchesFilter(stage);
            const s = statusStyle[status];
            const StageIcon = stage.icon;
            return (
              <motion.button
                key={stage.id}
                layout
                onClick={() => setActive(stage)}
                whileTap={{ scale: 0.98 }}
                animate={{ opacity: dim ? 0.25 : 1, scale: dim ? 0.98 : 1 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`glass group relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-5 text-left transition-shadow ${s.ring} ${s.glow}`}
              >
                {/* animated gradient border on running */}
                {status === "running" && (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl"
                    style={{
                      background: "conic-gradient(from var(--a,0deg), transparent 0deg, #22d3ee 60deg, transparent 120deg)",
                      WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                      WebkitMaskComposite: "xor" as any,
                      padding: 1,
                    }}
                    animate={{ ["--a" as any]: ["0deg", "360deg"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                )}

                {/* header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02]">
                      <StageIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          Stage {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="text-sm font-semibold leading-tight">{stage.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {retried[stage.id] && (
                      <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-1.5 py-[1px] text-[9px] font-medium uppercase tracking-wider text-amber-300">
                        Retry
                      </span>
                    )}
                    <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                    <span className="text-[10px] text-muted-foreground">{s.label}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">{stage.short}</p>

                {/* official logos */}
                <div className="flex flex-wrap items-center gap-2">
                  {stage.tools.map(t => (
                    <LogoTile key={`${stage.id}-${t.name}`} tool={t} />
                  ))}
                </div>

                {/* categories */}
                <div className="mt-auto flex flex-wrap gap-1 pt-1">
                  {stage.categories.map(c => (
                    <span key={c} className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      {c}
                    </span>
                  ))}
                </div>

                {/* status overlays */}
                {status === "running" && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/40"
                    animate={{ boxShadow: [
                      "0 0 0 0 rgba(34,211,238,0.4)",
                      "0 0 34px 4px rgba(34,211,238,0.28)",
                      "0 0 0 0 rgba(34,211,238,0.4)",
                    ] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                )}
                {status === "retrying" && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-400/60"
                    animate={{ boxShadow: [
                      "0 0 0 0 rgba(251,191,36,0.35)",
                      "0 0 24px 3px rgba(251,191,36,0.35)",
                      "0 0 0 0 rgba(251,191,36,0.35)",
                    ] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
                {status === "success" && (
                  <>
                    <motion.div
                      key={`ok-${stage.id}`}
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-400/60"
                      initial={{ boxShadow: "0 0 0 0 rgba(52,211,153,0)" }}
                      animate={{ boxShadow: [
                        "0 0 0 0 rgba(52,211,153,0.55)",
                        "0 0 34px 6px rgba(52,211,153,0.28)",
                        "0 0 0 0 rgba(52,211,153,0)",
                      ] }}
                      transition={{ duration: 1.2, times: [0, 0.4, 1] }}
                    />
                    <motion.div
                      className="pointer-events-none absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-emerald-500/90 text-background shadow-[0_0_18px_rgba(52,211,153,0.6)]"
                      initial={{ scale: 0, rotate: -30, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 18 }}
                    >
                      <HiCheck className="h-3.5 w-3.5" strokeWidth={3} />
                    </motion.div>
                  </>
                )}
                {status === "failed" && (
                  <>
                    <motion.div
                      key={`fail-${stage.id}`}
                      className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-rose-400/70"
                      animate={{
                        x: [0, -4, 4, -3, 3, -2, 2, 0],
                        boxShadow: [
                          "0 0 0 0 rgba(244,63,94,0.5)",
                          "0 0 30px 4px rgba(244,63,94,0.45)",
                          "0 0 18px 2px rgba(244,63,94,0.35)",
                        ],
                      }}
                      transition={{ duration: 0.55, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="pointer-events-none absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-rose-500/90 text-background shadow-[0_0_18px_rgba(244,63,94,0.65)]"
                      initial={{ scale: 0, rotate: 30, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 16 }}
                    >
                      <HiX className="h-3.5 w-3.5" strokeWidth={3} />
                    </motion.div>
                  </>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[70] flex justify-end"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setActive(null)}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            />
            <motion.aside
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="glass-strong relative flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-white/10 p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02]">
                    <active.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      {active.categories.join(" · ")}
                    </div>
                    <h3 className="text-lg font-semibold">{active.name}</h3>
                  </div>
                </div>
                <button onClick={() => setActive(null)} className="rounded-full p-1.5 hover:bg-white/10" aria-label="Close">
                  <HiOutlineX />
                </button>
              </div>

              <p className="mt-5 text-sm text-muted-foreground">{active.description}</p>

              <DrawerRow label="Input" value={active.input} />
              <DrawerRow label="Output" value={active.output} />

              <DrawerSection title="Toolchain">
                <div className="flex flex-wrap gap-2">
                  {active.tools.map(t => (
                    <div key={t.name} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5">
                      <LogoTile tool={t} size={26} />
                      <span className="text-xs">{t.name}</span>
                    </div>
                  ))}
                </div>
              </DrawerSection>

              <DrawerSection title="Best Practices">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {active.bestPractices.map(b => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </DrawerSection>

              <DrawerSection title="Commands">
                <div className="space-y-1.5">
                  {active.commands.map(c => (
                    <pre key={c} className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-xs text-foreground/90">
                      <code>$ {c}</code>
                    </pre>
                  ))}
                </div>
              </DrawerSection>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function DrawerRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-white/5 pb-2">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="text-right text-sm">{value}</span>
    </div>
  );
}

function DrawerSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      {children}
    </div>
  );
}

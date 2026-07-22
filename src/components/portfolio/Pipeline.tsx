import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineX, HiOutlinePlay, HiOutlinePause, HiOutlineRefresh } from "react-icons/hi";
import {
  PIPELINE_STAGES, PIPELINE_FILTERS, PIPELINE_STATS,
  type PipelineStage, type StageCategory,
} from "@/lib/pipeline-data";

type Status = "waiting" | "running" | "success" | "failed" | "skipped";

const statusStyle: Record<Status, { ring: string; dot: string; label: string }> = {
  waiting: { ring: "border-white/10",  dot: "bg-white/30",       label: "Idle" },
  running: { ring: "border-cyan-400/60", dot: "bg-cyan-300 animate-pulse", label: "Running" },
  success: { ring: "border-emerald-400/60", dot: "bg-emerald-400", label: "Passed" },
  failed:  { ring: "border-rose-400/60", dot: "bg-rose-400", label: "Failed" },
  skipped: { ring: "border-white/10 opacity-40", dot: "bg-white/20", label: "Skipped" },
};

export function Pipeline() {
  const [filter, setFilter] = useState<(typeof PIPELINE_FILTERS)[number]>("All");
  const [active, setActive] = useState<PipelineStage | null>(null);
  const [statuses, setStatuses] = useState<Record<string, Status>>(
    () => Object.fromEntries(PIPELINE_STAGES.map(s => [s.id, "waiting" as Status]))
  );
  const [running, setRunning] = useState(false);
  const timerRef = useRef<number | null>(null);
  const idxRef = useRef(0);

  const matchesFilter = (s: PipelineStage) =>
    filter === "All" || s.categories.includes(filter as StageCategory);

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const tick = () => {
    const i = idxRef.current;
    if (i >= PIPELINE_STAGES.length) {
      setRunning(false);
      return;
    }
    const stage = PIPELINE_STAGES[i];
    setStatuses(prev => ({ ...prev, [stage.id]: "running" }));
    timerRef.current = window.setTimeout(() => {
      // ~8% simulated failure rate on security stages, otherwise success
      const willFail = stage.categories.includes("Security") && Math.random() < 0.06;
      setStatuses(prev => ({ ...prev, [stage.id]: willFail ? "failed" : "success" }));
      idxRef.current = i + 1;
      timerRef.current = window.setTimeout(tick, 260);
    }, 520);
  };

  const start = () => {
    if (running) return;
    setRunning(true);
    if (idxRef.current >= PIPELINE_STAGES.length) {
      idxRef.current = 0;
      setStatuses(Object.fromEntries(PIPELINE_STAGES.map(s => [s.id, "waiting" as Status])));
    }
    tick();
  };
  const pause = () => { setRunning(false); clearTimer(); };
  const reset = () => {
    pause();
    idxRef.current = 0;
    setStatuses(Object.fromEntries(PIPELINE_STAGES.map(s => [s.id, "waiting" as Status])));
  };

  useEffect(() => () => clearTimer(), []);

  const progress = useMemo(() => {
    const done = Object.values(statuses).filter(s => s === "success" || s === "failed").length;
    return Math.round((done / PIPELINE_STAGES.length) * 100);
  }, [statuses]);

  return (
    <section id="pipeline" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-2">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ DevSecOps Pipeline</span>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            An enterprise control plane — from commit to production.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            22 stages. Signed artifacts. Policy-gated deploys. Real-time observability. Click any stage to inspect it.
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

        {/* Pipeline grid */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {PIPELINE_STAGES.map((stage, i) => {
            const status = statuses[stage.id];
            const dim = !matchesFilter(stage);
            const s = statusStyle[status];
            const Icon = stage.icon;
            return (
              <motion.button
                key={stage.id}
                layout
                onClick={() => setActive(stage)}
                animate={{ opacity: dim ? 0.25 : 1, scale: dim ? 0.98 : 1 }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25 }}
                className={`glass group relative flex flex-col gap-3 rounded-2xl border p-4 text-left transition-shadow hover:shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--color-brand)_45%,transparent)] ${s.ring}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02]">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
                    <span className="text-[10px] text-muted-foreground">{s.label}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{stage.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{stage.short}</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {stage.tools.slice(0, 3).map(t => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                  {stage.tools.length > 3 && (
                    <span className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                      +{stage.tools.length - 3}
                    </span>
                  )}
                </div>

                {status === "running" && (
                  <motion.div
                    layoutId={`pulse-${stage.id}`}
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/50"
                    animate={{ boxShadow: [
                      "0 0 0 0 color-mix(in oklab, var(--color-aurora-1) 40%, transparent)",
                      "0 0 30px 4px color-mix(in oklab, var(--color-aurora-1) 30%, transparent)",
                      "0 0 0 0 color-mix(in oklab, var(--color-aurora-1) 40%, transparent)",
                    ] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                )}
                {status === "failed" && (
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-rose-400/50"
                    animate={{ x: [0, -3, 3, -2, 2, 0] }}
                    transition={{ duration: 0.4 }}
                  />
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

              <DrawerSection title="Tools">
                <div className="flex flex-wrap gap-1.5">
                  {active.tools.map(t => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs">
                      {t}
                    </span>
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

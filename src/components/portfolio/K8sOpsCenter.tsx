import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiX, HiOutlineLightningBolt, HiOutlinePlay, HiOutlinePause, HiOutlineRefresh, HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { LAYERS, NODES, GITOPS_STAGES, INCIDENTS, type OpsNode, type LayerId } from "@/lib/k8s-ops-data";

type Status = "healthy" | "warn" | "fail" | "recovering";
type StageStatus = "idle" | "running" | "success" | "failed";

const STATUS_STYLES: Record<Status, { ring: string; dot: string; label: string }> = {
  healthy:    { ring: "ring-emerald-400/40", dot: "bg-emerald-400", label: "Healthy" },
  warn:       { ring: "ring-amber-400/50",   dot: "bg-amber-400",   label: "Warning" },
  fail:       { ring: "ring-red-500/60",     dot: "bg-red-500",     label: "Failed" },
  recovering: { ring: "ring-cyan-400/60",    dot: "bg-cyan-400",    label: "Recovering" },
};

const FILTERS: { id: "all" | LayerId; label: string }[] = [
  { id: "all", label: "All" },
  ...LAYERS.map((l) => ({ id: l.id, label: l.title })),
];

/* ---------------- Live counter hook ---------------- */
function useTicker(base: number, jitter = 0.1, ms = 2000) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setV(base * (1 + (Math.random() - 0.5) * jitter));
    }, ms);
    return () => clearInterval(id);
  }, [base, jitter, ms]);
  return v;
}

/* ---------------- Sparkline ---------------- */
function Sparkline({ color = "#22d3ee", seed = 0 }: { color?: string; seed?: number }) {
  const [pts, setPts] = useState<number[]>(() =>
    Array.from({ length: 24 }, (_, i) => 20 + Math.sin(i / 2 + seed) * 8 + Math.random() * 10)
  );
  useEffect(() => {
    const id = setInterval(() => {
      setPts((p) => [...p.slice(1), 20 + Math.random() * 30]);
    }, 900);
    return () => clearInterval(id);
  }, []);
  const w = 100, h = 32;
  const path = pts.map((y, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * w} ${h - y}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-8 w-full">
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d={`${path} L ${w} ${h} L 0 ${h} Z`} fill={color} opacity="0.12" />
    </svg>
  );
}

/* ---------------- Node card ---------------- */
function NodeCard({
  node, status, onClick,
}: { node: OpsNode; status: Status; onClick: () => void }) {
  const s = STATUS_STYLES[status];
  const Icon = node.Icon;
  return (
    <motion.button
      layout
      onClick={onClick}
      whileHover={{ y: -3 }}
      className={`group relative flex w-full flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-left ring-1 ${s.ring} backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06]`}
    >
      <div className="flex items-start gap-2">
        <div
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
          style={{ background: `${node.color}22`, boxShadow: `0 0 24px ${node.color}30` }}
        >
          <Icon size={18} style={{ color: node.color }} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-semibold text-white">{node.name}</div>
          <div className="line-clamp-1 text-[11px] text-white/50">{node.desc}</div>
        </div>
        <span className={`h-2 w-2 shrink-0 rounded-full ${s.dot} shadow-[0_0_8px] shadow-current`} />
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {node.metrics.slice(0, 3).map((m) => (
          <div key={m.label} className="rounded-md bg-white/5 px-1.5 py-1">
            <div className="text-[9px] uppercase tracking-wider text-white/40">{m.label}</div>
            <div className="truncate text-[11px] font-medium text-white/90">{m.value}</div>
          </div>
        ))}
      </div>
      <Sparkline color={node.color} seed={node.id.charCodeAt(0)} />

      {status === "fail" && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-red-500/60"
          style={{ boxShadow: "inset 0 0 30px rgba(239,68,68,0.35)" }}
        />
      )}
      {status === "recovering" && (
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 1.2 }}
          className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-cyan-400/60"
        />
      )}
    </motion.button>
  );
}

/* ---------------- Layer column ---------------- */
function LayerColumn({
  layer, nodes, statuses, onSelect,
}: {
  layer: (typeof LAYERS)[number];
  nodes: OpsNode[];
  statuses: Record<string, Status>;
  onSelect: (n: OpsNode) => void;
}) {
  const LIcon = layer.Icon;
  return (
    <div
      data-layer={layer.id}
      className="flex w-[300px] shrink-0 snap-start flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-3 backdrop-blur-md sm:w-[320px]"
    >
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <div
          className="grid h-8 w-8 place-items-center rounded-lg"
          style={{ background: `${layer.color}22`, color: layer.color }}
        >
          <LIcon size={16} />
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-base leading-none">{layer.emoji}</span>
            <h3 className="text-sm font-semibold text-white">{layer.title}</h3>
          </div>
          <p className="line-clamp-1 text-[10.5px] text-white/50">{layer.desc}</p>
        </div>
        <span className="ml-auto rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">{nodes.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {nodes.map((n) => (
          <NodeCard key={n.id} node={n} status={statuses[n.id] ?? "healthy"} onClick={() => onSelect(n)} />
        ))}
      </div>
    </div>
  );
}

/* ---------------- Live packet flow overlay ---------------- */
function PacketFlow() {
  // A stylized horizontal wave suggesting traffic flowing across layers
  return (
    <svg
      className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-24 w-full -translate-y-1/2"
      viewBox="0 0 1200 100" preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="k8sflow" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M 0 50 Q 300 10 600 50 T 1200 50" stroke="url(#k8sflow)" strokeWidth="1.5" fill="none" />
      {[0, 0.25, 0.5, 0.75].map((d) => (
        <circle key={d} r="3" fill="#22d3ee">
          <animateMotion dur="6s" repeatCount="indefinite" begin={`${d * 6}s`}
            path="M 0 50 Q 300 10 600 50 T 1200 50" />
        </circle>
      ))}
    </svg>
  );
}

/* ---------------- Cluster stats strip ---------------- */
function ClusterStats() {
  const cpu = useTicker(62, 0.2, 1800);
  const mem = useTicker(48, 0.15, 2100);
  const rps = useTicker(8400, 0.25, 1400);
  const pods = useTicker(612, 0.02, 3000);
  const items = [
    { label: "Cluster CPU",    value: `${cpu.toFixed(0)}%`,   color: "#22c55e" },
    { label: "Cluster Memory", value: `${mem.toFixed(0)}%`,   color: "#22d3ee" },
    { label: "Requests / sec", value: `${(rps / 1000).toFixed(1)}k`, color: "#a855f7" },
    { label: "Running Pods",   value: `${pods.toFixed(0)}`,   color: "#f59e0b" },
    { label: "Nodes",          value: "48",                   color: "#06b6d4" },
    { label: "SLO Budget",     value: "97.4%",                color: "#22c55e" },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
      {items.map((it) => (
        <div key={it.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 backdrop-blur-md">
          <div className="text-[10px] uppercase tracking-wider text-white/50">{it.label}</div>
          <div className="mt-0.5 flex items-baseline gap-1.5">
            <span className="text-lg font-semibold text-white">{it.value}</span>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: it.color, boxShadow: `0 0 8px ${it.color}` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- GitOps pipeline strip ---------------- */
function GitOpsPipeline() {
  const [statuses, setStatuses] = useState<Record<string, StageStatus>>({});
  const [running, setRunning] = useState(false);

  const start = () => {
    setRunning(true);
    setStatuses({});
    GITOPS_STAGES.forEach((s, i) => {
      setTimeout(() => setStatuses((p) => ({ ...p, [s.id]: "running" })), i * 600);
      setTimeout(() => setStatuses((p) => ({ ...p, [s.id]: "success" })), i * 600 + 500);
      if (i === GITOPS_STAGES.length - 1) setTimeout(() => setRunning(false), i * 600 + 900);
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-white">GitOps Deployment Pipeline</h3>
          <p className="text-[11px] text-white/50">Developer → GitHub → Actions → Scan → Sign → ECR → Argo CD → EKS → Production</p>
        </div>
        <button
          onClick={start}
          disabled={running}
          className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-emerald-500/20 px-3 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 hover:bg-emerald-500/30 disabled:opacity-50"
        >
          <HiOutlinePlay size={13} />
          {running ? "Deploying…" : "Trigger Deploy"}
        </button>
      </div>
      <div className="mt-3 flex gap-1.5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {GITOPS_STAGES.map((s, i) => {
          const st = statuses[s.id] ?? "idle";
          const bg =
            st === "success" ? "bg-emerald-500/20 ring-emerald-400/40 text-emerald-200"
            : st === "running" ? "bg-cyan-500/20 ring-cyan-400/40 text-cyan-200"
            : st === "failed" ? "bg-red-500/20 ring-red-400/40 text-red-200"
            : "bg-white/5 ring-white/10 text-white/60";
          const Icon = s.Icon;
          return (
            <div key={s.id} className="flex items-center gap-1.5">
              <motion.div
                animate={st === "running" ? { scale: [1, 1.06, 1] } : { scale: 1 }}
                transition={{ repeat: st === "running" ? Infinity : 0, duration: 0.9 }}
                className={`flex min-w-[92px] flex-col items-center gap-1 rounded-lg px-2 py-1.5 ring-1 ${bg}`}
              >
                <Icon size={14} style={{ color: st === "idle" ? s.color : undefined }} />
                <span className="whitespace-nowrap text-[10px] font-medium">{s.name}</span>
              </motion.div>
              {i < GITOPS_STAGES.length - 1 && <HiChevronRight className="shrink-0 text-white/30" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---------------- Autoscaling visualizer ---------------- */
function Autoscaler() {
  const [traffic, setTraffic] = useState(30);
  const pods = Math.max(4, Math.min(20, Math.round(traffic / 5)));
  const nodes = Math.max(3, Math.ceil(pods / 4));
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">HPA + Karpenter Autoscaling</h3>
          <p className="text-[11px] text-white/50">Slide traffic — watch pods scale, then nodes provision.</p>
        </div>
        <span className="rounded-full bg-cyan-500/15 px-2 py-0.5 text-[10px] font-medium text-cyan-300 ring-1 ring-cyan-400/30">LIVE</span>
      </div>
      <div className="mt-3">
        <input
          type="range" min={5} max={100} value={traffic}
          onChange={(e) => setTraffic(Number(e.target.value))}
          className="w-full accent-cyan-400"
          aria-label="Simulated traffic"
        />
        <div className="mt-1 flex justify-between text-[10px] text-white/40">
          <span>low</span><span>{traffic}%</span><span>peak</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div>
          <div className="mb-1 text-[10px] uppercase tracking-wider text-white/50">Pods ({pods})</div>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i < pods ? 1 : 0.12, scale: i < pods ? 1 : 0.85 }}
                className="h-5 w-5 rounded-md bg-gradient-to-br from-cyan-400 to-blue-500"
              />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-1 text-[10px] uppercase tracking-wider text-white/50">Nodes ({nodes})</div>
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i < nodes ? 1 : 0.12, scale: i < nodes ? 1 : 0.9 }}
                className="h-6 w-8 rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-500"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Detail drawer ---------------- */
function Drawer({ node, onClose }: { node: OpsNode | null; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <AnimatePresence>
      {node && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-white/10 bg-[#0b0f1a]/95 backdrop-blur-xl"
            role="dialog" aria-modal="true" aria-label={`${node.name} details`}
          >
            <header className="sticky top-0 flex items-center gap-3 border-b border-white/10 bg-[#0b0f1a]/90 p-4 backdrop-blur-xl">
              <div
                className="grid h-10 w-10 place-items-center rounded-xl"
                style={{ background: `${node.color}22`, boxShadow: `0 0 24px ${node.color}40` }}
              >
                <node.Icon size={20} style={{ color: node.color }} />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold text-white">{node.name}</h3>
                <p className="text-[11px] text-white/50">{node.desc}</p>
              </div>
              <button onClick={onClose} className="ml-auto rounded-lg p-2 text-white/60 hover:bg-white/10 hover:text-white">
                <HiX size={18} />
              </button>
            </header>
            <div className="space-y-5 p-4">
              <section>
                <h4 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">Architecture Role</h4>
                <p className="text-sm text-white/80">{node.role}</p>
              </section>
              <section className="grid grid-cols-3 gap-2">
                {node.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                    <div className="text-[10px] uppercase tracking-wider text-white/50">{m.label}</div>
                    <div className="mt-0.5 text-sm font-semibold text-white">{m.value}</div>
                  </div>
                ))}
              </section>
              <section>
                <h4 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">Best Practices</h4>
                <ul className="space-y-1.5">
                  {node.best.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-white/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />{b}
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h4 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">Commands</h4>
                <div className="space-y-1.5">
                  {node.cmds.map((c) => (
                    <pre key={c} className="overflow-x-auto rounded-lg bg-black/40 p-2.5 font-mono text-[11.5px] text-emerald-300 ring-1 ring-white/10">
                      <span className="text-white/40">$ </span>{c}
                    </pre>
                  ))}
                </div>
              </section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------------- Main component ---------------- */
export function K8sOpsCenter() {
  const [filter, setFilter] = useState<"all" | LayerId>("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<OpsNode | null>(null);
  const [statuses, setStatuses] = useState<Record<string, Status>>({});
  const [activeIncident, setActiveIncident] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const visibleLayers = useMemo(
    () => LAYERS.filter((l) => filter === "all" || l.id === filter),
    [filter]
  );

  const byLayer = useMemo(() => {
    const q = query.trim().toLowerCase();
    const m: Record<LayerId, OpsNode[]> = {
      edge: [], ingress: [], security: [], workloads: [], data: [], cloud: [], platform: [],
    };
    for (const n of NODES) {
      if (q && !`${n.name} ${n.desc}`.toLowerCase().includes(q)) continue;
      m[n.layer].push(n);
    }
    return m;
  }, [query]);

  // Trigger an incident: mark target node fail → recovering → healthy
  const triggerIncident = (incidentId: string) => {
    const inc = INCIDENTS.find((i) => i.id === incidentId);
    if (!inc) return;
    setActiveIncident(inc.label);
    setStatuses((s) => ({ ...s, [inc.node]: "fail" }));
    setTimeout(() => setStatuses((s) => ({ ...s, [inc.node]: "recovering" })), 2200);
    setTimeout(() => {
      setStatuses((s) => ({ ...s, [inc.node]: "healthy" }));
      setActiveIncident(null);
    }, 5000);
  };

  const scroll = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section id="ops-center" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-cyan-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Live · Kubernetes Operations Center
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Production <span className="text-gradient">Platform Dashboard</span>
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-white/60">
              End-to-end view across 7 architectural layers — Edge, Ingress, Security, Workloads, Data,
              Cloud, and Platform. Click any component for role, best practices, and commands.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <HiSearch className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pods, services, tools…"
                className="h-9 w-56 rounded-lg border border-white/10 bg-white/5 pl-8 pr-3 text-xs text-white placeholder:text-white/40 focus:border-cyan-400/40 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <ClusterStats />

        {/* Filters + incident bar */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`h-8 rounded-full px-3 text-xs font-medium ring-1 transition ${
                filter === f.id
                  ? "bg-cyan-400/20 text-cyan-200 ring-cyan-400/40"
                  : "bg-white/5 text-white/60 ring-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <button onClick={() => scroll(-1)} className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10">
              <HiChevronLeft />
            </button>
            <button onClick={() => scroll(1)} className="grid h-8 w-8 place-items-center rounded-lg bg-white/5 text-white/70 ring-1 ring-white/10 hover:bg-white/10">
              <HiChevronRight />
            </button>
          </div>
        </div>

        {/* Incident simulator */}
        <div className="mt-3 flex flex-wrap items-center gap-2 rounded-2xl border border-red-400/20 bg-red-500/[0.05] p-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-red-300">
            <HiOutlineLightningBolt />
            Chaos Simulator
          </div>
          {INCIDENTS.map((i) => (
            <button
              key={i.id}
              onClick={() => triggerIncident(i.id)}
              disabled={!!activeIncident}
              className="h-7 rounded-md bg-white/5 px-2.5 text-[11px] font-medium text-white/80 ring-1 ring-white/10 hover:bg-red-500/20 hover:text-red-200 hover:ring-red-400/40 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {i.label}
            </button>
          ))}
          <AnimatePresence>
            {activeIncident && (
              <motion.span
                initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                className="ml-auto rounded-full bg-red-500/20 px-2.5 py-0.5 text-[10px] font-medium text-red-200 ring-1 ring-red-400/40"
              >
                Incident: {activeIncident} — auto-remediation in progress
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Architecture explorer */}
        <div className="relative mt-5">
          <PacketFlow />
          <div
            ref={scrollRef}
            className="relative z-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {visibleLayers.map((l) => (
              <LayerColumn
                key={l.id}
                layer={l}
                nodes={byLayer[l.id]}
                statuses={statuses}
                onSelect={setSelected}
              />
            ))}
          </div>
        </div>

        {/* GitOps + Autoscaling */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2"><GitOpsPipeline /></div>
          <Autoscaler />
        </div>
      </div>

      <Drawer node={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

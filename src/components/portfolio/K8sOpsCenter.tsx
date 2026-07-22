import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  HiOutlineX, HiOutlinePlay, HiOutlinePause, HiOutlineRefresh, HiSearch,
  HiOutlineExternalLink, HiOutlineExclamation, HiOutlineCheckCircle,
} from "react-icons/hi";
import {
  K8S_NODES, K8S_CATEGORIES, INITIAL_WORKERS, INCIDENTS,
  type K8sNode, type K8sCategory, type NodeStatus, type WorkerNode, type Incident,
} from "@/lib/k8s-workflow-data";




const statusRing: Record<NodeStatus, string> = {
  healthy:  "border-emerald-400/40",
  warning:  "border-amber-400/60",
  critical: "border-rose-400/70",
  syncing:  "border-cyan-400/60",
};
const statusDot: Record<NodeStatus, string> = {
  healthy:  "bg-emerald-400",
  warning:  "bg-amber-400 animate-pulse",
  critical: "bg-rose-400 animate-pulse",
  syncing:  "bg-cyan-300 animate-pulse",
};

/* --------------- Component --------------- */
export function K8sOpsCenter() {
  const [filter, setFilter] = useState<(typeof K8S_CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<K8sNode | null>(null);
  const [nodes, setNodes] = useState<K8sNode[]>(K8S_NODES);
  const [workers, setWorkers] = useState<WorkerNode[]>(INITIAL_WORKERS);
  const [running, setRunning] = useState(true);
  const [banner, setBanner] = useState<string | null>(null);



  /* Live metrics jitter */
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setNodes(prev => prev.map(n => {
        if (n.status === "critical") return n;
        const j = (v: number) => Math.max(3, Math.min(96, v + (Math.random() - 0.5) * 6));
        return { ...n, cpu: n.cpu ? j(n.cpu) : n.cpu, mem: n.mem ? j(n.mem) : n.mem };
      }));
      setWorkers(prev => prev.map(w => {
        if (w.status !== "Ready") return w;
        const j = (v: number) => Math.max(5, Math.min(95, v + (Math.random() - 0.5) * 5));
        return { ...w, cpu: j(w.cpu), mem: j(w.mem) };
      }));
    }, 1400);
    return () => window.clearInterval(id);
  }, [running]);

  /* Incident injection */
  const triggerIncident = (i: Incident) => {
    const inc = INCIDENTS.find(x => x.id === i)!;
    setBanner(`⚠ ${inc.label} · ${inc.message}`);
    if (inc.target === "eks") {
      // node failure: mark a worker NotReady, then drain, then healthy
      setWorkers(prev => prev.map((w, idx) => idx === 2 ? { ...w, status: "NotReady", cpu: 0, mem: 0, pods: 0 } : w));
      window.setTimeout(() => {
        setWorkers(prev => prev.map((w, idx) => idx === 2 ? { ...w, status: "Draining" } : w));
      }, 1500);
      window.setTimeout(() => {
        setWorkers(prev => prev.map((w, idx) => idx === 2 ? { ...w, status: "Ready", cpu: 44, mem: 51, pods: 20 } : w));
        setBanner("✓ Karpenter provisioned replacement node · workloads recovered");
      }, 4200);
    } else {
      setNodes(prev => prev.map(n => n.id === inc.target ? { ...n, status: "critical", cpu: 95, mem: 92 } : n));
      window.setTimeout(() => {
        setNodes(prev => prev.map(n => n.id === inc.target ? { ...n, status: "warning" } : n));
      }, 1800);
      window.setTimeout(() => {
        setNodes(prev => prev.map(n => n.id === inc.target ? { ...n, status: "healthy", cpu: Math.max(20, Math.round((n.cpu ?? 30) / 2)), mem: Math.max(20, Math.round((n.mem ?? 30) / 2)) } : n));
        setBanner("✓ Self-healed · pods rescheduled · SLO within budget");
      }, 4200);
    }
    window.setTimeout(() => setBanner(null), 6500);
  };

  const reset = () => {
    setNodes(K8S_NODES);
    setWorkers(INITIAL_WORKERS);
    setBanner(null);
    setQuery("");
    setFilter("All");
  };




  /* Aggregate metrics */
  const clusterMetrics = useMemo(() => {
    const cpu = Math.round(workers.reduce((s, w) => s + w.cpu, 0) / workers.length);
    const mem = Math.round(workers.reduce((s, w) => s + w.mem, 0) / workers.length);
    const pods = workers.reduce((s, w) => s + w.pods, 0);
    const ready = workers.filter(w => w.status === "Ready").length;
    const critical = nodes.filter(n => n.status === "critical").length;
    return { cpu, mem, pods, ready, total: workers.length, critical };
  }, [workers, nodes]);

  return (
    <section id="k8s-ops" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-primary">/ Kubernetes Operations Center</span>
          <h2 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Production K8s — from edge to control plane, live.
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            An interactive control plane inspired by Lens, Datadog, Grafana, and the AWS EKS console.
            22 services, 4 nodes, live metrics, incident simulation, and self-healing across a real
            production topology.
          </p>
        </div>

        {/* Cluster dashboard */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          <StatTile label="Cluster CPU" value={`${clusterMetrics.cpu}%`} bar={clusterMetrics.cpu} accent="var(--color-aurora-1)" />
          <StatTile label="Cluster Memory" value={`${clusterMetrics.mem}%`} bar={clusterMetrics.mem} accent="var(--color-aurora-2)" />
          <StatTile label="Nodes Ready" value={`${clusterMetrics.ready}/${clusterMetrics.total}`} accent="#34d399" />
          <StatTile label="Pods Running" value={`${clusterMetrics.pods}`} accent="#22d3ee" />
          <StatTile label="Critical Alerts" value={`${clusterMetrics.critical}`} accent={clusterMetrics.critical > 0 ? "#f87171" : "#34d399"} />
          <StatTile label="SLO Availability" value="99.94%" accent="#a78bfa" />
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {K8S_CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full border px-3 py-1.5 text-[11px] font-medium transition-all ${
                  filter === c
                    ? "border-primary/60 bg-primary/10 text-foreground"
                    : "border-white/10 text-muted-foreground hover:border-white/25 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="glass flex items-center gap-2 rounded-full px-3 py-1.5">
              <HiSearch className="text-muted-foreground" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search pods, services, namespaces…"
                aria-label="Search cluster"
                className="w-56 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              />
            </div>
            <button
              onClick={() => setRunning(r => !r)}
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background hover:bg-foreground/90"
            >
              {running ? <><HiOutlinePause /> Pause</> : <><HiOutlinePlay /> Live</>}
            </button>
            <button onClick={reset} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs hover:bg-white/10">
              <HiOutlineRefresh /> Reset
            </button>
          </div>
        </div>

        {/* Incident simulator */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Simulate incident:</span>
          {INCIDENTS.map(i => (
            <button
              key={i.id}
              onClick={() => triggerIncident(i.id)}
              className="rounded-md border border-rose-400/30 bg-rose-500/5 px-2 py-1 text-[10px] text-rose-200 transition-colors hover:bg-rose-500/15"
            >
              {i.label}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {banner && (
            <motion.div
              initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className={`mt-4 flex items-center gap-2 rounded-xl border px-4 py-2 text-xs ${
                banner.startsWith("✓")
                  ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-200"
                  : "border-rose-400/40 bg-rose-500/10 text-rose-200"
              }`}
            >
              {banner.startsWith("✓") ? <HiOutlineCheckCircle /> : <HiOutlineExclamation />}
              <span className="font-mono">{banner}</span>
            </motion.div>
          )}
        </AnimatePresence>





        {/* Worker nodes panel */}
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass rounded-2xl border border-white/10 p-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">/ Worker Plane</div>
                <h3 className="mt-1 text-lg font-semibold">EKS Node Group · Karpenter-managed</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-muted-foreground">
                us-east-1 · 3 AZs
              </span>
            </div>
            <div className="grid gap-2">
              {workers.map(w => (
                <motion.div
                  layout key={w.id}
                  className={`grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-3 rounded-lg border p-3 text-xs ${
                    w.status === "Ready"    ? "border-emerald-400/20" :
                    w.status === "Draining" ? "border-amber-400/40 bg-amber-500/5" :
                                              "border-rose-400/40 bg-rose-500/5"
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                      w.status === "Ready" ? "bg-emerald-400" :
                      w.status === "Draining" ? "bg-amber-400 animate-pulse" : "bg-rose-400 animate-pulse"
                    }`} />
                    <div className="min-w-0">
                      <div className="truncate font-mono">{w.id}</div>
                      <div className="text-[10px] text-muted-foreground">{w.az} · {w.instance}</div>
                    </div>
                  </div>
                  <div className="w-24"><MiniBar label="CPU" v={w.cpu} color="var(--color-aurora-1)" /></div>
                  <div className="w-24"><MiniBar label="MEM" v={w.mem} color="var(--color-aurora-2)" /></div>
                  <div className="text-right font-mono tabular-nums text-muted-foreground">
                    {w.pods}/{w.capacity} pods
                  </div>
                  <span className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${
                    w.status === "Ready" ? "bg-emerald-500/15 text-emerald-300" :
                    w.status === "Draining" ? "bg-amber-500/15 text-amber-200" :
                    "bg-rose-500/15 text-rose-200"
                  }`}>{w.status}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pod grid */}
          <div className="glass rounded-2xl border border-white/10 p-5">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">/ Pods</div>
                <h3 className="mt-1 text-lg font-semibold">Live pod topology</h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-muted-foreground">
                {clusterMetrics.pods} pods
              </span>
            </div>
            <PodGrid workers={workers} nodes={nodes} />
            <div className="mt-3 flex items-center gap-3 text-[10px] text-muted-foreground">
              <Legend color="bg-emerald-400" label="Running" />
              <Legend color="bg-cyan-300" label="Syncing" />
              <Legend color="bg-amber-400" label="Pending" />
              <Legend color="bg-rose-400" label="Failed" />
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {active && <DetailDrawer node={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

/* --------------- Sub components --------------- */

function StatTile({ label, value, bar, accent }: { label: string; value: string; bar?: number; accent: string }) {
  return (
    <div className="glass rounded-xl border border-white/10 p-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-semibold tabular-nums" style={{ color: accent }}>{value}</div>
      {typeof bar === "number" && (
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full"
            style={{ background: accent }}
            animate={{ width: `${bar}%` }}
            transition={{ ease: "easeOut", duration: 0.6 }}
          />
        </div>
      )}
    </div>
  );
}

function MiniBar({ label, v, color }: { label: string; v: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between text-[8px] text-muted-foreground">
        <span>{label}</span>
        <span className="tabular-nums">{Math.round(v)}%</span>
      </div>
      <div className="mt-0.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: color }}
          animate={{ width: `${v}%` }}
          transition={{ ease: "easeOut", duration: 0.5 }}
        />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} /> {label}
    </span>
  );
}

function PodGrid({ workers, nodes }: { workers: WorkerNode[]; nodes: K8sNode[] }) {
  // synthesize colored pod squares distributed across workers
  const criticalIds = new Set(nodes.filter(n => n.status === "critical").map(n => n.id));
  const syncingIds = new Set(nodes.filter(n => n.status === "syncing").map(n => n.id));
  const warningIds = new Set(nodes.filter(n => n.status === "warning").map(n => n.id));
  const services = nodes.filter(n => n.replicas && n.replicas > 0);
  const pods: { key: string; status: "ok" | "sync" | "warn" | "fail"; label: string }[] = [];
  services.forEach(s => {
    for (let i = 0; i < (s.replicas ?? 0); i++) {
      const status = criticalIds.has(s.id) ? "fail"
        : syncingIds.has(s.id) ? "sync"
        : warningIds.has(s.id) ? "warn" : "ok";
      pods.push({ key: `${s.id}-${i}`, status, label: `${s.id}-${i}` });
    }
  });
  const clr: Record<string, string> = {
    ok: "bg-emerald-400/80 border-emerald-300/70",
    sync: "bg-cyan-300/80 border-cyan-200/70",
    warn: "bg-amber-400/80 border-amber-300/70",
    fail: "bg-rose-500/80 border-rose-300/70",
  };
  return (
    <div className="grid grid-cols-12 gap-1 sm:grid-cols-16">
      {pods.map((p, i) => (
        <motion.div
          key={p.key}
          layout
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ delay: (i % 20) * 0.02 }}
          title={p.label}
          className={`h-4 w-4 rounded-[3px] border ${clr[p.status]} ${p.status !== "ok" ? "animate-pulse" : ""}`}
        />
      ))}
      {workers.filter(w => w.status !== "Ready").length > 0 && (
        <div className="col-span-full mt-1 text-[10px] text-amber-300">
          ⚡ Karpenter rebalancing pods away from unhealthy node…
        </div>
      )}
    </div>
  );
}

function DetailDrawer({ node, onClose }: { node: K8sNode; onClose: () => void }) {
  const Icon = node.icon;
  return (
    <motion.div
      className="fixed inset-0 z-[70] flex justify-end"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      />
      <motion.aside
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="glass-strong relative flex h-full w-full max-w-lg flex-col overflow-y-auto border-l border-white/10 p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02]">
              <Icon className="h-5 w-5" style={{ color: node.color }} />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {node.categories.join(" · ")}
              </div>
              <h3 className="text-lg font-semibold">{node.name}</h3>
              <div className="text-[11px] text-muted-foreground">
                {[node.namespace, node.version, node.ip, node.protocol].filter(Boolean).join(" · ")}
              </div>
            </div>
          </div>
          <button onClick={onClose} className="rounded-full p-1.5 hover:bg-white/10" aria-label="Close">
            <HiOutlineX />
          </button>
        </div>

        <p className="mt-5 text-sm text-muted-foreground">{node.description}</p>

        {(node.cpu > 0 || node.mem > 0 || node.replicas) && (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {node.replicas != null && <MetricCard label="Replicas" value={String(node.replicas)} />}
            {node.cpu > 0 && <MetricCard label="CPU" value={`${Math.round(node.cpu)}%`} />}
            {node.mem > 0 && <MetricCard label="Memory" value={`${Math.round(node.mem)}%`} />}
            {node.latencyMs != null && <MetricCard label="p50 Latency" value={`${node.latencyMs}ms`} />}
            <MetricCard label="Status" value={node.status} />
            <MetricCard label="Uptime" value="99.94%" />
          </div>
        )}

        {node.yaml && (
          <Section title="Manifest (YAML)">
            <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/50 p-3 font-mono text-[11px] leading-relaxed text-foreground/90">
              <code>{node.yaml}</code>
            </pre>
          </Section>
        )}

        {node.kubectl && node.kubectl.length > 0 && (
          <Section title="kubectl commands">
            <div className="space-y-1.5">
              {node.kubectl.map(c => (
                <pre key={c} className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-[11px] text-foreground/90">
                  <code>$ {c}</code>
                </pre>
              ))}
            </div>
          </Section>
        )}

        {node.bestPractices && node.bestPractices.length > 0 && (
          <Section title="Best Practices">
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {node.bestPractices.map(b => (
                <li key={b} className="flex gap-2">
                  <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-emerald-400" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {node.troubleshooting && node.troubleshooting.length > 0 && (
          <Section title="Troubleshooting">
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {node.troubleshooting.map(t => (
                <li key={t} className="flex gap-2">
                  <HiOutlineExclamation className="mt-0.5 shrink-0 text-amber-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        <div className="mt-6">
          <a
            href={node.docs} target="_blank" rel="noopener noreferrer"
            className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs hover:bg-white/10"
          >
            Documentation <HiOutlineExternalLink />
          </a>
        </div>
      </motion.aside>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-5">
      <div className="mb-2 text-[11px] uppercase tracking-widest text-muted-foreground">{title}</div>
      {children}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-semibold capitalize">{value}</div>
    </div>
  );
}

/* --------------- Architecture Explorer (horizontal-scroll layered) --------------- */
function ArchitectureExplorer({
  nodes, visibleIds, running, onOpen, canvasRef, onMove, onLeave, spot,
}: {
  nodes: K8sNode[];
  visibleIds: Set<string>;
  running: boolean;
  onOpen: (n: K8sNode) => void;
  canvasRef: React.RefObject<HTMLDivElement | null>;
  onMove: (e: React.MouseEvent) => void;
  onLeave: () => void;
  spot: { x: number; y: number } | null;
}) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  // Group nodes by their column (0..6) → 7 architecture layers.
  const grouped = useMemo(() => {
    const g: K8sNode[][] = LAYERS.map(() => []);
    nodes.forEach(n => {
      const idx = Math.min(Math.max(n.column, 0), LAYERS.length - 1);
      g[idx].push(n);
    });
    return g;
  }, [nodes]);

  // Wheel → horizontal scroll (vertical wheel + shift+wheel both work).
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      // let vertical page scroll pass through when explorer can't scroll further
      const atStart = el.scrollLeft <= 0 && e.deltaY < 0;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 && e.deltaY > 0;
      if (atStart || atEnd) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "auto" });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div
      ref={canvasRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass relative mt-6 overflow-hidden rounded-2xl border border-white/10"
    >
      {spot && (
        <div
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `radial-gradient(500px circle at ${spot.x}px ${spot.y}px, color-mix(in oklab, var(--color-aurora-1) 10%, transparent), transparent 60%)`,
          }}
        />
      )}

      {/* Nav arrows */}
      <button
        type="button"
        aria-label="Scroll left"
        onClick={() => scrollBy(-1)}
        className="glass-strong absolute left-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 text-foreground/80 hover:text-foreground"
      >
        <HiOutlineChevronRight className="rotate-180" />
      </button>
      <button
        type="button"
        aria-label="Scroll right"
        onClick={() => scrollBy(1)}
        className="glass-strong absolute right-3 top-1/2 z-20 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-white/10 text-foreground/80 hover:text-foreground"
      >
        <HiOutlineChevronRight />
      </button>

      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="no-scrollbar relative z-10 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden scroll-smooth p-5"
        style={{ scrollbarWidth: "none" }}
        role="region"
        aria-label="Kubernetes architecture layers, horizontally scrollable"
      >
        {LAYERS.map((layer, i) => {
          const Icon = layer.icon;
          const layerNodes = grouped[i];
          return (
            <div key={layer.title} className="flex snap-start items-stretch">
              <motion.section
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="relative flex w-[300px] shrink-0 flex-col gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-4 sm:w-[320px]"
                aria-labelledby={`layer-${i}`}
              >
                {/* Layer header */}
                <header className="flex items-start gap-3 border-b border-white/5 pb-3">
                  <div
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10"
                    style={{ background: `color-mix(in oklab, ${layer.accent} 18%, transparent)` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: layer.accent }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Layer {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 id={`layer-${i}`} className="truncate text-sm font-semibold">
                      <span aria-hidden className="mr-1.5">{layer.emoji}</span>
                      {layer.title}
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">
                      {layer.blurb}
                    </p>
                  </div>
                  <span
                    className="ml-auto shrink-0 rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                    aria-label={`${layerNodes.length} components`}
                  >
                    {layerNodes.length}
                  </span>
                </header>

                {/* Cards */}
                <div className="flex flex-col gap-2">
                  {layerNodes.length === 0 && (
                    <div className="rounded-lg border border-dashed border-white/10 p-3 text-center text-[11px] text-muted-foreground">
                      No components match current filter.
                    </div>
                  )}
                  {layerNodes.map(n => (
                    <NodeCardCompact
                      key={n.id}
                      node={n}
                      dim={!visibleIds.has(n.id)}
                      onOpen={() => onOpen(n)}
                    />
                  ))}
                </div>
              </motion.section>

              {/* Connector arrow between layers */}
              {i < LAYERS.length - 1 && (
                <div className="relative mx-1 flex w-8 shrink-0 items-center justify-center sm:w-10">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="opacity-70" aria-hidden>
                    <defs>
                      <linearGradient id={`conn-${i}`} x1="0" x2="1">
                        <stop offset="0" stopColor="var(--color-aurora-1)" stopOpacity="0.1" />
                        <stop offset="0.5" stopColor="var(--color-aurora-1)" stopOpacity="0.8" />
                        <stop offset="1" stopColor="var(--color-aurora-2)" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                    <path d="M 2 20 L 34 20" stroke={`url(#conn-${i})`} strokeWidth="1.5" fill="none" />
                    <path d="M 30 14 L 36 20 L 30 26" stroke="var(--color-aurora-1)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                    {running && (
                      <circle r="2" fill="var(--color-aurora-1)" filter="drop-shadow(0 0 6px var(--color-aurora-1))">
                        <animateMotion dur={`${1.6 + (i % 3) * 0.4}s`} repeatCount="indefinite" path="M 2 20 L 34 20" />
                      </circle>
                    )}
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Scroll hint */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
        ← scroll layers →
      </div>
    </div>
  );
}

function NodeCardCompact({ node, dim, onOpen }: { node: K8sNode; dim: boolean; onOpen: () => void }) {
  const Icon = node.icon;
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      animate={{ opacity: dim ? 0.25 : 1 }}
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.18 }}
      className={`glass group relative flex flex-col gap-1.5 rounded-xl border p-2.5 text-left transition-shadow hover:shadow-[0_10px_40px_-10px_color-mix(in_oklab,var(--color-brand)_50%,transparent)] ${statusRing[node.status]}`}
      aria-label={`${node.name} — ${node.short}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-gradient-to-br from-white/10 to-white/[0.02]">
            <Icon className="h-3.5 w-3.5" style={{ color: node.color }} />
          </div>
          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold leading-tight">{node.name}</div>
            <div className="truncate text-[10px] text-muted-foreground">{node.short}</div>
          </div>
        </div>
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusDot[node.status]}`} />
      </div>

      {(node.cpu > 0 || node.mem > 0) && (
        <div className="grid grid-cols-2 gap-1.5 pt-0.5">
          <MiniBar label="CPU" v={node.cpu} color="var(--color-aurora-1)" />
          <MiniBar label="MEM" v={node.mem} color="var(--color-aurora-2)" />
        </div>
      )}

      <div className="flex items-center justify-between text-[9px] text-muted-foreground">
        <span className="font-mono">{node.namespace ?? node.protocol ?? "—"}</span>
        <span className="font-mono">
          {node.replicas ? `×${node.replicas}` : node.latencyMs ? `${node.latencyMs}ms` : ""}
        </span>
      </div>
    </motion.button>
  );
}


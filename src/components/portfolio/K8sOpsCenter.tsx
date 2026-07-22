import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiKubernetes, SiDocker, SiHelm, SiArgo, SiPrometheus, SiGrafana,
  SiIstio, SiNginx, SiGithub, SiGithubactions, SiRedis,
  SiPostgresql, SiCloudflare, SiGrafana as SiLoki, SiOpentelemetry,
  SiJaeger, SiKubernetes as SiEks,
} from "react-icons/si";
import { FaAws, FaShieldAlt, FaLock, FaKey, FaFire, FaGavel, FaSearch, FaBolt, FaChartLine, FaCubes, FaServer, FaNetworkWired, FaDatabase, FaMoneyBillWave, FaGithub as FaGh, FaCheckCircle, FaExclamationTriangle, FaTimesCircle, FaPlay, FaPause, FaRedo, FaArrowRight } from "react-icons/fa";
import { HiOutlineX, HiOutlineChip, HiOutlineTerminal, HiOutlineDocumentText } from "react-icons/hi";

/* ────────────────────────────────────────────────────────────────
   Types
   ──────────────────────────────────────────────────────────────── */
type NodeStatus = "healthy" | "warn" | "degraded";
interface FlowNode {
  id: string;
  label: string;
  Icon: IconType;
  color: string;
  role: string;
  latency: number;
  rps: number;
  status: NodeStatus;
}

/* ────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────── */
const FLOW: FlowNode[] = [
  { id: "users", label: "Users", Icon: FaGh, color: "#94a3b8", role: "Global end users", latency: 0, rps: 2347, status: "healthy" },
  { id: "cf", label: "Cloudflare", Icon: SiCloudflare, color: "#F38020", role: "CDN · DDoS · WAF edge", latency: 8, rps: 2347, status: "healthy" },
  { id: "r53", label: "Route 53", Icon: FaAws, color: "#FF9900", role: "DNS · health checks", latency: 2, rps: 2347, status: "healthy" },
  { id: "cfront", label: "CloudFront", Icon: FaAws, color: "#FF9900", role: "AWS CDN", latency: 12, rps: 2320, status: "healthy" },
  { id: "waf", label: "AWS WAF", Icon: FaShieldAlt, color: "#DD344C", role: "L7 firewall rules", latency: 3, rps: 2318, status: "healthy" },
  { id: "alb", label: "ALB", Icon: FaAws, color: "#8C4FFF", role: "Application load balancer", latency: 4, rps: 2318, status: "healthy" },
  { id: "lbc", label: "AWS LB Controller", Icon: SiKubernetes, color: "#326CE5", role: "Provisions ALB/NLB via Ingress", latency: 0, rps: 0, status: "healthy" },
  { id: "ingress", label: "NGINX Ingress", Icon: SiNginx, color: "#009639", role: "Cluster ingress · TLS termination", latency: 5, rps: 2312, status: "healthy" },
  { id: "istio", label: "Istio Mesh", Icon: SiIstio, color: "#466BB0", role: "mTLS · traffic policy · retries", latency: 3, rps: 2312, status: "healthy" },
  { id: "fe", label: "Frontend", Icon: FaCubes, color: "#22d3ee", role: "React SPA · 6 pods", latency: 18, rps: 1820, status: "healthy" },
  { id: "be", label: "Backend API", Icon: FaCubes, color: "#a78bfa", role: "Node.js API · 12 pods", latency: 24, rps: 1580, status: "healthy" },
  { id: "auth", label: "Auth", Icon: FaKey, color: "#f59e0b", role: "OIDC / JWT · 4 pods", latency: 14, rps: 640, status: "healthy" },
  { id: "orders", label: "Orders", Icon: FaCubes, color: "#34d399", role: "Domain service · 8 pods", latency: 27, rps: 890, status: "healthy" },
  { id: "pay", label: "Payments", Icon: FaCubes, color: "#f472b6", role: "PCI · 6 pods", latency: 42, rps: 310, status: "warn" },
  { id: "redis", label: "Redis", Icon: SiRedis, color: "#DC382D", role: "Cache · session store", latency: 1, rps: 4200, status: "healthy" },
  { id: "pg", label: "PostgreSQL", Icon: SiPostgresql, color: "#336791", role: "RDS Multi-AZ", latency: 6, rps: 1220, status: "healthy" },
  { id: "ext", label: "External APIs", Icon: FaNetworkWired, color: "#e879f9", role: "Stripe · Twilio · SendGrid", latency: 120, rps: 180, status: "healthy" },
];

interface K8sResource {
  id: string;
  label: string;
  kind: string;
  Icon: IconType;
  color: string;
  cpu: string;
  mem: string;
  age: string;
  ns: string;
  status: NodeStatus;
  image?: string;
  restarts?: number;
  children?: K8sResource[];
}

const K8S_TREE: K8sResource = {
  id: "eks", label: "prod-eks-01", kind: "EKS Cluster", Icon: FaAws, color: "#FF9900",
  cpu: "48%", mem: "61%", age: "412d", ns: "-", status: "healthy",
  children: [
    {
      id: "ng-app", label: "app-nodegroup", kind: "NodeGroup", Icon: FaServer, color: "#8C4FFF",
      cpu: "52%", mem: "64%", age: "412d", ns: "-", status: "healthy",
      children: [
        {
          id: "node-1", label: "ip-10-0-1-42", kind: "Worker Node · m6i.2xlarge", Icon: FaServer, color: "#8C4FFF",
          cpu: "44%", mem: "58%", age: "38d", ns: "-", status: "healthy",
          children: [
            {
              id: "ns-prod", label: "production", kind: "Namespace", Icon: FaCubes, color: "#22d3ee",
              cpu: "31%", mem: "42%", age: "412d", ns: "production", status: "healthy",
              children: [
                {
                  id: "dep-fe", label: "frontend", kind: "Deployment · 6/6", Icon: SiKubernetes, color: "#326CE5",
                  cpu: "12%", mem: "24%", age: "12d", ns: "production", status: "healthy", image: "ecr/frontend:v2.14.3", restarts: 0,
                  children: [
                    { id: "rs-fe", label: "frontend-8f2c", kind: "ReplicaSet", Icon: SiKubernetes, color: "#326CE5", cpu: "12%", mem: "24%", age: "12d", ns: "production", status: "healthy",
                      children: [
                        { id: "pod-fe-1", label: "frontend-8f2c-abcd1", kind: "Pod · 1/1", Icon: FaCubes, color: "#22d3ee", cpu: "82m", mem: "128Mi", age: "12d", ns: "production", status: "healthy", image: "ecr/frontend:v2.14.3", restarts: 0 },
                        { id: "pod-fe-2", label: "frontend-8f2c-efgh2", kind: "Pod · 1/1", Icon: FaCubes, color: "#22d3ee", cpu: "76m", mem: "124Mi", age: "12d", ns: "production", status: "healthy", image: "ecr/frontend:v2.14.3", restarts: 0 },
                      ],
                    },
                  ],
                },
                {
                  id: "dep-be", label: "backend-api", kind: "Deployment · 12/12", Icon: SiKubernetes, color: "#326CE5",
                  cpu: "28%", mem: "44%", age: "3d", ns: "production", status: "healthy", image: "ecr/backend:v4.2.0", restarts: 1,
                },
                {
                  id: "dep-pay", label: "payments", kind: "Deployment · 6/6", Icon: SiKubernetes, color: "#326CE5",
                  cpu: "56%", mem: "72%", age: "1d", ns: "production", status: "warn", image: "ecr/payments:v1.8.4", restarts: 3,
                },
                { id: "svc-be", label: "backend-svc", kind: "Service · ClusterIP", Icon: FaNetworkWired, color: "#a78bfa", cpu: "-", mem: "-", age: "3d", ns: "production", status: "healthy" },
                { id: "ing-web", label: "web-ingress", kind: "Ingress · nginx", Icon: SiNginx, color: "#009639", cpu: "-", mem: "-", age: "10d", ns: "production", status: "healthy" },
                { id: "pvc-pg", label: "pg-data", kind: "PVC · 200Gi · gp3", Icon: FaDatabase, color: "#336791", cpu: "-", mem: "-", age: "180d", ns: "production", status: "healthy" },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ng-sys", label: "system-nodegroup", kind: "NodeGroup", Icon: FaServer, color: "#8C4FFF",
      cpu: "22%", mem: "38%", age: "412d", ns: "-", status: "healthy",
      children: [
        { id: "ns-mon", label: "monitoring", kind: "Namespace", Icon: FaChartLine, color: "#F46800", cpu: "18%", mem: "36%", age: "400d", ns: "monitoring", status: "healthy" },
        { id: "ns-sec", label: "security", kind: "Namespace", Icon: FaShieldAlt, color: "#DD344C", cpu: "8%", mem: "14%", age: "400d", ns: "security", status: "healthy" },
      ],
    },
  ],
};

interface SecEvent {
  ts: string;
  severity: "info" | "warn" | "high" | "critical";
  tool: string;
  msg: string;
  pod: string;
  ns: string;
  remediation: string;
}
const SEC_TOOLS = [
  { name: "Falco", Icon: FaFire, color: "#00B4A6" },
  { name: "Kyverno", Icon: FaGavel, color: "#4285F4" },
  { name: "OPA Gatekeeper", Icon: FaShieldAlt, color: "#7D4698" },
  { name: "Trivy", Icon: FaSearch, color: "#1904DA" },
  { name: "Cert Manager", Icon: FaLock, color: "#326CE5" },
  { name: "NetworkPolicy", Icon: FaNetworkWired, color: "#22d3ee" },
  { name: "RBAC", Icon: FaKey, color: "#f59e0b" },
  { name: "IRSA", Icon: FaAws, color: "#FF9900" },
  { name: "Secrets Manager", Icon: FaLock, color: "#DD344C" },
  { name: "Cosign", Icon: FaCheckCircle, color: "#22c55e" },
];
const SEC_EVENT_POOL: Omit<SecEvent, "ts">[] = [
  { severity: "info", tool: "Cosign", msg: "Image signature verified", pod: "payments-9f8c-x2", ns: "production", remediation: "No action — signature valid via keyless OIDC." },
  { severity: "warn", tool: "Falco", msg: "Unexpected shell in container", pod: "orders-77b-abc", ns: "production", remediation: "Terminate exec, review PodSecurityContext, restrict readOnlyRootFilesystem." },
  { severity: "high", tool: "Kyverno", msg: "Privileged container blocked", pod: "debug-tools-x", ns: "sandbox", remediation: "Remove securityContext.privileged: true and redeploy." },
  { severity: "critical", tool: "Falco", msg: "Container escape attempt", pod: "unknown-cli-92", ns: "production", remediation: "Isolate node, snapshot pod, rotate node credentials, page on-call." },
  { severity: "warn", tool: "Trivy", msg: "HIGH CVE in base image", pod: "frontend-8f2c-a", ns: "production", remediation: "Rebuild image with patched base (node:20-alpine → 20.15.1)." },
  { severity: "info", tool: "Cert Manager", msg: "TLS cert renewed", pod: "cert-manager-1", ns: "cert-manager", remediation: "No action — Let's Encrypt renewal successful." },
  { severity: "high", tool: "OPA Gatekeeper", msg: "Deployment missing resource limits", pod: "audit-svc-11", ns: "staging", remediation: "Add resources.limits.cpu/memory to pod spec." },
  { severity: "warn", tool: "NetworkPolicy", msg: "Egress to unknown CIDR blocked", pod: "backend-api-4a", ns: "production", remediation: "Add explicit egress rule or route via known gateway." },
  { severity: "info", tool: "RBAC", msg: "ServiceAccount token rotated", pod: "kube-system/sa", ns: "kube-system", remediation: "No action — automatic 24h rotation via IRSA." },
];

const GITOPS_STAGES = [
  { id: "dev", label: "Developer", Icon: FaGh, color: "#94a3b8" },
  { id: "gh", label: "GitHub", Icon: SiGithub, color: "#f0f6fc" },
  { id: "pr", label: "Pull Request", Icon: SiGithub, color: "#a78bfa" },
  { id: "gha", label: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { id: "test", label: "Unit Tests", Icon: FaCheckCircle, color: "#22c55e" },
  { id: "sonar", label: "SonarQube", Icon: FaShieldAlt, color: "#4E9BCD" },
  { id: "semgrep", label: "Semgrep", Icon: FaSearch, color: "#1B7EC8" },
  { id: "gitleaks", label: "Gitleaks", Icon: FaKey, color: "#eab308" },
  { id: "build", label: "Docker Build", Icon: SiDocker, color: "#2496ED" },
  { id: "trivy", label: "Trivy", Icon: FaSearch, color: "#1904DA" },
  { id: "sbom", label: "SBOM", Icon: HiOutlineDocumentText, color: "#a78bfa" },
  { id: "cosign", label: "Cosign", Icon: FaCheckCircle, color: "#22c55e" },
  { id: "ecr", label: "Amazon ECR", Icon: FaAws, color: "#FF9900" },
  { id: "helm", label: "Helm", Icon: SiHelm, color: "#0F1689" },
  { id: "gitops", label: "GitOps Repo", Icon: SiGithub, color: "#f0f6fc" },
  { id: "argo", label: "Argo CD", Icon: SiArgo, color: "#EF7B4D" },
  { id: "devenv", label: "Development", Icon: SiKubernetes, color: "#326CE5" },
  { id: "stg", label: "Staging", Icon: SiKubernetes, color: "#326CE5" },
  { id: "prod", label: "Production EKS", Icon: SiEks, color: "#FF9900" },
];

/* ────────────────────────────────────────────────────────────────
   Hooks
   ──────────────────────────────────────────────────────────────── */
function useTicker(ms = 1500) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), ms);
    return () => clearInterval(id);
  }, [ms]);
  return tick;
}
function jitter(base: number, pct = 0.08) {
  return Math.round(base * (1 + (Math.random() * 2 - 1) * pct));
}
function jitterF(base: number, pct = 0.05, digits = 1) {
  return +(base * (1 + (Math.random() * 2 - 1) * pct)).toFixed(digits);
}

/* ────────────────────────────────────────────────────────────────
   Shared UI
   ──────────────────────────────────────────────────────────────── */
function StatusDot({ status }: { status: NodeStatus }) {
  const map: Record<NodeStatus, string> = {
    healthy: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
    warn: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
    degraded: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.7)]",
  };
  return <span className={`inline-block h-2 w-2 rounded-full ${map[status]}`} />;
}

function Panel({
  title, icon: Icon, right, children, className = "",
}: { title: string; icon: IconType; right?: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass relative overflow-hidden rounded-2xl border border-white/10 ${className}`}>
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          <Icon className="text-primary" />
          <span>{title}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">{right}</div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   1. Live Traffic Flow
   ──────────────────────────────────────────────────────────────── */
function TrafficFlow({ onPick }: { onPick: (n: FlowNode) => void }) {
  useTicker(1800);
  return (
    <Panel
      title="Live Traffic Flow — Users → EKS"
      icon={FaBolt}
      right={<><StatusDot status="healthy" /> <span>All paths healthy</span></>}
    >
      <div className="relative overflow-x-auto">
        <div className="flex min-w-max items-stretch gap-3">
          {FLOW.map((n, i) => (
            <div key={n.id} className="flex items-center">
              <motion.button
                onClick={() => onPick(n)}
                whileHover={{ y: -3, scale: 1.03 }}
                className="group relative w-[132px] rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left transition-colors hover:border-white/30"
                style={{ boxShadow: `inset 0 0 0 1px ${n.color}22` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md" style={{ background: `${n.color}18`, color: n.color }}>
                    <n.Icon size={18} />
                  </div>
                  <StatusDot status={n.status} />
                </div>
                <div className="mt-2 truncate text-[13px] font-semibold text-foreground">{n.label}</div>
                <div className="mt-0.5 truncate text-[10px] text-muted-foreground">{n.role}</div>
                <div className="mt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>{jitter(n.latency || 1, 0.15)}ms</span>
                  <span>{jitter(n.rps || 1, 0.1)} rps</span>
                </div>
              </motion.button>
              {i < FLOW.length - 1 && (
                <div className="relative mx-1 h-[2px] w-6 overflow-hidden bg-white/10">
                  <motion.div
                    className="absolute inset-y-0 w-2 rounded-full"
                    style={{ background: `linear-gradient(90deg, transparent, ${n.color}, transparent)` }}
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "linear", delay: i * 0.08 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   2. Cluster Stats Strip
   ──────────────────────────────────────────────────────────────── */
function ClusterStats({ incident }: { incident: string | null }) {
  useTicker(1500);
  const stats = [
    { label: "Cluster Health", value: incident ? "99.42%" : "99.99%", color: incident ? "text-amber-400" : "text-emerald-400" },
    { label: "Running Pods", value: `${jitter(186, 0.02)}`, color: "text-foreground" },
    { label: "Nodes", value: "24", color: "text-foreground" },
    { label: "CPU", value: `${jitter(48, 0.06)}%`, color: "text-foreground" },
    { label: "Memory", value: `${jitter(61, 0.05)}%`, color: "text-foreground" },
    { label: "Requests/sec", value: `${jitter(2347, 0.08).toLocaleString()}`, color: "text-foreground" },
    { label: "p95 Latency", value: `${jitter(24, 0.15)}ms`, color: "text-foreground" },
    { label: "Argo CD", value: "Healthy", color: "text-emerald-400" },
    { label: "Falco Alerts", value: `${incident ? 6 : 2}`, color: incident ? "text-rose-400" : "text-amber-400" },
    { label: "Est. Spend", value: "$842 /mo", color: "text-foreground" },
  ];
  return (
    <div className="glass grid grid-cols-2 gap-3 rounded-2xl border border-white/10 p-3 sm:grid-cols-5 lg:grid-cols-10">
      {stats.map(s => (
        <div key={s.label} className="rounded-lg bg-white/[0.02] px-2 py-1.5">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
          <div className={`mt-0.5 font-mono text-sm font-semibold ${s.color}`}>{s.value}</div>
        </div>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   3. K8s Resource Topology (expandable tree)
   ──────────────────────────────────────────────────────────────── */
function TreeNode({ node, depth = 0, onPick, open, toggle }: {
  node: K8sResource; depth?: number; onPick: (n: K8sResource) => void;
  open: Set<string>; toggle: (id: string) => void;
}) {
  const isOpen = open.has(node.id);
  const hasKids = !!node.children?.length;
  return (
    <div>
      <div
        className="group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-white/5"
        style={{ paddingLeft: 8 + depth * 14 }}
      >
        {hasKids ? (
          <button
            onClick={() => toggle(node.id)}
            className="flex h-4 w-4 items-center justify-center rounded text-muted-foreground hover:bg-white/10"
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="text-[10px]">▶</motion.span>
          </button>
        ) : <span className="w-4" />}
        <div className="flex h-6 w-6 items-center justify-center rounded" style={{ background: `${node.color}18`, color: node.color }}>
          <node.Icon size={13} />
        </div>
        <button onClick={() => onPick(node)} className="flex-1 truncate text-left">
          <span className="font-medium">{node.label}</span>
          <span className="ml-2 text-[10px] text-muted-foreground">{node.kind}</span>
        </button>
        <div className="hidden items-center gap-3 pr-1 font-mono text-[10px] text-muted-foreground sm:flex">
          <span>cpu {node.cpu}</span>
          <span>mem {node.mem}</span>
          <StatusDot status={node.status} />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && hasKids && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {node.children!.map(c => (
              <TreeNode key={c.id} node={c} depth={depth + 1} onPick={onPick} open={open} toggle={toggle} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Topology({ onPick }: { onPick: (n: K8sResource) => void }) {
  const [open, setOpen] = useState<Set<string>>(new Set(["eks", "ng-app", "node-1", "ns-prod"]));
  const toggle = (id: string) => {
    const n = new Set(open);
    n.has(id) ? n.delete(id) : n.add(id);
    setOpen(n);
  };
  return (
    <Panel title="Kubernetes Resource Topology" icon={FaCubes} right={<span>prod-eks-01</span>}>
      <div className="max-h-[420px] overflow-y-auto pr-1">
        <TreeNode node={K8S_TREE} onPick={onPick} open={open} toggle={toggle} />
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   4. Security & Policy panel
   ──────────────────────────────────────────────────────────────── */
function Security({ onPickEvent, incident }: { onPickEvent: (e: SecEvent) => void; incident: string | null }) {
  const [events, setEvents] = useState<SecEvent[]>(() =>
    SEC_EVENT_POOL.slice(0, 5).map((e, i) => ({ ...e, ts: `${i + 1}m ago` }))
  );
  useEffect(() => {
    const id = setInterval(() => {
      const pick = SEC_EVENT_POOL[Math.floor(Math.random() * SEC_EVENT_POOL.length)];
      setEvents(prev => [{ ...pick, ts: "just now" }, ...prev].slice(0, 8));
    }, 3500);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    if (incident) {
      setEvents(prev => [
        { severity: "critical", tool: "Falco", msg: `Incident: ${incident}`, pod: "payments-9f8c-x2", ns: "production", remediation: "Auto-remediation engaged — see incident timeline.", ts: "just now" },
        ...prev,
      ].slice(0, 8));
    }
  }, [incident]);

  return (
    <Panel
      title="Security & Policy Enforcement"
      icon={FaShieldAlt}
      right={<><StatusDot status={incident ? "warn" : "healthy"} /> <span>{incident ? "Investigating" : "All controls passing"}</span></>}
    >
      <div className="mb-3 flex flex-wrap gap-1.5">
        {SEC_TOOLS.map(t => (
          <div key={t.name} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px]" style={{ color: t.color }}>
            <t.Icon size={11} /> <span className="text-muted-foreground">{t.name}</span>
          </div>
        ))}
      </div>
      <div className="max-h-[280px] space-y-1.5 overflow-y-auto pr-1">
        <AnimatePresence initial={false}>
          {events.map((e, i) => {
            const sev = {
              info: { icon: FaCheckCircle, color: "text-emerald-400", ring: "border-emerald-400/30" },
              warn: { icon: FaExclamationTriangle, color: "text-amber-400", ring: "border-amber-400/30" },
              high: { icon: FaExclamationTriangle, color: "text-orange-400", ring: "border-orange-400/30" },
              critical: { icon: FaTimesCircle, color: "text-rose-500", ring: "border-rose-500/40" },
            }[e.severity];
            return (
              <motion.button
                key={`${e.pod}-${i}-${e.ts}`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => onPickEvent(e)}
                className={`flex w-full items-center gap-2 rounded-lg border ${sev.ring} bg-white/[0.02] px-2.5 py-2 text-left text-xs hover:bg-white/[0.05]`}
              >
                <sev.icon className={`shrink-0 ${sev.color}`} />
                <span className="truncate font-medium text-foreground">{e.msg}</span>
                <span className="ml-auto shrink-0 text-[10px] text-muted-foreground">{e.tool} · {e.ns} · {e.ts}</span>
              </motion.button>
            );
          })}
        </AnimatePresence>
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   5. GitOps Pipeline
   ──────────────────────────────────────────────────────────────── */
function GitOps() {
  const [active, setActive] = useState(0);
  const [failedAt, setFailedAt] = useState<number | null>(null);
  const [running, setRunning] = useState(true);
  const [rev, setRev] = useState(1487);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setActive(prev => {
        if (failedAt !== null) return prev;
        const next = prev + 1;
        if (next >= GITOPS_STAGES.length) {
          setRev(r => r + 1);
          // occasional failure
          if (Math.random() < 0.15) {
            setFailedAt(Math.floor(Math.random() * (GITOPS_STAGES.length - 4)) + 3);
            setTimeout(() => setFailedAt(null), 4200);
          }
          return 0;
        }
        return next;
      });
    }, 700);
    return () => clearInterval(id);
  }, [running, failedAt]);

  return (
    <Panel
      title="GitOps Deployment Pipeline"
      icon={SiArgo}
      right={
        <>
          <span className="font-mono">rev {rev}</span>
          <span className="mx-1 text-white/20">·</span>
          <span className={failedAt !== null ? "text-rose-400" : "text-emerald-400"}>
            {failedAt !== null ? "Rollback" : "Syncing"}
          </span>
          <button
            onClick={() => setRunning(r => !r)}
            className="ml-2 rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] hover:bg-white/10"
          >
            {running ? <FaPause /> : <FaPlay />}
          </button>
        </>
      }
    >
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-[repeat(10,minmax(0,1fr))]">
        {GITOPS_STAGES.map((s, i) => {
          const isActive = i === active && failedAt === null;
          const isDone = i < active && failedAt === null;
          const isFailed = failedAt === i;
          const state =
            isFailed ? { ring: "border-rose-500/60", bg: "bg-rose-500/10", dot: "bg-rose-500" }
            : isActive ? { ring: "border-primary/60", bg: "bg-primary/10", dot: "bg-primary" }
            : isDone ? { ring: "border-emerald-400/40", bg: "bg-emerald-400/5", dot: "bg-emerald-400" }
            : { ring: "border-white/10", bg: "bg-white/[0.02]", dot: "bg-white/20" };
          return (
            <motion.div
              key={s.id}
              layout
              className={`relative flex flex-col items-center gap-1 rounded-lg border ${state.ring} ${state.bg} p-2`}
              animate={isActive ? { scale: [1, 1.04, 1] } : { scale: 1 }}
              transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
            >
              <div className="flex h-7 w-7 items-center justify-center rounded" style={{ color: s.color }}>
                <s.Icon size={16} />
              </div>
              <div className="w-full truncate text-center text-[10px] font-medium">{s.label}</div>
              <span className={`absolute -right-1 -top-1 h-2 w-2 rounded-full ${state.dot}`} />
            </motion.div>
          );
        })}
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   6. Observability
   ──────────────────────────────────────────────────────────────── */
function Sparkline({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const w = 100, h = 30;
  const pts = values.map((v, i) => {
    const x = (i / (values.length - 1)) * w;
    const y = h - ((v - min) / range) * h;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-8 w-full">
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" />
      <polyline points={`${pts} ${w},${h} 0,${h}`} fill={color} opacity="0.15" />
    </svg>
  );
}
function Observability() {
  const [series, setSeries] = useState<Record<string, number[]>>({
    cpu: Array.from({ length: 24 }, () => jitter(48, 0.15)),
    mem: Array.from({ length: 24 }, () => jitter(61, 0.1)),
    rps: Array.from({ length: 24 }, () => jitter(2300, 0.15)),
    lat: Array.from({ length: 24 }, () => jitter(24, 0.25)),
    err: Array.from({ length: 24 }, () => jitterF(0.12, 0.4, 2)),
    slo: Array.from({ length: 24 }, () => jitterF(99.94, 0.0005, 3)),
  });
  useEffect(() => {
    const id = setInterval(() => {
      setSeries(prev => ({
        cpu: [...prev.cpu.slice(1), jitter(48, 0.15)],
        mem: [...prev.mem.slice(1), jitter(61, 0.1)],
        rps: [...prev.rps.slice(1), jitter(2300, 0.15)],
        lat: [...prev.lat.slice(1), jitter(24, 0.25)],
        err: [...prev.err.slice(1), jitterF(0.12, 0.4, 2)],
        slo: [...prev.slo.slice(1), jitterF(99.94, 0.0005, 3)],
      }));
    }, 1500);
    return () => clearInterval(id);
  }, []);
  const cards = [
    { key: "cpu", label: "CPU", unit: "%", color: "#22d3ee" },
    { key: "mem", label: "Memory", unit: "%", color: "#a78bfa" },
    { key: "rps", label: "Req/s", unit: "", color: "#34d399" },
    { key: "lat", label: "p95 Latency", unit: "ms", color: "#f59e0b" },
    { key: "err", label: "Error Rate", unit: "%", color: "#f43f5e" },
    { key: "slo", label: "SLO Availability", unit: "%", color: "#22c55e" },
  ] as const;
  return (
    <Panel
      title="Observability — Prometheus · Grafana · Loki · Tempo · OTel"
      icon={SiPrometheus}
      right={
        <div className="flex items-center gap-2">
          {[
            { Icon: SiPrometheus, c: "#E6522C" },
            { Icon: SiGrafana, c: "#F46800" },
            { Icon: SiLoki, c: "#F46800" },
            { Icon: SiJaeger, c: "#66CFE3" },
            { Icon: SiOpentelemetry, c: "#F5A800" },
          ].map((t, i) => <t.Icon key={i} style={{ color: t.c }} />)}
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {cards.map(c => {
          const vals = series[c.key];
          const last = vals[vals.length - 1];
          return (
            <div key={c.key} className="rounded-lg border border-white/10 bg-white/[0.02] p-2.5">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
                <span>{c.label}</span>
                <span className="font-mono text-foreground">{last}{c.unit}</span>
              </div>
              <Sparkline values={vals} color={c.color} />
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   7. Autoscaling
   ──────────────────────────────────────────────────────────────── */
function Autoscaling() {
  const [traffic, setTraffic] = useState(40);
  const pods = Math.round(6 + (traffic / 100) * 42);
  const nodes = Math.max(3, Math.round(3 + (traffic / 100) * 21));
  return (
    <Panel title="Autoscaling — HPA · Karpenter · Cluster Autoscaler" icon={FaChartLine}>
      <div className="space-y-3">
        <div>
          <div className="mb-1 flex justify-between text-[11px] text-muted-foreground">
            <span>Simulated Traffic</span><span className="font-mono text-foreground">{traffic}%</span>
          </div>
          <input
            type="range" min={0} max={100} value={traffic}
            onChange={e => setTraffic(+e.target.value)}
            className="w-full accent-[color:var(--color-aurora-1)]"
          />
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-white/[0.03] p-2">
            <div className="text-[10px] uppercase text-muted-foreground">HPA Pods</div>
            <motion.div key={pods} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="font-mono text-lg text-emerald-400">{pods}</motion.div>
          </div>
          <div className="rounded-lg bg-white/[0.03] p-2">
            <div className="text-[10px] uppercase text-muted-foreground">Karpenter Nodes</div>
            <motion.div key={nodes} initial={{ scale: 1.2 }} animate={{ scale: 1 }} className="font-mono text-lg text-cyan-400">{nodes}</motion.div>
          </div>
          <div className="rounded-lg bg-white/[0.03] p-2">
            <div className="text-[10px] uppercase text-muted-foreground">Spot Ratio</div>
            <div className="font-mono text-lg text-amber-400">{Math.min(85, 30 + traffic / 2).toFixed(0)}%</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1 text-[10px] text-muted-foreground">
          <span>Metrics Server</span><FaArrowRight />
          <span>HPA</span><FaArrowRight />
          <span>Pods↑</span><FaArrowRight />
          <span>Karpenter</span><FaArrowRight />
          <span>Nodes↑</span><FaArrowRight />
          <span>Cluster Autoscaler</span>
        </div>
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   8. Cost
   ──────────────────────────────────────────────────────────────── */
function Cost() {
  const rows = [
    { k: "EKS Control Plane", v: 73, color: "#FF9900" },
    { k: "Worker Nodes (EC2)", v: 412, color: "#8C4FFF" },
    { k: "EBS + PV Storage", v: 128, color: "#22d3ee" },
    { k: "Load Balancers", v: 62, color: "#a78bfa" },
    { k: "Data Transfer", v: 94, color: "#34d399" },
    { k: "RDS Postgres", v: 148, color: "#336791" },
  ];
  const total = rows.reduce((s, r) => s + r.v, 0);
  return (
    <Panel
      title="Cost Optimization — FinOps"
      icon={FaMoneyBillWave}
      right={<span className="font-mono text-emerald-400">Karpenter saved $312 this mo.</span>}
    >
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">Monthly estimate</span>
          <span className="font-mono text-2xl font-semibold text-gradient">${total.toLocaleString()}</span>
        </div>
        <div className="flex h-2 overflow-hidden rounded-full bg-white/5">
          {rows.map(r => (
            <div key={r.k} style={{ width: `${(r.v / total) * 100}%`, background: r.color }} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1.5 pt-1 sm:grid-cols-3">
          {rows.map(r => (
            <div key={r.k} className="flex items-center justify-between rounded-md bg-white/[0.02] px-2 py-1 text-[11px]">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-sm" style={{ background: r.color }} />{r.k}</span>
              <span className="font-mono text-muted-foreground">${r.v}</span>
            </div>
          ))}
        </div>
        <div className="mt-1 grid grid-cols-3 gap-1.5 text-center text-[10px] text-muted-foreground">
          <div className="rounded-md bg-white/[0.02] px-2 py-1">Spot 62%</div>
          <div className="rounded-md bg-white/[0.02] px-2 py-1">Idle 4 pods</div>
          <div className="rounded-md bg-white/[0.02] px-2 py-1">Rightsizing: 3 hints</div>
        </div>
      </div>
    </Panel>
  );
}

/* ────────────────────────────────────────────────────────────────
   9. Chaos / Incident Simulator
   ──────────────────────────────────────────────────────────────── */
const INCIDENTS = [
  "Pod CrashLoopBackOff",
  "OOMKilled — payments",
  "Node NotReady",
  "ImagePullBackOff",
  "Ingress 5xx spike",
  "Falco: Suspicious exec",
];
function IncidentBar({ incident, setIncident }: { incident: string | null; setIncident: (s: string | null) => void }) {
  return (
    <div className="glass flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 p-3">
      <div className="flex items-center gap-2 pr-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        <FaFire className="text-rose-400" /> Chaos Simulator
      </div>
      <div className="flex flex-wrap gap-1.5">
        {INCIDENTS.map(i => (
          <button
            key={i}
            onClick={() => {
              setIncident(i);
              setTimeout(() => setIncident(null), 5500);
            }}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] hover:border-rose-400/50 hover:text-rose-300"
          >
            {i}
          </button>
        ))}
      </div>
      <div className="ml-auto flex items-center gap-2 text-xs">
        {incident ? (
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1.5 rounded-full bg-rose-500/15 px-2 py-1 text-rose-300">
            <FaBolt /> Remediating: {incident}
          </motion.span>
        ) : (
          <span className="flex items-center gap-1.5 text-emerald-400"><StatusDot status="healthy" /> Steady state</span>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Detail Drawer
   ──────────────────────────────────────────────────────────────── */
type DrawerItem =
  | { kind: "flow"; data: FlowNode }
  | { kind: "k8s"; data: K8sResource }
  | { kind: "sec"; data: SecEvent };

function Drawer({ item, onClose }: { item: DrawerItem | null; onClose: () => void }) {
  const [tab, setTab] = useState<"overview" | "yaml" | "cli" | "events">("overview");
  useEffect(() => { setTab("overview"); }, [item]);
  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="glass fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-white/10 p-5"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {item.kind === "flow" ? "Traffic Node" : item.kind === "k8s" ? "Kubernetes Resource" : "Security Event"}
                </div>
                <h3 className="mt-1 text-xl font-semibold">
                  {item.kind === "sec" ? item.data.msg : item.data.label}
                </h3>
              </div>
              <button onClick={onClose} className="glass rounded-full p-2 hover:bg-white/10"><HiOutlineX /></button>
            </div>

            {item.kind === "flow" && (
              <>
                <div className="mb-3 grid grid-cols-2 gap-2 text-xs">
                  <Stat k="Role" v={item.data.role} />
                  <Stat k="Status" v={item.data.status} />
                  <Stat k="Latency" v={`${item.data.latency}ms`} />
                  <Stat k="Req/s" v={item.data.rps.toLocaleString()} />
                </div>
                <Section title="Best practices">
                  <ul className="ml-4 list-disc space-y-1 text-sm text-muted-foreground">
                    <li>Enable request logging & structured tracing (OTel).</li>
                    <li>Cap concurrency + apply retries with jitter.</li>
                    <li>Health checks on `/healthz` and `/readyz`.</li>
                  </ul>
                </Section>
              </>
            )}

            {item.kind === "k8s" && (
              <>
                <Tabs tab={tab} setTab={setTab} />
                {tab === "overview" && (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <Stat k="Kind" v={item.data.kind} />
                    <Stat k="Namespace" v={item.data.ns} />
                    <Stat k="CPU" v={item.data.cpu} />
                    <Stat k="Memory" v={item.data.mem} />
                    <Stat k="Age" v={item.data.age} />
                    <Stat k="Status" v={item.data.status} />
                    {item.data.image && <Stat k="Image" v={item.data.image} />}
                    {item.data.restarts !== undefined && <Stat k="Restarts" v={String(item.data.restarts)} />}
                  </div>
                )}
                {tab === "yaml" && (
                  <Code>{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: ${item.data.label}
  namespace: ${item.data.ns}
spec:
  replicas: 6
  selector: { matchLabels: { app: ${item.data.label} } }
  template:
    metadata: { labels: { app: ${item.data.label} } }
    spec:
      containers:
        - name: app
          image: ${item.data.image ?? "ecr/app:latest"}
          resources:
            requests: { cpu: 100m, memory: 128Mi }
            limits:   { cpu: 500m, memory: 512Mi }`}</Code>
                )}
                {tab === "cli" && (
                  <Code>{`kubectl -n ${item.data.ns} get ${item.data.kind.split(" ")[0].toLowerCase()} ${item.data.label}
kubectl -n ${item.data.ns} describe pod ${item.data.label}
kubectl -n ${item.data.ns} logs -f ${item.data.label} --tail=200
kubectl -n ${item.data.ns} rollout status deploy/${item.data.label}`}</Code>
                )}
                {tab === "events" && (
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>✓ Scheduled to ip-10-0-1-42</li>
                    <li>✓ Pulled image {item.data.image ?? "ecr/app:latest"}</li>
                    <li>✓ Container started</li>
                    <li>ℹ Readiness probe succeeded</li>
                  </ul>
                )}
              </>
            )}

            {item.kind === "sec" && (
              <>
                <div className="mb-3 grid grid-cols-2 gap-2 text-xs">
                  <Stat k="Tool" v={item.data.tool} />
                  <Stat k="Severity" v={item.data.severity.toUpperCase()} />
                  <Stat k="Pod" v={item.data.pod} />
                  <Stat k="Namespace" v={item.data.ns} />
                </div>
                <Section title="Remediation">
                  <p className="text-sm text-muted-foreground">{item.data.remediation}</p>
                </Section>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-lg bg-white/[0.03] px-2.5 py-2">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="mt-0.5 truncate font-mono text-sm">{v}</div>
    </div>
  );
}
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{title}</div>
      {children}
    </div>
  );
}
function Code({ children }: { children: string }) {
  return (
    <pre className="mt-2 overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-emerald-300">
      <code>{children}</code>
    </pre>
  );
}
function Tabs({ tab, setTab }: { tab: string; setTab: (t: any) => void }) {
  const tabs = [
    { id: "overview", label: "Overview", Icon: HiOutlineChip },
    { id: "yaml", label: "YAML", Icon: HiOutlineDocumentText },
    { id: "cli", label: "kubectl", Icon: HiOutlineTerminal },
    { id: "events", label: "Events", Icon: FaBolt },
  ];
  return (
    <div className="mb-3 flex gap-1 rounded-lg border border-white/10 bg-white/[0.02] p-1">
      {tabs.map(t => (
        <button
          key={t.id}
          onClick={() => setTab(t.id)}
          className={`flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-xs transition-colors ${
            tab === t.id ? "bg-white/10 text-foreground" : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <t.Icon /> {t.label}
        </button>
      ))}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
   Main
   ──────────────────────────────────────────────────────────────── */
export function K8sOpsCenter() {
  const [drawer, setDrawer] = useState<DrawerItem | null>(null);
  const [incident, setIncident] = useState<string | null>(null);

  return (
    <section id="ops-center" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-primary">Operations Center</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            <span className="text-gradient">Interactive Kubernetes</span> Ops Console
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            A live, production-style view of an EKS platform — traffic, resources, security, GitOps, observability, autoscaling and cost — all reacting to real-time events. Click any tile to inspect it.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ClusterStats incident={incident} />
          <IncidentBar incident={incident} setIncident={setIncident} />
          <TrafficFlow onPick={n => setDrawer({ kind: "flow", data: n })} />

          <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr]">
            <Topology onPick={n => setDrawer({ kind: "k8s", data: n })} />
            <Security onPickEvent={e => setDrawer({ kind: "sec", data: e })} incident={incident} />
          </div>

          <GitOps />

          <Observability />

          <div className="grid gap-4 lg:grid-cols-2">
            <Autoscaling />
            <Cost />
          </div>
        </div>
      </div>

      <Drawer item={drawer} onClose={() => setDrawer(null)} />
    </section>
  );
}

export default K8sOpsCenter;

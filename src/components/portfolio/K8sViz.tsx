import { motion } from "framer-motion";
import { useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  role: "master" | "worker" | "ingress" | "lb";
  desc: string;
}

const NODES: Node[] = [
  { id: "lb", x: 400, y: 40, label: "Load Balancer", role: "lb", desc: "AWS ALB — SSL/TLS termination, path-based routing" },
  { id: "ing", x: 400, y: 130, label: "Ingress", role: "ingress", desc: "NGINX Ingress / Istio gateway — L7 routing to services" },
  { id: "m1", x: 400, y: 230, label: "Control Plane", role: "master", desc: "kube-apiserver · scheduler · controller-manager · etcd" },
  { id: "w1", x: 180, y: 360, label: "Worker Node 1", role: "worker", desc: "kubelet · kube-proxy · CRI runtime · CNI" },
  { id: "w2", x: 400, y: 360, label: "Worker Node 2", role: "worker", desc: "Autoscaled via Karpenter · Spot capacity mix" },
  { id: "w3", x: 620, y: 360, label: "Worker Node 3", role: "worker", desc: "HPA scales pods on CPU/memory + custom metrics" },
];

const EDGES: [string, string][] = [
  ["lb", "ing"], ["ing", "m1"], ["m1", "w1"], ["m1", "w2"], ["m1", "w3"],
];

const POD_COLORS = ["#22d3ee", "#a78bfa", "#34d399", "#f472b6"];

export function K8sViz() {
  const [hover, setHover] = useState<Node | null>(null);
  return (
    <div className="glass ring-glow relative overflow-hidden rounded-2xl p-4 sm:p-6">
      <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400" />
          <span className="font-mono">cluster://prod-eks · healthy</span>
        </div>
        <div className="font-mono">CPU 42% · MEM 58% · Pods 128</div>
      </div>
      <svg viewBox="0 0 800 460" className="h-[380px] w-full sm:h-[460px]" role="img" aria-label="Interactive Kubernetes cluster visualization">
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Edges */}
        {EDGES.map(([from, to], i) => {
          const a = NODES.find(n => n.id === from)!;
          const b = NODES.find(n => n.id === to)!;
          return (
            <g key={i}>
              <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="url(#edge)" strokeWidth="1.5" strokeOpacity="0.5" />
              <motion.circle
                r="3.5"
                fill="#22d3ee"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  cx: [a.x, b.x],
                  cy: [a.y, b.y],
                }}
                transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
              />
            </g>
          );
        })}

        {/* Worker node pods */}
        {NODES.filter(n => n.role === "worker").map((n, wi) => (
          <g key={n.id}>
            <rect x={n.x - 70} y={n.y + 20} width="140" height="70" rx="10"
              fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
            {Array.from({ length: 6 }).map((_, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const px = n.x - 55 + col * 32;
              const py = n.y + 32 + row * 26;
              const color = POD_COLORS[(wi + i) % POD_COLORS.length];
              return (
                <motion.rect
                  key={i}
                  x={px} y={py} width="24" height="18" rx="4"
                  fill={color} fillOpacity="0.18"
                  stroke={color} strokeWidth="1"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1, 0.9] }}
                  transition={{ duration: 3 + i * 0.2, repeat: Infinity, delay: wi * 0.3 + i * 0.15 }}
                />
              );
            })}
          </g>
        ))}

        {/* Nodes */}
        {NODES.map(n => {
          const isMaster = n.role === "master";
          const isLb = n.role === "lb";
          const isIng = n.role === "ingress";
          const w = isMaster ? 180 : isLb ? 160 : isIng ? 140 : 140;
          const h = 44;
          const fill = isMaster ? "#a78bfa" : isLb ? "#f59e0b" : isIng ? "#34d399" : "#22d3ee";
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(null)}
              style={{ cursor: "pointer" }}
            >
              <circle cx={n.x} cy={n.y} r="60" fill="url(#nodeGlow)" filter="url(#soft)" />
              <rect x={n.x - w / 2} y={n.y - h / 2} width={w} height={h} rx="10"
                fill="rgba(15,20,35,0.85)" stroke={fill} strokeWidth="1.2" />
              <circle cx={n.x - w / 2 + 14} cy={n.y} r="4" fill={fill}>
                <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
              </circle>
              <text x={n.x - w / 2 + 26} y={n.y + 5} fill="#e5e7eb" fontSize="13" fontWeight="600" fontFamily="Inter, sans-serif">
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-2 min-h-[52px] rounded-lg border border-white/10 bg-white/5 p-3 text-sm">
        {hover ? (
          <>
            <div className="font-semibold text-foreground">{hover.label}</div>
            <div className="text-muted-foreground">{hover.desc}</div>
          </>
        ) : (
          <div className="text-muted-foreground">Hover any node — Load Balancer, Ingress, Control Plane, or Workers — to explore the cluster.</div>
        )}
      </div>
    </div>
  );
}

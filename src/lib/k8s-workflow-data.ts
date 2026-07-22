import type { IconType } from "react-icons";
import {
  SiKubernetes, SiIstio, SiNginx, SiRedis, SiPostgresql, SiArgo, SiHelm,
  SiPrometheus, SiGrafana, SiGithub, SiGithubactions, SiOpenapiinitiative,
  SiOpentelemetry, SiFluentbit, SiCloudflare,
} from "react-icons/si";
import {
  FaAws, FaCloud, FaUsers, FaShieldAlt, FaLock, FaBell, FaDatabase,
  FaServer, FaCube, FaExpandArrowsAlt, FaHdd, FaSearch,
} from "react-icons/fa";
import {
  HiOutlineGlobeAlt, HiOutlineLightningBolt, HiOutlineChip, HiOutlineCash,
  HiOutlineDocumentText, HiOutlineMail, HiOutlineBell, HiOutlineFolder,
} from "react-icons/hi";

export type K8sCategory =
  | "Edge" | "Networking" | "Applications" | "Data"
  | "Cloud Services" | "Observability" | "Security" | "Autoscaling"
  | "Storage" | "GitOps" | "Compute";

export type NodeStatus = "healthy" | "warning" | "critical" | "syncing";

export interface K8sNode {
  id: string;
  name: string;
  short: string;
  description: string;
  icon: IconType;
  color: string;
  categories: K8sCategory[];
  column: number;   // 0..N horizontal column
  row: number;      // vertical slot within column
  status: NodeStatus;
  cpu: number;      // 0-100
  mem: number;      // 0-100
  replicas?: number;
  ip?: string;
  namespace?: string;
  version?: string;
  docs: string;
  yaml?: string;
  kubectl?: string[];
  bestPractices?: string[];
  troubleshooting?: string[];
  protocol?: "HTTP" | "HTTPS" | "gRPC" | "TCP" | "REST";
  latencyMs?: number;
}

export const K8S_CATEGORIES: (K8sCategory | "All")[] = [
  "All", "Edge", "Networking", "Applications", "Data",
  "Cloud Services", "Observability", "Security", "Autoscaling",
  "Storage", "GitOps", "Compute",
];

/* ---------- Columns (left → right) ---------- */
export const COLUMN_LABELS = [
  "Edge",
  "Ingress",
  "Service Mesh",
  "Workloads",
  "Data & State",
  "Cloud Services",
  "Platform",
];

/* ---------- Nodes ---------- */
export const K8S_NODES: K8sNode[] = [
  // COL 0 — EDGE
  {
    id: "users", name: "Internet Users", short: "Global traffic",
    description: "Millions of end-users hitting the platform across regions. Traffic terminates at the nearest PoP.",
    icon: FaUsers, color: "#e2e8f0", categories: ["Edge"], column: 0, row: 0,
    status: "healthy", cpu: 0, mem: 0, protocol: "HTTPS", latencyMs: 12,
    docs: "https://web.dev/",
  },
  {
    id: "dns", name: "Route 53 / DNS", short: "Geo-routed DNS",
    description: "Weighted geo-DNS with health checks and failover records. TTL tuned for fast failover.",
    icon: HiOutlineGlobeAlt, color: "#ff9900", categories: ["Edge", "Networking"], column: 0, row: 1,
    status: "healthy", cpu: 3, mem: 8, protocol: "HTTPS", latencyMs: 6,
    docs: "https://docs.aws.amazon.com/route53/",
    kubectl: ["dig api.example.com +short", "aws route53 list-hosted-zones"],
    bestPractices: ["Health-check-based failover", "Weighted routing for canaries", "Short TTL for critical records"],
  },
  {
    id: "cdn", name: "CloudFront CDN", short: "Edge caching",
    description: "Global CDN with 400+ PoPs. Static assets cached at the edge, dynamic traffic accelerated over the AWS backbone.",
    icon: SiCloudflare, color: "#f38020", categories: ["Edge", "Networking"], column: 0, row: 2,
    status: "healthy", cpu: 15, mem: 22, protocol: "HTTPS", latencyMs: 24,
    docs: "https://docs.aws.amazon.com/cloudfront/",
    bestPractices: ["Signed URLs for private assets", "Origin Shield for cache hit ratio", "Brotli + Gzip"],
  },
  {
    id: "waf", name: "AWS WAF", short: "L7 firewall",
    description: "Managed rule groups: OWASP Top 10, bot control, rate limiting, IP reputation.",
    icon: FaShieldAlt, color: "#22c55e", categories: ["Edge", "Security"], column: 0, row: 3,
    status: "healthy", cpu: 8, mem: 12, protocol: "HTTPS", latencyMs: 3,
    docs: "https://docs.aws.amazon.com/waf/",
    bestPractices: ["Enable AWSManagedRulesCommonRuleSet", "Rate-based rules per IP", "Log to Kinesis Firehose → S3"],
  },

  // COL 1 — INGRESS
  {
    id: "alb", name: "AWS ALB", short: "Layer-7 LB",
    description: "Application Load Balancer terminating TLS, providing SNI + HTTP/2, and forwarding to target groups.",
    icon: FaAws, color: "#ff9900", categories: ["Networking"], column: 1, row: 0,
    status: "healthy", cpu: 34, mem: 41, protocol: "HTTPS", latencyMs: 8,
    docs: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/",
    kubectl: ["kubectl get ingress -A", "aws elbv2 describe-load-balancers"],
    bestPractices: ["ACM cert with auto-rotation", "HTTP → HTTPS 301 redirect", "Access logs to S3"],
  },
  {
    id: "ingress", name: "NGINX Ingress", short: "K8s ingress controller",
    description: "AWS Load Balancer Controller + NGINX Ingress route external traffic into Services with path/host rules.",
    icon: SiNginx, color: "#009639",
    categories: ["Networking"], column: 1, row: 1,
    status: "healthy", cpu: 42, mem: 55, replicas: 3, namespace: "ingress-nginx",
    protocol: "HTTPS", latencyMs: 4, version: "v1.11.2",
    docs: "https://kubernetes.github.io/ingress-nginx/",
    yaml: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: api-ingress
  namespace: prod
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
    - hosts: [api.example.com]
      secretName: api-tls
  rules:
    - host: api.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: backend-api
                port: { number: 80 }`,
    kubectl: [
      "kubectl -n ingress-nginx get pods",
      "kubectl -n ingress-nginx logs -l app.kubernetes.io/name=ingress-nginx",
      "kubectl describe ingress api-ingress -n prod",
    ],
    bestPractices: [
      "Enable ModSecurity WAF snippet",
      "Configure rate-limit annotations",
      "Use cert-manager for automated TLS",
    ],
    troubleshooting: ["502 → check upstream Service endpoints", "404 → verify host+path rules", "TLS errors → inspect Secret contents"],
  },

  // COL 2 — SERVICE MESH
  {
    id: "istio", name: "Istio Service Mesh", short: "mTLS + traffic mgmt",
    description: "Envoy sidecars provide mTLS between services, retries, circuit breaking, and fine-grained traffic shifting.",
    icon: SiIstio, color: "#466BB0",
    categories: ["Networking", "Security"], column: 2, row: 0,
    status: "healthy", cpu: 28, mem: 48, replicas: 5, namespace: "istio-system",
    protocol: "gRPC", latencyMs: 2, version: "1.22.3",
    docs: "https://istio.io/latest/docs/",
    yaml: `apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata: { name: backend-api }
spec:
  hosts: [backend-api]
  http:
    - route:
        - destination: { host: backend-api, subset: v1 }
          weight: 90
        - destination: { host: backend-api, subset: v2 }
          weight: 10
      retries: { attempts: 3, perTryTimeout: 2s }`,
    kubectl: ["istioctl proxy-status", "istioctl analyze -n prod", "kubectl -n istio-system get pods"],
    bestPractices: ["STRICT mTLS PeerAuthentication", "Outlier detection on DestinationRules", "AuthorizationPolicy per namespace"],
  },

  // COL 3 — WORKLOADS
  {
    id: "frontend", name: "Frontend", short: "Next.js SSR",
    description: "React/Next.js frontend deployed as a Deployment behind a Service. Rolling updates with maxSurge=25%.",
    icon: HiOutlineLightningBolt, color: "#22d3ee",
    categories: ["Applications"], column: 3, row: 0,
    status: "healthy", cpu: 45, mem: 62, replicas: 6, namespace: "web", ip: "10.42.1.14",
    protocol: "HTTPS", latencyMs: 38, version: "v4.12.0",
    docs: "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
    yaml: `apiVersion: apps/v1
kind: Deployment
metadata: { name: frontend, namespace: web }
spec:
  replicas: 6
  strategy:
    rollingUpdate: { maxSurge: 25%, maxUnavailable: 0 }
  selector: { matchLabels: { app: frontend } }
  template:
    metadata: { labels: { app: frontend } }
    spec:
      containers:
        - name: web
          image: 123456789012.dkr.ecr.us-east-1.amazonaws.com/frontend:sha-a1b2c3
          ports: [{ containerPort: 3000 }]
          resources:
            requests: { cpu: 200m, memory: 256Mi }
            limits:   { cpu: 500m, memory: 512Mi }
          readinessProbe:
            httpGet: { path: /healthz, port: 3000 }
          livenessProbe:
            httpGet: { path: /livez, port: 3000 }`,
    kubectl: [
      "kubectl -n web get deploy frontend",
      "kubectl -n web rollout status deploy/frontend",
      "kubectl -n web logs -l app=frontend --tail=100",
    ],
    bestPractices: ["PodDisruptionBudget minAvailable=2", "Topology spread across AZs", "PreStop hook for graceful drain"],
    troubleshooting: ["CrashLoopBackOff → inspect logs + describe", "5xx spike → check readiness gate + HPA"],
  },
  {
    id: "backend", name: "Backend API", short: "Go / REST + gRPC",
    description: "Stateless business API. Exposes REST for browser clients and gRPC for service-to-service calls.",
    icon: HiOutlineChip, color: "#a78bfa",
    categories: ["Applications"], column: 3, row: 1,
    status: "healthy", cpu: 58, mem: 71, replicas: 8, namespace: "api", ip: "10.42.2.7",
    protocol: "gRPC", latencyMs: 22, version: "v2.4.1",
    docs: "https://kubernetes.io/docs/",
    kubectl: ["kubectl -n api top pods", "kubectl -n api get hpa backend-api"],
    bestPractices: ["Request tracing headers propagated", "Circuit breakers per downstream", "Structured JSON logging"],
  },
  {
    id: "auth", name: "Auth Service", short: "OIDC / JWT",
    description: "OIDC-compliant auth service. Issues short-lived JWTs, backed by Redis session cache.",
    icon: FaLock, color: "#f472b6",
    categories: ["Applications", "Security"], column: 3, row: 2,
    status: "healthy", cpu: 24, mem: 38, replicas: 4, namespace: "auth",
    protocol: "HTTPS", latencyMs: 14,
    docs: "https://openid.net/connect/",
    bestPractices: ["Rotate signing keys via Secrets Manager", "Rate-limit /token endpoint", "Refresh-token rotation"],
  },
  {
    id: "order", name: "Order Service", short: "Domain: orders",
    description: "Owns the order aggregate. Publishes OrderPlaced events to SNS for async fan-out.",
    icon: HiOutlineDocumentText, color: "#fbbf24",
    categories: ["Applications"], column: 3, row: 3,
    status: "healthy", cpu: 38, mem: 44, replicas: 5, namespace: "orders",
    protocol: "gRPC", latencyMs: 18,
    docs: "https://kubernetes.io/",
  },
  {
    id: "payment", name: "Payment Service", short: "PCI-scoped",
    description: "PCI-scoped payment orchestration. Runs in a hardened namespace with restricted NetworkPolicies.",
    icon: HiOutlineCash, color: "#34d399",
    categories: ["Applications", "Security"], column: 3, row: 4,
    status: "healthy", cpu: 31, mem: 52, replicas: 4, namespace: "payments",
    protocol: "HTTPS", latencyMs: 42,
    docs: "https://kubernetes.io/",
    bestPractices: ["Deny-all default NetworkPolicy", "Read secrets from AWS Secrets Manager via IRSA", "Signed images enforced"],
  },
  {
    id: "notify", name: "Notification Service", short: "Email · SMS · Push",
    description: "Consumes SQS events and dispatches through SES, SNS, and FCM. Idempotent handlers.",
    icon: FaBell, color: "#f87171",
    categories: ["Applications"], column: 3, row: 5,
    status: "healthy", cpu: 18, mem: 26, replicas: 3, namespace: "notify",
    protocol: "HTTPS", latencyMs: 90,
    docs: "https://kubernetes.io/",
  },

  // COL 4 — DATA
  {
    id: "redis", name: "Redis", short: "Cache · Sessions",
    description: "Redis cluster (ElastiCache) providing sub-ms cache reads and pub/sub for real-time updates.",
    icon: SiRedis, color: "#DC382D",
    categories: ["Data"], column: 4, row: 0,
    status: "healthy", cpu: 22, mem: 66, replicas: 3, protocol: "TCP", latencyMs: 1,
    docs: "https://redis.io/docs/",
    bestPractices: ["Enable AUTH + TLS in-transit", "Set maxmemory-policy=allkeys-lru", "Multi-AZ replication"],
  },
  {
    id: "postgres", name: "PostgreSQL", short: "Primary datastore",
    description: "Amazon Aurora PostgreSQL with read replicas. WAL streaming, PITR, and cross-region snapshots.",
    icon: SiPostgresql, color: "#336791",
    categories: ["Data"], column: 4, row: 1,
    status: "healthy", cpu: 47, mem: 78, replicas: 3, protocol: "TCP", latencyMs: 3,
    docs: "https://www.postgresql.org/docs/",
    bestPractices: ["Connection pooling with PgBouncer", "Row-level security", "Long-running query alerts"],
    troubleshooting: ["Connection storm → raise PgBouncer pool_size", "Replica lag → check network + WAL"],
  },
  {
    id: "external", name: "External APIs", short: "3rd-party integrations",
    description: "Egress to Stripe, Twilio, Slack, and internal partner APIs. All calls traced with OpenTelemetry.",
    icon: FaCloud, color: "#94a3b8",
    categories: ["Data", "Networking"], column: 4, row: 2,
    status: "healthy", cpu: 5, mem: 8, protocol: "HTTPS", latencyMs: 210,
    docs: "https://opentelemetry.io/",
  },

  // COL 5 — CLOUD SERVICES
  {
    id: "s3", name: "S3", short: "Object storage",
    description: "Buckets for user uploads, logs, and Argo CD backups. Versioning + SSE-KMS everywhere.",
    icon: HiOutlineFolder, color: "#569A31",
    categories: ["Cloud Services", "Storage"], column: 5, row: 0,
    status: "healthy", cpu: 0, mem: 0,
    docs: "https://docs.aws.amazon.com/s3/",
    bestPractices: ["Block Public Access on account level", "Bucket policies with aws:SecureTransport", "Lifecycle → Glacier"],
  },
  {
    id: "sns", name: "SNS", short: "Pub/Sub",
    description: "Fan-out topics that push events to SQS queues, Lambda, and email/SMS subscribers.",
    icon: HiOutlineBell, color: "#ff4b4b",
    categories: ["Cloud Services"], column: 5, row: 1,
    status: "healthy", cpu: 0, mem: 0, docs: "https://docs.aws.amazon.com/sns/",
  },
  {
    id: "sqs", name: "SQS", short: "Managed queues",
    description: "Durable, at-least-once delivery. FIFO queues for order events, DLQ for poison messages.",
    icon: HiOutlineMail, color: "#ff4b4b",
    categories: ["Cloud Services"], column: 5, row: 2,
    status: "healthy", cpu: 0, mem: 0, docs: "https://docs.aws.amazon.com/sqs/",
  },
  {
    id: "lambda", name: "Lambda", short: "Serverless functions",
    description: "Event-driven functions for cron, S3 events, and DynamoDB streams. Powered by ARM64 Graviton.",
    icon: HiOutlineLightningBolt, color: "#ff9900",
    categories: ["Cloud Services"], column: 5, row: 3,
    status: "healthy", cpu: 12, mem: 18, docs: "https://docs.aws.amazon.com/lambda/",
  },
  {
    id: "secrets", name: "Secrets Manager", short: "Rotated secrets",
    description: "Central secret store. Rotated every 30 days. Pods read via External Secrets Operator + IRSA.",
    icon: FaLock, color: "#eab308",
    categories: ["Cloud Services", "Security"], column: 5, row: 4,
    status: "healthy", cpu: 0, mem: 0,
    docs: "https://docs.aws.amazon.com/secretsmanager/",
    bestPractices: ["Rotate on schedule", "IAM policies scoped to secret ARN", "KMS CMK per environment"],
  },

  // COL 6 — PLATFORM (observability / security / autoscaling / gitops / compute)
  {
    id: "prom", name: "Prometheus", short: "Metrics scraping",
    description: "kube-prometheus-stack scraping all workloads. Long-term storage via Thanos to S3.",
    icon: SiPrometheus, color: "#E6522C",
    categories: ["Observability"], column: 6, row: 0,
    status: "healthy", cpu: 55, mem: 72, replicas: 2, namespace: "monitoring",
    docs: "https://prometheus.io/docs/",
    kubectl: ["kubectl -n monitoring get prometheus", "promtool query instant http://prom:9090 up"],
  },
  {
    id: "grafana", name: "Grafana", short: "Dashboards",
    description: "SLO dashboards, RED metrics per service, and error-budget burn alerts.",
    icon: SiGrafana, color: "#F46800",
    categories: ["Observability"], column: 6, row: 1,
    status: "healthy", cpu: 18, mem: 30, replicas: 2, namespace: "monitoring",
    docs: "https://grafana.com/docs/",
  },
  {
    id: "loki", name: "Loki + Tempo", short: "Logs + traces",
    description: "Loki for logs, Tempo for distributed traces, wired to Grafana. Correlated by trace_id.",
    icon: FaSearch, color: "#F46800",
    categories: ["Observability"], column: 6, row: 2,
    status: "healthy", cpu: 34, mem: 55, replicas: 3, namespace: "monitoring",
    docs: "https://grafana.com/oss/loki/",
  },
  {
    id: "otel", name: "OpenTelemetry", short: "Trace + metric SDK",
    description: "Auto-instrumentation via OTel operator; collector pipelines route to Tempo/Prom/Loki.",
    icon: SiOpentelemetry, color: "#425CC7",
    categories: ["Observability"], column: 6, row: 3,
    status: "healthy", cpu: 12, mem: 22, replicas: 3, namespace: "otel",
    docs: "https://opentelemetry.io/docs/",
  },
  {
    id: "fluent", name: "Fluent Bit", short: "Log shipper",
    description: "Node-level DaemonSet tailing container logs, enriching with k8s metadata, shipping to Loki + S3.",
    icon: SiFluentbit, color: "#49BDA5",
    categories: ["Observability"], column: 6, row: 4,
    status: "healthy", cpu: 6, mem: 14, replicas: 8, namespace: "logging",
    docs: "https://docs.fluentbit.io/",
  },
  {
    id: "falco", name: "Falco", short: "Runtime security",
    description: "eBPF-driven runtime detection. Alerts on shell-in-container, sensitive mounts, crypto miners.",
    icon: FaShieldAlt, color: "#00B04F",
    categories: ["Security"], column: 6, row: 5,
    status: "healthy", cpu: 9, mem: 16, replicas: 8, namespace: "falco",
    docs: "https://falco.org/docs/",
  },
  {
    id: "kyverno", name: "Kyverno + OPA", short: "Policy engine",
    description: "Kyverno for admission policies (image signing, resource limits), OPA Gatekeeper for cluster-wide constraints.",
    icon: FaShieldAlt, color: "#7D4698",
    categories: ["Security"], column: 6, row: 6,
    status: "healthy", cpu: 7, mem: 12, replicas: 3, namespace: "kyverno",
    docs: "https://kyverno.io/docs/",
    bestPractices: ["Enforce cosign signatures", "Disallow :latest tag", "Require readOnlyRootFilesystem"],
  },
  {
    id: "hpa", name: "HPA + KEDA", short: "Pod autoscaling",
    description: "HPA on CPU/mem + KEDA event-driven scaling on SQS queue depth and Kafka lag.",
    icon: FaExpandArrowsAlt, color: "#22d3ee",
    categories: ["Autoscaling"], column: 6, row: 7,
    status: "healthy", cpu: 0, mem: 0,
    docs: "https://keda.sh/docs/",
    yaml: `apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata: { name: worker-scaler }
spec:
  scaleTargetRef: { name: worker }
  minReplicaCount: 2
  maxReplicaCount: 50
  triggers:
    - type: aws-sqs-queue
      metadata: { queueURL: '...', queueLength: '10' }`,
  },
  {
    id: "karpenter", name: "Karpenter", short: "Node autoscaling",
    description: "Just-in-time node provisioning. Consolidates workloads, uses Spot with fallback to On-Demand.",
    icon: FaServer, color: "#f97316",
    categories: ["Autoscaling", "Compute"], column: 6, row: 8,
    status: "healthy", cpu: 0, mem: 0,
    docs: "https://karpenter.sh/",
    bestPractices: ["Spot + On-Demand capacity types", "Consolidation policy", "Interruption Queue via SQS"],
  },
  {
    id: "csi", name: "PV / PVC / CSI", short: "Persistent storage",
    description: "EBS CSI driver provisions gp3 volumes; EFS CSI for shared filesystems.",
    icon: FaHdd, color: "#94a3b8",
    categories: ["Storage"], column: 6, row: 9,
    status: "healthy", cpu: 0, mem: 0,
    docs: "https://kubernetes-csi.github.io/docs/",
  },
  {
    id: "github", name: "GitHub", short: "Source of truth",
    description: "Trunk-based workflow with protected branches. Signed commits required.",
    icon: SiGithub, color: "#f0f6fc",
    categories: ["GitOps"], column: 6, row: 10, status: "healthy", cpu: 0, mem: 0,
    docs: "https://docs.github.com/",
  },
  {
    id: "actions", name: "GitHub Actions", short: "CI pipelines",
    description: "Build → test → SAST → container scan → sign → push to ECR. Reusable workflows across repos.",
    icon: SiGithubactions, color: "#2088ff",
    categories: ["GitOps"], column: 6, row: 11, status: "healthy", cpu: 0, mem: 0,
    docs: "https://docs.github.com/actions",
  },
  {
    id: "ecr", name: "Amazon ECR", short: "Container registry",
    description: "Private ECR with immutable tags, image scanning on push, and cross-region replication.",
    icon: FaCube, color: "#ff9900",
    categories: ["GitOps"], column: 6, row: 12, status: "healthy", cpu: 0, mem: 0,
    docs: "https://docs.aws.amazon.com/ecr/",
  },
  {
    id: "argo", name: "Argo CD", short: "GitOps sync",
    description: "Argo CD reconciles cluster state from Git. ApplicationSets fan out per environment.",
    icon: SiArgo, color: "#EF7B4D",
    categories: ["GitOps"], column: 6, row: 13, status: "syncing", cpu: 22, mem: 30, replicas: 3, namespace: "argocd",
    docs: "https://argo-cd.readthedocs.io/",
    kubectl: ["argocd app list", "argocd app sync backend-api", "kubectl -n argocd get applications"],
    bestPractices: ["App-of-apps pattern", "Sync waves for ordered rollout", "SSO via OIDC"],
  },
  {
    id: "helm", name: "Helm", short: "Package manager",
    description: "Chart of charts for platform baseline (ingress, monitoring, cert-manager). Rendered by Argo CD.",
    icon: SiHelm, color: "#0F1689",
    categories: ["GitOps"], column: 6, row: 14, status: "healthy", cpu: 0, mem: 0,
    docs: "https://helm.sh/docs/",
  },
  {
    id: "eks", name: "Amazon EKS", short: "Managed control plane",
    description: "Multi-AZ EKS clusters. IRSA for pod identity, private endpoint, encrypted etcd via KMS.",
    icon: SiKubernetes, color: "#326CE5",
    categories: ["Compute"], column: 6, row: 15,
    status: "healthy", cpu: 41, mem: 58, version: "v1.30", namespace: "kube-system",
    docs: "https://docs.aws.amazon.com/eks/",
    bestPractices: ["Private cluster endpoint", "Audit logs → CloudWatch", "Pod Security Admission=restricted"],
  },
  {
    id: "openapi", name: "REST / OpenAPI", short: "Contract-first APIs",
    description: "OpenAPI 3.1 specs generated at build; enforced by CI + Envoy validation filter.",
    icon: SiOpenapiinitiative, color: "#6BA539",
    categories: ["Applications"], column: 3, row: 6,
    status: "healthy", cpu: 0, mem: 0, docs: "https://www.openapis.org/",
  },
];

/* ---------- Edges (source → target) ---------- */
export const K8S_EDGES: [string, string][] = [
  ["users", "dns"], ["dns", "cdn"], ["cdn", "waf"], ["waf", "alb"],
  ["alb", "ingress"], ["ingress", "istio"],
  ["istio", "frontend"], ["istio", "backend"], ["istio", "auth"],
  ["istio", "order"], ["istio", "payment"], ["istio", "notify"],
  ["backend", "redis"], ["backend", "postgres"],
  ["order", "postgres"], ["order", "sns"],
  ["payment", "external"], ["payment", "secrets"],
  ["notify", "sqs"], ["notify", "sns"],
  ["sns", "sqs"], ["sqs", "lambda"],
  ["frontend", "s3"],
];

/* ---------- Cluster nodes (worker plane) ---------- */
export interface WorkerNode {
  id: string; az: string; instance: string;
  cpu: number; mem: number; pods: number; capacity: number;
  status: "Ready" | "NotReady" | "Draining";
}

export const INITIAL_WORKERS: WorkerNode[] = [
  { id: "ip-10-0-1-12", az: "us-east-1a", instance: "m6g.xlarge", cpu: 58, mem: 66, pods: 22, capacity: 30, status: "Ready" },
  { id: "ip-10-0-2-24", az: "us-east-1b", instance: "m6g.xlarge", cpu: 47, mem: 52, pods: 18, capacity: 30, status: "Ready" },
  { id: "ip-10-0-3-40", az: "us-east-1c", instance: "c6g.2xlarge", cpu: 72, mem: 61, pods: 28, capacity: 40, status: "Ready" },
  { id: "ip-10-0-4-55", az: "us-east-1a", instance: "m6g.large",   cpu: 33, mem: 41, pods: 12, capacity: 20, status: "Ready" },
];

/* ---------- Failure scenarios ---------- */
export type Incident =
  | "NodeFailure" | "PodCrash" | "OOMKilled" | "ImagePullBackOff"
  | "CrashLoopBackOff" | "NetworkPartition" | "DatabaseDown" | "CPUSpike";

export const INCIDENTS: { id: Incident; label: string; target: string; message: string }[] = [
  { id: "NodeFailure",       label: "Node Failure",         target: "eks",      message: "Node ip-10-0-3-40 unresponsive · pods rescheduling" },
  { id: "PodCrash",          label: "Pod Crash",            target: "backend",  message: "backend-api-7d8 crashed · restart 1/3" },
  { id: "OOMKilled",         label: "OOMKilled",            target: "order",    message: "order-svc OOMKilled · bumping memory limit" },
  { id: "ImagePullBackOff",  label: "ImagePullBackOff",     target: "payment",  message: "payment:sha-xyz not found in ECR" },
  { id: "CrashLoopBackOff",  label: "CrashLoopBackOff",     target: "notify",   message: "notify-svc crashlooping · check config map" },
  { id: "NetworkPartition",  label: "Network Partition",    target: "istio",    message: "Envoy 503 · circuit breaker tripped" },
  { id: "DatabaseDown",      label: "Database Down",        target: "postgres", message: "Primary offline · promoting replica" },
  { id: "CPUSpike",          label: "CPU Spike",            target: "frontend", message: "CPU > 90% · HPA scaling replicas 6 → 12" },
];

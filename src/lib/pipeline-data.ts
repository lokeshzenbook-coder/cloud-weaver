import {
  GitCommit, GitBranch, PlayCircle, Package, KeyRound, Sparkles,
  ShieldCheck, Boxes, FlaskConical, Hammer, FileCode2, Container,
  FileText, PenLine, Archive, GitMerge, Scale, Rocket, Bug,
  Radar, Activity, Bell,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type StageCategory =
  | "Source" | "CI" | "Security" | "Testing" | "Containers"
  | "Infrastructure" | "GitOps" | "CD" | "Observability" | "Cloud";

export interface PipelineStage {
  id: string;
  name: string;
  short: string;
  icon: LucideIcon;
  tools: string[];
  categories: StageCategory[];
  description: string;
  input: string;
  output: string;
  bestPractices: string[];
  commands: string[];
}

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "developer", name: "Developer", short: "Commit & push code",
    icon: GitCommit, tools: ["GitHub", "GitLab", "Bitbucket"],
    categories: ["Source"],
    description: "Engineer authors code locally, signs commits, and pushes to a feature branch.",
    input: "Local changes", output: "Signed commit on remote branch",
    bestPractices: ["Sign commits with GPG/SSH", "Small, focused PRs", "Conventional commits"],
    commands: ["git commit -S -m 'feat: ...'", "git push origin feature/x"],
  },
  {
    id: "scm", name: "Source Control", short: "Branch protection & reviews",
    icon: GitBranch, tools: ["Branch Protection", "Pull Requests", "CODEOWNERS", "Commit Signing"],
    categories: ["Source"],
    description: "Enforce required reviews, status checks, signed commits, and CODEOWNERS on protected branches.",
    input: "Pull request", output: "Approved & merge-ready PR",
    bestPractices: ["Require 2 reviewers", "Dismiss stale reviews", "Enforce linear history"],
    commands: ["gh pr create", "gh pr review --approve"],
  },
  {
    id: "ci", name: "CI Pipeline", short: "Trigger build workflow",
    icon: PlayCircle, tools: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"],
    categories: ["CI"],
    description: "CI runner picks up the event and starts a hermetic build matrix.",
    input: "Merge / PR event", output: "Workflow run",
    bestPractices: ["Ephemeral runners", "OIDC to cloud", "Cache with lockfile hashes"],
    commands: ["gh workflow run ci.yml"],
  },
  {
    id: "deps", name: "Dependency Install", short: "Resolve & cache modules",
    icon: Package, tools: ["npm", "Maven", "Gradle", "pip", "Go Modules"],
    categories: ["CI"],
    description: "Restore deterministic dependencies from lockfiles with layer caching.",
    input: "Lockfile", output: "node_modules / .m2 / venv",
    bestPractices: ["Pin versions", "Verify checksums", "Private registry proxy"],
    commands: ["npm ci", "mvn -B dependency:go-offline"],
  },
  {
    id: "secrets", name: "Secret Scanning", short: "Detect leaked credentials",
    icon: KeyRound, tools: ["Gitleaks", "TruffleHog", "GitHub Secret Scanning"],
    categories: ["Security"],
    description: "Scan diff and history for API keys, tokens, and private material before build.",
    input: "Source tree", output: "SARIF findings",
    bestPractices: ["Pre-commit hooks", "Rotate on detection", "Push protection"],
    commands: ["gitleaks detect --redact"],
  },
  {
    id: "lint", name: "Code Quality", short: "Lint & style checks",
    icon: Sparkles, tools: ["ESLint", "Checkstyle", "PMD", "SpotBugs", "Pylint"],
    categories: ["CI"],
    description: "Static style, complexity, and correctness checks with fail-fast gates.",
    input: "Source", output: "Lint report",
    bestPractices: ["Shared configs", "Autoformat in pre-commit", "Ratchet warnings to zero"],
    commands: ["eslint . --max-warnings=0"],
  },
  {
    id: "sast", name: "SAST", short: "Static app security testing",
    icon: ShieldCheck, tools: ["SonarQube", "Semgrep", "CodeQL", "Snyk Code"],
    categories: ["Security"],
    description: "Deep static analysis for injection, auth, crypto, and CWE-tagged weaknesses.",
    input: "Source", output: "SARIF + PR annotations",
    bestPractices: ["Baseline on main", "Fail on new criticals", "Custom rulesets"],
    commands: ["semgrep --config=auto --error"],
  },
  {
    id: "sca", name: "SCA", short: "Dependency vuln scan",
    icon: Boxes, tools: ["OWASP Dependency Check", "Snyk", "Dependabot", "Renovate"],
    categories: ["Security"],
    description: "Detect vulnerable transitive dependencies and license risk.",
    input: "Lockfile / SBOM", output: "Vulnerability report",
    bestPractices: ["Auto-PR upgrades", "License allow-list", "Reachability analysis"],
    commands: ["snyk test --severity-threshold=high"],
  },
  {
    id: "unit", name: "Unit Testing", short: "Run tests & coverage",
    icon: FlaskConical, tools: ["JUnit", "Jest", "PyTest", "Go Test", "Coverage"],
    categories: ["Testing"],
    description: "Fast unit suites with coverage thresholds enforced in CI.",
    input: "Compiled code", output: "JUnit XML + coverage",
    bestPractices: ["≥80% branch coverage", "Parallel shards", "Mutation testing"],
    commands: ["jest --coverage --ci"],
  },
  {
    id: "build", name: "Application Build", short: "Compile & package",
    icon: Hammer, tools: ["Maven", "Gradle", "Docker Build", "NPM Build"],
    categories: ["CI"],
    description: "Produce immutable, reproducible build artifacts with build metadata.",
    input: "Source + deps", output: "JAR / bundle / image",
    bestPractices: ["Reproducible builds", "Multi-stage Dockerfiles", "SLSA provenance"],
    commands: ["docker buildx build --sbom=true ."],
  },
  {
    id: "iac", name: "Infra Security", short: "IaC policy scanning",
    icon: FileCode2, tools: ["Terraform", "Checkov", "tfsec", "Terrascan", "KICS"],
    categories: ["Security", "Infrastructure"],
    description: "Scan Terraform / Kubernetes manifests for misconfig, CIS, and PCI drift.",
    input: "*.tf / manifests", output: "Policy report",
    bestPractices: ["OPA policies as code", "Plan on PR", "Drift detection"],
    commands: ["checkov -d . --framework terraform"],
  },
  {
    id: "container", name: "Container Security", short: "Scan images for CVEs",
    icon: Container, tools: ["Trivy", "Grype", "Docker Scout"],
    categories: ["Security", "Containers"],
    description: "Scan OS packages and app layers of container images for known CVEs.",
    input: "OCI image", output: "CVE report",
    bestPractices: ["Distroless base", "Non-root user", "Fail on HIGH+"],
    commands: ["trivy image --severity HIGH,CRITICAL app:sha"],
  },
  {
    id: "sbom", name: "Generate SBOM", short: "Software bill of materials",
    icon: FileText, tools: ["Syft", "CycloneDX", "SPDX"],
    categories: ["Security"],
    description: "Produce a signed SBOM alongside every artifact for supply-chain audit.",
    input: "Artifact", output: "SBOM (SPDX / CycloneDX)",
    bestPractices: ["Attach to release", "Store in registry", "Diff between releases"],
    commands: ["syft app:sha -o cyclonedx-json > sbom.json"],
  },
  {
    id: "sign", name: "Image Signing", short: "Keyless sign & attest",
    icon: PenLine, tools: ["Cosign", "Sigstore", "Notary v2"],
    categories: ["Security", "Containers"],
    description: "Keyless sign images and attach SBOM + provenance attestations.",
    input: "Image + SBOM", output: "Signature + attestation",
    bestPractices: ["Keyless OIDC signing", "Verify at admission", "Rekor transparency log"],
    commands: ["cosign sign --yes app:sha"],
  },
  {
    id: "registry", name: "Artifact Registry", short: "Publish signed image",
    icon: Archive, tools: ["Amazon ECR", "Docker Hub", "GHCR", "JFrog"],
    categories: ["Cloud", "Containers"],
    description: "Push signed, scanned image with immutable tags to a trusted registry.",
    input: "Signed image", output: "Registry reference",
    bestPractices: ["Immutable tags", "Retention policy", "Cross-region replication"],
    commands: ["docker push ghcr.io/org/app@sha256:..."],
  },
  {
    id: "gitops", name: "GitOps", short: "Declarative manifests",
    icon: GitMerge, tools: ["Helm", "Git Repository", "Argo CD"],
    categories: ["GitOps", "CD"],
    description: "Bump image digest in the env repo; Argo CD detects drift and syncs.",
    input: "Image digest", output: "PR to env repo",
    bestPractices: ["Separate app & config repos", "App-of-apps", "Automated sync waves"],
    commands: ["argocd app sync app-prod"],
  },
  {
    id: "policy", name: "K8s Policy", short: "Admission validation",
    icon: Scale, tools: ["Kyverno", "OPA Gatekeeper", "Pod Security Standards"],
    categories: ["Security", "GitOps"],
    description: "Cluster admission webhooks block non-compliant workloads (root, hostPath, unsigned).",
    input: "Manifest", output: "Admit / deny",
    bestPractices: ["Verify cosign signature", "Enforce PSS restricted", "Audit mode first"],
    commands: ["kubectl apply --dry-run=server"],
  },
  {
    id: "deploy", name: "Deploy to K8s", short: "Progressive delivery",
    icon: Rocket, tools: ["Amazon EKS", "Helm", "Argo CD", "Blue/Green", "Canary", "Rolling"],
    categories: ["CD", "GitOps", "Cloud"],
    description: "Progressive rollout with health checks, analysis, and automated rollback.",
    input: "Approved manifest", output: "Running Pods",
    bestPractices: ["Canary + metric analysis", "PDBs & HPAs", "Auto-rollback on SLO breach"],
    commands: ["helm upgrade --install app ./chart"],
  },
  {
    id: "dast", name: "DAST", short: "Dynamic security testing",
    icon: Bug, tools: ["OWASP ZAP", "Burp Suite", "Nikto"],
    categories: ["Security", "Testing"],
    description: "Post-deploy black-box scan against staging / preview environment.",
    input: "Live URL", output: "DAST report",
    bestPractices: ["Auth'd scans", "Baseline diff", "Fire only in non-prod"],
    commands: ["zap-baseline.py -t https://staging"],
  },
  {
    id: "runtime", name: "Runtime Security", short: "eBPF threat detection",
    icon: Radar, tools: ["Falco", "Prisma Cloud", "Aqua", "Sysdig"],
    categories: ["Security", "Observability"],
    description: "Kernel-level detection of anomalous syscalls, exec spawn, and privilege escalation.",
    input: "Kernel events", output: "Alerts to SIEM",
    bestPractices: ["Custom Falco rules", "Auto-quarantine", "Stream to SIEM"],
    commands: ["falco -r /etc/falco/rules.d"],
  },
  {
    id: "monitor", name: "Monitoring", short: "Metrics, logs, traces",
    icon: Activity, tools: ["Prometheus", "Grafana", "Loki", "Datadog", "OpenTelemetry"],
    categories: ["Observability"],
    description: "Golden signals, SLOs, distributed traces, and correlated logs.",
    input: "OTel signals", output: "Dashboards + SLOs",
    bestPractices: ["RED + USE metrics", "Error budgets", "Trace-log correlation"],
    commands: ["kubectl port-forward svc/grafana 3000"],
  },
  {
    id: "notify", name: "Notifications", short: "Alert the right team",
    icon: Bell, tools: ["Slack", "MS Teams", "PagerDuty", "SNS", "Jira"],
    categories: ["Observability"],
    description: "Route alerts, deploy events, and incidents to on-call and ChatOps.",
    input: "Alert / event", output: "Ticket / page",
    bestPractices: ["Symptom-based alerts", "Runbooks in alerts", "Post-incident review"],
    commands: ["curl -XPOST $SLACK_WEBHOOK ..."],
  },
];

export const PIPELINE_FILTERS: (StageCategory | "All")[] = [
  "All", "Security", "Testing", "CI", "CD", "Containers",
  "Cloud", "Infrastructure", "GitOps", "Observability",
];

export const PIPELINE_STATS = [
  { label: "Pipeline Success", value: "98.7%", accent: "var(--color-aurora-3)" },
  { label: "Avg Execution", value: "8m 42s", accent: "var(--color-aurora-1)" },
  { label: "Critical Vulns", value: "0", accent: "var(--color-aurora-3)" },
  { label: "High / Med / Low", value: "0 · 2 · 14", accent: "var(--color-aurora-2)" },
  { label: "Code Coverage", value: "86%", accent: "var(--color-aurora-1)" },
  { label: "Artifacts", value: "127", accent: "var(--color-aurora-2)" },
  { label: "Deployments", value: "2.5k+", accent: "var(--color-aurora-3)" },
  { label: "Pods Running", value: "184", accent: "var(--color-aurora-1)" },
];

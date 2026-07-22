import type { IconType } from "react-icons";
import {
  SiGithub, SiGitlab, SiBitbucket, SiGithubactions, SiJenkins, SiCircleci,
  SiNodedotjs, SiNpm, SiYarn, SiPnpm, SiApachemaven, SiGradle, SiPython, SiGo,
  SiEslint, SiSonarqubeserver, SiSonar, SiSnyk, SiOwasp, SiDependabot, SiRenovate,
  SiJunit5, SiJest, SiPytest, SiDocker, SiTerraform, SiHelm, SiArgo,
  SiKubernetes, SiJfrog, SiTrivy, SiSpdx,
  SiPrometheus, SiGrafana, SiOpentelemetry, SiDatadog, SiElasticstack, SiFluentbit,
  SiPagerduty, SiJira, SiPortswigger, SiZap,
} from "react-icons/si";
import { FaAws, FaSlack, FaMicrosoft } from "react-icons/fa6";
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

/** A tool inside a stage: either a real brand icon or a monogram fallback with brand color. */
export interface Tool {
  name: string;
  color: string;         // official brand color (or accent for monograms)
  icon?: IconType;       // react-icons brand SVG (Simple Icons / FA6)
  mono?: string;         // 1-3 letter monogram fallback when no official icon exists
}

export interface PipelineStage {
  id: string;
  name: string;
  short: string;
  icon: LucideIcon;         // stage-header icon (semantic)
  tools: Tool[];
  categories: StageCategory[];
  description: string;
  input: string;
  output: string;
  bestPractices: string[];
  commands: string[];
}

// ---------- Tool presets (reused across stages) ----------
const T = {
  github:      { name: "GitHub",         icon: SiGithub,         color: "#f0f6fc" },
  gitlab:      { name: "GitLab",         icon: SiGitlab,         color: "#FC6D26" },
  bitbucket:   { name: "Bitbucket",      icon: SiBitbucket,      color: "#2684FF" },
  codeowners:  { name: "CODEOWNERS",     mono: "CO",             color: "#8B949E" },
  pr:          { name: "Pull Request",   mono: "PR",             color: "#2088FF" },
  mr:          { name: "Merge Request",  mono: "MR",             color: "#FC6D26" },
  branchProt:  { name: "Branch Protection", mono: "BP",          color: "#3FB950" },

  ghActions:   { name: "GitHub Actions", icon: SiGithubactions,  color: "#2088FF" },
  gitlabCI:    { name: "GitLab CI",      icon: SiGitlab,         color: "#FC6D26" },
  jenkins:     { name: "Jenkins",        icon: SiJenkins,        color: "#D24939" },
  azdo:        { name: "Azure DevOps",   mono: "AZ",             color: "#0078D7" },
  circleci:    { name: "CircleCI",       icon: SiCircleci,       color: "#00CCBD" },

  node:        { name: "Node.js",        icon: SiNodedotjs,      color: "#3C873A" },
  npm:         { name: "npm",            icon: SiNpm,            color: "#CB3837" },
  yarn:        { name: "Yarn",           icon: SiYarn,           color: "#2C8EBB" },
  pnpm:        { name: "pnpm",           icon: SiPnpm,           color: "#F69220" },
  maven:       { name: "Maven",          icon: SiApachemaven,    color: "#C71A36" },
  gradle:      { name: "Gradle",         icon: SiGradle,         color: "#02303A" },
  python:      { name: "Python",         icon: SiPython,         color: "#3776AB" },
  go:          { name: "Go",             icon: SiGo,             color: "#00ADD8" },

  gitleaks:    { name: "Gitleaks",       mono: "GL",             color: "#EE1C25" },
  trufflehog:  { name: "TruffleHog",     mono: "TH",             color: "#7B4397" },
  ghSecret:    { name: "GH Secret Scan", icon: SiGithub,         color: "#3FB950" },

  eslint:      { name: "ESLint",         icon: SiEslint,         color: "#4B32C3" },
  pylint:      { name: "Pylint",         mono: "PY",             color: "#FFD43B" },
  checkstyle:  { name: "Checkstyle",     mono: "CS",             color: "#F5A623" },
  pmd:         { name: "PMD",            mono: "PMD",            color: "#7B68EE" },
  spotbugs:    { name: "SpotBugs",       mono: "SB",             color: "#E44D26" },

  sonar:       { name: "SonarQube",      icon: SiSonarqubeserver, color: "#4E9BCD" },
  semgrep:     { name: "Semgrep",        mono: "SG",             color: "#6366F1" },
  codeql:      { name: "CodeQL",         icon: SiGithub,         color: "#2088FF" },
  snykCode:    { name: "Snyk Code",      icon: SiSnyk,           color: "#4C4A73" },

  owaspDC:     { name: "OWASP DC",       icon: SiOwasp,          color: "#F26522" },
  snyk:        { name: "Snyk",           icon: SiSnyk,           color: "#4C4A73" },
  dependabot:  { name: "Dependabot",     icon: SiDependabot,     color: "#025E8C" },
  renovate:    { name: "Renovate",       icon: SiRenovate,       color: "#FF6600" },

  junit:       { name: "JUnit",          icon: SiJunit5,         color: "#25A162" },
  jest:        { name: "Jest",           icon: SiJest,           color: "#C21325" },
  pytest:      { name: "PyTest",         icon: SiPytest,         color: "#009FE3" },
  goTest:      { name: "Go Test",        icon: SiGo,             color: "#00ADD8" },
  coverage:    { name: "Coverage",       mono: "%",              color: "#3FB950" },

  docker:      { name: "Docker",         icon: SiDocker,         color: "#2496ED" },

  terraform:   { name: "Terraform",      icon: SiTerraform,      color: "#7B42BC" },
  checkov:     { name: "Checkov",        mono: "CK",             color: "#6D28D9" },
  tfsec:       { name: "tfsec",          mono: "TS",             color: "#00A98F" },
  terrascan:   { name: "Terrascan",      mono: "TC",             color: "#00B0FF" },
  kics:        { name: "KICS",           mono: "KI",             color: "#EF4444" },

  trivy:       { name: "Trivy",          icon: SiTrivy,          color: "#1904DA" },
  grype:       { name: "Grype",          mono: "GR",             color: "#FF6A00" },
  dockerScout: { name: "Docker Scout",   icon: SiDocker,         color: "#00D4FF" },
  snykCont:    { name: "Snyk Container", icon: SiSnyk,           color: "#4C4A73" },

  syft:        { name: "Syft",           mono: "SY",             color: "#7C3AED" },
  cyclonedx:   { name: "CycloneDX",      mono: "CDX",            color: "#FF6C37" },
  spdx:        { name: "SPDX",           icon: SiSpdx,           color: "#4398CC" },

  cosign:      { name: "Cosign",         mono: "CO",             color: "#3B82F6" },
  sigstore:    { name: "Sigstore",       mono: "SS",             color: "#2E86AB" },
  notary:      { name: "Notary v2",      mono: "NT",             color: "#F59E0B" },

  ecr:         { name: "Amazon ECR",     icon: FaAws,            color: "#FF9900" },
  dockerHub:   { name: "Docker Hub",     icon: SiDocker,         color: "#2496ED" },
  ghcr:        { name: "GHCR",           icon: SiGithub,         color: "#f0f6fc" },
  jfrog:       { name: "JFrog",          icon: SiJfrog,          color: "#41BF47" },

  helm:        { name: "Helm",           icon: SiHelm,           color: "#0F1689" },
  argocd:      { name: "Argo CD",        icon: SiArgo,           color: "#EF7B4D" },
  gitRepo:     { name: "Git Repo",       icon: SiGithub,         color: "#f0f6fc" },

  kyverno:     { name: "Kyverno",        mono: "KY",             color: "#00B39F" },
  opa:         { name: "OPA Gatekeeper", mono: "OPA",            color: "#7D4CDB" },
  k8s:         { name: "Kubernetes",     icon: SiKubernetes,     color: "#326CE5" },

  eks:         { name: "Amazon EKS",     icon: FaAws,            color: "#FF9900" },
  blueGreen:   { name: "Blue/Green",     mono: "B/G",            color: "#3B82F6" },
  canary:      { name: "Canary",         mono: "CN",             color: "#F59E0B" },

  zap:         { name: "OWASP ZAP",      icon: SiZap,            color: "#00549E" },
  burp:        { name: "Burp Suite",     icon: SiPortswigger,    color: "#FF6633" },
  nikto:       { name: "Nikto",          mono: "NK",             color: "#8B0000" },

  falco:       { name: "Falco",          mono: "FA",             color: "#00B4DC" },
  prismaCloud: { name: "Prisma Cloud",   mono: "PC",             color: "#F04E23" },
  aqua:        { name: "Aqua Security",  mono: "AQ",             color: "#FF6533" },
  sysdig:      { name: "Sysdig",         mono: "SD",             color: "#00AEEF" },

  prometheus:  { name: "Prometheus",     icon: SiPrometheus,     color: "#E6522C" },
  grafana:     { name: "Grafana",        icon: SiGrafana,        color: "#F46800" },
  loki:        { name: "Loki",           icon: SiGrafana,        color: "#FFA500" },
  otel:        { name: "OpenTelemetry",  icon: SiOpentelemetry,  color: "#F5A800" },
  datadog:     { name: "Datadog",        icon: SiDatadog,        color: "#632CA6" },
  elk:         { name: "ELK Stack",      icon: SiElasticstack,   color: "#005571" },
  fluentbit:   { name: "Fluent Bit",     icon: SiFluentbit,      color: "#49BDA5" },

  slack:       { name: "Slack",          icon: FaSlack,          color: "#4A154B" },
  teams:       { name: "MS Teams",       icon: FaMicrosoft,      color: "#6264A7" },
  pagerduty:   { name: "PagerDuty",      icon: SiPagerduty,      color: "#06AC38" },
  sns:         { name: "Amazon SNS",     icon: FaAws,            color: "#E7157B" },
  jira:        { name: "Jira",           icon: SiJira,           color: "#0052CC" },
} satisfies Record<string, Tool>;

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "scm", name: "Source Control", short: "Commit & push code",
    icon: GitCommit, tools: [T.github, T.gitlab, T.bitbucket],
    categories: ["Source"],
    description: "Engineer authors code locally, signs commits, and pushes to a feature branch on the SCM.",
    input: "Local changes", output: "Signed commit on remote branch",
    bestPractices: ["Sign commits with GPG/SSH", "Small, focused PRs", "Conventional commit messages"],
    commands: ["git commit -S -m 'feat: ...'", "git push origin feature/x"],
  },
  {
    id: "branch", name: "Branch Protection", short: "Reviews & merge gates",
    icon: GitBranch, tools: [T.branchProt, T.codeowners, T.pr, T.mr, T.github, T.gitlab],
    categories: ["Source"],
    description: "Enforce required reviews, status checks, signed commits, and CODEOWNERS on protected branches.",
    input: "Pull / merge request", output: "Approved, merge-ready change",
    bestPractices: ["Require 2 reviewers", "Dismiss stale reviews", "Enforce linear history"],
    commands: ["gh pr create", "gh pr review --approve"],
  },
  {
    id: "ci", name: "CI Platform", short: "Trigger build workflow",
    icon: PlayCircle, tools: [T.ghActions, T.gitlabCI, T.jenkins, T.azdo, T.circleci],
    categories: ["CI"],
    description: "CI runner picks up the event and starts a hermetic build matrix with OIDC to cloud.",
    input: "Merge / PR event", output: "Workflow run",
    bestPractices: ["Ephemeral runners", "OIDC to cloud (no long-lived keys)", "Cache with lockfile hashes"],
    commands: ["gh workflow run ci.yml"],
  },
  {
    id: "deps", name: "Dependency Management", short: "Resolve & cache modules",
    icon: Package, tools: [T.node, T.npm, T.yarn, T.pnpm, T.maven, T.gradle, T.python, T.go],
    categories: ["CI"],
    description: "Restore deterministic dependencies from lockfiles with layer caching and private registry proxy.",
    input: "Lockfile", output: "node_modules / .m2 / venv",
    bestPractices: ["Pin versions", "Verify checksums", "Private registry proxy"],
    commands: ["npm ci", "mvn -B dependency:go-offline"],
  },
  {
    id: "secrets", name: "Secret Scanning", short: "Detect leaked credentials",
    icon: KeyRound, tools: [T.gitleaks, T.trufflehog, T.ghSecret],
    categories: ["Security"],
    description: "Scan diff and history for API keys, tokens, and private material before build.",
    input: "Source tree", output: "SARIF findings",
    bestPractices: ["Pre-commit hooks", "Rotate on detection", "Push protection enabled"],
    commands: ["gitleaks detect --redact"],
  },
  {
    id: "lint", name: "Code Quality", short: "Lint & style checks",
    icon: Sparkles, tools: [T.eslint, T.pylint, T.checkstyle, T.pmd, T.spotbugs],
    categories: ["CI"],
    description: "Static style, complexity, and correctness checks with fail-fast gates.",
    input: "Source", output: "Lint report",
    bestPractices: ["Shared configs", "Autoformat in pre-commit", "Ratchet warnings to zero"],
    commands: ["eslint . --max-warnings=0"],
  },
  {
    id: "sast", name: "SAST", short: "Static app security testing",
    icon: ShieldCheck, tools: [T.sonar, T.semgrep, T.codeql, T.snykCode],
    categories: ["Security"],
    description: "Deep static analysis for injection, auth, crypto, and CWE-tagged weaknesses.",
    input: "Source", output: "SARIF + PR annotations",
    bestPractices: ["Baseline on main", "Fail on new criticals", "Custom rulesets"],
    commands: ["semgrep --config=auto --error"],
  },
  {
    id: "sca", name: "Software Composition Analysis", short: "Dependency vuln scan",
    icon: Boxes, tools: [T.owaspDC, T.snyk, T.dependabot, T.renovate],
    categories: ["Security"],
    description: "Detect vulnerable transitive dependencies and license risk; auto-PR patches.",
    input: "Lockfile / SBOM", output: "Vulnerability report",
    bestPractices: ["Auto-PR upgrades", "License allow-list", "Reachability analysis"],
    commands: ["snyk test --severity-threshold=high"],
  },
  {
    id: "test", name: "Testing", short: "Run tests & coverage",
    icon: FlaskConical, tools: [T.junit, T.jest, T.pytest, T.goTest, T.coverage],
    categories: ["Testing"],
    description: "Fast unit + integration suites with coverage thresholds enforced in CI.",
    input: "Compiled code", output: "JUnit XML + coverage",
    bestPractices: ["≥80% branch coverage", "Parallel shards", "Mutation testing"],
    commands: ["jest --coverage --ci"],
  },
  {
    id: "build", name: "Build", short: "Compile & package",
    icon: Hammer, tools: [T.docker, T.maven, T.gradle, T.node],
    categories: ["CI"],
    description: "Produce immutable, reproducible build artifacts with SLSA provenance.",
    input: "Source + deps", output: "JAR / bundle / OCI image",
    bestPractices: ["Reproducible builds", "Multi-stage Dockerfiles", "SLSA provenance"],
    commands: ["docker buildx build --sbom=true --provenance=true ."],
  },
  {
    id: "iac", name: "IaC Security", short: "Terraform policy scan",
    icon: FileCode2, tools: [T.terraform, T.checkov, T.tfsec, T.terrascan, T.kics],
    categories: ["Security", "Infrastructure"],
    description: "Scan Terraform / Kubernetes manifests for misconfig, CIS, and compliance drift.",
    input: "*.tf / manifests", output: "Policy report",
    bestPractices: ["OPA policies as code", "Plan on PR", "Drift detection"],
    commands: ["checkov -d . --framework terraform"],
  },
  {
    id: "container", name: "Container Security", short: "Scan images for CVEs",
    icon: Container, tools: [T.trivy, T.grype, T.dockerScout, T.snykCont],
    categories: ["Security", "Containers"],
    description: "Scan OS packages and app layers of container images for known CVEs.",
    input: "OCI image", output: "CVE report",
    bestPractices: ["Distroless base", "Non-root user", "Fail on HIGH+"],
    commands: ["trivy image --severity HIGH,CRITICAL app:sha"],
  },
  {
    id: "sbom", name: "SBOM", short: "Software bill of materials",
    icon: FileText, tools: [T.syft, T.cyclonedx, T.spdx],
    categories: ["Security"],
    description: "Produce a signed SBOM alongside every artifact for supply-chain audit.",
    input: "Artifact", output: "SBOM (SPDX / CycloneDX)",
    bestPractices: ["Attach to release", "Store in registry", "Diff between releases"],
    commands: ["syft app:sha -o cyclonedx-json > sbom.json"],
  },
  {
    id: "sign", name: "Image Signing", short: "Keyless sign & attest",
    icon: PenLine, tools: [T.cosign, T.sigstore, T.notary],
    categories: ["Security", "Containers"],
    description: "Keyless sign images and attach SBOM + provenance attestations to a transparency log.",
    input: "Image + SBOM", output: "Signature + attestation",
    bestPractices: ["Keyless OIDC signing", "Verify at admission", "Rekor transparency log"],
    commands: ["cosign sign --yes app:sha"],
  },
  {
    id: "registry", name: "Artifact Registry", short: "Publish signed image",
    icon: Archive, tools: [T.ecr, T.dockerHub, T.ghcr, T.jfrog],
    categories: ["Cloud", "Containers"],
    description: "Push signed, scanned image with immutable tags to a trusted registry.",
    input: "Signed image", output: "Registry reference",
    bestPractices: ["Immutable tags", "Retention policy", "Cross-region replication"],
    commands: ["docker push ghcr.io/org/app@sha256:..."],
  },
  {
    id: "gitops", name: "GitOps", short: "Declarative manifests",
    icon: GitMerge, tools: [T.github, T.helm, T.argocd, T.gitRepo],
    categories: ["GitOps", "CD"],
    description: "Bump image digest in the env repo; Argo CD detects drift and syncs.",
    input: "Image digest", output: "PR to env repo",
    bestPractices: ["Separate app & config repos", "App-of-apps", "Automated sync waves"],
    commands: ["argocd app sync app-prod"],
  },
  {
    id: "policy", name: "Policy Validation", short: "Admission validation",
    icon: Scale, tools: [T.kyverno, T.opa, T.k8s],
    categories: ["Security", "GitOps"],
    description: "Cluster admission webhooks block non-compliant workloads (root, hostPath, unsigned).",
    input: "Manifest", output: "Admit / deny",
    bestPractices: ["Verify cosign signature", "Enforce PSS restricted", "Audit mode first"],
    commands: ["kubectl apply --dry-run=server"],
  },
  {
    id: "deploy", name: "Kubernetes Deployment", short: "Progressive delivery",
    icon: Rocket, tools: [T.eks, T.k8s, T.helm, T.argocd, T.blueGreen, T.canary],
    categories: ["CD", "GitOps", "Cloud"],
    description: "Progressive rollout with health checks, analysis, and automated rollback.",
    input: "Approved manifest", output: "Running Pods",
    bestPractices: ["Canary + metric analysis", "PDBs & HPAs", "Auto-rollback on SLO breach"],
    commands: ["helm upgrade --install app ./chart"],
  },
  {
    id: "dast", name: "DAST", short: "Dynamic security testing",
    icon: Bug, tools: [T.zap, T.burp, T.nikto],
    categories: ["Security", "Testing"],
    description: "Post-deploy black-box scan against staging / preview environment.",
    input: "Live URL", output: "DAST report",
    bestPractices: ["Auth'd scans", "Baseline diff", "Fire only in non-prod"],
    commands: ["zap-baseline.py -t https://staging"],
  },
  {
    id: "runtime", name: "Runtime Security", short: "eBPF threat detection",
    icon: Radar, tools: [T.falco, T.prismaCloud, T.aqua, T.sysdig],
    categories: ["Security", "Observability"],
    description: "Kernel-level detection of anomalous syscalls, exec spawn, and privilege escalation.",
    input: "Kernel events", output: "Alerts to SIEM",
    bestPractices: ["Custom Falco rules", "Auto-quarantine", "Stream to SIEM"],
    commands: ["falco -r /etc/falco/rules.d"],
  },
  {
    id: "monitor", name: "Observability", short: "Metrics, logs, traces",
    icon: Activity, tools: [T.prometheus, T.grafana, T.loki, T.otel, T.datadog, T.elk, T.fluentbit],
    categories: ["Observability"],
    description: "Golden signals, SLOs, distributed traces, and correlated logs.",
    input: "OTel signals", output: "Dashboards + SLOs",
    bestPractices: ["RED + USE metrics", "Error budgets", "Trace-log correlation"],
    commands: ["kubectl port-forward svc/grafana 3000"],
  },
  {
    id: "notify", name: "Notifications", short: "Alert the right team",
    icon: Bell, tools: [T.slack, T.teams, T.pagerduty, T.sns, T.jira],
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
  { label: "Artifacts Signed", value: "127", accent: "var(--color-aurora-2)" },
  { label: "Deployments", value: "2.5k+", accent: "var(--color-aurora-3)" },
  { label: "Pods Running", value: "184", accent: "var(--color-aurora-1)" },
];

import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence, t as useInView } from "../_libs/framer-motion.mjs";
import { $ as SiZap, A as SiJunit5, At as HiOutlineExternalLink, B as SiPortswigger, Bt as HiX, C as SiHelm, Ct as HiCheck, D as SiJest, Dt as HiOutlineChip, E as SiJenkins, Et as HiOutlineCheckCircle, F as SiNpm, Ft as HiOutlinePlay, G as SiRedis, H as SiPrometheus, I as SiOpentelemetry, It as HiOutlineRefresh, J as SiSonarqubeserver, K as SiRenovate, L as SiOwasp, Lt as HiOutlineTerminal, M as SiLinux, Mt as HiOutlineMail, N as SiNginx, Nt as HiOutlinePause, O as SiJfrog, Ot as HiOutlineDocumentText, P as SiNodedotjs, Pt as HiOutlinePhone, Q as SiYarn, R as SiPagerduty, Rt as HiOutlineX, S as SiGrafana, St as FaTimesCircle, T as SiJaeger, Tt as HiOutlineArrowRight, U as SiPytest, V as SiPostgresql, W as SiPython, X as SiTerraform, Y as SiSpdx, Z as SiTrivy, _ as SiGithub, _t as FaPause, a as SiApachemaven, at as FaCloud, b as SiGo, bt as FaServer, c as SiCircleci, ct as FaExclamationTriangle, d as SiDependabot, dt as FaGithub, et as FaArrowRight, f as SiDocker, ft as FaKey, g as SiGit, gt as FaNetworkWired, h as SiFluentbit, ht as FaMoneyBillWave, i as SiAnsible, it as FaCheckCircle, j as SiKubernetes, jt as HiOutlineLocationMarker, k as SiJira, kt as HiOutlineDownload, l as SiCloudflare, lt as FaFire, m as SiEslint, mt as FaLock, n as FaMicrosoft, nt as FaBolt, o as SiArgo, ot as FaCubes, p as SiElasticstack, pt as FaLinkedin, q as SiSnyk, r as FaSlack, rt as FaChartLine, s as SiBitbucket, st as FaDatabase, t as FaAws$1, tt as FaAws, u as SiDatadog, ut as FaGavel, v as SiGithubactions, vt as FaPlay, w as SiIstio, wt as HiMenu, x as SiGradle, xt as FaShieldAlt, y as SiGitlab, yt as FaSearch, z as SiPnpm, zt as HiSearch } from "../_libs/react-icons.mjs";
import { S as Activity, _ as CirclePlay, a as Radar, b as Bell, c as KeyRound, d as GitCommitHorizontal, f as GitBranch, g as Container, h as FileCodeCorner, i as Rocket, l as Hammer, m as FileText, n as ShieldCheck, o as PenLine, p as FlaskConical, r as Scale, s as Package, t as Sparkles, u as GitMerge, v as Bug, x as Archive, y as Boxes } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BUE5CZM_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PROFILE = {
	name: "G. R. Lokesh",
	firstName: "Lokesh",
	title: "Senior DevOps · DevSecOps · Platform Engineer",
	tagline: "Designing secure, scalable, automated cloud platforms using AWS, Kubernetes, Terraform, GitOps, and DevSecOps best practices.",
	location: "Hyderabad, India",
	email: "grlokesh96@gmail.com",
	phone: "+91 9100948285",
	linkedin: "https://www.linkedin.com/in/grlokesh96",
	github: "https://github.com/grlokesh96",
	years: "6+"
};
var ROLES = [
	"AWS Cloud Engineer",
	"Kubernetes Engineer",
	"Infrastructure Automation Engineer",
	"Cloud Native Engineer",
	"GitOps Engineer",
	"Platform Engineer",
	"Site Reliability Engineer",
	"Cloud Security Engineer"
];
var HERO_TECH = [
	{
		name: "AWS",
		Icon: FaAws,
		color: "#FF9900"
	},
	{
		name: "Kubernetes",
		Icon: SiKubernetes,
		color: "#326CE5"
	},
	{
		name: "Docker",
		Icon: SiDocker,
		color: "#2496ED"
	},
	{
		name: "Terraform",
		Icon: SiTerraform,
		color: "#7B42BC"
	},
	{
		name: "Linux",
		Icon: SiLinux,
		color: "#EAEAEA"
	},
	{
		name: "GitHub",
		Icon: SiGithub,
		color: "#f0f6fc"
	},
	{
		name: "Git",
		Icon: SiGit,
		color: "#F05033"
	},
	{
		name: "Argo CD",
		Icon: SiArgo,
		color: "#EF7B4D"
	},
	{
		name: "Helm",
		Icon: SiHelm,
		color: "#0F1689"
	},
	{
		name: "Prometheus",
		Icon: SiPrometheus,
		color: "#E6522C"
	},
	{
		name: "Grafana",
		Icon: SiGrafana,
		color: "#F46800"
	},
	{
		name: "Jenkins",
		Icon: SiJenkins,
		color: "#D33833"
	},
	{
		name: "Python",
		Icon: SiPython,
		color: "#3776AB"
	},
	{
		name: "Ansible",
		Icon: SiAnsible,
		color: "#EE0000"
	},
	{
		name: "NGINX",
		Icon: SiNginx,
		color: "#009639"
	},
	{
		name: "Istio",
		Icon: SiIstio,
		color: "#466BB0"
	},
	{
		name: "SonarQube",
		Icon: FaShieldAlt,
		color: "#4E9BCD"
	},
	{
		name: "GitLab CI",
		Icon: SiGitlab,
		color: "#FC6D26"
	}
];
var STATS = [
	{
		label: "Years Experience",
		value: 6,
		suffix: "+"
	},
	{
		label: "Microservices Shipped",
		value: 45,
		suffix: "+"
	},
	{
		label: "CI/CD Pipelines",
		value: 30,
		suffix: "+"
	},
	{
		label: "Deployments",
		value: 2500,
		suffix: "+"
	},
	{
		label: "Cost Reduction",
		value: 30,
		suffix: "%"
	},
	{
		label: "Uptime",
		value: 99.9,
		suffix: "%"
	}
];
var SKILLS = [
	{
		title: "Cloud",
		icon: FaCloud,
		items: [
			"AWS",
			"EKS",
			"EC2",
			"S3",
			"IAM",
			"VPC",
			"Lambda",
			"RDS",
			"Route53",
			"ALB",
			"CloudWatch",
			"Azure"
		]
	},
	{
		title: "Containers",
		icon: SiDocker,
		items: [
			"Docker",
			"Kubernetes",
			"EKS",
			"Helm",
			"Docker Compose",
			"Karpenter",
			"HPA",
			"Cluster Autoscaler"
		]
	},
	{
		title: "Infrastructure as Code",
		icon: SiTerraform,
		items: [
			"Terraform",
			"Terraform Modules",
			"Ansible Playbooks",
			"Ansible Roles",
			"Dynamic Inventory"
		]
	},
	{
		title: "CI/CD",
		icon: SiGithubactions,
		items: [
			"GitHub Actions",
			"GitLab CI",
			"Jenkins",
			"Argo CD",
			"Flux CD",
			"Blue-Green",
			"Canary"
		]
	},
	{
		title: "Security · DevSecOps",
		icon: FaShieldAlt,
		items: [
			"SonarQube",
			"Trivy",
			"Snyk",
			"Checkov",
			"OWASP ZAP",
			"GitHub Advanced Security",
			"Vault",
			"IRSA",
			"RBAC",
			"OIDC"
		]
	},
	{
		title: "Observability",
		icon: SiGrafana,
		items: [
			"Prometheus",
			"Grafana",
			"Datadog",
			"CloudWatch",
			"ELK Stack",
			"Alertmanager",
			"Loki"
		]
	},
	{
		title: "Networking · Mesh",
		icon: SiIstio,
		items: [
			"NGINX Ingress",
			"Istio",
			"AWS ALB",
			"Route53",
			"SSL/TLS",
			"VPC Peering"
		]
	},
	{
		title: "Automation · Scripting",
		icon: SiPython,
		items: [
			"Python",
			"Bash",
			"Shell",
			"YAML",
			"Jinja2"
		]
	},
	{
		title: "Databases",
		icon: SiPostgresql,
		items: [
			"PostgreSQL",
			"MySQL",
			"MongoDB",
			"Redis",
			"Elasticsearch",
			"DynamoDB"
		]
	}
];
var EXPERIENCE = [
	{
		role: "AWS DevOps Engineer",
		company: "ASICS Technologies, India",
		period: "Jul 2024 — Present",
		bullets: [
			"Built CI/CD pipelines with GitHub Actions & Argo CD for 15+ microservices, cutting release time by 60%.",
			"Implemented GitOps delivery across Dev, QA, UAT and Production EKS clusters, reducing incidents by 30%.",
			"Embedded SonarQube, Trivy, Snyk and Checkov into pipelines for pre-deployment security gates.",
			"Optimized workloads with HPA, Cluster Autoscaler & Karpenter — cutting AWS costs by 30%.",
			"Deployed Istio service mesh + AWS ALB for SSL/TLS routing, improving API reliability by 30%.",
			"Full-stack Kubernetes observability with Datadog & Alertmanager — reduced MTTR by 50%."
		]
	},
	{
		role: "DevOps Engineer",
		company: "Larsen & Toubro Construction (L&T)",
		period: "Sep 2021 — Jul 2024",
		bullets: [
			"Automated build, test, security scanning and Kubernetes deploys for 20+ microservices via GitLab CI + Argo CD.",
			"Secured Jenkins pipelines with RBAC, OIDC & HashiCorp Vault — reduced unauthorized access risk 80%.",
			"Containerized 20+ services with Docker multi-stage builds — reduced image size 60%.",
			"Implemented Blue-Green and Canary deployments on Kubernetes to reduce rollout risk.",
			"Automated server config with Ansible Playbooks & Roles — 80% less manual effort."
		]
	},
	{
		role: "Cloud Support Associate",
		company: "Progile Infotech, India",
		period: "Apr 2020 — Aug 2021",
		bullets: [
			"Maintained Jenkins CI/CD pipelines across QA/UAT/Prod for reliable daily releases.",
			"Provided L1/L2 support for AWS (EC2, S3, VPC, IAM) with high availability SLAs.",
			"Automated backup & DR with AWS Lambda + EBS Snapshots — 70% less data loss risk.",
			"Cut AWS cloud costs by 30% via right-sizing, Cost Explorer, and auto-shutdown automation."
		]
	}
];
var PROJECTS = [
	{
		title: "Cloud-Native Trading & Portfolio Platform",
		summary: "Highly available, secure, and scalable CI/CD + EKS platform for a microservices trading application.",
		problem: "Trading platform needed 99.9% uptime, zero-downtime deploys and hardened DevSecOps for 15+ microservices.",
		solution: "Architected GitHub Actions + Argo CD pipelines, Terraform-provisioned EKS/VPC/RDS/ALB, Istio service mesh, and Prometheus/Grafana observability with SonarQube, Trivy, Snyk & Checkov gates.",
		impact: [
			"60% faster releases",
			"60% fewer critical vulns",
			"99.9% uptime under 5× peak load",
			"45% MTTR reduction"
		],
		tech: [
			"AWS",
			"EKS",
			"GitHub Actions",
			"Argo CD",
			"Terraform",
			"Istio",
			"Prometheus",
			"Grafana",
			"SonarQube",
			"Trivy"
		],
		categories: [
			"AWS",
			"Kubernetes",
			"Terraform",
			"GitOps",
			"DevSecOps",
			"Platform Engineering",
			"CI/CD"
		]
	},
	{
		title: "IoT Smart Devices — Real-Time Monitoring",
		summary: "Secure, automated CI/CD + infrastructure platform for an IoT-connected smart device ecosystem.",
		problem: "10+ IoT microservices required standardized pipelines, hardened supply chain and elastic infra.",
		solution: "Built Jenkins Shared Libraries + Argo CD with SAST/DAST/container scanning. Terraform modules with S3/DynamoDB remote state. Ansible dynamic inventory. EKS with NGINX Ingress + SSL.",
		impact: [
			"40% faster releases",
			"50% less pipeline duplication",
			"40% smaller images",
			"65% faster incident detection"
		],
		tech: [
			"Jenkins",
			"Argo CD",
			"Docker",
			"Ansible",
			"Terraform",
			"EKS",
			"PostgreSQL",
			"MongoDB",
			"Redis",
			"NGINX"
		],
		categories: [
			"Kubernetes",
			"CI/CD",
			"GitOps",
			"Infrastructure as Code",
			"Monitoring"
		]
	},
	{
		title: "Continuous Personal Health — Philips Healthcare",
		summary: "CI/CD automation platform to accelerate release velocity for a healthcare application.",
		problem: "Manual, drift-prone releases across Test/QA/UAT/Prod slowed engineering and increased risk.",
		solution: "Designed Jenkins pipelines with Maven/Docker/Ansible across 50+ EC2 instances, eliminating drift. Docker Hub registry, Tomcat deploys, and comprehensive runbooks.",
		impact: [
			"99% build success rate",
			"75% fewer env issues",
			"Weekly → daily releases",
			"20% less senior-engineer dependency"
		],
		tech: [
			"Jenkins",
			"Maven",
			"Docker",
			"Ansible",
			"AWS EC2",
			"Tomcat"
		],
		categories: [
			"CI/CD",
			"AWS",
			"Platform Engineering"
		]
	},
	{
		title: "Digital Products & Subscriptions Platform",
		summary: "L1/L2 operational excellence for a multi-cloud digital subscriptions platform.",
		problem: "Multi-cloud (AWS + Azure) subscriptions platform required uptime, DR and cost governance.",
		solution: "Automated backup/DR with Lambda + EBS Snapshots. Enforced IAM least-privilege + MFA. Cost governance via Cost Explorer, right-sizing and auto-shutdown scripts.",
		impact: [
			"~70% less data-loss risk",
			"25–30% monthly cost savings",
			"30% MTTR reduction"
		],
		tech: [
			"AWS",
			"Azure",
			"Lambda",
			"IAM",
			"Jira",
			"ITIL"
		],
		categories: [
			"AWS",
			"Security",
			"Monitoring"
		]
	}
];
var PROJECT_FILTERS = [
	"All",
	"AWS",
	"Kubernetes",
	"Terraform",
	"DevSecOps",
	"Platform Engineering",
	"CI/CD",
	"GitOps",
	"Infrastructure as Code",
	"Monitoring",
	"Security"
];
var CERTIFICATIONS = [{
	name: "CKA — Kubernetes Administrator",
	issuer: "CNCF / Linux Foundation",
	tag: "Kubernetes",
	accent: "#326CE5"
}, {
	name: "CKS — Kubernetes Security",
	issuer: "CNCF / Linux Foundation",
	tag: "Security",
	accent: "#22c55e"
}];
var NAV_LINKS = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#pipeline",
		label: "Pipeline"
	},
	{
		href: "#ops-center",
		label: "K8s Ops"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#certifications",
		label: "Certs"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var resume_pdf_asset_default = {
	version: 1,
	asset_id: "97430b86-4113-433b-b310-5830e7d7a665",
	project_id: "c4804927-ff08-4a26-b05a-3c0dca8ac612",
	url: "/__l5e/assets-v1/97430b86-4113-433b-b310-5830e7d7a665/Lokesh_DevOps_Engineering.pdf",
	r2_key: "a/v1/c4804927-ff08-4a26-b05a-3c0dca8ac612/97430b86-4113-433b-b310-5830e7d7a665/Lokesh_DevOps_Engineering.pdf",
	original_filename: "Lokesh_DevOps_Engineering.pdf",
	size: 308950,
	content_type: "application/pdf",
	created_at: "2026-07-22T07:26:13Z"
};
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 20
	});
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { scaleX },
		className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--color-aurora-1)] via-[var(--color-aurora-2)] to-[var(--color-aurora-3)]"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-container flex items-center justify-between px-4 sm:px-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `flex w-full items-center justify-between rounded-full px-4 py-2 transition-all ${scrolled ? "glass-strong" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2 font-semibold tracking-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--color-aurora-1)] to-[var(--color-aurora-2)] text-[11px] font-bold text-background",
							children: "GL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline",
							children: PROFILE.name
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: resume_pdf_asset_default.url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] md:inline-flex",
							children: "Resume"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "rounded-full p-2 text-foreground/80 hover:bg-foreground/5 md:hidden",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle navigation",
							"aria-expanded": open,
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiX, { size: 20 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiMenu, { size: 20 })
						})]
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -8
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -8
			},
			className: "section-container mt-2 px-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-strong flex flex-col rounded-2xl p-2",
				children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: resume_pdf_asset_default.url,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-1 rounded-lg bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background",
					children: "Download Resume"
				})]
			})
		}) })]
	})] });
}
var T = {
	github: {
		name: "GitHub",
		icon: SiGithub,
		color: "#f0f6fc"
	},
	gitlab: {
		name: "GitLab",
		icon: SiGitlab,
		color: "#FC6D26"
	},
	bitbucket: {
		name: "Bitbucket",
		icon: SiBitbucket,
		color: "#2684FF"
	},
	codeowners: {
		name: "CODEOWNERS",
		mono: "CO",
		color: "#8B949E"
	},
	pr: {
		name: "Pull Request",
		mono: "PR",
		color: "#2088FF"
	},
	mr: {
		name: "Merge Request",
		mono: "MR",
		color: "#FC6D26"
	},
	branchProt: {
		name: "Branch Protection",
		mono: "BP",
		color: "#3FB950"
	},
	ghActions: {
		name: "GitHub Actions",
		icon: SiGithubactions,
		color: "#2088FF"
	},
	gitlabCI: {
		name: "GitLab CI",
		icon: SiGitlab,
		color: "#FC6D26"
	},
	jenkins: {
		name: "Jenkins",
		icon: SiJenkins,
		color: "#D24939"
	},
	azdo: {
		name: "Azure DevOps",
		mono: "AZ",
		color: "#0078D7"
	},
	circleci: {
		name: "CircleCI",
		icon: SiCircleci,
		color: "#00CCBD"
	},
	node: {
		name: "Node.js",
		icon: SiNodedotjs,
		color: "#3C873A"
	},
	npm: {
		name: "npm",
		icon: SiNpm,
		color: "#CB3837"
	},
	yarn: {
		name: "Yarn",
		icon: SiYarn,
		color: "#2C8EBB"
	},
	pnpm: {
		name: "pnpm",
		icon: SiPnpm,
		color: "#F69220"
	},
	maven: {
		name: "Maven",
		icon: SiApachemaven,
		color: "#C71A36"
	},
	gradle: {
		name: "Gradle",
		icon: SiGradle,
		color: "#02303A"
	},
	python: {
		name: "Python",
		icon: SiPython,
		color: "#3776AB"
	},
	go: {
		name: "Go",
		icon: SiGo,
		color: "#00ADD8"
	},
	gitleaks: {
		name: "Gitleaks",
		mono: "GL",
		color: "#EE1C25"
	},
	trufflehog: {
		name: "TruffleHog",
		mono: "TH",
		color: "#7B4397"
	},
	ghSecret: {
		name: "GH Secret Scan",
		icon: SiGithub,
		color: "#3FB950"
	},
	eslint: {
		name: "ESLint",
		icon: SiEslint,
		color: "#4B32C3"
	},
	pylint: {
		name: "Pylint",
		mono: "PY",
		color: "#FFD43B"
	},
	checkstyle: {
		name: "Checkstyle",
		mono: "CS",
		color: "#F5A623"
	},
	pmd: {
		name: "PMD",
		mono: "PMD",
		color: "#7B68EE"
	},
	spotbugs: {
		name: "SpotBugs",
		mono: "SB",
		color: "#E44D26"
	},
	sonar: {
		name: "SonarQube",
		icon: SiSonarqubeserver,
		color: "#4E9BCD"
	},
	semgrep: {
		name: "Semgrep",
		mono: "SG",
		color: "#6366F1"
	},
	codeql: {
		name: "CodeQL",
		icon: SiGithub,
		color: "#2088FF"
	},
	snykCode: {
		name: "Snyk Code",
		icon: SiSnyk,
		color: "#4C4A73"
	},
	owaspDC: {
		name: "OWASP DC",
		icon: SiOwasp,
		color: "#F26522"
	},
	snyk: {
		name: "Snyk",
		icon: SiSnyk,
		color: "#4C4A73"
	},
	dependabot: {
		name: "Dependabot",
		icon: SiDependabot,
		color: "#025E8C"
	},
	renovate: {
		name: "Renovate",
		icon: SiRenovate,
		color: "#FF6600"
	},
	junit: {
		name: "JUnit",
		icon: SiJunit5,
		color: "#25A162"
	},
	jest: {
		name: "Jest",
		icon: SiJest,
		color: "#C21325"
	},
	pytest: {
		name: "PyTest",
		icon: SiPytest,
		color: "#009FE3"
	},
	goTest: {
		name: "Go Test",
		icon: SiGo,
		color: "#00ADD8"
	},
	coverage: {
		name: "Coverage",
		mono: "%",
		color: "#3FB950"
	},
	docker: {
		name: "Docker",
		icon: SiDocker,
		color: "#2496ED"
	},
	terraform: {
		name: "Terraform",
		icon: SiTerraform,
		color: "#7B42BC"
	},
	checkov: {
		name: "Checkov",
		mono: "CK",
		color: "#6D28D9"
	},
	tfsec: {
		name: "tfsec",
		mono: "TS",
		color: "#00A98F"
	},
	terrascan: {
		name: "Terrascan",
		mono: "TC",
		color: "#00B0FF"
	},
	kics: {
		name: "KICS",
		mono: "KI",
		color: "#EF4444"
	},
	trivy: {
		name: "Trivy",
		icon: SiTrivy,
		color: "#1904DA"
	},
	grype: {
		name: "Grype",
		mono: "GR",
		color: "#FF6A00"
	},
	dockerScout: {
		name: "Docker Scout",
		icon: SiDocker,
		color: "#00D4FF"
	},
	snykCont: {
		name: "Snyk Container",
		icon: SiSnyk,
		color: "#4C4A73"
	},
	syft: {
		name: "Syft",
		mono: "SY",
		color: "#7C3AED"
	},
	cyclonedx: {
		name: "CycloneDX",
		mono: "CDX",
		color: "#FF6C37"
	},
	spdx: {
		name: "SPDX",
		icon: SiSpdx,
		color: "#4398CC"
	},
	cosign: {
		name: "Cosign",
		mono: "CO",
		color: "#3B82F6"
	},
	sigstore: {
		name: "Sigstore",
		mono: "SS",
		color: "#2E86AB"
	},
	notary: {
		name: "Notary v2",
		mono: "NT",
		color: "#F59E0B"
	},
	ecr: {
		name: "Amazon ECR",
		icon: FaAws$1,
		color: "#FF9900"
	},
	dockerHub: {
		name: "Docker Hub",
		icon: SiDocker,
		color: "#2496ED"
	},
	ghcr: {
		name: "GHCR",
		icon: SiGithub,
		color: "#f0f6fc"
	},
	jfrog: {
		name: "JFrog",
		icon: SiJfrog,
		color: "#41BF47"
	},
	helm: {
		name: "Helm",
		icon: SiHelm,
		color: "#0F1689"
	},
	argocd: {
		name: "Argo CD",
		icon: SiArgo,
		color: "#EF7B4D"
	},
	gitRepo: {
		name: "Git Repo",
		icon: SiGithub,
		color: "#f0f6fc"
	},
	kyverno: {
		name: "Kyverno",
		mono: "KY",
		color: "#00B39F"
	},
	opa: {
		name: "OPA Gatekeeper",
		mono: "OPA",
		color: "#7D4CDB"
	},
	k8s: {
		name: "Kubernetes",
		icon: SiKubernetes,
		color: "#326CE5"
	},
	eks: {
		name: "Amazon EKS",
		icon: FaAws$1,
		color: "#FF9900"
	},
	blueGreen: {
		name: "Blue/Green",
		mono: "B/G",
		color: "#3B82F6"
	},
	canary: {
		name: "Canary",
		mono: "CN",
		color: "#F59E0B"
	},
	zap: {
		name: "OWASP ZAP",
		icon: SiZap,
		color: "#00549E"
	},
	burp: {
		name: "Burp Suite",
		icon: SiPortswigger,
		color: "#FF6633"
	},
	nikto: {
		name: "Nikto",
		mono: "NK",
		color: "#8B0000"
	},
	falco: {
		name: "Falco",
		mono: "FA",
		color: "#00B4DC"
	},
	prismaCloud: {
		name: "Prisma Cloud",
		mono: "PC",
		color: "#F04E23"
	},
	aqua: {
		name: "Aqua Security",
		mono: "AQ",
		color: "#FF6533"
	},
	sysdig: {
		name: "Sysdig",
		mono: "SD",
		color: "#00AEEF"
	},
	prometheus: {
		name: "Prometheus",
		icon: SiPrometheus,
		color: "#E6522C"
	},
	grafana: {
		name: "Grafana",
		icon: SiGrafana,
		color: "#F46800"
	},
	loki: {
		name: "Loki",
		icon: SiGrafana,
		color: "#FFA500"
	},
	otel: {
		name: "OpenTelemetry",
		icon: SiOpentelemetry,
		color: "#F5A800"
	},
	datadog: {
		name: "Datadog",
		icon: SiDatadog,
		color: "#632CA6"
	},
	elk: {
		name: "ELK Stack",
		icon: SiElasticstack,
		color: "#005571"
	},
	fluentbit: {
		name: "Fluent Bit",
		icon: SiFluentbit,
		color: "#49BDA5"
	},
	slack: {
		name: "Slack",
		icon: FaSlack,
		color: "#4A154B"
	},
	teams: {
		name: "MS Teams",
		icon: FaMicrosoft,
		color: "#6264A7"
	},
	pagerduty: {
		name: "PagerDuty",
		icon: SiPagerduty,
		color: "#06AC38"
	},
	sns: {
		name: "Amazon SNS",
		icon: FaAws$1,
		color: "#E7157B"
	},
	jira: {
		name: "Jira",
		icon: SiJira,
		color: "#0052CC"
	}
};
var PIPELINE_STAGES = [
	{
		id: "scm",
		name: "Source Control",
		short: "Commit & push code",
		icon: GitCommitHorizontal,
		tools: [
			T.github,
			T.gitlab,
			T.bitbucket
		],
		categories: ["Source"],
		description: "Engineer authors code locally, signs commits, and pushes to a feature branch on the SCM.",
		input: "Local changes",
		output: "Signed commit on remote branch",
		bestPractices: [
			"Sign commits with GPG/SSH",
			"Small, focused PRs",
			"Conventional commit messages"
		],
		commands: ["git commit -S -m 'feat: ...'", "git push origin feature/x"]
	},
	{
		id: "branch",
		name: "Branch Protection",
		short: "Reviews & merge gates",
		icon: GitBranch,
		tools: [
			T.branchProt,
			T.codeowners,
			T.pr,
			T.mr,
			T.github,
			T.gitlab
		],
		categories: ["Source"],
		description: "Enforce required reviews, status checks, signed commits, and CODEOWNERS on protected branches.",
		input: "Pull / merge request",
		output: "Approved, merge-ready change",
		bestPractices: [
			"Require 2 reviewers",
			"Dismiss stale reviews",
			"Enforce linear history"
		],
		commands: ["gh pr create", "gh pr review --approve"]
	},
	{
		id: "ci",
		name: "CI Platform",
		short: "Trigger build workflow",
		icon: CirclePlay,
		tools: [
			T.ghActions,
			T.gitlabCI,
			T.jenkins,
			T.azdo,
			T.circleci
		],
		categories: ["CI"],
		description: "CI runner picks up the event and starts a hermetic build matrix with OIDC to cloud.",
		input: "Merge / PR event",
		output: "Workflow run",
		bestPractices: [
			"Ephemeral runners",
			"OIDC to cloud (no long-lived keys)",
			"Cache with lockfile hashes"
		],
		commands: ["gh workflow run ci.yml"]
	},
	{
		id: "deps",
		name: "Dependency Management",
		short: "Resolve & cache modules",
		icon: Package,
		tools: [
			T.node,
			T.npm,
			T.yarn,
			T.pnpm,
			T.maven,
			T.gradle,
			T.python,
			T.go
		],
		categories: ["CI"],
		description: "Restore deterministic dependencies from lockfiles with layer caching and private registry proxy.",
		input: "Lockfile",
		output: "node_modules / .m2 / venv",
		bestPractices: [
			"Pin versions",
			"Verify checksums",
			"Private registry proxy"
		],
		commands: ["npm ci", "mvn -B dependency:go-offline"]
	},
	{
		id: "secrets",
		name: "Secret Scanning",
		short: "Detect leaked credentials",
		icon: KeyRound,
		tools: [
			T.gitleaks,
			T.trufflehog,
			T.ghSecret
		],
		categories: ["Security"],
		description: "Scan diff and history for API keys, tokens, and private material before build.",
		input: "Source tree",
		output: "SARIF findings",
		bestPractices: [
			"Pre-commit hooks",
			"Rotate on detection",
			"Push protection enabled"
		],
		commands: ["gitleaks detect --redact"]
	},
	{
		id: "lint",
		name: "Code Quality",
		short: "Lint & style checks",
		icon: Sparkles,
		tools: [
			T.eslint,
			T.pylint,
			T.checkstyle,
			T.pmd,
			T.spotbugs
		],
		categories: ["CI"],
		description: "Static style, complexity, and correctness checks with fail-fast gates.",
		input: "Source",
		output: "Lint report",
		bestPractices: [
			"Shared configs",
			"Autoformat in pre-commit",
			"Ratchet warnings to zero"
		],
		commands: ["eslint . --max-warnings=0"]
	},
	{
		id: "sast",
		name: "SAST",
		short: "Static app security testing",
		icon: ShieldCheck,
		tools: [
			T.sonar,
			T.semgrep,
			T.codeql,
			T.snykCode
		],
		categories: ["Security"],
		description: "Deep static analysis for injection, auth, crypto, and CWE-tagged weaknesses.",
		input: "Source",
		output: "SARIF + PR annotations",
		bestPractices: [
			"Baseline on main",
			"Fail on new criticals",
			"Custom rulesets"
		],
		commands: ["semgrep --config=auto --error"]
	},
	{
		id: "sca",
		name: "Software Composition Analysis",
		short: "Dependency vuln scan",
		icon: Boxes,
		tools: [
			T.owaspDC,
			T.snyk,
			T.dependabot,
			T.renovate
		],
		categories: ["Security"],
		description: "Detect vulnerable transitive dependencies and license risk; auto-PR patches.",
		input: "Lockfile / SBOM",
		output: "Vulnerability report",
		bestPractices: [
			"Auto-PR upgrades",
			"License allow-list",
			"Reachability analysis"
		],
		commands: ["snyk test --severity-threshold=high"]
	},
	{
		id: "test",
		name: "Testing",
		short: "Run tests & coverage",
		icon: FlaskConical,
		tools: [
			T.junit,
			T.jest,
			T.pytest,
			T.goTest,
			T.coverage
		],
		categories: ["Testing"],
		description: "Fast unit + integration suites with coverage thresholds enforced in CI.",
		input: "Compiled code",
		output: "JUnit XML + coverage",
		bestPractices: [
			"≥80% branch coverage",
			"Parallel shards",
			"Mutation testing"
		],
		commands: ["jest --coverage --ci"]
	},
	{
		id: "build",
		name: "Build",
		short: "Compile & package",
		icon: Hammer,
		tools: [
			T.docker,
			T.maven,
			T.gradle,
			T.node
		],
		categories: ["CI"],
		description: "Produce immutable, reproducible build artifacts with SLSA provenance.",
		input: "Source + deps",
		output: "JAR / bundle / OCI image",
		bestPractices: [
			"Reproducible builds",
			"Multi-stage Dockerfiles",
			"SLSA provenance"
		],
		commands: ["docker buildx build --sbom=true --provenance=true ."]
	},
	{
		id: "iac",
		name: "IaC Security",
		short: "Terraform policy scan",
		icon: FileCodeCorner,
		tools: [
			T.terraform,
			T.checkov,
			T.tfsec,
			T.terrascan,
			T.kics
		],
		categories: ["Security", "Infrastructure"],
		description: "Scan Terraform / Kubernetes manifests for misconfig, CIS, and compliance drift.",
		input: "*.tf / manifests",
		output: "Policy report",
		bestPractices: [
			"OPA policies as code",
			"Plan on PR",
			"Drift detection"
		],
		commands: ["checkov -d . --framework terraform"]
	},
	{
		id: "container",
		name: "Container Security",
		short: "Scan images for CVEs",
		icon: Container,
		tools: [
			T.trivy,
			T.grype,
			T.dockerScout,
			T.snykCont
		],
		categories: ["Security", "Containers"],
		description: "Scan OS packages and app layers of container images for known CVEs.",
		input: "OCI image",
		output: "CVE report",
		bestPractices: [
			"Distroless base",
			"Non-root user",
			"Fail on HIGH+"
		],
		commands: ["trivy image --severity HIGH,CRITICAL app:sha"]
	},
	{
		id: "sbom",
		name: "SBOM",
		short: "Software bill of materials",
		icon: FileText,
		tools: [
			T.syft,
			T.cyclonedx,
			T.spdx
		],
		categories: ["Security"],
		description: "Produce a signed SBOM alongside every artifact for supply-chain audit.",
		input: "Artifact",
		output: "SBOM (SPDX / CycloneDX)",
		bestPractices: [
			"Attach to release",
			"Store in registry",
			"Diff between releases"
		],
		commands: ["syft app:sha -o cyclonedx-json > sbom.json"]
	},
	{
		id: "sign",
		name: "Image Signing",
		short: "Keyless sign & attest",
		icon: PenLine,
		tools: [
			T.cosign,
			T.sigstore,
			T.notary
		],
		categories: ["Security", "Containers"],
		description: "Keyless sign images and attach SBOM + provenance attestations to a transparency log.",
		input: "Image + SBOM",
		output: "Signature + attestation",
		bestPractices: [
			"Keyless OIDC signing",
			"Verify at admission",
			"Rekor transparency log"
		],
		commands: ["cosign sign --yes app:sha"]
	},
	{
		id: "registry",
		name: "Artifact Registry",
		short: "Publish signed image",
		icon: Archive,
		tools: [
			T.ecr,
			T.dockerHub,
			T.ghcr,
			T.jfrog
		],
		categories: ["Cloud", "Containers"],
		description: "Push signed, scanned image with immutable tags to a trusted registry.",
		input: "Signed image",
		output: "Registry reference",
		bestPractices: [
			"Immutable tags",
			"Retention policy",
			"Cross-region replication"
		],
		commands: ["docker push ghcr.io/org/app@sha256:..."]
	},
	{
		id: "gitops",
		name: "GitOps",
		short: "Declarative manifests",
		icon: GitMerge,
		tools: [
			T.github,
			T.helm,
			T.argocd,
			T.gitRepo
		],
		categories: ["GitOps", "CD"],
		description: "Bump image digest in the env repo; Argo CD detects drift and syncs.",
		input: "Image digest",
		output: "PR to env repo",
		bestPractices: [
			"Separate app & config repos",
			"App-of-apps",
			"Automated sync waves"
		],
		commands: ["argocd app sync app-prod"]
	},
	{
		id: "policy",
		name: "Policy Validation",
		short: "Admission validation",
		icon: Scale,
		tools: [
			T.kyverno,
			T.opa,
			T.k8s
		],
		categories: ["Security", "GitOps"],
		description: "Cluster admission webhooks block non-compliant workloads (root, hostPath, unsigned).",
		input: "Manifest",
		output: "Admit / deny",
		bestPractices: [
			"Verify cosign signature",
			"Enforce PSS restricted",
			"Audit mode first"
		],
		commands: ["kubectl apply --dry-run=server"]
	},
	{
		id: "deploy",
		name: "Kubernetes Deployment",
		short: "Progressive delivery",
		icon: Rocket,
		tools: [
			T.eks,
			T.k8s,
			T.helm,
			T.argocd,
			T.blueGreen,
			T.canary
		],
		categories: [
			"CD",
			"GitOps",
			"Cloud"
		],
		description: "Progressive rollout with health checks, analysis, and automated rollback.",
		input: "Approved manifest",
		output: "Running Pods",
		bestPractices: [
			"Canary + metric analysis",
			"PDBs & HPAs",
			"Auto-rollback on SLO breach"
		],
		commands: ["helm upgrade --install app ./chart"]
	},
	{
		id: "dast",
		name: "DAST",
		short: "Dynamic security testing",
		icon: Bug,
		tools: [
			T.zap,
			T.burp,
			T.nikto
		],
		categories: ["Security", "Testing"],
		description: "Post-deploy black-box scan against staging / preview environment.",
		input: "Live URL",
		output: "DAST report",
		bestPractices: [
			"Auth'd scans",
			"Baseline diff",
			"Fire only in non-prod"
		],
		commands: ["zap-baseline.py -t https://staging"]
	},
	{
		id: "runtime",
		name: "Runtime Security",
		short: "eBPF threat detection",
		icon: Radar,
		tools: [
			T.falco,
			T.prismaCloud,
			T.aqua,
			T.sysdig
		],
		categories: ["Security", "Observability"],
		description: "Kernel-level detection of anomalous syscalls, exec spawn, and privilege escalation.",
		input: "Kernel events",
		output: "Alerts to SIEM",
		bestPractices: [
			"Custom Falco rules",
			"Auto-quarantine",
			"Stream to SIEM"
		],
		commands: ["falco -r /etc/falco/rules.d"]
	},
	{
		id: "monitor",
		name: "Observability",
		short: "Metrics, logs, traces",
		icon: Activity,
		tools: [
			T.prometheus,
			T.grafana,
			T.loki,
			T.otel,
			T.datadog,
			T.elk,
			T.fluentbit
		],
		categories: ["Observability"],
		description: "Golden signals, SLOs, distributed traces, and correlated logs.",
		input: "OTel signals",
		output: "Dashboards + SLOs",
		bestPractices: [
			"RED + USE metrics",
			"Error budgets",
			"Trace-log correlation"
		],
		commands: ["kubectl port-forward svc/grafana 3000"]
	},
	{
		id: "notify",
		name: "Notifications",
		short: "Alert the right team",
		icon: Bell,
		tools: [
			T.slack,
			T.teams,
			T.pagerduty,
			T.sns,
			T.jira
		],
		categories: ["Observability"],
		description: "Route alerts, deploy events, and incidents to on-call and ChatOps.",
		input: "Alert / event",
		output: "Ticket / page",
		bestPractices: [
			"Symptom-based alerts",
			"Runbooks in alerts",
			"Post-incident review"
		],
		commands: ["curl -XPOST $SLACK_WEBHOOK ..."]
	}
];
var PIPELINE_FILTERS = [
	"All",
	"Security",
	"Testing",
	"CI",
	"CD",
	"Containers",
	"Cloud",
	"Infrastructure",
	"GitOps",
	"Observability"
];
var PIPELINE_STATS = [
	{
		label: "Pipeline Success",
		value: "98.7%",
		accent: "var(--color-aurora-3)"
	},
	{
		label: "Avg Execution",
		value: "8m 42s",
		accent: "var(--color-aurora-1)"
	},
	{
		label: "Critical Vulns",
		value: "0",
		accent: "var(--color-aurora-3)"
	},
	{
		label: "High / Med / Low",
		value: "0 · 2 · 14",
		accent: "var(--color-aurora-2)"
	},
	{
		label: "Code Coverage",
		value: "86%",
		accent: "var(--color-aurora-1)"
	},
	{
		label: "Artifacts Signed",
		value: "127",
		accent: "var(--color-aurora-2)"
	},
	{
		label: "Deployments",
		value: "2.5k+",
		accent: "var(--color-aurora-3)"
	},
	{
		label: "Pods Running",
		value: "184",
		accent: "var(--color-aurora-1)"
	}
];
var statusStyle = {
	waiting: {
		ring: "border-foreground/10",
		dot: "bg-foreground/30",
		label: "Idle",
		glow: ""
	},
	running: {
		ring: "border-cyan-400/60",
		dot: "bg-cyan-300 animate-pulse",
		label: "Running",
		glow: "shadow-[0_0_40px_-8px_rgba(34,211,238,0.55)]"
	},
	success: {
		ring: "border-emerald-400/60",
		dot: "bg-emerald-400",
		label: "Passed",
		glow: "shadow-[0_0_40px_-10px_rgba(52,211,153,0.55)]"
	},
	failed: {
		ring: "border-rose-400/70",
		dot: "bg-rose-400",
		label: "Failed",
		glow: "shadow-[0_0_40px_-10px_rgba(244,63,94,0.55)]"
	},
	retrying: {
		ring: "border-amber-400/70",
		dot: "bg-amber-300 animate-pulse",
		label: "Retrying",
		glow: "shadow-[0_0_40px_-10px_rgba(251,191,36,0.55)]"
	},
	skipped: {
		ring: "border-foreground/10 opacity-40",
		dot: "bg-foreground/20",
		label: "Skipped",
		glow: ""
	}
};
/** Official brand logo tile — SVG when available, monogram fallback with brand color. */
function LogoTile({ tool, size = 30 }) {
	const Icon = tool.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		whileHover: {
			y: -2,
			scale: 1.08
		},
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 18
		},
		title: tool.name,
		role: "img",
		"aria-label": tool.name,
		className: "group/logo relative grid place-items-center rounded-lg border border-foreground/10 bg-foreground/[0.04] backdrop-blur-sm transition-colors hover:border-foreground/25",
		style: {
			width: size,
			height: size
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover/logo:opacity-100",
			style: { boxShadow: `0 0 16px 2px ${tool.color}55, inset 0 0 0 1px ${tool.color}66` }
		}), Icon ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
			"aria-hidden": true,
			style: {
				color: tool.color,
				width: size * .55,
				height: size * .55
			}
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[10px] font-bold tracking-tight text-foreground",
			children: tool.mono ?? tool.name.slice(0, 2).toUpperCase()
		})]
	});
}
function Pipeline() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [active, setActive] = (0, import_react.useState)(null);
	const [density, setDensity] = (0, import_react.useState)("compact");
	const [statuses, setStatuses] = (0, import_react.useState)(() => Object.fromEntries(PIPELINE_STAGES.map((s) => [s.id, "waiting"])));
	const [retried, setRetried] = (0, import_react.useState)({});
	const [running, setRunning] = (0, import_react.useState)(false);
	const [focusIdx, setFocusIdx] = (0, import_react.useState)(0);
	const [announce, setAnnounce] = (0, import_react.useState)("");
	const timerRef = (0, import_react.useRef)(null);
	const idxRef = (0, import_react.useRef)(0);
	const retryRef = (0, import_react.useRef)({});
	const cardRefs = (0, import_react.useRef)([]);
	const startBtnRef = (0, import_react.useRef)(null);
	const gridRef = (0, import_react.useRef)(null);
	const d = density === "comfortable" ? {
		grid: "mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3",
		card: "gap-3.5 p-5",
		stageIconBox: "h-9 w-9",
		stageIconInner: "h-4.5 w-4.5",
		stageLabel: "text-[10px]",
		stageTitle: "text-[15px]",
		desc: "text-[13px] line-clamp-3",
		logoSize: 34,
		catText: "text-[10.5px] px-2 py-0.5"
	} : {
		grid: "mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
		card: "gap-2.5 p-3.5",
		stageIconBox: "h-7 w-7",
		stageIconInner: "h-3.5 w-3.5",
		stageLabel: "text-[9px]",
		stageTitle: "text-[13px]",
		desc: "text-[11.5px] line-clamp-2",
		logoSize: 28,
		catText: "text-[9.5px] px-1.5 py-0.5"
	};
	const matchesFilter = (s) => filter === "All" || s.categories.includes(filter);
	const clearTimer = () => {
		if (timerRef.current !== null) {
			window.clearTimeout(timerRef.current);
			timerRef.current = null;
		}
	};
	const runStage = (i, isRetry = false) => {
		const stage = PIPELINE_STAGES[i];
		setStatuses((prev) => ({
			...prev,
			[stage.id]: isRetry ? "retrying" : "running"
		}));
		timerRef.current = window.setTimeout(() => {
			const attempts = (retryRef.current[stage.id] ?? 0) + (isRetry ? 0 : 1);
			retryRef.current[stage.id] = attempts;
			const baseFailRate = stage.categories.includes("Security") ? .32 : 0;
			const willFail = Math.random() < (isRetry ? .15 : baseFailRate);
			if (willFail && !isRetry) {
				setStatuses((prev) => ({
					...prev,
					[stage.id]: "failed"
				}));
				setRetried((prev) => ({
					...prev,
					[stage.id]: true
				}));
				timerRef.current = window.setTimeout(() => runStage(i, true), 700);
				return;
			}
			setStatuses((prev) => ({
				...prev,
				[stage.id]: willFail ? "failed" : "success"
			}));
			idxRef.current = i + 1;
			timerRef.current = window.setTimeout(tick, 260);
		}, isRetry ? 620 : 520);
	};
	const tick = () => {
		const i = idxRef.current;
		if (i >= PIPELINE_STAGES.length) {
			setRunning(false);
			return;
		}
		runStage(i, false);
	};
	const start = () => {
		if (running) return;
		setRunning(true);
		setAnnounce("Pipeline started");
		if (idxRef.current >= PIPELINE_STAGES.length) {
			idxRef.current = 0;
			retryRef.current = {};
			setRetried({});
			setStatuses(Object.fromEntries(PIPELINE_STAGES.map((s) => [s.id, "waiting"])));
		}
		tick();
	};
	const pause = () => {
		setRunning(false);
		clearTimer();
		setAnnounce("Pipeline paused");
	};
	const reset = () => {
		pause();
		idxRef.current = 0;
		retryRef.current = {};
		setRetried({});
		setStatuses(Object.fromEntries(PIPELINE_STAGES.map((s) => [s.id, "waiting"])));
		setAnnounce("Pipeline reset");
	};
	(0, import_react.useEffect)(() => () => clearTimer(), []);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const t = e.target;
			if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
			if (active && e.key === "Escape") {
				setActive(null);
				return;
			}
			if (!gridRef.current?.closest("section")?.contains(document.activeElement ?? gridRef.current)) return;
			const key = e.key.toLowerCase();
			if (key === "p" || e.key === " ") {
				e.preventDefault();
				running ? pause() : start();
			} else if (key === "r") {
				e.preventDefault();
				reset();
			} else if (key === "d") {
				e.preventDefault();
				setDensity((v) => v === "compact" ? "comfortable" : "compact");
				setAnnounce(`Density ${density === "compact" ? "comfortable" : "compact"}`);
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		running,
		active,
		density
	]);
	const focusCard = (i) => {
		const n = PIPELINE_STAGES.length;
		const next = (i % n + n) % n;
		setFocusIdx(next);
		cardRefs.current[next]?.focus();
	};
	const cols = () => {
		if (typeof window === "undefined") return density === "comfortable" ? 3 : 4;
		const w = window.innerWidth;
		if (density === "comfortable") return w >= 1280 ? 3 : w >= 640 ? 2 : 1;
		return w >= 1536 ? 4 : w >= 1024 ? 3 : w >= 640 ? 2 : 1;
	};
	const onCardKey = (e, i) => {
		const n = PIPELINE_STAGES.length;
		switch (e.key) {
			case "ArrowRight":
				e.preventDefault();
				focusCard(i + 1);
				break;
			case "ArrowLeft":
				e.preventDefault();
				focusCard(i - 1);
				break;
			case "ArrowDown":
				e.preventDefault();
				focusCard(Math.min(n - 1, i + cols()));
				break;
			case "ArrowUp":
				e.preventDefault();
				focusCard(Math.max(0, i - cols()));
				break;
			case "Home":
				e.preventDefault();
				focusCard(0);
				break;
			case "End":
				e.preventDefault();
				focusCard(n - 1);
				break;
		}
	};
	const progress = (0, import_react.useMemo)(() => {
		const done = Object.values(statuses).filter((s) => s === "success" || s === "failed").length;
		return Math.round(done / PIPELINE_STAGES.length * 100);
	}, [statuses]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pipeline",
		"aria-labelledby": "pipeline-heading",
		"aria-describedby": "pipeline-desc",
		className: "section-shell",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-1/2 top-10 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-30 blur-3xl",
					style: { background: "conic-gradient(from 90deg, var(--color-aurora-1), var(--color-aurora-2), var(--color-aurora-3), var(--color-aurora-1))" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				role: "status",
				"aria-live": "polite",
				"aria-atomic": "true",
				className: "sr-only",
				children: announce
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs uppercase tracking-widest text-primary",
								children: "/ DevSecOps Pipeline"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								id: "pipeline-heading",
								className: "max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
								children: "An enterprise control plane — from commit to production."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								id: "pipeline-desc",
								className: "mt-2 max-w-2xl text-sm text-muted-foreground",
								children: "22 stages · 90+ production tools with official logos. Signed artifacts, policy-gated deploys, real-time observability. Hover any logo, click any stage."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8",
						children: PIPELINE_STATS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass rounded-xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase tracking-widest text-muted-foreground",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-lg font-semibold",
								style: { color: s.accent },
								children: s.value
							})]
						}, s.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							role: "toolbar",
							"aria-label": "Filter stages by category",
							children: PIPELINE_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setFilter(f),
								"aria-pressed": filter === f,
								"aria-label": `Filter: ${f}`,
								className: `rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${filter === f ? "border-primary/60 bg-primary/10 text-foreground" : "border-foreground/10 text-muted-foreground hover:border-foreground/20 hover:text-foreground"}`,
								children: f
							}, f))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							role: "toolbar",
							"aria-label": "Pipeline simulator controls",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "glass inline-flex items-center rounded-full p-0.5 text-[11px]",
									role: "group",
									"aria-label": "Layout density (shortcut: D)",
									children: ["compact", "comfortable"].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setDensity(opt),
										"aria-pressed": density === opt,
										"aria-label": `${opt} density`,
										className: `rounded-full px-3 py-1 font-medium capitalize transition-colors ${density === opt ? "bg-foreground/10 text-foreground" : "text-muted-foreground hover:text-foreground"}`,
										children: opt
									}, opt))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "glass hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs sm:flex",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "Progress"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-1.5 w-32 overflow-hidden rounded-full bg-foreground/10",
											role: "progressbar",
											"aria-label": "Pipeline completion",
											"aria-valuenow": progress,
											"aria-valuemin": 0,
											"aria-valuemax": 100,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												className: "h-full bg-gradient-to-r from-[var(--color-aurora-1)] via-[var(--color-aurora-2)] to-[var(--color-aurora-3)]",
												animate: { width: `${progress}%` },
												transition: {
													ease: "easeOut",
													duration: .3
												}
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "tabular-nums text-muted-foreground",
											children: [progress, "%"]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
									ref: startBtnRef,
									onClick: running ? pause : start,
									whileHover: { scale: 1.03 },
									whileTap: { scale: .97 },
									"aria-label": running ? "Pause pipeline (shortcut: P or Space)" : "Start pipeline (shortcut: P or Space)",
									"aria-keyshortcuts": "P Space",
									className: "inline-flex h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-foreground px-5 text-sm font-medium text-background shadow-[0_0_0_0_rgba(255,255,255,0)] transition-shadow hover:shadow-[0_0_24px_-6px_rgba(255,255,255,0.35)] sm:w-[160px]",
									children: running ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePause, {
										className: "h-4 w-4",
										"aria-hidden": true
									}), " Pause"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlinePlay, {
										className: "h-4 w-4",
										"aria-hidden": true
									}), " Start Pipeline"] })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: reset,
									"aria-label": "Reset pipeline (shortcut: R)",
									"aria-keyshortcuts": "R",
									className: "glass inline-flex h-11 items-center gap-1.5 rounded-xl px-3 text-xs hover:bg-foreground/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineRefresh, { "aria-hidden": true }), " Reset"]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: gridRef,
						className: d.grid,
						role: "list",
						"aria-label": "DevSecOps pipeline stages. Use arrow keys to move, Enter to open details.",
						children: PIPELINE_STAGES.map((stage, i) => {
							const status = statuses[stage.id];
							const dim = !matchesFilter(stage);
							const s = statusStyle[status];
							const StageIcon = stage.icon;
							const toolList = stage.tools.map((t) => t.name).join(", ");
							const ariaLabel = `Stage ${i + 1} of ${PIPELINE_STAGES.length}: ${stage.name}. Status: ${s.label}${retried[stage.id] ? ", retried" : ""}. Tools: ${toolList}. ${stage.short} Press Enter for details.`;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
								ref: (el) => {
									cardRefs.current[i] = el;
								},
								layout: true,
								onClick: () => setActive(stage),
								onFocus: () => setFocusIdx(i),
								onKeyDown: (e) => onCardKey(e, i),
								tabIndex: focusIdx === i ? 0 : -1,
								role: "listitem",
								"aria-label": ariaLabel,
								"aria-current": status === "running" ? "step" : void 0,
								whileTap: { scale: .98 },
								animate: {
									opacity: dim ? .25 : 1,
									scale: dim ? .98 : 1
								},
								whileHover: { y: -4 },
								transition: { duration: .25 },
								className: `glass group relative flex flex-col overflow-hidden rounded-xl border text-left transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${d.card} ${s.ring} ${s.glow}`,
								children: [
									status === "running" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										"aria-hidden": true,
										className: "pointer-events-none absolute inset-0 rounded-xl",
										style: {
											background: "conic-gradient(from var(--a,0deg), transparent 0deg, #22d3ee 60deg, transparent 120deg)",
											WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
											WebkitMaskComposite: "xor",
											padding: 1
										},
										animate: { ["--a"]: ["0deg", "360deg"] },
										transition: {
											duration: 3,
											repeat: Infinity,
											ease: "linear"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex min-w-0 items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `grid ${d.stageIconBox} shrink-0 place-items-center rounded-md bg-gradient-to-br from-white/10 to-white/[0.02]`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StageIcon, { className: `${d.stageIconInner} text-primary` })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: `font-mono ${d.stageLabel} uppercase tracking-widest text-muted-foreground`,
													children: ["Stage ", String(i + 1).padStart(2, "0")]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: `truncate ${d.stageTitle} font-semibold leading-tight`,
													children: stage.name
												})]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex shrink-0 items-center gap-1",
											children: [
												retried[stage.id] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "rounded-full border border-amber-400/40 bg-amber-400/10 px-1.5 py-[1px] text-[9px] font-medium uppercase tracking-wider text-amber-300",
													children: "Retry"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${s.dot}` }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[10px] text-muted-foreground",
													children: s.label
												})
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `${d.desc} mt-2.5 leading-snug text-muted-foreground`,
										children: stage.short
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-2.5 flex flex-wrap items-center gap-1.5",
										children: stage.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoTile, {
											tool: t,
											size: d.logoSize
										}, `${stage.id}-${t.name}`))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-auto flex flex-wrap gap-1 pt-2.5",
										children: stage.categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-md border border-foreground/10 bg-foreground/5 ${d.catText} text-muted-foreground`,
											children: c
										}, c))
									}),
									status === "running" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-cyan-400/40",
										animate: { boxShadow: [
											"0 0 0 0 rgba(34,211,238,0.4)",
											"0 0 34px 4px rgba(34,211,238,0.28)",
											"0 0 0 0 rgba(34,211,238,0.4)"
										] },
										transition: {
											duration: 1.4,
											repeat: Infinity
										}
									}),
									status === "retrying" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-400/60",
										animate: { boxShadow: [
											"0 0 0 0 rgba(251,191,36,0.35)",
											"0 0 24px 3px rgba(251,191,36,0.35)",
											"0 0 0 0 rgba(251,191,36,0.35)"
										] },
										transition: {
											duration: 1,
											repeat: Infinity
										}
									}),
									status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-emerald-400/60",
										initial: { boxShadow: "0 0 0 0 rgba(52,211,153,0)" },
										animate: { boxShadow: [
											"0 0 0 0 rgba(52,211,153,0.55)",
											"0 0 34px 6px rgba(52,211,153,0.28)",
											"0 0 0 0 rgba(52,211,153,0)"
										] },
										transition: {
											duration: 1.2,
											times: [
												0,
												.4,
												1
											]
										}
									}, `ok-${stage.id}`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "pointer-events-none absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-emerald-500/90 text-background shadow-[0_0_18px_rgba(52,211,153,0.6)]",
										initial: {
											scale: 0,
											rotate: -30,
											opacity: 0
										},
										animate: {
											scale: 1,
											rotate: 0,
											opacity: 1
										},
										transition: {
											type: "spring",
											stiffness: 500,
											damping: 18
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiCheck, {
											className: "h-3.5 w-3.5",
											strokeWidth: 3
										})
									})] }),
									status === "failed" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-rose-400/70",
										animate: {
											x: [
												0,
												-4,
												4,
												-3,
												3,
												-2,
												2,
												0
											],
											boxShadow: [
												"0 0 0 0 rgba(244,63,94,0.5)",
												"0 0 30px 4px rgba(244,63,94,0.45)",
												"0 0 18px 2px rgba(244,63,94,0.35)"
											]
										},
										transition: {
											duration: .55,
											ease: "easeInOut"
										}
									}, `fail-${stage.id}`), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
										className: "pointer-events-none absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-rose-500/90 text-background shadow-[0_0_18px_rgba(244,63,94,0.65)]",
										initial: {
											scale: 0,
											rotate: 30,
											opacity: 0
										},
										animate: {
											scale: 1,
											rotate: 0,
											opacity: 1
										},
										transition: {
											type: "spring",
											stiffness: 500,
											damping: 16
										},
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiX, {
											className: "h-3.5 w-3.5",
											strokeWidth: 3
										})
									})] })
								]
							}, stage.id);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "fixed inset-0 z-[70] flex justify-end",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
					onClick: () => setActive(null),
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
					initial: { x: "100%" },
					animate: { x: 0 },
					exit: { x: "100%" },
					transition: {
						type: "spring",
						stiffness: 260,
						damping: 30
					},
					role: "dialog",
					"aria-modal": "true",
					"aria-labelledby": "pipeline-drawer-title",
					"aria-describedby": "pipeline-drawer-desc",
					tabIndex: -1,
					ref: (el) => {
						el?.focus();
					},
					className: "glass-strong relative flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-foreground/10 p-6 focus:outline-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(active.icon, {
										className: "h-5 w-5 text-primary",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: active.categories.join(" · ")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									id: "pipeline-drawer-title",
									className: "text-lg font-semibold",
									children: active.name
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setActive(null),
								className: "rounded-full p-1.5 hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70",
								"aria-label": "Close details (Esc)",
								"aria-keyshortcuts": "Escape",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineX, { "aria-hidden": true })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "pipeline-drawer-desc",
							className: "mt-5 text-sm text-muted-foreground",
							children: active.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerRow, {
							label: "Input",
							value: active.input
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerRow, {
							label: "Output",
							value: active.output
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerSection, {
							title: "Toolchain",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: active.tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 rounded-lg border border-foreground/10 bg-foreground/5 px-2 py-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoTile, {
										tool: t,
										size: 26
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs",
										children: t.name
									})]
								}, t.name))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerSection, {
							title: "Best Practices",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "space-y-1.5 text-sm text-muted-foreground",
								children: active.bestPractices.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
								}, b))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DrawerSection, {
							title: "Commands",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-1.5",
								children: active.commands.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
									className: "overflow-x-auto rounded-lg border border-foreground/10 bg-black/40 px-3 py-2 font-mono text-xs text-foreground/90",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", { children: ["$ ", c] })
								}, c))
							})
						})
					]
				})]
			}) })
		]
	});
}
function DrawerRow({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 flex items-baseline justify-between gap-4 border-b border-foreground/5 pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right text-sm",
			children: value
		})]
	});
}
function DrawerSection({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-2 text-xs uppercase tracking-widest text-muted-foreground",
			children: title
		}), children]
	});
}
var FLOW = [
	{
		id: "users",
		label: "Users",
		Icon: FaGithub,
		color: "#94a3b8",
		role: "Global end users",
		latency: 0,
		rps: 2347,
		status: "healthy"
	},
	{
		id: "cf",
		label: "Cloudflare",
		Icon: SiCloudflare,
		color: "#F38020",
		role: "CDN · DDoS · WAF edge",
		latency: 8,
		rps: 2347,
		status: "healthy"
	},
	{
		id: "r53",
		label: "Route 53",
		Icon: FaAws,
		color: "#FF9900",
		role: "DNS · health checks",
		latency: 2,
		rps: 2347,
		status: "healthy"
	},
	{
		id: "cfront",
		label: "CloudFront",
		Icon: FaAws,
		color: "#FF9900",
		role: "AWS CDN",
		latency: 12,
		rps: 2320,
		status: "healthy"
	},
	{
		id: "waf",
		label: "AWS WAF",
		Icon: FaShieldAlt,
		color: "#DD344C",
		role: "L7 firewall rules",
		latency: 3,
		rps: 2318,
		status: "healthy"
	},
	{
		id: "alb",
		label: "ALB",
		Icon: FaAws,
		color: "#8C4FFF",
		role: "Application load balancer",
		latency: 4,
		rps: 2318,
		status: "healthy"
	},
	{
		id: "lbc",
		label: "AWS LB Controller",
		Icon: SiKubernetes,
		color: "#326CE5",
		role: "Provisions ALB/NLB via Ingress",
		latency: 0,
		rps: 0,
		status: "healthy"
	},
	{
		id: "ingress",
		label: "NGINX Ingress",
		Icon: SiNginx,
		color: "#009639",
		role: "Cluster ingress · TLS termination",
		latency: 5,
		rps: 2312,
		status: "healthy"
	},
	{
		id: "istio",
		label: "Istio Mesh",
		Icon: SiIstio,
		color: "#466BB0",
		role: "mTLS · traffic policy · retries",
		latency: 3,
		rps: 2312,
		status: "healthy"
	},
	{
		id: "fe",
		label: "Frontend",
		Icon: FaCubes,
		color: "#22d3ee",
		role: "React SPA · 6 pods",
		latency: 18,
		rps: 1820,
		status: "healthy"
	},
	{
		id: "be",
		label: "Backend API",
		Icon: FaCubes,
		color: "#a78bfa",
		role: "Node.js API · 12 pods",
		latency: 24,
		rps: 1580,
		status: "healthy"
	},
	{
		id: "auth",
		label: "Auth",
		Icon: FaKey,
		color: "#f59e0b",
		role: "OIDC / JWT · 4 pods",
		latency: 14,
		rps: 640,
		status: "healthy"
	},
	{
		id: "orders",
		label: "Orders",
		Icon: FaCubes,
		color: "#34d399",
		role: "Domain service · 8 pods",
		latency: 27,
		rps: 890,
		status: "healthy"
	},
	{
		id: "pay",
		label: "Payments",
		Icon: FaCubes,
		color: "#f472b6",
		role: "PCI · 6 pods",
		latency: 42,
		rps: 310,
		status: "warn"
	},
	{
		id: "redis",
		label: "Redis",
		Icon: SiRedis,
		color: "#DC382D",
		role: "Cache · session store",
		latency: 1,
		rps: 4200,
		status: "healthy"
	},
	{
		id: "pg",
		label: "PostgreSQL",
		Icon: SiPostgresql,
		color: "#336791",
		role: "RDS Multi-AZ",
		latency: 6,
		rps: 1220,
		status: "healthy"
	},
	{
		id: "ext",
		label: "External APIs",
		Icon: FaNetworkWired,
		color: "#e879f9",
		role: "Stripe · Twilio · SendGrid",
		latency: 120,
		rps: 180,
		status: "healthy"
	}
];
var K8S_TREE = {
	id: "eks",
	label: "prod-eks-01",
	kind: "EKS Cluster",
	Icon: FaAws,
	color: "#FF9900",
	cpu: "48%",
	mem: "61%",
	age: "412d",
	ns: "-",
	status: "healthy",
	children: [{
		id: "ng-app",
		label: "app-nodegroup",
		kind: "NodeGroup",
		Icon: FaServer,
		color: "#8C4FFF",
		cpu: "52%",
		mem: "64%",
		age: "412d",
		ns: "-",
		status: "healthy",
		children: [{
			id: "node-1",
			label: "ip-10-0-1-42",
			kind: "Worker Node · m6i.2xlarge",
			Icon: FaServer,
			color: "#8C4FFF",
			cpu: "44%",
			mem: "58%",
			age: "38d",
			ns: "-",
			status: "healthy",
			children: [{
				id: "ns-prod",
				label: "production",
				kind: "Namespace",
				Icon: FaCubes,
				color: "#22d3ee",
				cpu: "31%",
				mem: "42%",
				age: "412d",
				ns: "production",
				status: "healthy",
				children: [
					{
						id: "dep-fe",
						label: "frontend",
						kind: "Deployment · 6/6",
						Icon: SiKubernetes,
						color: "#326CE5",
						cpu: "12%",
						mem: "24%",
						age: "12d",
						ns: "production",
						status: "healthy",
						image: "ecr/frontend:v2.14.3",
						restarts: 0,
						children: [{
							id: "rs-fe",
							label: "frontend-8f2c",
							kind: "ReplicaSet",
							Icon: SiKubernetes,
							color: "#326CE5",
							cpu: "12%",
							mem: "24%",
							age: "12d",
							ns: "production",
							status: "healthy",
							children: [{
								id: "pod-fe-1",
								label: "frontend-8f2c-abcd1",
								kind: "Pod · 1/1",
								Icon: FaCubes,
								color: "#22d3ee",
								cpu: "82m",
								mem: "128Mi",
								age: "12d",
								ns: "production",
								status: "healthy",
								image: "ecr/frontend:v2.14.3",
								restarts: 0
							}, {
								id: "pod-fe-2",
								label: "frontend-8f2c-efgh2",
								kind: "Pod · 1/1",
								Icon: FaCubes,
								color: "#22d3ee",
								cpu: "76m",
								mem: "124Mi",
								age: "12d",
								ns: "production",
								status: "healthy",
								image: "ecr/frontend:v2.14.3",
								restarts: 0
							}]
						}]
					},
					{
						id: "dep-be",
						label: "backend-api",
						kind: "Deployment · 12/12",
						Icon: SiKubernetes,
						color: "#326CE5",
						cpu: "28%",
						mem: "44%",
						age: "3d",
						ns: "production",
						status: "healthy",
						image: "ecr/backend:v4.2.0",
						restarts: 1
					},
					{
						id: "dep-pay",
						label: "payments",
						kind: "Deployment · 6/6",
						Icon: SiKubernetes,
						color: "#326CE5",
						cpu: "56%",
						mem: "72%",
						age: "1d",
						ns: "production",
						status: "warn",
						image: "ecr/payments:v1.8.4",
						restarts: 3
					},
					{
						id: "svc-be",
						label: "backend-svc",
						kind: "Service · ClusterIP",
						Icon: FaNetworkWired,
						color: "#a78bfa",
						cpu: "-",
						mem: "-",
						age: "3d",
						ns: "production",
						status: "healthy"
					},
					{
						id: "ing-web",
						label: "web-ingress",
						kind: "Ingress · nginx",
						Icon: SiNginx,
						color: "#009639",
						cpu: "-",
						mem: "-",
						age: "10d",
						ns: "production",
						status: "healthy"
					},
					{
						id: "pvc-pg",
						label: "pg-data",
						kind: "PVC · 200Gi · gp3",
						Icon: FaDatabase,
						color: "#336791",
						cpu: "-",
						mem: "-",
						age: "180d",
						ns: "production",
						status: "healthy"
					}
				]
			}]
		}]
	}, {
		id: "ng-sys",
		label: "system-nodegroup",
		kind: "NodeGroup",
		Icon: FaServer,
		color: "#8C4FFF",
		cpu: "22%",
		mem: "38%",
		age: "412d",
		ns: "-",
		status: "healthy",
		children: [{
			id: "ns-mon",
			label: "monitoring",
			kind: "Namespace",
			Icon: FaChartLine,
			color: "#F46800",
			cpu: "18%",
			mem: "36%",
			age: "400d",
			ns: "monitoring",
			status: "healthy"
		}, {
			id: "ns-sec",
			label: "security",
			kind: "Namespace",
			Icon: FaShieldAlt,
			color: "#DD344C",
			cpu: "8%",
			mem: "14%",
			age: "400d",
			ns: "security",
			status: "healthy"
		}]
	}]
};
var SEC_TOOLS = [
	{
		name: "Falco",
		Icon: FaFire,
		color: "#00B4A6"
	},
	{
		name: "Kyverno",
		Icon: FaGavel,
		color: "#4285F4"
	},
	{
		name: "OPA Gatekeeper",
		Icon: FaShieldAlt,
		color: "#7D4698"
	},
	{
		name: "Trivy",
		Icon: FaSearch,
		color: "#1904DA"
	},
	{
		name: "Cert Manager",
		Icon: FaLock,
		color: "#326CE5"
	},
	{
		name: "NetworkPolicy",
		Icon: FaNetworkWired,
		color: "#22d3ee"
	},
	{
		name: "RBAC",
		Icon: FaKey,
		color: "#f59e0b"
	},
	{
		name: "IRSA",
		Icon: FaAws,
		color: "#FF9900"
	},
	{
		name: "Secrets Manager",
		Icon: FaLock,
		color: "#DD344C"
	},
	{
		name: "Cosign",
		Icon: FaCheckCircle,
		color: "#22c55e"
	}
];
var SEC_EVENT_POOL = [
	{
		severity: "info",
		tool: "Cosign",
		msg: "Image signature verified",
		pod: "payments-9f8c-x2",
		ns: "production",
		remediation: "No action — signature valid via keyless OIDC."
	},
	{
		severity: "warn",
		tool: "Falco",
		msg: "Unexpected shell in container",
		pod: "orders-77b-abc",
		ns: "production",
		remediation: "Terminate exec, review PodSecurityContext, restrict readOnlyRootFilesystem."
	},
	{
		severity: "high",
		tool: "Kyverno",
		msg: "Privileged container blocked",
		pod: "debug-tools-x",
		ns: "sandbox",
		remediation: "Remove securityContext.privileged: true and redeploy."
	},
	{
		severity: "critical",
		tool: "Falco",
		msg: "Container escape attempt",
		pod: "unknown-cli-92",
		ns: "production",
		remediation: "Isolate node, snapshot pod, rotate node credentials, page on-call."
	},
	{
		severity: "warn",
		tool: "Trivy",
		msg: "HIGH CVE in base image",
		pod: "frontend-8f2c-a",
		ns: "production",
		remediation: "Rebuild image with patched base (node:20-alpine → 20.15.1)."
	},
	{
		severity: "info",
		tool: "Cert Manager",
		msg: "TLS cert renewed",
		pod: "cert-manager-1",
		ns: "cert-manager",
		remediation: "No action — Let's Encrypt renewal successful."
	},
	{
		severity: "high",
		tool: "OPA Gatekeeper",
		msg: "Deployment missing resource limits",
		pod: "audit-svc-11",
		ns: "staging",
		remediation: "Add resources.limits.cpu/memory to pod spec."
	},
	{
		severity: "warn",
		tool: "NetworkPolicy",
		msg: "Egress to unknown CIDR blocked",
		pod: "backend-api-4a",
		ns: "production",
		remediation: "Add explicit egress rule or route via known gateway."
	},
	{
		severity: "info",
		tool: "RBAC",
		msg: "ServiceAccount token rotated",
		pod: "kube-system/sa",
		ns: "kube-system",
		remediation: "No action — automatic 24h rotation via IRSA."
	}
];
var GITOPS_STAGES = [
	{
		id: "dev",
		label: "Developer",
		Icon: FaGithub,
		color: "#94a3b8"
	},
	{
		id: "gh",
		label: "GitHub",
		Icon: SiGithub,
		color: "#f0f6fc"
	},
	{
		id: "pr",
		label: "Pull Request",
		Icon: SiGithub,
		color: "#a78bfa"
	},
	{
		id: "gha",
		label: "GitHub Actions",
		Icon: SiGithubactions,
		color: "#2088FF"
	},
	{
		id: "test",
		label: "Unit Tests",
		Icon: FaCheckCircle,
		color: "#22c55e"
	},
	{
		id: "sonar",
		label: "SonarQube",
		Icon: FaShieldAlt,
		color: "#4E9BCD"
	},
	{
		id: "semgrep",
		label: "Semgrep",
		Icon: FaSearch,
		color: "#1B7EC8"
	},
	{
		id: "gitleaks",
		label: "Gitleaks",
		Icon: FaKey,
		color: "#eab308"
	},
	{
		id: "build",
		label: "Docker Build",
		Icon: SiDocker,
		color: "#2496ED"
	},
	{
		id: "trivy",
		label: "Trivy",
		Icon: FaSearch,
		color: "#1904DA"
	},
	{
		id: "sbom",
		label: "SBOM",
		Icon: HiOutlineDocumentText,
		color: "#a78bfa"
	},
	{
		id: "cosign",
		label: "Cosign",
		Icon: FaCheckCircle,
		color: "#22c55e"
	},
	{
		id: "ecr",
		label: "Amazon ECR",
		Icon: FaAws,
		color: "#FF9900"
	},
	{
		id: "helm",
		label: "Helm",
		Icon: SiHelm,
		color: "#0F1689"
	},
	{
		id: "gitops",
		label: "GitOps Repo",
		Icon: SiGithub,
		color: "#f0f6fc"
	},
	{
		id: "argo",
		label: "Argo CD",
		Icon: SiArgo,
		color: "#EF7B4D"
	},
	{
		id: "devenv",
		label: "Development",
		Icon: SiKubernetes,
		color: "#326CE5"
	},
	{
		id: "stg",
		label: "Staging",
		Icon: SiKubernetes,
		color: "#326CE5"
	},
	{
		id: "prod",
		label: "Production EKS",
		Icon: SiKubernetes,
		color: "#FF9900"
	}
];
function useTicker(ms = 1500) {
	const [tick, setTick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setTick((t) => t + 1), ms);
		return () => clearInterval(id);
	}, [ms]);
	return tick;
}
function jitter(base, pct = .08) {
	return Math.round(base * (1 + (Math.random() * 2 - 1) * pct));
}
function jitterF(base, pct = .05, digits = 1) {
	return +(base * (1 + (Math.random() * 2 - 1) * pct)).toFixed(digits);
}
function StatusDot({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `inline-block h-2 w-2 rounded-full ${{
		healthy: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]",
		warn: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]",
		degraded: "bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.7)]"
	}[status]}` });
}
function Panel({ title, icon: Icon, right, children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `glass relative overflow-hidden rounded-2xl border border-foreground/10 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between border-b border-foreground/5 px-4 py-2.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "text-primary",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: title })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2 text-xs text-muted-foreground",
				children: right
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "p-4",
			children
		})]
	});
}
function TrafficFlow({ onPick }) {
	useTicker(1800);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Live Traffic Flow — Users → EKS",
		icon: FaBolt,
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: "healthy" }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "All paths healthy" })
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-w-max items-stretch gap-3",
				children: FLOW.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						onClick: () => onPick(n),
						whileHover: {
							y: -3,
							scale: 1.03
						},
						className: "group relative w-[132px] rounded-xl border border-foreground/10 bg-foreground/[0.03] p-3 text-left transition-colors hover:border-foreground/30",
						style: { boxShadow: `inset 0 0 0 1px ${n.color}22` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-md",
									style: {
										background: `${n.color}18`,
										color: n.color
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.Icon, {
										size: 18,
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: n.status })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 truncate text-[13px] font-semibold text-foreground",
								children: n.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 truncate text-[10px] text-muted-foreground",
								children: n.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center justify-between text-[10px] font-mono text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [jitter(n.latency || 1, .15), "ms"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [jitter(n.rps || 1, .1), " rps"] })]
							})
						]
					}), i < FLOW.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mx-1 h-[2px] w-6 overflow-hidden bg-foreground/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute inset-y-0 w-2 rounded-full",
							style: { background: `linear-gradient(90deg, transparent, ${n.color}, transparent)` },
							animate: { x: ["-100%", "300%"] },
							transition: {
								duration: 1.6,
								repeat: Infinity,
								ease: "linear",
								delay: i * .08
							}
						})
					})]
				}, n.id))
			})
		})
	});
}
function ClusterStats({ incident }) {
	useTicker(1500);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass grid grid-cols-2 gap-3 rounded-2xl border border-foreground/10 p-3 sm:grid-cols-5 lg:grid-cols-10",
		children: [
			{
				label: "Cluster Health",
				value: incident ? "99.42%" : "99.99%",
				color: incident ? "text-amber-400" : "text-emerald-400"
			},
			{
				label: "Running Pods",
				value: `${jitter(186, .02)}`,
				color: "text-foreground"
			},
			{
				label: "Nodes",
				value: "24",
				color: "text-foreground"
			},
			{
				label: "CPU",
				value: `${jitter(48, .06)}%`,
				color: "text-foreground"
			},
			{
				label: "Memory",
				value: `${jitter(61, .05)}%`,
				color: "text-foreground"
			},
			{
				label: "Requests/sec",
				value: `${jitter(2347, .08).toLocaleString()}`,
				color: "text-foreground"
			},
			{
				label: "p95 Latency",
				value: `${jitter(24, .15)}ms`,
				color: "text-foreground"
			},
			{
				label: "Argo CD",
				value: "Healthy",
				color: "text-emerald-400"
			},
			{
				label: "Falco Alerts",
				value: `${incident ? 6 : 2}`,
				color: incident ? "text-rose-400" : "text-amber-400"
			},
			{
				label: "Est. Spend",
				value: "$842 /mo",
				color: "text-foreground"
			}
		].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg bg-foreground/[0.02] px-2 py-1.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] uppercase tracking-widest text-muted-foreground",
				children: s.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `mt-0.5 font-mono text-sm font-semibold ${s.color}`,
				children: s.value
			})]
		}, s.label))
	});
}
function TreeNode({ node, depth = 0, onPick, open, toggle }) {
	const isOpen = open.has(node.id);
	const hasKids = !!node.children?.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-foreground/5",
		style: { paddingLeft: 8 + depth * 14 },
		children: [
			hasKids ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => toggle(node.id),
				className: "flex h-4 w-4 items-center justify-center rounded text-muted-foreground hover:bg-foreground/10",
				"aria-label": isOpen ? "Collapse" : "Expand",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { rotate: isOpen ? 90 : 0 },
					className: "text-[10px]",
					children: "▶"
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-6 w-6 items-center justify-center rounded",
				style: {
					background: `${node.color}18`,
					color: node.color
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(node.Icon, {
					size: 13,
					"aria-hidden": true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onPick(node),
				className: "flex-1 truncate text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: node.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 text-[10px] text-muted-foreground",
					children: node.kind
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden items-center gap-3 pr-1 font-mono text-[10px] text-muted-foreground sm:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["cpu ", node.cpu] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["mem ", node.mem] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: node.status })
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
		initial: false,
		children: isOpen && hasKids && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			className: "overflow-hidden",
			children: node.children.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeNode, {
				node: c,
				depth: depth + 1,
				onPick,
				open,
				toggle
			}, c.id))
		})
	})] });
}
function Topology({ onPick }) {
	const [open, setOpen] = (0, import_react.useState)(/* @__PURE__ */ new Set([
		"eks",
		"ng-app",
		"node-1",
		"ns-prod"
	]));
	const toggle = (id) => {
		const n = new Set(open);
		n.has(id) ? n.delete(id) : n.add(id);
		setOpen(n);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Kubernetes Resource Topology",
		icon: FaCubes,
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "prod-eks-01" }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-[420px] overflow-y-auto pr-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeNode, {
				node: K8S_TREE,
				onPick,
				open,
				toggle
			})
		})
	});
}
function Security({ onPickEvent, incident }) {
	const [events, setEvents] = (0, import_react.useState)(() => SEC_EVENT_POOL.slice(0, 5).map((e, i) => ({
		...e,
		ts: `${i + 1}m ago`
	})));
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			const pick = SEC_EVENT_POOL[Math.floor(Math.random() * SEC_EVENT_POOL.length)];
			setEvents((prev) => [{
				...pick,
				ts: "just now"
			}, ...prev].slice(0, 8));
		}, 3500);
		return () => clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (incident) setEvents((prev) => [{
			severity: "critical",
			tool: "Falco",
			msg: `Incident: ${incident}`,
			pod: "payments-9f8c-x2",
			ns: "production",
			remediation: "Auto-remediation engaged — see incident timeline.",
			ts: "just now"
		}, ...prev].slice(0, 8));
	}, [incident]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
		title: "Security & Policy Enforcement",
		icon: FaShieldAlt,
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: incident ? "warn" : "healthy" }),
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: incident ? "Investigating" : "All controls passing" })
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-3 flex flex-wrap gap-1.5",
			children: SEC_TOOLS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-2 py-1 text-[10px]",
				style: { color: t.color },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.Icon, {
						size: 11,
						"aria-hidden": true
					}),
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: t.name
					})
				]
			}, t.name))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-h-[280px] space-y-1.5 overflow-y-auto pr-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				initial: false,
				children: events.map((e, i) => {
					const sev = {
						info: {
							icon: FaCheckCircle,
							color: "text-emerald-400",
							ring: "border-emerald-400/30"
						},
						warn: {
							icon: FaExclamationTriangle,
							color: "text-amber-400",
							ring: "border-amber-400/30"
						},
						high: {
							icon: FaExclamationTriangle,
							color: "text-orange-400",
							ring: "border-orange-400/30"
						},
						critical: {
							icon: FaTimesCircle,
							color: "text-rose-500",
							ring: "border-rose-500/40"
						}
					}[e.severity];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						initial: {
							opacity: 0,
							x: -8
						},
						animate: {
							opacity: 1,
							x: 0
						},
						onClick: () => onPickEvent(e),
						className: `flex w-full items-center gap-2 rounded-lg border ${sev.ring} bg-foreground/[0.02] px-2.5 py-2 text-left text-xs hover:bg-foreground/[0.05]`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(sev.icon, {
								className: `shrink-0 ${sev.color}`,
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate font-medium text-foreground",
								children: e.msg
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-auto shrink-0 text-[10px] text-muted-foreground",
								children: [
									e.tool,
									" · ",
									e.ns,
									" · ",
									e.ts
								]
							})
						]
					}, `${e.pod}-${i}-${e.ts}`);
				})
			})
		})]
	});
}
function GitOps() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [failedAt, setFailedAt] = (0, import_react.useState)(null);
	const [running, setRunning] = (0, import_react.useState)(true);
	const [rev, setRev] = (0, import_react.useState)(1487);
	(0, import_react.useEffect)(() => {
		if (!running) return;
		const id = setInterval(() => {
			setActive((prev) => {
				if (failedAt !== null) return prev;
				const next = prev + 1;
				if (next >= GITOPS_STAGES.length) {
					setRev((r) => r + 1);
					if (Math.random() < .15) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "GitOps Deployment Pipeline",
		icon: SiArgo,
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono",
				children: ["rev ", rev]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mx-1 text-muted-foreground/50",
				children: "·"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: failedAt !== null ? "text-rose-400" : "text-emerald-400",
				children: failedAt !== null ? "Rollback" : "Syncing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setRunning((r) => !r),
				"aria-label": running ? "Pause GitOps sync" : "Resume GitOps sync",
				className: "ml-2 rounded-md border border-foreground/10 bg-foreground/[0.03] px-2 py-1 text-[10px] hover:bg-foreground/10",
				children: running ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPause, { "aria-hidden": true }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPlay, { "aria-hidden": true })
			})
		] }),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-[repeat(10,minmax(0,1fr))]",
			children: GITOPS_STAGES.map((s, i) => {
				const isActive = i === active && failedAt === null;
				const state = failedAt === i ? {
					ring: "border-rose-500/60",
					bg: "bg-rose-500/10",
					dot: "bg-rose-500"
				} : isActive ? {
					ring: "border-primary/60",
					bg: "bg-primary/10",
					dot: "bg-primary"
				} : i < active && failedAt === null ? {
					ring: "border-emerald-400/40",
					bg: "bg-emerald-400/5",
					dot: "bg-emerald-400"
				} : {
					ring: "border-foreground/10",
					bg: "bg-foreground/[0.02]",
					dot: "bg-foreground/20"
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					className: `relative flex flex-col items-center gap-1 rounded-lg border ${state.ring} ${state.bg} p-2`,
					animate: isActive ? { scale: [
						1,
						1.04,
						1
					] } : { scale: 1 },
					transition: {
						duration: 1,
						repeat: isActive ? Infinity : 0
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-7 w-7 items-center justify-center rounded",
							style: { color: s.color },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, {
								size: 16,
								"aria-hidden": true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full truncate text-center text-[10px] font-medium",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute -right-1 -top-1 h-2 w-2 rounded-full ${state.dot}` })
					]
				}, s.id);
			})
		})
	});
}
function Sparkline({ values, color }) {
	const max = Math.max(...values);
	const min = Math.min(...values);
	const range = max - min || 1;
	const w = 100, h = 30;
	const pts = values.map((v, i) => {
		return `${i / (values.length - 1) * w},${h - (v - min) / range * h}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${w} ${h}`,
		className: "h-8 w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			points: pts,
			fill: "none",
			stroke: color,
			strokeWidth: "1.5"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
			points: `${pts} ${w},${h} 0,${h}`,
			fill: color,
			opacity: "0.15"
		})]
	});
}
function Observability() {
	const [series, setSeries] = (0, import_react.useState)({
		cpu: Array.from({ length: 24 }, () => jitter(48, .15)),
		mem: Array.from({ length: 24 }, () => jitter(61, .1)),
		rps: Array.from({ length: 24 }, () => jitter(2300, .15)),
		lat: Array.from({ length: 24 }, () => jitter(24, .25)),
		err: Array.from({ length: 24 }, () => jitterF(.12, .4, 2)),
		slo: Array.from({ length: 24 }, () => jitterF(99.94, 5e-4, 3))
	});
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setSeries((prev) => ({
				cpu: [...prev.cpu.slice(1), jitter(48, .15)],
				mem: [...prev.mem.slice(1), jitter(61, .1)],
				rps: [...prev.rps.slice(1), jitter(2300, .15)],
				lat: [...prev.lat.slice(1), jitter(24, .25)],
				err: [...prev.err.slice(1), jitterF(.12, .4, 2)],
				slo: [...prev.slo.slice(1), jitterF(99.94, 5e-4, 3)]
			}));
		}, 1500);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Observability — Prometheus · Grafana · Loki · Tempo · OTel",
		icon: SiPrometheus,
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2",
			children: [
				{
					Icon: SiPrometheus,
					c: "#E6522C"
				},
				{
					Icon: SiGrafana,
					c: "#F46800"
				},
				{
					Icon: SiGrafana,
					c: "#F46800"
				},
				{
					Icon: SiJaeger,
					c: "#66CFE3"
				},
				{
					Icon: SiOpentelemetry,
					c: "#F5A800"
				}
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.Icon, {
				style: { color: t.c },
				"aria-hidden": true
			}, i))
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
			children: [
				{
					key: "cpu",
					label: "CPU",
					unit: "%",
					color: "#22d3ee"
				},
				{
					key: "mem",
					label: "Memory",
					unit: "%",
					color: "#a78bfa"
				},
				{
					key: "rps",
					label: "Req/s",
					unit: "",
					color: "#34d399"
				},
				{
					key: "lat",
					label: "p95 Latency",
					unit: "ms",
					color: "#f59e0b"
				},
				{
					key: "err",
					label: "Error Rate",
					unit: "%",
					color: "#f43f5e"
				},
				{
					key: "slo",
					label: "SLO Availability",
					unit: "%",
					color: "#22c55e"
				}
			].map((c) => {
				const vals = series[c.key];
				const last = vals[vals.length - 1];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-foreground/10 bg-foreground/[0.02] p-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-[10px] uppercase tracking-widest text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-foreground",
							children: [last, c.unit]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkline, {
						values: vals,
						color: c.color
					})]
				}, c.key);
			})
		})
	});
}
function Autoscaling() {
	const [traffic, setTraffic] = (0, import_react.useState)(40);
	const pods = Math.round(6 + traffic / 100 * 42);
	const nodes = Math.max(3, Math.round(3 + traffic / 100 * 21));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Autoscaling — HPA · Karpenter · Cluster Autoscaler",
		icon: FaChartLine,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex justify-between text-[11px] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Simulated Traffic" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-foreground",
						children: [traffic, "%"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 100,
					value: traffic,
					onChange: (e) => setTraffic(+e.target.value),
					"aria-label": "Simulated traffic percentage",
					className: "w-full accent-[color:var(--color-aurora-1)]"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-foreground/[0.03] p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase text-muted-foreground",
								children: "HPA Pods"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { scale: 1.2 },
								animate: { scale: 1 },
								className: "font-mono text-lg text-emerald-400",
								children: pods
							}, pods)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-foreground/[0.03] p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase text-muted-foreground",
								children: "Karpenter Nodes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								initial: { scale: 1.2 },
								animate: { scale: 1 },
								className: "font-mono text-lg text-cyan-400",
								children: nodes
							}, nodes)]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-foreground/[0.03] p-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] uppercase text-muted-foreground",
								children: "Spot Ratio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-mono text-lg text-amber-400",
								children: [Math.min(85, 30 + traffic / 2).toFixed(0), "%"]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-center gap-1 text-[10px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Metrics Server" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaArrowRight, { "aria-hidden": true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "HPA" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaArrowRight, { "aria-hidden": true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pods↑" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaArrowRight, { "aria-hidden": true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Karpenter" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaArrowRight, { "aria-hidden": true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nodes↑" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaArrowRight, { "aria-hidden": true }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cluster Autoscaler" })
					]
				})
			]
		})
	});
}
function Cost() {
	const rows = [
		{
			k: "EKS Control Plane",
			v: 73,
			color: "#FF9900"
		},
		{
			k: "Worker Nodes (EC2)",
			v: 412,
			color: "#8C4FFF"
		},
		{
			k: "EBS + PV Storage",
			v: 128,
			color: "#22d3ee"
		},
		{
			k: "Load Balancers",
			v: 62,
			color: "#a78bfa"
		},
		{
			k: "Data Transfer",
			v: 94,
			color: "#34d399"
		},
		{
			k: "RDS Postgres",
			v: 148,
			color: "#336791"
		}
	];
	const total = rows.reduce((s, r) => s + r.v, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
		title: "Cost Optimization — FinOps",
		icon: FaMoneyBillWave,
		right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-emerald-400",
			children: "Karpenter saved $312 this mo."
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: "Monthly estimate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono text-2xl font-semibold text-gradient",
						children: ["$", total.toLocaleString()]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-2 overflow-hidden rounded-full bg-foreground/5",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
						width: `${r.v / total * 100}%`,
						background: r.color
					} }, r.k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-1.5 pt-1 sm:grid-cols-3",
					children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between rounded-md bg-foreground/[0.02] px-2 py-1 text-[11px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 w-2 rounded-sm",
								style: { background: r.color }
							}), r.k]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-muted-foreground",
							children: ["$", r.v]
						})]
					}, r.k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 grid grid-cols-3 gap-1.5 text-center text-[10px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md bg-foreground/[0.02] px-2 py-1",
							children: "Spot 62%"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md bg-foreground/[0.02] px-2 py-1",
							children: "Idle 4 pods"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-md bg-foreground/[0.02] px-2 py-1",
							children: "Rightsizing: 3 hints"
						})
					]
				})
			]
		})
	});
}
var INCIDENTS = [
	"Pod CrashLoopBackOff",
	"OOMKilled — payments",
	"Node NotReady",
	"ImagePullBackOff",
	"Ingress 5xx spike",
	"Falco: Suspicious exec"
];
function IncidentBar({ incident, setIncident }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass flex flex-wrap items-center gap-2 rounded-2xl border border-foreground/10 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 pr-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaFire, {
					className: "text-rose-400",
					"aria-hidden": true
				}), " Chaos Simulator"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-1.5",
				children: INCIDENTS.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						setIncident(i);
						setTimeout(() => setIncident(null), 5500);
					},
					className: "rounded-full border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1 text-[11px] hover:border-rose-400/50 hover:text-rose-300",
					children: i
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "ml-auto flex items-center gap-2 text-xs",
				children: incident ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					className: "flex items-center gap-1.5 rounded-full bg-rose-500/15 px-2 py-1 text-rose-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaBolt, { "aria-hidden": true }),
						" Remediating: ",
						incident
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1.5 text-emerald-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: "healthy" }), " Steady state"]
				})
			})
		]
	});
}
function Drawer({ item, onClose }) {
	const [tab, setTab] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		setTab("overview");
	}, [item]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: onClose
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
		className: "glass fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto border-l border-foreground/10 p-5",
		initial: { x: "100%" },
		animate: { x: 0 },
		exit: { x: "100%" },
		transition: {
			type: "spring",
			damping: 26,
			stiffness: 220
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[10px] uppercase tracking-widest text-muted-foreground",
					children: item.kind === "flow" ? "Traffic Node" : item.kind === "k8s" ? "Kubernetes Resource" : "Security Event"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 text-xl font-semibold",
					children: item.kind === "sec" ? item.data.msg : item.data.label
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "glass rounded-full p-2 hover:bg-foreground/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineX, { "aria-hidden": true })
				})]
			}),
			item.kind === "flow" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-2 gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Role",
						v: item.data.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Status",
						v: item.data.status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Latency",
						v: `${item.data.latency}ms`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Req/s",
						v: item.data.rps.toLocaleString()
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Best practices",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "ml-4 list-disc space-y-1 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Enable request logging & structured tracing (OTel)." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Cap concurrency + apply retries with jitter." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Health checks on `/healthz` and `/readyz`." })
					]
				})
			})] }),
			item.kind === "k8s" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
					tab,
					setTab
				}),
				tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Kind",
							v: item.data.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Namespace",
							v: item.data.ns
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "CPU",
							v: item.data.cpu
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Memory",
							v: item.data.mem
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Age",
							v: item.data.age
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Status",
							v: item.data.status
						}),
						item.data.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Image",
							v: item.data.image
						}),
						item.data.restarts !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							k: "Restarts",
							v: String(item.data.restarts)
						})
					]
				}),
				tab === "yaml" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `apiVersion: apps/v1
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
            limits:   { cpu: 500m, memory: 512Mi }` }),
				tab === "cli" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, { children: `kubectl -n ${item.data.ns} get ${item.data.kind.split(" ")[0].toLowerCase()} ${item.data.label}
kubectl -n ${item.data.ns} describe pod ${item.data.label}
kubectl -n ${item.data.ns} logs -f ${item.data.label} --tail=200
kubectl -n ${item.data.ns} rollout status deploy/${item.data.label}` }),
				tab === "events" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1 text-xs text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Scheduled to ip-10-0-1-42" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ Pulled image ", item.data.image ?? "ecr/app:latest"] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Container started" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ℹ Readiness probe succeeded" })
					]
				})
			] }),
			item.kind === "sec" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 grid grid-cols-2 gap-2 text-xs",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Tool",
						v: item.data.tool
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Severity",
						v: item.data.severity.toUpperCase()
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Pod",
						v: item.data.pod
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: "Namespace",
						v: item.data.ns
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: "Remediation",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: item.data.remediation
				})
			})] })
		]
	})] }) });
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-foreground/[0.03] px-2.5 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[10px] uppercase tracking-widest text-muted-foreground",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 truncate font-mono text-sm",
			children: v
		})]
	});
}
function Section({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground",
			children: title
		}), children]
	});
}
function Code({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "mt-2 overflow-x-auto rounded-lg border border-foreground/10 bg-black/40 p-3 font-mono text-[11px] leading-relaxed text-emerald-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children })
	});
}
function Tabs({ tab, setTab }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-3 flex gap-1 rounded-lg border border-foreground/10 bg-foreground/[0.02] p-1",
		children: [
			{
				id: "overview",
				label: "Overview",
				Icon: HiOutlineChip
			},
			{
				id: "yaml",
				label: "YAML",
				Icon: HiOutlineDocumentText
			},
			{
				id: "cli",
				label: "kubectl",
				Icon: HiOutlineTerminal
			},
			{
				id: "events",
				label: "Events",
				Icon: FaBolt
			}
		].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setTab(t.id),
			className: `flex flex-1 items-center justify-center gap-1 rounded-md px-2 py-1.5 text-xs transition-colors ${tab === t.id ? "bg-foreground/10 text-foreground" : "text-muted-foreground hover:text-foreground"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.Icon, { "aria-hidden": true }),
				" ",
				t.label
			]
		}, t.id))
	});
}
function K8sOpsCenter() {
	const [drawer, setDrawer] = (0, import_react.useState)(null);
	const [incident, setIncident] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "ops-center",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-mono uppercase tracking-widest text-primary",
						children: "Operations Center"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-2 text-3xl font-bold sm:text-4xl md:text-5xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient",
							children: "Interactive Kubernetes"
						}), " Ops Console"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-2xl text-sm text-muted-foreground",
						children: "A live, production-style view of an EKS platform — traffic, resources, security, GitOps, observability, autoscaling and cost — all reacting to real-time events. Click any tile to inspect it."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClusterStats, { incident }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncidentBar, {
						incident,
						setIncident
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrafficFlow, { onPick: (n) => setDrawer({
						kind: "flow",
						data: n
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-[1.35fr_1fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Topology, { onPick: (n) => setDrawer({
							kind: "k8s",
							data: n
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Security, {
							onPickEvent: (e) => setDrawer({
								kind: "sec",
								data: e
							}),
							incident
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitOps, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Observability, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Autoscaling, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cost, {})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
			item: drawer,
			onClose: () => setDrawer(null)
		})]
	});
}
function useCounter(target, duration = 1600) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / duration);
			const eased = 1 - Math.pow(1 - p, 3);
			setVal(target * eased);
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [
		inView,
		target,
		duration
	]);
	return {
		ref,
		value: val
	};
}
function Counter({ target, suffix = "" }) {
	const { ref, value } = useCounter(target);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className: "tabular-nums",
		children: [target % 1 !== 0 ? value.toFixed(1) : Math.floor(value).toLocaleString(), suffix]
	});
}
function Reveal({ children, delay = 0, y = 24 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function MagneticButton({ children, className = "", href, onClick, ariaLabel }) {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 200,
		damping: 15
	});
	const sy = useSpring(y, {
		stiffness: 200,
		damping: 15
	});
	const tx = useTransform(sx, (v) => v);
	const ty = useTransform(sy, (v) => v);
	const handle = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		x.set((e.clientX - r.left - r.width / 2) * .25);
		y.set((e.clientY - r.top - r.height / 2) * .25);
	};
	const reset = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(href ? motion.a : motion.button, {
		ref,
		href,
		onClick,
		"aria-label": ariaLabel,
		onMouseMove: handle,
		onMouseLeave: reset,
		style: {
			x: tx,
			y: ty
		},
		className: `relative inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${className}`,
		children
	});
}
function TypingRoles() {
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [text, setText] = (0, import_react.useState)("");
	const [deleting, setDeleting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const current = ROLES[idx];
		const timeout = setTimeout(() => {
			if (!deleting) {
				const next = current.slice(0, text.length + 1);
				setText(next);
				if (next === current) setTimeout(() => setDeleting(true), 1400);
			} else {
				const next = current.slice(0, text.length - 1);
				setText(next);
				if (next === "") {
					setDeleting(false);
					setIdx((idx + 1) % ROLES.length);
				}
			}
		}, deleting ? 35 : 70);
		return () => clearTimeout(timeout);
	}, [
		text,
		deleting,
		idx
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "text-gradient font-semibold",
		children: [text, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] animate-pulse bg-primary",
			"aria-hidden": true
		})]
	});
}
function TechCloud() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: HERO_TECH.map((t, i) => {
			const angle = i / HERO_TECH.length * Math.PI * 2;
			const radius = 38 + i % 3 * 6;
			const x = 50 + Math.cos(angle) * radius;
			const y = 50 + Math.sin(angle) * radius * .55;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute -translate-x-1/2 -translate-y-1/2",
				style: {
					left: `${x}%`,
					top: `${y}%`
				},
				initial: {
					opacity: 0,
					scale: .6
				},
				animate: {
					opacity: [
						.35,
						.9,
						.35
					],
					y: [
						0,
						-12,
						0
					]
				},
				transition: {
					duration: 6 + i % 5,
					repeat: Infinity,
					delay: i * .2,
					ease: "easeInOut"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12",
					title: t.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.Icon, {
						size: 22,
						style: { color: t.color }
					})
				})
			}, t.name);
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "aurora-bg relative min-h-screen overflow-hidden pt-28 pb-16 sm:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid-bg absolute inset-0",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechCloud, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-container relative px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center lg:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot h-2 w-2 rounded-full bg-emerald-400" }), "Open to new opportunities — Remote · Hybrid · Full-time"]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .08,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
									className: "mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
									children: [
										"Hello, I'm ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gradient",
											children: PROFILE.firstName
										}),
										"."
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .14,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl",
									children: ["I'm a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingRoles, {})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0",
									children: PROFILE.tagline
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .28,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
											href: resume_pdf_asset_default.url,
											className: "bg-foreground text-background hover:bg-foreground/90",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineDownload, {}), " Download Resume"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
											href: "#projects",
											className: "glass text-foreground hover:bg-foreground/10",
											children: ["View Projects ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowRight, {})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticButton, {
											href: "#contact",
											className: "glass text-foreground hover:bg-foreground/10",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMail, {}), " Contact"]
										})
									]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .15,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden lg:block",
							"aria-hidden": true
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "mt-16 flex justify-center",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { delay: 1 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#work-banner",
						className: "group flex flex-col items-center gap-1 text-xs text-muted-foreground",
						children: ["Scroll", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative block h-8 w-5 rounded-full border border-foreground/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								className: "absolute left-1/2 top-1 h-1.5 w-1 -translate-x-1/2 rounded-full bg-foreground",
								animate: {
									y: [
										0,
										14,
										0
									],
									opacity: [
										1,
										0,
										1
									]
								},
								transition: {
									duration: 1.8,
									repeat: Infinity
								}
							})
						})]
					})
				})]
			})
		]
	});
}
function OpenToWork() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work-banner",
		className: "section-shell-tight",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "section-container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass animated-border relative overflow-hidden rounded-2xl p-6 sm:p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-emerald-400",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold uppercase tracking-widest",
								children: "Open to New Opportunities"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-2xl font-bold sm:text-3xl",
							children: "Available immediately · Remote · Hybrid · Full-time · Contract"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"Senior DevOps · DevSecOps · Platform Engineering roles. Based in ",
								PROFILE.location,
								"."
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resume_pdf_asset_default.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineDownload, {}), " Resume"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${PROFILE.email}`,
								className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMail, {}), " Email"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PROFILE.linkedin,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedin, {}), " LinkedIn"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PROFILE.github,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, {}), " GitHub"]
							})
						]
					})]
				})
			}) })
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "About",
				title: "Platform engineer, obsessed with reliability."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-lg leading-relaxed text-muted-foreground",
						children: [
							"I'm an ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "AWS DevOps Engineer"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "DevSecOps Engineer"
							}),
							", and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "Platform Engineer"
							}),
							" with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "6+ years"
							}),
							" of experience designing secure, scalable, and automated cloud-native infrastructure. My work spans ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "AWS Cloud"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "Kubernetes"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "Platform Engineering"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "GitOps"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "CI/CD automation"
							}),
							", ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "Infrastructure as Code"
							}),
							", and ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-highlight",
								tabIndex: 0,
								children: "DevSecOps"
							}),
							", helping organizations accelerate software delivery, improve platform reliability, and operate production environments with confidence."
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: [
								"I've designed and managed production workloads on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "AWS"
								}),
								", built end-to-end ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "CI/CD"
								}),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "GitOps"
								}),
								" pipelines, automated infrastructure provisioning with ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Terraform"
								}),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Ansible"
								}),
								", and deployed cloud-native applications on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Amazon EKS"
								}),
								". My focus is on creating resilient, highly available platforms that simplify operations and enable development teams to deliver software faster and more securely."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: [
								"Security is embedded into every platform I build. I integrate ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "DevSecOps"
								}),
								" practices throughout the software delivery lifecycle by incorporating automated security scanning, policy enforcement, and compliance into CI/CD pipelines. I also implement ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Kubernetes security"
								}),
								" best practices, including ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "RBAC"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "IRSA"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "OIDC"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Network Policies"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Secrets Management"
								}),
								", and runtime security to build secure-by-design platforms."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: [
								"Beyond automation and deployment, I'm passionate about ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Platform Engineering"
								}),
								" and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Observability"
								}),
								". I build reliable, production-ready systems using ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Prometheus"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Grafana"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Amazon CloudWatch"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Datadog"
								}),
								", and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "OpenTelemetry"
								}),
								", enabling proactive monitoring, faster incident response, and improved platform performance."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .4,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg leading-relaxed text-muted-foreground",
							children: [
								"I'm always exploring modern ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "cloud-native technologies"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "Kubernetes best practices"
								}),
								", ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "GitOps workflows"
								}),
								", and ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-highlight",
									tabIndex: 0,
									children: "DevSecOps strategies"
								}),
								" to build platforms that are automated by default, secure by design, and engineered for scale. Most of my work has been on enterprise production systems, and I'm always happy to discuss the architecture, engineering decisions, and challenges behind the platforms I've built."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .05 * i,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass rounded-xl p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xl font-bold text-gradient sm:text-3xl",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										target: s.value,
										suffix: s.suffix
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-xs text-muted-foreground",
									children: s.label
								})]
							})
						}, s.label))
					})
				]
			})]
		})
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Experience",
				title: "Six years shipping cloud-native platforms."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--color-aurora-1)]/50 via-white/10 to-transparent md:left-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-10",
					children: EXPERIENCE.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `relative grid gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pl-10 md:pl-0 md:pr-10 md:text-right",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs font-mono uppercase tracking-widest text-primary",
											children: e.period
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-1 text-xl font-semibold",
											children: e.role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm text-muted-foreground",
											children: e.company
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pl-10 md:pl-10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "glass rounded-xl p-5",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "space-y-2 text-sm text-muted-foreground",
											children: e.bullets.map((b, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineCheckCircle, { className: "mt-0.5 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })]
											}, j))
										})
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(0,0,0,0.5)] md:left-1/2" })
							]
						})
					}, e.company))
				})]
			})]
		})
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Skills",
				title: "An opinionated, production-grade toolbelt."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: SKILLS.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -4 },
						className: "glass group relative h-full overflow-hidden rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[var(--color-aurora-1)]/20 to-[var(--color-aurora-2)]/20 blur-2xl transition-opacity group-hover:opacity-100 opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, {
										size: 20,
										className: "text-primary",
										"aria-hidden": true
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-lg font-semibold",
									children: g.title
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-1.5",
								children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
									children: it
								}, it))
							})
						]
					})
				}, g.title))
			})]
		})
	});
}
function Projects() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const [query, setQuery] = (0, import_react.useState)("");
	const filtered = (0, import_react.useMemo)(() => {
		return PROJECTS.filter((p) => {
			const matchFilter = filter === "All" || p.categories.includes(filter);
			const q = query.toLowerCase().trim();
			const matchQuery = !q || p.title.toLowerCase().includes(q) || p.summary.toLowerCase().includes(q) || p.tech.some((t) => t.toLowerCase().includes(q));
			return matchFilter && matchQuery;
		});
	}, [filter, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Featured Projects",
					title: "Cloud platforms in production."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-1.5",
						children: PROJECT_FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setFilter(f),
							className: `rounded-full px-3 py-1.5 text-xs font-medium transition-all ${filter === f ? "bg-foreground text-background" : "glass text-muted-foreground hover:text-foreground"}`,
							children: f
						}, f))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass flex items-center gap-2 rounded-full px-3 py-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiSearch, { className: "text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search projects…",
							"aria-label": "Search projects",
							className: "w-48 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
							layout: true,
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							exit: {
								opacity: 0,
								y: -10,
								scale: .98
							},
							transition: {
								duration: .4,
								delay: i * .05
							},
							whileHover: { y: -6 },
							className: "glass group relative overflow-hidden rounded-2xl p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[var(--color-aurora-1)]/20 via-[var(--color-aurora-2)]/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap gap-1.5",
										children: p.categories.slice(0, 3).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary",
											children: c
										}, c))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-xl font-semibold leading-tight",
										children: p.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: p.summary
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 space-y-2 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-primary",
												children: "problem"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: p.problem
											})
										] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-primary",
												children: "solution"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: p.solution
											})
										] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 grid grid-cols-2 gap-2",
										children: p.impact.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-2 text-xs",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-gradient font-semibold",
												children: m
											})
										}, m))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-1",
										children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] text-muted-foreground",
											children: t
										}, t))
									})
								]
							})]
						}, p.title))
					})
				}),
				filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center text-sm text-muted-foreground",
					children: "No projects match this filter."
				})
			]
		})
	});
}
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "certifications",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Certifications",
				title: "Credentials & continuous learning."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: CERTIFICATIONS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: {
							y: -6,
							rotateX: 3,
							rotateY: -3
						},
						style: { transformStyle: "preserve-3d" },
						className: "glass group relative overflow-hidden rounded-2xl p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70",
							style: { background: c.accent }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest",
									style: {
										borderColor: `${c.accent}80`,
										color: c.accent
									},
									children: c.tag
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-3 text-lg font-semibold",
									children: c.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-sm text-muted-foreground",
									children: c.issuer
								})
							]
						})]
					})
				}, c.name))
			})]
		})
	});
}
function ResumeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "resume",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-4xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "glass animated-border relative overflow-hidden rounded-3xl p-8 sm:p-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 md:grid-cols-[1fr_auto] md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono uppercase tracking-widest text-primary",
							children: "Resume"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-3xl font-bold sm:text-4xl",
							children: "Grab the full story."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Complete work history, tools, certifications and measurable outcomes — 2 pages, ATS-friendly PDF."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resume_pdf_asset_default.url,
								download: true,
								className: "inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineDownload, {}), " Download"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: resume_pdf_asset_default.url,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm hover:bg-foreground/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineExternalLink, {}), " Preview"]
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center md:justify-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass ring-glow flex h-40 w-32 flex-col items-center justify-center gap-2 rounded-xl p-4 text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineDocumentText, {
									size: 32,
									className: "text-primary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-mono text-muted-foreground",
									children: "RESUME.pdf"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-muted-foreground",
									children: "2 pages"
								})
							]
						})
					})]
				})
			}) })
		})
	});
}
function Contact() {
	const [state, setState] = (0, import_react.useState)("idle");
	const cards = [
		{
			icon: HiOutlineMail,
			label: "Email",
			value: PROFILE.email,
			href: `mailto:${PROFILE.email}`
		},
		{
			icon: FaLinkedin,
			label: "LinkedIn",
			value: "grlokesh96",
			href: PROFILE.linkedin
		},
		{
			icon: FaGithub,
			label: "GitHub",
			value: "grlokesh96",
			href: PROFILE.github
		},
		{
			icon: HiOutlinePhone,
			label: "Phone",
			value: PROFILE.phone,
			href: `tel:${PROFILE.phone.replace(/\s/g, "")}`
		},
		{
			icon: HiOutlineLocationMarker,
			label: "Location",
			value: PROFILE.location,
			href: "https://maps.google.com/?q=Hyderabad"
		},
		{
			icon: HiOutlineDocumentText,
			label: "Resume",
			value: "Download PDF",
			href: resume_pdf_asset_default.url
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "section-shell",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Let's build reliable platforms together."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3",
					children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: c.href,
						target: c.href.startsWith("http") ? "_blank" : void 0,
						rel: "noopener noreferrer",
						className: "glass group flex flex-col gap-2 rounded-xl p-4 transition-transform hover:-translate-y-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
								size: 20,
								className: "text-primary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-widest text-muted-foreground",
								children: c.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-sm font-medium",
								children: c.value
							})
						]
					}, c.label))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setState("sending");
							const fd = new FormData(e.currentTarget);
							const subject = encodeURIComponent(String(fd.get("subject") || "Hello from your portfolio"));
							const body = encodeURIComponent(`${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`);
							window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
							setTimeout(() => setState("sent"), 400);
						},
						className: "glass ring-glow flex flex-col gap-3 rounded-2xl p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "name",
									label: "Name",
									required: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									name: "email",
									label: "Email",
									type: "email",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								name: "subject",
								label: "Subject",
								required: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									rows: 5,
									maxLength: 2e3,
									className: "mt-1 w-full resize-none rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-primary/60"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "submit",
								disabled: state === "sending",
								className: "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 disabled:opacity-60",
								children: [
									state === "sent" ? "Opening your mail app…" : state === "sending" ? "Preparing…" : "Send message",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowRight, {})
								]
							})
						]
					})
				})]
			})]
		})
	});
}
function Field({ name, label, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs uppercase tracking-widest text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			maxLength: 200,
			className: "mt-1 w-full rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-primary/60"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "section-shell-tight relative overflow-hidden border-t border-foreground/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "pointer-events-none absolute inset-x-0 -top-8 w-full opacity-40",
			height: "80",
			viewBox: "0 0 1200 80",
			preserveAspectRatio: "none",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z",
				fill: "url(#wave)"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "wave",
				x1: "0",
				y1: "0",
				x2: "1",
				y2: "0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--color-aurora-1)",
					stopOpacity: "0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--color-aurora-2)",
					stopOpacity: "0.5"
				})]
			}) })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-container relative flex flex-col items-center justify-between gap-4 sm:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-sm text-muted-foreground",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					PROFILE.name,
					". Crafted with care."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PROFILE.github,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "GitHub",
						className: "text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaGithub, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: PROFILE.linkedin,
						target: "_blank",
						rel: "noopener noreferrer",
						"aria-label": "LinkedIn",
						className: "text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaLinkedin, { size: 18 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${PROFILE.email}`,
						"aria-label": "Email",
						className: "text-muted-foreground hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineMail, { size: 20 })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#top",
						className: "glass rounded-full px-3 py-1 text-xs hover:bg-foreground/10",
						children: "Back to top ↑"
					})
				]
			})]
		})]
	});
}
function SectionHeading({ eyebrow, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-start gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "font-mono text-xs uppercase tracking-widest text-primary",
			children: ["/ ", eyebrow]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
			children: title
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenToWork, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pipeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(K8sOpsCenter, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResumeSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };

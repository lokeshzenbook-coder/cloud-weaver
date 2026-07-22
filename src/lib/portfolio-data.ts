import {
  SiKubernetes, SiDocker, SiTerraform, SiLinux, SiGithub,
  SiGit, SiArgo, SiHelm, SiPrometheus, SiGrafana, SiJenkins, SiPython,
  SiAnsible, SiNginx, SiIstio, SiGitlab, SiGithubactions,
  SiPostgresql,
} from "react-icons/si";
import { FaAws, FaShieldAlt, FaCloud } from "react-icons/fa";
import type { IconType } from "react-icons";

export const PROFILE = {
  name: "G. R. Lokesh",
  firstName: "Lokesh",
  title: "Senior DevOps · DevSecOps · Platform Engineer",
  tagline:
    "Designing secure, scalable, automated cloud platforms using AWS, Kubernetes, Terraform, GitOps, and DevSecOps best practices.",
  location: "Hyderabad, India",
  email: "grlokesh96@gmail.com",
  phone: "+91 9100948285",
  linkedin: "https://www.linkedin.com/in/grlokesh96",
  github: "https://github.com/grlokesh96",
  years: "5+",
};

export const ROLES = [
  "AWS Cloud Engineer",
  "Kubernetes Engineer",
  "Infrastructure Automation Engineer",
  "Cloud Native Engineer",
  "GitOps Engineer",
  "Platform Engineer",
  "Site Reliability Engineer",
  "Cloud Security Engineer",
];

export interface TechIcon { name: string; Icon: IconType; color: string }

export const HERO_TECH: TechIcon[] = [
  { name: "AWS", Icon: FaAws, color: "#FF9900" },
  { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
  { name: "Linux", Icon: SiLinux, color: "#EAEAEA" },
  { name: "GitHub", Icon: SiGithub, color: "#f0f6fc" },
  { name: "Git", Icon: SiGit, color: "#F05033" },
  { name: "Argo CD", Icon: SiArgo, color: "#EF7B4D" },
  { name: "Helm", Icon: SiHelm, color: "#0F1689" },
  { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
  { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
  { name: "Jenkins", Icon: SiJenkins, color: "#D33833" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Ansible", Icon: SiAnsible, color: "#EE0000" },
  { name: "NGINX", Icon: SiNginx, color: "#009639" },
  { name: "Istio", Icon: SiIstio, color: "#466BB0" },
  { name: "SonarQube", Icon: FaShieldAlt, color: "#4E9BCD" },
  { name: "GitLab CI", Icon: SiGitlab, color: "#FC6D26" },
];

export const STATS = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Microservices Shipped", value: 45, suffix: "+" },
  { label: "CI/CD Pipelines", value: 30, suffix: "+" },
  { label: "Deployments", value: 2500, suffix: "+" },
  { label: "Cost Reduction", value: 30, suffix: "%" },
  { label: "Uptime", value: 99.9, suffix: "%" },
];

export interface SkillGroup { title: string; icon: IconType; items: string[] }

export const SKILLS: SkillGroup[] = [
  { title: "Cloud", icon: FaCloud, items: ["AWS", "EKS", "EC2", "S3", "IAM", "VPC", "Lambda", "RDS", "Route53", "ALB", "CloudWatch", "Azure"] },
  { title: "Containers", icon: SiDocker, items: ["Docker", "Kubernetes", "EKS", "Helm", "Docker Compose", "Karpenter", "HPA", "Cluster Autoscaler"] },
  { title: "Infrastructure as Code", icon: SiTerraform, items: ["Terraform", "Terraform Modules", "Ansible Playbooks", "Ansible Roles", "Dynamic Inventory"] },
  { title: "CI/CD", icon: SiGithubactions, items: ["GitHub Actions", "GitLab CI", "Jenkins", "Argo CD", "Flux CD", "Blue-Green", "Canary"] },
  { title: "Security · DevSecOps", icon: FaShieldAlt, items: ["SonarQube", "Trivy", "Snyk", "Checkov", "OWASP ZAP", "GitHub Advanced Security", "Vault", "IRSA", "RBAC", "OIDC"] },
  { title: "Observability", icon: SiGrafana, items: ["Prometheus", "Grafana", "Datadog", "CloudWatch", "ELK Stack", "Alertmanager", "Loki"] },
  { title: "Networking · Mesh", icon: SiIstio, items: ["NGINX Ingress", "Istio", "AWS ALB", "Route53", "SSL/TLS", "VPC Peering"] },
  { title: "Automation · Scripting", icon: SiPython, items: ["Python", "Bash", "Shell", "YAML", "Jinja2"] },
  { title: "Databases", icon: SiPostgresql, items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "DynamoDB"] },
];

export interface Experience { role: string; company: string; period: string; bullets: string[] }

export const EXPERIENCE: Experience[] = [
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
      "Full-stack Kubernetes observability with Datadog & Alertmanager — reduced MTTR by 50%.",
    ],
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
      "Automated server config with Ansible Playbooks & Roles — 80% less manual effort.",
    ],
  },
  {
    role: "Cloud Support Associate",
    company: "Progile Infotech, India",
    period: "Apr 2020 — Aug 2021",
    bullets: [
      "Maintained Jenkins CI/CD pipelines across QA/UAT/Prod for reliable daily releases.",
      "Provided L1/L2 support for AWS (EC2, S3, VPC, IAM) with high availability SLAs.",
      "Automated backup & DR with AWS Lambda + EBS Snapshots — 70% less data loss risk.",
      "Cut AWS cloud costs by 30% via right-sizing, Cost Explorer, and auto-shutdown automation.",
    ],
  },
];

export interface Project {
  title: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  tech: string[];
  categories: string[];
}

export const PROJECTS: Project[] = [
  {
    title: "Cloud-Native Trading & Portfolio Platform",
    summary: "Highly available, secure, and scalable CI/CD + EKS platform for a microservices trading application.",
    problem: "Trading platform needed 99.9% uptime, zero-downtime deploys and hardened DevSecOps for 15+ microservices.",
    solution: "Architected GitHub Actions + Argo CD pipelines, Terraform-provisioned EKS/VPC/RDS/ALB, Istio service mesh, and Prometheus/Grafana observability with SonarQube, Trivy, Snyk & Checkov gates.",
    impact: [
      "60% faster releases",
      "60% fewer critical vulns",
      "99.9% uptime under 5× peak load",
      "45% MTTR reduction",
    ],
    tech: ["AWS", "EKS", "GitHub Actions", "Argo CD", "Terraform", "Istio", "Prometheus", "Grafana", "SonarQube", "Trivy"],
    categories: ["AWS", "Kubernetes", "Terraform", "GitOps", "DevSecOps", "Platform Engineering", "CI/CD"],
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
      "65% faster incident detection",
    ],
    tech: ["Jenkins", "Argo CD", "Docker", "Ansible", "Terraform", "EKS", "PostgreSQL", "MongoDB", "Redis", "NGINX"],
    categories: ["Kubernetes", "CI/CD", "GitOps", "Infrastructure as Code", "Monitoring"],
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
      "20% less senior-engineer dependency",
    ],
    tech: ["Jenkins", "Maven", "Docker", "Ansible", "AWS EC2", "Tomcat"],
    categories: ["CI/CD", "AWS", "Platform Engineering"],
  },
  {
    title: "Digital Products & Subscriptions Platform",
    summary: "L1/L2 operational excellence for a multi-cloud digital subscriptions platform.",
    problem: "Multi-cloud (AWS + Azure) subscriptions platform required uptime, DR and cost governance.",
    solution: "Automated backup/DR with Lambda + EBS Snapshots. Enforced IAM least-privilege + MFA. Cost governance via Cost Explorer, right-sizing and auto-shutdown scripts.",
    impact: [
      "~70% less data-loss risk",
      "25–30% monthly cost savings",
      "30% MTTR reduction",
    ],
    tech: ["AWS", "Azure", "Lambda", "IAM", "Jira", "ITIL"],
    categories: ["AWS", "Security", "Monitoring"],
  },
];

export const PROJECT_FILTERS = [
  "All", "AWS", "Kubernetes", "Terraform", "DevSecOps", "Platform Engineering",
  "CI/CD", "GitOps", "Infrastructure as Code", "Monitoring", "Security",
];

export const CERTIFICATIONS = [
  { name: "AWS Certified", issuer: "Amazon Web Services", tag: "Cloud", accent: "#FF9900" },
  { name: "CKA — Kubernetes Administrator", issuer: "CNCF / Linux Foundation", tag: "Kubernetes", accent: "#326CE5" },
  { name: "CKS — Kubernetes Security", issuer: "CNCF / Linux Foundation", tag: "Security", accent: "#22c55e" },
  { name: "Terraform Associate", issuer: "HashiCorp", tag: "IaC", accent: "#7B42BC" },
  { name: "GitHub Actions", issuer: "GitHub", tag: "CI/CD", accent: "#f0f6fc" },
  { name: "AWS Security Specialty", issuer: "Amazon Web Services", tag: "Coming Soon", accent: "#eab308" },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];


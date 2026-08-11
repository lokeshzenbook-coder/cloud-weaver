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
  years: "6+",
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
  { label: "Years of Experience", value: 6, suffix: "+" },
  { label: "Microservices Delivered", value: 70, suffix: "+" },
  { label: "CI/CD Pipelines", value: 40, suffix: "+" },
  { label: "Faster Releases", value: 45, suffix: "%" },
  { label: "Cloud Cost Reduction", value: 30, suffix: "%" },
  { label: "Production Availability", value: 99.9, suffix: "%" },
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
    role: "DevSecOps Engineer",
    company: "ASICS Technologies, India",
    period: "Jul 2024 — Present",
    bullets: [
      "Designed a GitOps platform using GitLab CI/CD, Argo CD, and Amazon EKS for 30+ microservices, reducing release time by 45%.",
      "Implemented DevSecOps security gates across SAST, SCA, IaC, container, and DAST scanning, embedding security throughout the software delivery lifecycle.",
      "Optimized EKS workloads with HPA, KEDA, Cluster Autoscaler, and Karpenter, reducing AWS compute costs by 30%.",
      "Hardened Kubernetes with RBAC, IRSA, Vault, Kyverno, and Istio, enforcing least-privilege access and secure service-to-service communication.",
      "Engineered observability and centralized logging with ELK, Datadog, and Alertmanager, reducing MTTR by 50%.",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Larsen & Toubro (L&T), India",
    period: "Sep 2021 — Jul 2024",
    bullets: [
      "Built and maintained CI/CD pipeline for 40+ microservices using GitHub Actions and Argo CD, improving release velocity.",
      "Integrated SonarQube, Trivy, SAST, dependency, and container scanning into pipelines, strengthening application security.",
      "Containerized application services using Docker multi-stage builds, reducing image sizes by 60% and improving build efficiency.",
      "Provisioned AWS infrastructure across EC2, S3, VPC, and IAM using Terraform, accelerating infrastructure delivery by 80%.",
      "Deployed and operated microservices on Kubernetes, standardizing application delivery with reusable Helm charts across environments.",
    ],
  },
  {
    role: "Cloud Support Associate",
    company: "Progile Infotech, India",
    period: "Apr 2020 — Aug 2021",
    bullets: [
      "Provided L1/L2 support for AWS and Azure production infrastructure, troubleshooting Compute, Networking, Storage, Connectivity, and performance issues. ",
      "Managed AWS IAM, Azure RBAC, MFA, and access controls, enforcing least-privilege security practices.",
      "Managed backup and recovery operations using EBS Snapshots, S3, Azure Backup, and Recovery Services Vault.",
      "Automated cloud operations using AWS Lambda, Azure Automation, Bash, Python, And AWS/Azure CLI, reducing manual operational effort.",
      "Reduced AWS and Azure cloud costs by 30% through right-sizing, usage analysis, and automated resource shutdown.",
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
    summary: "Production-grade DevSecOps and GitOps platform for a scalable microservices-based trading application.",
    problem: "Trading platform required high availability, zero-downtime releases, secure delivery, and scalable Kubernetes operations across 30+ microservices and multiple enviroments.",
    solution: "Built and operated AWS EKS infrastructure using Terraform,\nGitHub Actions, GitLab CI/CD and Argo CD for CI/CD and GitOps delivery. Implemented Docker, Helm, Istio service mesh, and Datadog/Prometheus observability, and integrated Gitleaks, Semgrep, SonarQube, Snyk, Trivy, Checkov, SBOM generation, and Cosign signing into the DevSecOps lifecycle.",
    impact: [
      "45% faster releases",
      "60% fewer critical vulns",
      "99.9% production availability",
      "50% MTTR reduction",
    ],
    tech: ["AWS", "Kubernetes", "GitHub Actions", "Argo CD", "Terraform", "Istio", "Datadog", "Vault", "SonarQube", "Snyk"],
    categories: ["AWS", "Kubernetes", "Terraform", "GitOps", "DevSecOps", "Platform Engineering", "CI/CD"],
  },
  {
    title: "IoT Smart Devices — Real-Time Monitoring",
    summary: "Secure, automated, and scalable DevOps platform for a IoT-connected smart device ecosystem.",
    problem: "Supported 40+ IoT microservices across Dev, QA, and Production, required standardized CI/CD, hardened supply chains and scalable AWS infrastructure for reliable, consistent delivery.",
    solution: "Implemented GitHub Actions + Argo CD workflows with integrated SAST, SCA, IaC, container, and DAST security controls. Developed reusable Terraform modules with S3/DynamoDB remote state. Automated AWS infrastructure provisioning with Ansible dynamic inventory for scalable EKS/ Kubernetes environments.",
    impact: [
      "40+ microservices delivered",
      "60% smaller images",
      "80% faster infra provisioning ",
      "40% faster incident detection",
    ],
    tech: ["AWS", "Grafana", "Helm", "GitHub Actions", "Trivy", "EKS", "Docker", "Ansible", "Terraform"],
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
    summary: "L1/L2 Cloud Operations & Reliability for a multi-cloud AWS + Azure environment.",
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
  { name: "CKA — Kubernetes Administrator", issuer: "CNCF / Linux Foundation", tag: "Kubernetes", accent: "#326CE5" },
  { name: "CKS — Kubernetes Security", issuer: "CNCF / Linux Foundation", tag: "Security", accent: "#22c55e" },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#ops-center", label: "K8s Ops" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];


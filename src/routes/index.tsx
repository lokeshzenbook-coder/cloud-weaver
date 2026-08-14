import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  HiOutlineDownload, HiOutlineMail, HiOutlineArrowRight, HiSearch,
  HiOutlineExternalLink, HiOutlineDocumentText, HiOutlineLocationMarker,
  HiOutlinePhone, HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  PROFILE, ROLES, HERO_TECH, STATS, SKILLS, EXPERIENCE, PROJECTS,
  PROJECT_FILTERS, CERTIFICATIONS,
} from "@/lib/portfolio-data";

import { Nav } from "@/components/portfolio/Nav";

import { Pipeline } from "@/components/portfolio/Pipeline";
import { K8sOpsCenter } from "@/components/portfolio/K8sOpsCenter";

import { Counter, Reveal, MagneticButton } from "@/components/portfolio/ui";
import {
  RESUME_DOWNLOAD_BASELINE,
  RESUME_DOWNLOAD_COUNT_KEY,
  RESUME_FILE_SIZE_BYTES,
  RESUME_FILE_URL,
  RESUME_FILENAME,
  RESUME_TITLE,
  RESUME_UPDATED_ISO,
  RESUME_UPDATED_LABEL,
  RESUME_VERSION,
  RESUME_VIEWER_URL,
  formatFileSize,
} from "@/lib/resume";



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "G. R. Lokesh — Senior DevOps, DevSecOps & Platform Engineer" },
      {
        name: "description",
        content:
          "AWS · Kubernetes · Terraform · GitOps · DevSecOps. Cloud-native platform engineer with 5+ years shipping secure, scalable infrastructure.",
      },
      { property: "og:title", content: "G. R. Lokesh — Senior DevOps, DevSecOps & Platform Engineer" },
      {
        property: "og:description",
        content: "AWS · Kubernetes · Terraform · GitOps · DevSecOps. Cloud-native platform engineer with 5+ years shipping secure, scalable infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "G. R. Lokesh — Senior DevOps, DevSecOps & Platform Engineer" },
      {
        name: "twitter:description",
        content: "AWS · Kubernetes · Terraform · GitOps · DevSecOps. Cloud-native platform engineer with 5+ years shipping secure, scalable infrastructure.",
      },
    ],
  }),
  component: Home,
});

/* ---------------- Typing effect ---------------- */
function TypingRoles() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const speed = deleting ? 35 : 70;
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
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, idx]);

  return (
    <span className="text-gradient font-semibold">
      {text}
      <span className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[3px] animate-pulse bg-primary" aria-hidden />
    </span>
  );
}

/* ---------------- Floating tech icons cloud ---------------- */
function TechCloud() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden sm:block" aria-hidden>
      {HERO_TECH.map((t, i) => {
        const total = HERO_TECH.length;
        const angle = (i / total) * Math.PI * 2;
        const radius = 38 + (i % 3) * 6;
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius * 0.55;
        return (
          <motion.div
            key={t.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: [0.35, 0.9, 0.35],
              y: [0, -12, 0],
            }}
            transition={{ duration: 6 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          >
            <div
              className="glass flex h-11 w-11 items-center justify-center rounded-xl sm:h-12 sm:w-12"
              title={t.name}
            >
              <t.Icon size={22} style={{ color: t.color }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="aurora-bg relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <TechCloud />
      <div className="section-container relative px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="text-center lg:text-left">
            <Reveal delay={0.08}>
              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Hello, I'm <span className="text-gradient">{PROFILE.firstName}</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl">
                I'm a <TypingRoles />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
                {PROFILE.tagline}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <MagneticButton
                  href={RESUME_FILE_URL}
                  className="bg-foreground text-background hover:bg-foreground/90"
                >
                  <HiOutlineDownload /> Download Resume
                </MagneticButton>
                <MagneticButton href="#projects" className="glass text-foreground hover:bg-foreground/10">
                  View Projects <HiOutlineArrowRight />
                </MagneticButton>
                <MagneticButton href="#contact" className="glass text-foreground hover:bg-foreground/10">
                  <HiOutlineMail /> Contact
                </MagneticButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="hidden lg:block" aria-hidden />
          </Reveal>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#work-banner" className="group flex flex-col items-center gap-1 text-xs text-muted-foreground">
            Scroll
            <span className="relative block h-8 w-5 rounded-full border border-foreground/20">
              <motion.span
                className="absolute left-1/2 top-1 h-1.5 w-1 -translate-x-1/2 rounded-full bg-foreground"
                animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Open to work banner ---------------- */
function OpenToWork() {
  return (
    <section id="work-banner" className="section-shell-tight">
      <div className="section-container">
        <Reveal>
          <div className="glass animated-border relative overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-semibold uppercase tracking-widest">Open to New Opportunities</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Available immediately · Remote · Hybrid · Full-time · Contract</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Senior DevOps · DevSecOps · Platform Engineering Hyderabad, India&nbsp;&nbsp;· Open to Remote Global Opportunities
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <a href={RESUME_VIEWER_URL} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10">
                  <HiOutlineDownload /> Resume
                </a>
                <a href={`mailto:${PROFILE.email}`} className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10">
                  <HiOutlineMail /> Email
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm hover:bg-foreground/10">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- About / Stats ---------------- */
function About() {
  return (
    <section id="about" className="section-shell">
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="About" title="Platform engineer, obsessed with reliability." />
        </Reveal>

        <div className="mt-10 space-y-6">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm an <span className="text-highlight">AWS DevOps Engineer</span>, <span className="text-highlight">DevSecOps Engineer</span>, and <span className="text-highlight">Platform Engineer</span> with <span className="text-highlight">6+ years</span> of experience designing secure, scalable, and automated cloud-native infrastructure. My work spans <span className="text-highlight">AWS Cloud</span>, <span className="text-highlight">Kubernetes</span>, <span className="text-highlight">Platform Engineering</span>, <span className="text-highlight">GitOps</span>, <span className="text-highlight">CI/CD automation</span>, <span className="text-highlight">Infrastructure as Code</span>, and <span className="text-highlight">DevSecOps</span>, helping organizations accelerate software delivery, improve platform reliability, and operate production environments with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I've designed and managed production workloads on <span className="text-highlight">AWS</span>, built end-to-end <span className="text-highlight">CI/CD</span> and <span className="text-highlight">GitOps</span> pipelines, automated infrastructure provisioning with <span className="text-highlight">Terraform</span> and <span className="text-highlight">Ansible</span>, and deployed cloud-native applications on <span className="text-highlight">Amazon EKS</span>. My focus is on creating resilient, highly available platforms that simplify operations and enable development teams to deliver software faster and more securely.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Security is embedded into every platform I build. I integrate <span className="text-highlight">DevSecOps</span> practices throughout the software delivery lifecycle by incorporating automated security scanning, policy enforcement, and compliance into CI/CD pipelines. I also implement <span className="text-highlight">Kubernetes security</span> best practices, including <span className="text-highlight">RBAC</span>, <span className="text-highlight">IRSA</span>, <span className="text-highlight">OIDC</span>, <span className="text-highlight">Network Policies</span>, <span className="text-highlight">Secrets Management</span>, and runtime security to build secure-by-design platforms.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond automation and deployment, I'm passionate about <span className="text-highlight">Platform Engineering</span> and <span className="text-highlight">Observability</span>. I build reliable, production-ready systems using <span className="text-highlight">Prometheus</span>, <span className="text-highlight">Grafana</span>, <span className="text-highlight">Amazon CloudWatch</span>, <span className="text-highlight">Datadog</span>, and <span className="text-highlight">OpenTelemetry</span>, enabling proactive monitoring, faster incident response, and improved platform performance.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm always exploring modern <span className="text-highlight">cloud-native technologies</span>, <span className="text-highlight">Kubernetes best practices</span>, <span className="text-highlight">GitOps workflows</span>, and <span className="text-highlight">DevSecOps strategies</span> to build platforms that are automated by default, secure by design, and engineered for scale. Most of my work has been on enterprise production systems, and I'm always happy to discuss the architecture, engineering decisions, and challenges behind the platforms I've built.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.05 * i}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
                  className="glass rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-bold text-metric sm:text-4xl">
                    <Counter target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-xs font-medium text-muted-foreground">{s.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience timeline ---------------- */
function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="6+ years engineering cloud-native platforms, DevSecOps automation, and scalable Kubernetes infrastructure." />
        </Reveal>
        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[var(--color-aurora-1)]/50 via-white/10 to-transparent md:left-1/2" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.company} delay={i * 0.05}>
                <div className={`relative grid gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="pl-10 md:pl-0 md:pr-10 md:text-right">
                    <div className="text-xs font-mono uppercase tracking-widest text-primary">{e.period}</div>
                    <h3 className="mt-1 text-xl font-semibold">{e.role}</h3>
                    <div className="text-sm text-muted-foreground">{e.company}</div>
                  </div>
                  <div className="pl-10 md:pl-10">
                    <div className="glass rounded-xl p-5">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {e.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2">
                            <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-primary" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <span className="absolute left-4 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(0,0,0,0.5)] md:left-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Skills ---------------- */
function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="Skills" title="An opinionated, production-grade engineering toolkit." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -4 }}
                tabIndex={0}
                role="article"
                aria-label={`${g.title} skills category`}
                className="skill-card group relative h-full overflow-hidden rounded-2xl p-6 cursor-default"
              >
                <div className="skill-card-glow absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--color-aurora-1)]/30 via-[var(--color-aurora-2)]/20 to-[var(--color-aurora-3)]/10 blur-3xl opacity-40 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100" />
                <div className="skill-card-border absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-aurora-1)]/60 via-[var(--color-aurora-2)]/40 to-[var(--color-aurora-3)]/60 p-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="relative flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-aurora-1)]/20 to-[var(--color-aurora-2)]/20 ring-1 ring-inset ring-white/10">
                      <g.icon size={20} className="text-primary" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold">{g.title}</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {g.items.map(it => (
                      <span key={it} className="rounded-full border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Projects ---------------- */
function Projects() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchFilter = filter === "All" || p.categories.includes(filter);
      const q = query.toLowerCase().trim();
      const matchQuery = !q || p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tech.some(t => t.toLowerCase().includes(q));
      return matchFilter && matchQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="section-shell">
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="Featured Projects" title={"Production-grade cloud platforms, engineered to scale.\u00A0\n"} />
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {PROJECT_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                  filter === f ? "bg-foreground text-background" : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="glass flex items-center gap-2 rounded-full px-3 py-1.5">
            <HiSearch className="text-muted-foreground" />
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects"
              className="w-48 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[var(--color-aurora-1)]/20 via-[var(--color-aurora-2)]/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex flex-wrap gap-1.5">
                    {p.categories.slice(0, 3).map(c => (
                      <span key={c} className="rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-primary">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-xl font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>

                  <div className="mt-4 space-y-2 text-xs">
                    <div><span className="font-mono text-primary uppercase tracking-tighter">CHALLENGE</span> <span className="text-muted-foreground">{p.problem}</span></div>
                    <div><span className="font-mono text-primary uppercase tracking-tighter">Solution</span> <span className="text-muted-foreground">{p.solution}</span></div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {p.impact.map(m => (
                      <div key={m} className="rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-2 text-xs">
                        <span className="text-gradient font-semibold">{m}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1">
                    {p.tech.map(t => (
                      <span key={t} className="rounded-md bg-foreground/5 px-2 py-0.5 text-[10px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-8 text-center text-sm text-muted-foreground">No projects match this filter.</div>
        )}
      </div>
    </section>
  );
}

/* ---------------- Certifications ---------------- */
function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Credentials & continuous learning." />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass group relative overflow-hidden rounded-2xl p-6"
              >
                <div
                  className="absolute -top-10 -right-10 h-32 w-32 rounded-full blur-3xl opacity-40 transition-opacity group-hover:opacity-70"
                  style={{ background: c.accent }}
                />
                <div className="relative">
                  <span
                    className="inline-block rounded-full border px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest"
                    style={{ borderColor: `${c.accent}80`, color: c.accent }}
                  >
                    {c.tag}
                  </span>
                  <div className="mt-3 text-lg font-semibold">{c.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{c.issuer}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Resume section ---------------- */
function useResumeDownloadCount() {
  const [count, setCount] = useState<number>(RESUME_DOWNLOAD_BASELINE);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(RESUME_DOWNLOAD_COUNT_KEY);
      const parsed = raw ? Number.parseInt(raw, 10) : NaN;
      if (Number.isFinite(parsed) && parsed >= RESUME_DOWNLOAD_BASELINE) {
        setCount(parsed);
      }
    } catch {
      /* localStorage unavailable — keep baseline */
    }
  }, []);

  const increment = () => {
    setCount((prev) => {
      const next = prev + 1;
      try {
        window.localStorage.setItem(RESUME_DOWNLOAD_COUNT_KEY, String(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return { count, increment };
}

function ResumeSection() {
  const { count, increment } = useResumeDownloadCount();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setDownloaded(false);
    try {
      const a = document.createElement("a");
      a.href = RESUME_FILE_URL;
      a.download = RESUME_FILENAME;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      increment();
      setDownloaded(true);
    } finally {
      window.setTimeout(() => setDownloading(false), 900);
      window.setTimeout(() => setDownloaded(false), 2600);
    }
  };

  const formattedCount = count.toLocaleString();
  const sizeLabel = formatFileSize(RESUME_FILE_SIZE_BYTES);

  return (
    <section id="resume" className="section-shell" aria-labelledby="resume-heading">
      <div className="section-container">
        <Reveal>
          <div className="mb-8 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Resume</span>
            <h2 id="resume-heading" className="mt-2 text-3xl font-bold sm:text-4xl">Latest resume, always live.</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              {RESUME_TITLE}. Complete work history, tools, certifications and measurable outcomes — ATS-friendly PDF.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="glass animated-border relative mx-auto max-w-4xl overflow-hidden rounded-3xl p-6 sm:p-10"
          >
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
              {/* PDF icon tile */}
              <div className="flex justify-center md:justify-start">
                <div className="ring-glow relative flex h-40 w-32 flex-col items-center justify-center gap-2 rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-4 text-center">
                  <HiOutlineDocumentText size={40} className="text-primary drop-shadow" aria-hidden />
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">PDF</div>
                  <span className="absolute -top-2 -right-2 rounded-full border border-primary/40 bg-background/90 px-2 py-0.5 text-[10px] font-semibold text-primary shadow-sm">
                    v{RESUME_VERSION}
                  </span>
                </div>
              </div>

              {/* Metadata + actions */}
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Latest Resume</h3>
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
                    Version {RESUME_VERSION}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{RESUME_TITLE}</p>

                <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Updated</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">
                      <time dateTime={RESUME_UPDATED_ISO}>{RESUME_UPDATED_LABEL}</time>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">File size</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{sizeLabel}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">Downloads</dt>
                    <dd className="mt-1 text-sm font-medium text-foreground" aria-live="polite">
                      {formattedCount}
                    </dd>
                  </div>
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={RESUME_VIEWER_URL}
                    className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:bg-foreground/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="Preview resume in embedded PDF viewer"
                  >
                    <HiOutlineExternalLink aria-hidden /> Preview Resume
                  </a>
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={downloading}
                    aria-label={`Download resume PDF, ${sizeLabel}`}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-foreground/90 disabled:cursor-wait disabled:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {downloading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-background/40 border-t-background" aria-hidden />
                        Preparing…
                      </>
                    ) : downloaded ? (
                      <>
                        <HiOutlineCheckCircle aria-hidden /> Downloaded
                      </>
                    ) : (
                      <>
                        <HiOutlineDownload aria-hidden /> Download Resume
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const cards = [
    { icon: HiOutlineMail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: FaLinkedin, label: "LinkedIn", value: "grlokesh96", href: PROFILE.linkedin },
    { icon: FaGithub, label: "GitHub", value: "grlokesh96", href: PROFILE.github },
    { icon: HiOutlinePhone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: HiOutlineLocationMarker, label: "Location", value: PROFILE.location, href: "https://maps.google.com/?q=Hyderabad" },
    { icon: HiOutlineDocumentText, label: "Resume", value: "View PDF", href: RESUME_VIEWER_URL },
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="section-container">
        <Reveal>
          <SectionHeading eyebrow="Contact" title="Let's build reliable platforms together." />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-2 gap-3">
            {cards.map(c => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass group flex flex-col gap-2 rounded-xl p-4 transition-transform hover:-translate-y-1"
              >
                <c.icon size={20} className="text-primary" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </a>
            ))}
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={e => {
                e.preventDefault();
                setState("sending");
                const fd = new FormData(e.currentTarget);
                const subject = encodeURIComponent(String(fd.get("subject") || "Hello from your portfolio"));
                const body = encodeURIComponent(
                  `${fd.get("message")}\n\n— ${fd.get("name")} (${fd.get("email")})`
                );
                window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
                setTimeout(() => setState("sent"), 400);
              }}
              className="glass ring-glow flex flex-col gap-3 rounded-2xl p-6"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <Field name="name" label="Name" required />
                <Field name="email" label="Email" type="email" required />
              </div>
              <Field name="subject" label="Subject" required />
              <label className="text-sm">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  maxLength={2000}
                  className="mt-1 w-full resize-none rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-primary/60"
                />
              </label>
              <button
                type="submit"
                disabled={state === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90 disabled:opacity-60"
              >
                {state === "sent" ? "Opening your mail app…" : state === "sending" ? "Preparing…" : "Send message"} <HiOutlineArrowRight />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="text-sm">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-1 w-full rounded-lg border border-foreground/10 bg-foreground/5 px-3 py-2 text-sm outline-none focus:border-primary/60"
      />
    </label>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="section-shell-tight relative overflow-hidden border-t border-foreground/5">
      <svg className="pointer-events-none absolute inset-x-0 -top-8 w-full opacity-40" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" aria-hidden>
        <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="url(#wave)" />
        <defs>
          <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-aurora-1)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-aurora-2)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      <div className="section-container relative flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Crafted with care.
        </div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-foreground"><FaGithub size={18} /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground"><FaLinkedin size={18} /></a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="text-muted-foreground hover:text-foreground"><HiOutlineMail size={20} /></a>
          <a href="#top" className="glass rounded-full px-3 py-1 text-xs hover:bg-foreground/10">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <span className="font-mono text-xs uppercase tracking-widest text-primary">/ {eyebrow}</span>
      <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gradient">
        {title}
      </h2>
    </div>
  );
}

function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <OpenToWork />
      <About />
      <Experience />
      <Skills />
      <Pipeline />
      <K8sOpsCenter />
      
      
      <Projects />

      <Certifications />
      <ResumeSection />
      <Contact />
      <Footer />
    </main>
  );
}


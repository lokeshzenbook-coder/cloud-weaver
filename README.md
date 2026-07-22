# G. R. Lokesh — Senior DevOps & Platform Engineer Portfolio

A production-grade, premium dark-themed personal portfolio built for **G. R. Lokesh**, a Senior DevOps, DevSecOps, and Platform Engineer.

The site showcases deep expertise in cloud infrastructure, Kubernetes, CI/CD, GitOps, DevSecOps, and platform engineering through a modern, interactive SaaS-style experience.

## Live Demo

- **Lovable Preview:** [https://id-preview--c4804927-ff08-4a26-b05a-3c0dca8ac612.lovable.app](https://id-preview--c4804927-ff08-4a26-b05a-3c0dca8ac612.lovable.app)

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19 full-stack framework)
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 4 (OKLCH color tokens, custom utilities, glassmorphism)
- **UI Components:** shadcn/ui + Radix UI primitives
- **Animations:** Framer Motion
- **Icons:** React Icons + Lucide React
- **Build Tool:** Vite 8
- **Package Manager:** `npm` (or `bun`)

## Project Structure

```text
src/
├── components/portfolio/    # Portfolio-specific components (Hero, K8s viz, UI, Nav)
├── lib/                     # Portfolio data, utilities, error handling
├── routes/                  # TanStack Start file-based routes
│   ├── __root.tsx           # Root layout + SEO metadata
│   ├── index.tsx            # Main portfolio page
│   └── api/                 # Server/API routes (if any)
├── styles.css               # Global theme, design tokens, custom utilities
├── router.tsx               # TanStack Router setup
├── start.ts                 # Server start configuration
└── server.ts                # SSR error wrapper
```

## Prerequisites

- **Node.js** `>= 20` ([install via nvm](https://github.com/nvm-sh/nvm))
- **npm** `>= 10` (comes with Node.js)
- *(Optional)* **Bun** `>= 1.2` for faster installs

## Installation

Clone the repository and install dependencies:

```bash
git clone <your-github-repository-url>
cd <repository-name>

# Using npm
npm install

# Or using bun
bun install
```

## Development

Start the local development server:

```bash
# Using npm
npm run dev

# Or using bun
bun run dev
```

The app will be available at `http://localhost:8080` by default.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Build the production client, SSR, and Nitro server bundles |
| `npm run build:dev` | Build in development mode (useful for debugging) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |
| `npm run format` | Format all files with Prettier |

## Build Instructions

To create a production-ready build:

```bash
npm run build
```

This generates:

- Client bundle (static assets)
- SSR bundle
- Nitro server bundle for edge deployment

Verify the build completes with no errors before pushing to GitHub or deploying.

Preview the production build locally:

```bash
npm run build
npm run preview
```

## Syncing with GitHub

This project is built with [Lovable](https://lovable.dev). To sync with GitHub:

1. Open the project in the Lovable editor.
2. Click the **Plus (+)** menu in the chat input (bottom left).
3. Select **GitHub → Connect project**.
4. Authorize the Lovable GitHub App.
5. Choose your GitHub account/org and create the repository.

Once connected, Lovable will automatically push every change to GitHub and keep both sides in sync.

## Features

- **Hero Section:** Animated role typing, floating tech icons, and premium dark SaaS aesthetic.
- **Interactive Kubernetes Visualization:** SVG-based cluster diagram showing pods, traffic flow, and node health.
- **Open to Work Banner:** Quick-action buttons for recruiters and collaborators.
- **About, Experience, Skills, Projects & Certifications:** Structured content driven by resume data.
- **Resume Preview:** Embedded resume accessible from the portfolio.
- **Contact Form:** Direct email integration for outreach.

## Author

**G. R. Lokesh** — Senior DevOps, DevSecOps, and Platform Engineer

Built and deployed with [Lovable](https://lovable.dev).

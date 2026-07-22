import { createFileRoute } from "@tanstack/react-router";
import { HiArrowLeft, HiDownload, HiExternalLink } from "react-icons/hi";
import { ResumeViewer } from "@/components/portfolio/ResumeViewer";
import { RESUME_FILENAME, RESUME_FILE_URL, RESUME_VIEWER_URL } from "@/lib/resume";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — G. R. Lokesh DevOps Portfolio" },
      {
        name: "description",
        content: "View and download the DevOps, DevSecOps, and Platform Engineering resume for G. R. Lokesh.",
      },
      { property: "og:title", content: "Resume — G. R. Lokesh DevOps Portfolio" },
      {
        property: "og:description",
        content: "View and download the DevOps, DevSecOps, and Platform Engineering resume for G. R. Lokesh.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Resume — G. R. Lokesh DevOps Portfolio" },
      {
        name: "twitter:description",
        content: "View and download the DevOps, DevSecOps, and Platform Engineering resume for G. R. Lokesh.",
      },
    ],
  }),
  component: ResumePage,
});

function downloadResume() {
  const anchor = document.createElement("a");
  anchor.href = RESUME_FILE_URL;
  anchor.download = RESUME_FILENAME;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
}

function ResumePage() {
  return (
    <main className="aurora-bg min-h-screen px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background/95 shadow-2xl backdrop-blur">
        <header className="flex flex-col gap-4 border-b border-foreground/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <a href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <HiArrowLeft aria-hidden /> Back to portfolio
            </a>
            <h1 className="mt-2 text-2xl font-semibold text-foreground">Resume</h1>
            <p className="mt-1 text-sm text-muted-foreground">Production-ready PDF viewer with download fallback.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={RESUME_FILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/5"
            >
              <HiExternalLink aria-hidden /> Open PDF
            </a>
            <button
              type="button"
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
            >
              <HiDownload aria-hidden /> Download
            </button>
          </div>
        </header>

        <ResumeViewer
          fileUrl={RESUME_FILE_URL}
          openUrl={RESUME_VIEWER_URL}
          downloadFilename={RESUME_FILENAME}
          onDownload={downloadResume}
          className="min-h-[70vh] flex-1 sm:min-h-[760px]"
        />
      </div>
    </main>
  );
}

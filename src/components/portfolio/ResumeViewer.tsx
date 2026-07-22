import { useEffect, useMemo, useRef, useState, type ComponentType } from "react";
import { HiDownload, HiExclamationCircle, HiExternalLink, HiRefresh } from "react-icons/hi";

type PdfComponents = {
  Document: ComponentType<any>;
  Page: ComponentType<any>;
};

type ViewerStatus = "checking" | "loading" | "ready" | "error";

type ResumeViewerProps = {
  fileUrl: string;
  openUrl: string;
  downloadFilename: string;
  onDownload: () => void;
  className?: string;
};

async function assertPdfIsAvailable(fileUrl: string, signal: AbortSignal) {
  const response = await fetch(fileUrl, { cache: "no-store", signal });

  if (response.status === 404) {
    throw new Error("The resume PDF could not be found. Please try again shortly.");
  }

  if (!response.ok) {
    throw new Error(`The resume PDF could not be loaded (${response.status}).`);
  }

  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/pdf")) {
    throw new Error("The resume is not being served with the application/pdf MIME type.");
  }

  const bytes = await response.arrayBuffer();
  const signature = new TextDecoder().decode(new Uint8Array(bytes.slice(0, 5)));
  if (!signature.startsWith("%PDF-")) {
    throw new Error("The resume PDF appears to be invalid or corrupted.");
  }
}

function LoadingState({ label }: { label: string }) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center gap-3 text-center text-muted-foreground sm:min-h-[520px]">
      <span className="h-9 w-9 animate-spin rounded-full border-2 border-foreground/15 border-t-primary" aria-hidden />
      <p className="text-sm">{label}</p>
    </div>
  );
}

function FallbackState({
  message,
  openUrl,
  onDownload,
  onRetry,
}: {
  message: string;
  openUrl: string;
  onDownload: () => void;
  onRetry: () => void;
}) {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center gap-5 p-6 text-center sm:min-h-[520px]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
        <HiExclamationCircle size={28} aria-hidden />
      </div>
      <div className="max-w-md">
        <h2 className="text-xl font-semibold text-foreground">Resume preview is unavailable</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{message}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm font-medium text-foreground hover:bg-foreground/5"
        >
          <HiExternalLink aria-hidden /> Open Resume in New Tab
        </a>
        <button
          type="button"
          onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
        >
          <HiDownload aria-hidden /> Download Resume
        </button>
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10"
        >
          <HiRefresh aria-hidden /> Retry
        </button>
      </div>
    </div>
  );
}

export function ResumeViewer({ fileUrl, openUrl, onDownload, className = "" }: ResumeViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [components, setComponents] = useState<PdfComponents | null>(null);
  const [status, setStatus] = useState<ViewerStatus>("checking");
  const [error, setError] = useState("");
  const [numPages, setNumPages] = useState(0);
  const [retryKey, setRetryKey] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => setContainerWidth(element.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 10000);

    async function loadViewer() {
      setStatus("checking");
      setError("");
      setNumPages(0);

      try {
        const [pdfModule] = await Promise.all([
          import("react-pdf"),
          import("react-pdf/dist/Page/AnnotationLayer.css"),
          import("react-pdf/dist/Page/TextLayer.css"),
          assertPdfIsAvailable(fileUrl, controller.signal),
        ]);

        pdfModule.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
          "pdfjs-dist/build/pdf.worker.min.mjs",
          import.meta.url,
        ).toString();

        if (!active) return;
        setComponents({ Document: pdfModule.Document, Page: pdfModule.Page });
        setStatus("loading");
      } catch (err) {
        if (!active) return;
        const message = err instanceof Error && err.name === "AbortError"
          ? "The resume request timed out. Please check your connection and try again."
          : err instanceof Error
            ? err.message
            : "This browser cannot render the resume inline.";
        setError(message);
        setStatus("error");
      } finally {
        window.clearTimeout(timeout);
      }
    }

    loadViewer();

    return () => {
      active = false;
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, [fileUrl, retryKey]);

  const pageWidth = useMemo(() => {
    const available = containerWidth ? containerWidth - 32 : 760;
    return Math.max(280, Math.min(available, 900));
  }, [containerWidth]);

  const retry = () => setRetryKey(key => key + 1);
  const Document = components?.Document;
  const Page = components?.Page;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-y-auto bg-foreground/5 ${className}`}
      aria-label="Resume PDF viewer"
    >
      {(status === "checking" || status === "loading") && (
        <LoadingState label={status === "checking" ? "Checking resume file…" : "Rendering resume preview…"} />
      )}

      {status === "error" && (
        <FallbackState
          message={error || "Your browser does not support this embedded PDF viewer."}
          openUrl={openUrl}
          onDownload={onDownload}
          onRetry={retry}
        />
      )}

      {Document && Page && status !== "error" && (
        <Document
          file={fileUrl}
          loading={null}
          error={null}
          onLoadSuccess={({ numPages: pages }: { numPages: number }) => {
            setNumPages(pages);
            setStatus("ready");
          }}
          onLoadError={(err: Error) => {
            setError(err.message || "The resume PDF could not be rendered in this browser.");
            setStatus("error");
          }}
          className={status === "ready" ? "mx-auto flex w-full flex-col items-center gap-4 p-3 sm:gap-6 sm:p-6" : "sr-only"}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`resume-page-${index + 1}`}
              pageNumber={index + 1}
              width={pageWidth}
              renderAnnotationLayer
              renderTextLayer
              loading={<LoadingState label={`Rendering page ${index + 1}…`} />}
              className="overflow-hidden rounded-lg border border-foreground/10 bg-background shadow-2xl"
            />
          ))}
        </Document>
      )}
    </div>
  );
}

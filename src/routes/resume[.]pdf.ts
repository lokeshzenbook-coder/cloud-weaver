import { createFileRoute } from "@tanstack/react-router";
import { RESUME_FILENAME, RESUME_SOURCE_URL } from "@/lib/resume";

const pdfHeaders = (contentLength?: number) => {
  const headers = new Headers({
    "Content-Type": "application/pdf",
    "Content-Disposition": `inline; filename="${RESUME_FILENAME}"`,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
  });

  if (contentLength) {
    headers.set("Content-Length", String(contentLength));
  }

  return headers;
};

async function loadResumePdf(request: Request) {
  const sourceUrl = new URL(RESUME_SOURCE_URL, request.url);
  const upstream = await fetch(sourceUrl, { cache: "no-store" });

  if (upstream.status === 404) {
    return new Response("Resume PDF not found", { status: 404 });
  }

  if (!upstream.ok) {
    return new Response("Unable to load resume PDF", { status: 502 });
  }

  const contentType = upstream.headers.get("content-type")?.toLowerCase() ?? "";
  const bytes = await upstream.arrayBuffer();
  const signature = new TextDecoder().decode(new Uint8Array(bytes.slice(0, 5)));

  if (!contentType.includes("application/pdf") || !signature.startsWith("%PDF-")) {
    return new Response("Invalid resume PDF", { status: 422 });
  }

  return new Response(bytes, {
    status: 200,
    headers: pdfHeaders(bytes.byteLength),
  });
}

export const Route = createFileRoute("/resume.pdf")({
  server: {
    handlers: {
      GET: async ({ request }) => loadResumePdf(request),
      HEAD: async () => new Response(null, { status: 200, headers: pdfHeaders() }),
    },
  },
});

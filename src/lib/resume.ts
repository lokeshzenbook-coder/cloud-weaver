import resumeAsset from "@/assets/resume.pdf.asset.json";

// Serve the PDF as a plain static file from `public/`. The Lovable CDN path
// (`/__l5e/assets-v1/...`) only exists on Lovable's own hosting, so deployments
// to Netlify / Vercel / Cloudflare Pages / etc. 404 on it. The file in
// `public/` ships with the build output and is served directly by any host.
export const RESUME_ORIGINAL_FILENAME = resumeAsset.original_filename;
export const RESUME_SOURCE_URL = `/${RESUME_ORIGINAL_FILENAME}`;
export const RESUME_FILE_URL = `/${RESUME_ORIGINAL_FILENAME}`;
export const RESUME_VIEWER_URL = "/resume";
export const RESUME_FILENAME = "G_R_Lokesh_DevOps_Resume.pdf";

/** Human-readable resume metadata shown on the public Resume card. */
export const RESUME_VERSION = "2.3";
export const RESUME_UPDATED_LABEL = "July 2026";
export const RESUME_UPDATED_ISO = "2026-07-25";
export const RESUME_FILE_SIZE_BYTES = resumeAsset.size;
export const RESUME_TITLE = "AWS DevOps · DevSecOps · Platform Engineer";

/** localStorage key for the client-side download counter. */
export const RESUME_DOWNLOAD_COUNT_KEY = "resume:download-count:v1";
/** Baseline shown to visitors so a fresh browser doesn't read "0 downloads". */
export const RESUME_DOWNLOAD_BASELINE = 606;

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

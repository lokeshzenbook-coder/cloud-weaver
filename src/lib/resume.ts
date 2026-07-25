import resumeAsset from "@/assets/resume.pdf.asset.json";

export const RESUME_SOURCE_URL = resumeAsset.url;
// Serve the PDF directly from the Lovable CDN in every environment. The
// previous `/resume.pdf` server-route proxy failed in production because the
// deployed serverless function cannot reliably self-loopback to `/__l5e/*`.
export const RESUME_FILE_URL = resumeAsset.url;
export const RESUME_VIEWER_URL = "/resume";
export const RESUME_FILENAME = "G_R_Lokesh_DevOps_Resume.pdf";
export const RESUME_ORIGINAL_FILENAME = resumeAsset.original_filename;

/** Human-readable resume metadata shown on the public Resume card. */
export const RESUME_VERSION = "2.3";
export const RESUME_UPDATED_LABEL = "July 2026";
export const RESUME_UPDATED_ISO = "2026-07-25";
export const RESUME_FILE_SIZE_BYTES = resumeAsset.size;
export const RESUME_TITLE = "AWS DevOps · DevSecOps · Platform Engineer";

/** localStorage key for the client-side download counter. */
export const RESUME_DOWNLOAD_COUNT_KEY = "resume:download-count:v1";
/** Baseline shown to visitors so a fresh browser doesn't read "0 downloads". */
export const RESUME_DOWNLOAD_BASELINE = 1245;

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

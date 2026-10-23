/**
 * Returns the correct asset path with the basePath prefix.
 * In production (GitHub Pages), default is '/portfolio'.
 * In development (local npm run dev), default is ''.
 */
export const BASE_PATH =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : (process.env.NODE_ENV === "production" ? "/portfolio" : "");

/**
 * Prefix any local asset path with the site basePath.
 * Example: asset('/videos/foo.mp4') -> '/portfolio/videos/foo.mp4' in production
 */
export function asset(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}

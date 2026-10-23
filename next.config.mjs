/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/portfolio' : '');

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

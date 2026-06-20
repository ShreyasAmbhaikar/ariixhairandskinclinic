/** @type {import('next').NextConfig} */
const lifecycleEvent = process.env.npm_lifecycle_event;
const distDir = lifecycleEvent === "dev" ? ".next-dev" : ".next-build";

const nextConfig = {
  distDir,
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;

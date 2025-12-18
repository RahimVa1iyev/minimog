import type { NextConfig } from "next";

const turbopackRoot = process.env.TURBOPACK_ROOT ?? './';

const nextConfig: NextConfig = {
  // Allow overriding the Turbopack root via env var for CI (e.g. Vercel)
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;

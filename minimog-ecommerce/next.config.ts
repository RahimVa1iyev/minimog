import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack resolves the correct workspace root (minimog-ecommerce)
  turbopack: {
    root: './',
  },
};

export default nextConfig;

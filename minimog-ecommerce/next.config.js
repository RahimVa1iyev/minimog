const { resolve } = require('path');

// Default to project root (relative) so Turbopack resolves `next` correctly.
const turbopackRoot = process.env.TURBOPACK_ROOT || '.';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbopack: {
      root: turbopackRoot,
    },
  },
};

module.exports = nextConfig;

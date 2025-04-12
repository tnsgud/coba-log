import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['obscure-bassoon-95gg9qw46v5c774w-3000.app.github.dev'],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {},
  },
  webpack: (config) => {
    // ✅ Ignore .d.ts files during build to prevent webpack parse errors
    config.module.rules.push({
      test: /\.d\.ts$/,
      loader: "ignore-loader",
    });

    return config;
  },
};

export default nextConfig;

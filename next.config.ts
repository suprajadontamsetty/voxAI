import type { NextConfig } from "next";
import { NextConfigComplete } from "next/dist/server/config-shared";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config: NextConfigComplete) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve("stream-browserify"),
      process: require.resolve("process/browser"),
    };
    return config;
  },
};

export default nextConfig;

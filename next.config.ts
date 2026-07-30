import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

  images: {
    remotePatterns: [
      {
        hostname: "static.vecteezy.com",
      },
      {
        hostname: "example.com",
      },
    ],
  },
};

export default nextConfig;
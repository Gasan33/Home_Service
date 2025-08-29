import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'ap-south-1.graphassets.com',
      "lh3.googleusercontent.com"
    ]
  }
};

export default nextConfig;

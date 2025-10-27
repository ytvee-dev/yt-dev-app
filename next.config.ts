import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@/components', '@/store', '@/types'],
  },
  // Удалены sassOptions так как SCSS токены больше не используются
};

export default nextConfig;

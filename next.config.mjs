/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['github-readme-streak-stats.herokuapp.com', 'github-readme-stats.vercel.app'],
  },
  // distDir: "dist"
};

export default nextConfig;

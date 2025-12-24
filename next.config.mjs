/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack ko force disable karta hai (Webpack default ban jaayega)
  webpack: true,
  // Ya explicitly Turbopack off (older way, lekin kaam karta hai)
  // experimental: { turbopack: false },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // ✅ Ensure this is NOT present if you’re using the App Router:
  // output: 'export',
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.svg', 'blob.v0.dev'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

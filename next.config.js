/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only apply basePath and assetPrefix in production
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
  } : {})
}

// Using ES module export
export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out', // Explicitly set the output directory
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
}

export default nextConfig
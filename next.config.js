/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Add this line
  images: {
    unoptimized: true,
  },
  
  // Only apply basePath and assetPrefix in production
...(process.env.NODE_ENV === 'production' ? {
  basePath: '/OutdoorGear',
  assetPrefix: '/OutdoorGear/',
} : {}),

  // Add webpack configuration to ensure CSS processing
  webpack: (config) => {
    return config;
  }
}

module.exports = nextConfig

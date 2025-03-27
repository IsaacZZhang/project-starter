/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['localhost'],
    },
    outputFileTracing: true,
  
    experimental: {
      outputFileTracingIncludes: {
        '**': ['./public/**/*']
      }
    }
  };
  
  module.exports = nextConfig;
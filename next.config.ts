import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com;
              connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
              frame-src 'self' https://www.googletagmanager.com;
              object-src 'none';
              base-uri 'self';
            `.replace(/\s+/g, ' ').trim()
          }
        ]
      }
    ]
  }
};

export default nextConfig;

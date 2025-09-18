/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        // Redirect non-www to www
        source: '/:path*',
        has: [{ type: 'host', value: 'nanakductcleaning.com' }],
        destination: 'https://www.nanakductcleaning.com/:path*',
        permanent: true,
      },
      {
        // Redirect all http to https (Vercel usually auto-handles this,
        // but this makes sure Next.js enforces it too)
        source: '/:path*',
        has: [{ type: 'protocol', value: 'http' }],
        destination: 'https://www.nanakductcleaning.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

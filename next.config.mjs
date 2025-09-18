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
      // Remove the invalid protocol redirect
      // Vercel automatically handles HTTP → HTTPS for custom domains
    ];
  },
};

export default nextConfig;

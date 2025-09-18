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
        // Redirect http://www to https://www
        source: '/:path*',
        has: [{ type: 'host', value: 'http://www.nanakductcleaning.com' }],
        destination: 'https://www.nanakductcleaning.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=31536000, stale-while-revalidate=60',
              },
            ],
          },
        ];
      },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'Access-Control-Allow-Origin',
    //                     value: '*',
    //                 },
    //                 {
    //                     key: 'Referrer-Policy',
    //                     value: 'no-referrer'
    //                 },
    //                 {
    //                     key: 'Strict-Transport-Security',
    //                     value: 'max-age=63072000; includeSubDomains; preload',
    //                 },
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'public, max-age=31536000, immutable',
    //                 },
    //                 {
    //                     key: 'Access-Control-Allow-Methods',
    //                     value: 'GET, POST, PUT, OPTIONS',
    //                 },
    //                 {
    //                     key: 'X-DNS-Prefetch-Control',
    //                     value: 'on'
    //                 }
    //             ],
    //         },
    //     ];
    // },
    async headers() {
    return [
      {
        source: '/:path*', // Apply headers to all routes
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,HEAD,OPTIONS', // Allowed HTTP methods
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type', // Allowed headers
          },
        ],
      },
    ];
  },

    matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};

export default nextConfig;

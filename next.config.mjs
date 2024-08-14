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
};

export default nextConfig;

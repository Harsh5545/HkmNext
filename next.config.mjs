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
    //         {
    //             source: '/:path*', // Apply headers to all routes
    //             headers: [
    //                 {
    //                     key: 'Access-Control-Allow-Origin',
    //                     value: '*', // Allow all origins
    //                 },
    //                 {
    //                     key: 'Access-Control-Allow-Methods',
    //                     value: 'GET,HEAD,OPTIONS', // Allowed HTTP methods
    //                 },
    //                 {
    //                     key: 'Access-Control-Allow-Headers',
    //                     value: 'Content-Type', // Allowed headers
    //                 },
    //             ],
    //         },
    //     ];
    // },

    async headers() {
        if (process.env.NODE_ENV !== 'production') {
            return [];
        }
    
        return [
            {
                source: '/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2)',
                locale: false,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=31536000',
                    }
                ],
            }
        ];
    }
};

export default nextConfig;

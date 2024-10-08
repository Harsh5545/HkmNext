const cspHeader = `
    default-src 'self';
    script-src * 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;


const nextConfig = {
    // async headers() {
    //     return [
    //         {
    //             source: '/(.*)',
    //             headers: [
    //                 {
    //                     key: 'Strict-Transport-Security',
    //                     value: 'max-age=63072000; includeSubDomains; preload',
    //                 },
    //                 {
    //                     key: 'X-Content-Type-Options',
    //                     value: 'nosniff',
    //                 },
    //                 {
    //                     key: 'X-Frame-Options',
    //                     value: 'SAMEORIGIN',
    //                 },
    //                 {
    //                     key: 'X-XSS-Protection',
    //                     value: '1; mode=block',
    //                 },
    //                 {
    //                     key: 'Referrer-Policy',
    //                     value: 'no-referrer',
    //                 },
    //                 {
    //                     key: 'Cache-Control',
    //                     value: 'public, max-age=36000',
    //                 },
    //                 {
    //                     key: 'Content-Security-Policy',
    //                     value: cspHeader.replace(/\n/g, ''),
    //                 },
    //             ],
    //         },
    //     ];
    // },
};

export default nextConfig;

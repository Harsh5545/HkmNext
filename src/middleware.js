import { NextResponse } from 'next/server';

const allowedOrigins = [
    'https://googleads.g.doubleclick.net',
    'http://webcache.googleusercontent.com',
    'https://www.youtube.com',
    'https://play.google.com',
];

export function middleware(request) {
    console.log('Middleware triggered');
    const response = NextResponse.next();

    // Extract the Origin header from the request
    const origin = request.headers.get('origin');
    console.log('Request Origin:', origin);

    // Set CORS headers if the Origin header is present and allowed
    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
        response.headers.set('Access-Control-Allow-Credentials', 'true'); // if credentials are involved
    } else {
        console.log('Origin not allowed:', origin);
    }

    // Set caching headers
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    // Handle preflight OPTIONS requests
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204, // No Content
            headers: {
                'Access-Control-Allow-Origin': origin || '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true', // if credentials are involved
            },
        });
    }

    return response;
}

export const config = {
    matcher: '/(.*)', 
};

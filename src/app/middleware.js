import { NextResponse } from 'next/server';

const allowedOrigins = [
   'https://googleads.g.doubleclick.net/pagead/id',
   'http://webcache.googleusercontent.com',
   'https://www.youtube.com',
   'https://play.google.com/log?format=json&hasfast=true&authuser=0',

];

export function middleware(request) {
    const response = NextResponse.next();

    // Extract the Origin header from the request
    const origin = request.headers.get('origin');

    // Set CORS headers if the Origin header is present
    if (origin && allowedOrigins.includes(origin)) {
        response.headers.set('Access-Control-Allow-Origin', origin);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    } 

    // Set caching headers
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');

    // Handle preflight OPTIONS requests
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204, // No Content
            headers: {
                'Access-Control-Allow-Origin': origin || '*', // Allow origin or fallback
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    return response;
}

export const config = {
    matcher: '/(.*)', 
};

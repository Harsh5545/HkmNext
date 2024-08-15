import { NextResponse } from 'next/server';

export function middleware(request: Request) {
    const response = NextResponse.next();

    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow these methods
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type'); // Allow these headers
    
    // Set caching headers
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable'); // Enable caching

    // Handle preflight OPTIONS requests
    if (request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204, // No Content
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
        });
    }

    return response;
}

// Apply middleware to all paths
export const config = {
    matcher: '/(.*)', // Apply middleware to all routes
};

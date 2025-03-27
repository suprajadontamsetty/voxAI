import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';
import { auth } from '@/Firebase/admin'; // Ensure the correct import path

export async function middleware(request: NextRequest) {
    const cookieStore = await cookies();
    const sessionCookie = (await cookieStore.get('session'))?.value;

    if (!sessionCookie) {
        // Redirect unauthenticated users to login
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        await auth.verifySessionCookie(sessionCookie, true);
        return NextResponse.next(); // Allow the request to continue
    } catch (error) {
        console.error('Invalid session:', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }
}

export const config = {
    matcher: ['/dashboard/:path*', '/profile/:path*', '/protected-route/:path*'], 
};

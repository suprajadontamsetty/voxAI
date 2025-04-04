import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nextUrl;

    // If user is trying to access protected routes without authentication, redirect to login
    const isProtectedRoute = pathname.startsWith("/dashboard") || pathname.startsWith("/profile");
    const sessionToken = req.cookies.get("session-token");

    if (isProtectedRoute && !sessionToken) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*"], // Add more if needed
};

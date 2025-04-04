import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("next-auth.session-token");

  // Allow public access to login page and API
  if (pathname.startsWith("/sign-in") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // If no token and not already on sign-in page, redirect to sign-in
  if (!token && pathname !== "/sign-in") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  // If user is authenticated, prevent access to sign-in page
  if (token && pathname === "/sign-in") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

// Apply only to protected routes
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/sign-in"],
};

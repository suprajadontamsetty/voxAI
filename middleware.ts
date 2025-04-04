import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("next-auth.session-token");

  // Allow public routes without authentication
  if (pathname.startsWith("/sign-in") || pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users
  if (!token) {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Protect specific pages
};

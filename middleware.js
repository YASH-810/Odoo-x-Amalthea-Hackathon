// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  const { pathname } = req.nextUrl;

  // Allow access to login, signup, static files, and APIs
  if (
    pathname.startsWith('/auth/login') ||
    pathname.startsWith('/auth/signup') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/public')
  ) {
    return NextResponse.next();
  }

  // Check user auth token (example using cookies)
  const token = req.cookies.get('token');

  // If not logged in, redirect to login
  if (!token) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  // Allow access if logged in
  return NextResponse.next();
}

// Specify which routes middleware applies to
export const config = {
  matcher: ['/((?!_next|favicon.ico|api|public).*)'],
};

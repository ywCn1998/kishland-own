// import createMiddleware from "next-intl/middleware";
// import { routing } from "../i18n/routing";
// import { NextRequest, NextResponse } from "next/server";

// const intl = createMiddleware(routing);

// export default function middleware(req: NextRequest) {
//   // Redirect "/" -> "/<defaultLocale>/tour"
//   if (req.nextUrl.pathname === "/") {
//     const url = req.nextUrl.clone();
//     url.pathname = `/${routing.defaultLocale}/tour`;
//     return NextResponse.redirect(url);
//   }

//   // Let next-intl handle locale routing for everything else
//   const response = intl(req);

//   // Add pathname to headers for server components
//   response.headers.set("x-pathname", req.nextUrl.pathname);

//   return response;
// }

// // Make sure middleware runs on "/" and localized paths
// export const config = {
//   matcher: ["/", "/(en|fa)/:path*"],
// };


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { routing } from "../i18n/routing";
// Cookie configuration for secure token storage
const COOKIE_CONFIG = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token'
}

// Define protected routes
const AUTH_ROUTES = [
  '/',
  // '/auth/signup',
  // '/auth/forgot-password',
  // '/auth/reset-password',
  // '/auth'
]
const PROTECTED_ROUTES = ['/panel']



// function redirectToRoute(req: NextRequest) {
//   if (req.nextUrl.pathname === "/") {
//     const url = req.nextUrl.clone();
//     url.pathname = `/${routing.defaultLocale}/tour`;
//     console.log('url',)
//     return NextResponse.redirect(url);
//   }
// }


// Helper function to check if user is authenticated
function isAuthenticated(request: NextRequest): boolean {
  const accessToken = request.cookies.get(COOKIE_CONFIG.ACCESS_TOKEN)
  const refreshToken = request.cookies.get(COOKIE_CONFIG.REFRESH_TOKEN)

  return !!(accessToken?.value && refreshToken?.value)
}

// Helper function to check if route is protected
function isProtectedRoute(pathname: string): boolean {
  return PROTECTED_ROUTES.some((route) => pathname.includes(route))
}

// Helper function to check if route is auth route
function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.some((route) => pathname.startsWith(route))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const authenticated = isAuthenticated(request)



  if (request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}/tour`;
    return NextResponse.redirect(url);
  }


  // If user is authenticated and trying to access auth routes, redirect to panel
  if (authenticated && isAuthRoute(pathname)) {
    return NextResponse.redirect(new URL('/panel', request.url))
  }

  // If user is not authenticated and trying to access protected routes, redirect to login
  // if (!authenticated && isProtectedRoute(pathname)) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  // Allow the request to continue
  return NextResponse.next()
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public|.*\\..*).*)'
  ]
}

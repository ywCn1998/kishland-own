import createMiddleware from "next-intl/middleware";
import { routing } from "../i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intl = createMiddleware(routing);

export default function middleware(req: NextRequest) {
  // Redirect "/" -> "/<defaultLocale>/tour"
  if (req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${routing.defaultLocale}/tour`;
    return NextResponse.redirect(url);
  }

  // Let next-intl handle locale routing for everything else
  return intl(req);
}

// Make sure middleware runs on "/" and localized paths
export const config = {
  matcher: ["/", "/(en|fa)/:path*"],
};

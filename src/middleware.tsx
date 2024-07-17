import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const checkPublicPath = path === "/login";
  const getCookies = cookies();
  const token = getCookies.get("token")?.value || "";

  // If trying to access a public path and token is present, redirect to /admin
  if (checkPublicPath && token !== "") {
    return NextResponse.redirect(new URL('/admin', request.nextUrl));
  }

  // If trying to access a protected path and token is absent, redirect to /login
  if (!checkPublicPath && token === "") {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/admin", "/admin/teacher", "/admin/review"],
};

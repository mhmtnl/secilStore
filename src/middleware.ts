import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  if (!req.nextauth.token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: [],
};

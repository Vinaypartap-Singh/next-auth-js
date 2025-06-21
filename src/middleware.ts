import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./auth/auth";

const protectedRoutes = ["/userinfo"];

export default async function middleware(request: NextRequest) {
  const session = await auth();

  const { pathname } = new URL(request.url);

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}

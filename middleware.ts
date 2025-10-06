import { NextResponse } from "next/server";
export const config = { matcher: ["/"] };

export function middleware(req: Request) {
  return NextResponse.redirect(new URL("/landing", req.url));
}

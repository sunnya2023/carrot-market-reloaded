import { NextRequest, NextResponse } from "next/server";
import getSession from "./app/lib/session";

interface IRoutes {
  [key: string]: boolean;
}

const publicOnlyUrls: IRoutes = {
  "/": true,
  "/login": true,
  "/sms": true,
  "/create-account": true,
};
export async function middleware(request: NextRequest) {
  const session = await getSession();
  const exist = publicOnlyUrls[request.nextUrl.pathname];
  //로그아웃 된 상태
  if (!session.id) {
    if (!exist) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  //로그인한 상태
  else {
    if (exist) {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }
}

export const config = {
  matcher: ["/", "/profile", "/user/:path*"],
};

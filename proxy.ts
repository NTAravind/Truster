import { checkpass } from "@/lib/adminauth";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/admin")) {
    if (pathname === "/admin/login") {
      return NextResponse.next();
    }

    const authhead = req.headers.get("authorization") || req.headers.get("Authorization");
    if (!authhead) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": "Basic" },
      });
    }

    try {
      const [username, pass] = Buffer.from(authhead.split(" ")[1], "base64").toString().split(":");
      const usernameMatch = username === process.env.ADMIN_USERNAME;
      const passwordMatch = await checkpass(pass, process.env.HASHED_ADMIN_PASSWORD as string);

      if (!usernameMatch || !passwordMatch) {
        return new NextResponse("Unauthorized", {
          status: 401,
          headers: { "WWW-Authenticate": "Basic" },
        });
      }
    } catch {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": "Basic" },
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
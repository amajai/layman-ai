import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const protectedPaths = ['/app'];
const publicPaths = ['/demo'];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const isAuthPage = publicPaths.includes(req.nextUrl.pathname);
  const isProtectedPage = protectedPaths.includes(req.nextUrl.pathname);

  if (token) {
    if (isAuthPage) {
      const url = req.nextUrl.clone();
      url.pathname = '/app';
      return NextResponse.redirect(url);
    }
  } else {
    if (isProtectedPage) {
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/demo', '/app'],
};

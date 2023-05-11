import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

async function middleware(req: NextRequest) {
  const reqPath = req.nextUrl.pathname;
  const protectedPath = '/protected';

  // If it's the root path, just render it
  if (reqPath === '/') {
    return NextResponse.next();
  }

  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session && reqPath === protectedPath) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (session && (reqPath === '/login' || reqPath === '/signup')) {
    return NextResponse.redirect(new URL('/protected', req.url));
  }

  return NextResponse.next();
}

export default middleware;

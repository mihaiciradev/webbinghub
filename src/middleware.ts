import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, retiredLocales, singleLocalePages, type Locale } from '@/i18n/config';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Let Next.js internals, API routes, and static files pass through
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const [, first = '', ...rest] = pathname.split('/');
  const hasLocale = (locales as readonly string[]).includes(first);
  const isRetired = (retiredLocales as readonly string[]).includes(first);

  // Path without any locale prefix ("" for home)
  const path = hasLocale || isRetired ? (rest.length ? `/${rest.join('/')}` : '') : pathname === '/' ? '' : pathname;

  // Where this page lives: its only language, else the requested one, else default
  const target: Locale = singleLocalePages[path] ?? (hasLocale ? (first as Locale) : defaultLocale);

  if (hasLocale && first === target) return NextResponse.next();

  // Missing, retired or wrong locale → permanent redirect
  const url = request.nextUrl.clone();
  url.pathname = `/${target}${path}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

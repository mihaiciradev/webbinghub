"use client";

import { trackContactConversion } from "@/lib/gtag";

interface TrackedCTAProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
}

/**
 * Anchor that fires the Google Ads contact conversion on click.
 * Lets server components keep tracked contact buttons without going client-wide.
 */
export default function TrackedCTA({
  href,
  className,
  children,
  external,
}: TrackedCTAProps) {
  return (
    <a
      href={href}
      onClick={trackContactConversion}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

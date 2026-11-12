import { readFileSync } from "fs";
import { join } from "path";

/** Returns the only_text_gold.svg as a base64 data URI for use inside ImageResponse */
export function getLogoDataUri(): string {
  const buf = readFileSync(join(process.cwd(), "src/new/only_text_gold.svg"));
  return `data:image/svg+xml;base64,${buf.toString("base64")}`;
}

/** Returns the mascot logo (full_logo_gold.svg) as a base64 data URI */
export function getMascotDataUri(): string {
  const buf = readFileSync(join(process.cwd(), "src/new/logo_gold.svg"));
  return `data:image/svg+xml;base64,${buf.toString("base64")}`;
}

/**
 * Fetches Cormorant Garamond 600 from Google Fonts for use as a custom font
 * in ImageResponse / Satori. Falls back gracefully if the network is unavailable.
 */
export async function getCormorantFont(text?: string): Promise<ArrayBuffer | null> {
  try {
    // Ask the CSS API for the woff2 URL then fetch the binary.
    // `text` subsets the file so Romanian and Spanish glyphs are included.
    const family = "https://fonts.googleapis.com/css2?family=Cormorant:wght@600";
    const href = text
      ? `${family}&text=${encodeURIComponent(text)}`
      : `${family}&display=swap`;
    const css = await fetch(href, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; Next.js/og)" },
    }).then((r) => r.text());

    const match = css.match(/src:\s*url\(([^)]+\.(?:woff2|ttf))\)/);
    if (!match) return null;

    return fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

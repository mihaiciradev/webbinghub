/**
 * Shared OG image layout — rendered by Satori inside ImageResponse.
 * All styles MUST be inline; no CSS variables, no grid, no tailwind.
 */

interface OgLayoutProps {
  logoSrc: string;
  mascotSrc: string;
  headline: string;
  headlineEm?: string; /** italic gold part, appended on a new visual line */
  subtitle: string;
  tag?: string;        /** small eyebrow label */
}

export function OgLayout({
  logoSrc,
  mascotSrc,
  headline,
  headlineEm,
  subtitle,
  tag,
}: OgLayoutProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        height: "630px",
        backgroundColor: "#faf8f5",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Gold left accent stripe ─────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: "6px",
          background:
            "linear-gradient(to bottom, transparent 0%, #b8975a 40%, #b8975a 60%, transparent 100%)",
        }}
      />

      {/* ── Decorative large W (watermark) ──────── */}
      <div
        style={{
          position: "absolute",
          right: "-60px",
          bottom: "-80px",
          fontSize: "480px",
          fontWeight: 600,
          color: "#e8e2d9",
          lineHeight: 1,
          fontFamily: "serif",
          userSelect: "none",
        }}
      >
        W
      </div>

      {/* ── Mascot mark (top-right corner) ──────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={mascotSrc}
        alt=""
        style={{
          position: "absolute",
          top: "36px",
          right: "72px",
          height: "56px",
          width: "auto",
          opacity: 0.85,
        }}
      />

      {/* ── Main content column ──────────────────── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "56px 80px 52px 86px",
          width: "780px",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Logo wordmark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="WebbingHUB"
          style={{ height: "38px", width: "auto", objectFit: "contain", objectPosition: "left" }}
        />

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* Eyebrow tag */}
        {tag && (
          <div
            style={{
              display: "flex",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b8975a",
              marginBottom: "18px",
              fontFamily: "sans-serif",
            }}
          >
            {tag}
          </div>
        )}

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "72px",
            fontWeight: 600,
            color: "#1c1917",
            lineHeight: 1.08,
            fontFamily: "serif",
            marginBottom: headlineEm ? "0px" : "20px",
          }}
        >
          {headline}
        </div>

        {/* Italic gold em part */}
        {headlineEm && (
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 600,
              fontStyle: "italic",
              color: "#b8975a",
              lineHeight: 1.08,
              fontFamily: "serif",
              marginBottom: "20px",
            }}
          >
            {headlineEm}
          </div>
        )}

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            fontSize: "22px",
            fontWeight: 300,
            color: "#78716c",
            lineHeight: 1.5,
            fontFamily: "sans-serif",
            maxWidth: "620px",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "40px",
            paddingTop: "20px",
            borderTop: "1px solid #e8e2d9",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "48px",
              height: "2px",
              backgroundColor: "#b8975a",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "15px",
              fontWeight: 500,
              color: "#b8975a",
              letterSpacing: "0.12em",
              fontFamily: "sans-serif",
            }}
          >
            webbinghub.io
          </div>
        </div>
      </div>
    </div>
  );
}

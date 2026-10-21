import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080808",
          color: "#F5F5F5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#D4AF37",
            }}
          >
            <div style={{ width: 14, height: 14, background: "#080808", borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 28, fontWeight: 600 }}>{SITE.name}</span>
        </div>

        <div style={{ display: "flex", marginTop: 48, maxWidth: 920 }}>
          <span style={{ fontSize: 60, fontWeight: 600, lineHeight: 1.15, letterSpacing: -1.5 }}>
            Digital Products, Websites &amp; Software
          </span>
        </div>

        <div style={{ display: "flex", marginTop: 28, maxWidth: 760 }}>
          <span style={{ fontSize: 26, color: "#A3A3A3", lineHeight: 1.5 }}>
            Modern websites, Telegram bots, CRM systems and custom software,
            built by {SITE.name}.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

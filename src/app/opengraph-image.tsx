import { ImageResponse } from "next/og";

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
          background:
            "radial-gradient(ellipse 80% 80% at 50% -10%, rgba(0,113,227,0.35), transparent), #050507",
          color: "#f5f5f7",
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
              background: "#0071e3",
            }}
          >
            <div style={{ width: 14, height: 14, background: "#ffffff", borderRadius: 3 }} />
          </div>
          <span style={{ fontSize: 28, fontWeight: 600 }}>ZTech Group</span>
        </div>

        <div style={{ display: "flex", marginTop: 48, maxWidth: 920 }}>
          <span style={{ fontSize: 60, fontWeight: 600, lineHeight: 1.15, letterSpacing: -1.5 }}>
            Digital Products, Websites &amp; Software
          </span>
        </div>

        <div style={{ display: "flex", marginTop: 28, maxWidth: 760 }}>
          <span style={{ fontSize: 26, color: "#a1a1a6", lineHeight: 1.5 }}>
            Modern websites, Telegram bots, CRM systems and custom software,
            built by ZTech Group.
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

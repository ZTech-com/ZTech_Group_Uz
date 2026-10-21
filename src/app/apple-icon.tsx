import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080808",
        }}
      >
        <div
          style={{
            width: "72%",
            height: "72%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 40,
            background: "#D4AF37",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#080808",
              borderRadius: 14,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "#080808",
          border: "1px solid #8C6A16",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            background: "#D4AF37",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size },
  );
}

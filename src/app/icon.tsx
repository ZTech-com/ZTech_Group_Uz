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
          background: "linear-gradient(135deg, #7c9bff, #35d0e0)",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            background: "#07080a",
            borderRadius: 2,
          }}
        />
      </div>
    ),
    { ...size },
  );
}

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
          background: "#FFFFFF",
          border: "1px solid rgba(15, 23, 42, 0.1)",
          borderRadius: 8
        }}
      >
        <svg width="20" height="22" viewBox="0 -3 22 26" fill="none">
          <path
            d="M0 12.5 L4.4 22 L9.4 14.5 L14.4 22 L18.8 8"
            stroke="#0F172A"
            strokeWidth="2.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="18.8" cy="8" r="1.85" fill="#E11D1D" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

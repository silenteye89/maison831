import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MAISON 831 — Curated Lifestyle Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FDFBF7",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top decorative line */}
        <div
          style={{
            width: 1,
            height: 60,
            backgroundColor: "#C4B59E",
            marginBottom: 40,
          }}
        />

        {/* Logo box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            border: "1.5px solid #2C2420",
            fontSize: 32,
            color: "#2C2420",
            marginBottom: 32,
          }}
        >
          M
        </div>

        {/* Brand Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 400,
            color: "#2C2420",
            letterSpacing: "0.15em",
            marginBottom: 20,
          }}
        >
          MAISON 831
        </div>

        {/* Divider */}
        <div
          style={{
            width: 48,
            height: 1,
            backgroundColor: "#B8976A",
            marginBottom: 24,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 20,
            color: "#8B7355",
            letterSpacing: "0.08em",
            fontWeight: 300,
          }}
        >
          Curated Lifestyle Studio
        </div>

        {/* Bottom decorative line */}
        <div
          style={{
            width: 1,
            height: 60,
            backgroundColor: "#C4B59E",
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...size }
  );
}

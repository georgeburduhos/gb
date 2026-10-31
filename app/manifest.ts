import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "George Burduhos",
    short_name: "GB",
    description: "Software Engineer — React Native, Web Development, AI & Automation",
    start_url: "/",
    display: "standalone",
    background_color: "#070B12",
    theme_color: "#070B12",
    icons: [
      { src: "/pwa-192x192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/pwa-512x512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/pwa-192x192-maskable.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/pwa-512x512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

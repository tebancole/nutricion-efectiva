import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Nutrición Efectiva | Nutrición personalizada",
  description:
    "Nutrición personalizada para una vida saludable. Control de peso, nutrición deportiva, nutrición clínica, educación alimentaria y planes familiares.",
  openGraph: {
    title: "Nutrición Efectiva",
    description:
      "Nutrición personalizada para una vida saludable.",
    url: "https://nutricion-efectiva.vercel.app",
    siteName: "Nutrición Efectiva",
    images: [
      {
        url: "https://nutricion-efectiva.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nutrición Efectiva",
      },
    ],
    locale: "es_CR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}
      <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nutrición Efectiva",
  description: "Nutrición personalizada para una vida saludable.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

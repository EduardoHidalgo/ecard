"use client";
import { montserrat, raleway } from "@/lib/fonts";
import "../global.css";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}

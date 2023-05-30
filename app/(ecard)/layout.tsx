"use client";

import "../global.css";
import { montserrat, raleway } from "@/lib/fonts";

export default function RootLayout({
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

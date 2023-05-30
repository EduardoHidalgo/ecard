import { montserrat, raleway } from "@/lib/fonts";
import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${raleway.variable} h-full bg-white`}
    >
      <body className="h-full">{children}</body>
    </html>
  );
}

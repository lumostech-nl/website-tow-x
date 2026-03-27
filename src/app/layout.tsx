import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Towix | Towing Dispatch Command Center",
  description:
    "Streamline your operations with real-time dispatching, automated tracking, and seamless invoicing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#01080a] text-slate-300 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

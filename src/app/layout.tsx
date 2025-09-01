import type { Metadata } from "next";
import { Engagement } from "next/font/google";
import "./globals.css";

const engagement = Engagement({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-engagement",
});

export const metadata: Metadata = {
  title: "18 pasos hacia tu proyecto de vida - MOVIMIENTODEAR",
  description: "Descubre preguntas introspectivas que desbloquearán tu potencial más profundo, claves y herramientas. Ejercicios prácticos para sustentar momentos de claridad y conceptos de un guía para tu propósito real de vida.",
  keywords: "proyecto de vida, desarrollo personal, autoconocimiento, propósito de vida, crecimiento personal",
  authors: [{ name: "Belkis Urbina", url: "@psicopedagogiaurbina" }],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "18 pasos hacia tu proyecto de vida",
    description: "E-book con herramientas y ejercicios prácticos para encontrar tu propósito de vida",
    type: "website",
    locale: "es_ES",
    siteName: "MOVIMIENTODEAR",
  },
  twitter: {
    card: "summary_large_image",
    title: "18 pasos hacia tu proyecto de vida",
    description: "E-book con herramientas y ejercicios prácticos para encontrar tu propósito de vida",
  },
  alternates: {
    canonical: "https://movimientodear.com"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={engagement.variable}>
      <head>
        {/* Prefetch critical resources */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://pay.hotmart.com" />
        <link rel="dns-prefetch" href="https://instagram.com" />
        {/* Preload critical assets */}
        <link rel="preload" href="/fonts/engagement.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Poppins-600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Poppins-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const hanken = localFont({
  src: "./fonts/HankenGrotesk.woff2",
  weight: "100 900",
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.borustudio.it"),
  title: {
    default: "Lavori — BORU studio",
    template: "%s — BORU studio",
  },
  description:
    "I progetti su cui abbiamo lavorato. Automazioni, funnel e sistemi costruiti su misura per aziende reali.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.png" },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "BORU studio",
    title: "Lavori — BORU studio",
    description:
      "I progetti su cui abbiamo lavorato. Automazioni, funnel e sistemi costruiti su misura per aziende reali.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className={`${poppins.variable} ${hanken.variable}`}>
      <body>{children}</body>
    </html>
  );
}

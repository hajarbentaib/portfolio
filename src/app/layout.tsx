import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interTight = localFont({
  src: "../fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    {
      path: "../fonts/InstrumentSerif-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/InstrumentSerif-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hajar Bentaib — AI & Data Engineer",
  description: "Portfolio of Hajar Bentaib. Étudiante Master d’excellence en IA, Big Data, MLOps, Machine Learning and Full-Stack Engineering.",
  metadataBase: new URL("https://hajarbentaib.github.io"),
  openGraph: {
    title: "Hajar Bentaib — AI & Data Engineer",
    description: "Étudiante Master d’excellence en IA · Data & Machine Learning Engineer based in Casablanca, Morocco.",
    url: "https://hajarbentaib.github.io/portfolio/",
    siteName: "Hajar Bentaib Portfolio",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hajar Bentaib — AI & Data Engineer",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased bg-[#f4f2ee] text-[#0d0d0d] min-h-screen">
        {children}
      </body>
    </html>
  );
}

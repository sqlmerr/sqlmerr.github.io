import type { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  title: {
    default: "sqlmerr",
    template: "%s // sqlmerr",
  },
  description: "sqlmerr website",
  openGraph: {
    title: "sqlmerr",
    description: "sqlmerr website",
    url: "sqlmerr.vercel.app",
    siteName: "sqlmerr",
    images: [
      {
        url: "https://sqlmerr.vercel.app/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={[calSans.variable, inter.variable].join(" ")}>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}

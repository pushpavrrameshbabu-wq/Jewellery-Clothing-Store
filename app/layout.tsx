import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./tailwind.css";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ultimate Collections",
    template: "%s | Ultimate Collections",
  },

  description:
    "Premium handcrafted jewellery, handbags, sarees, kurtis and fashion wear for every occasion.",

  keywords: [
    "handcrafted jewellery",
    "imitation jewellery",
    "fashion wear",
    "handbags",
    "sarees",
    "kurtis",
    "kids wear",
    "Ultimate Collections",
  ],

  metadataBase: new URL(
    "https://jewellery-clothing-store-2gop24zdn.vercel.app"
  ),

  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Ultimate Collections - Premium Jewellery & Fashion",
    description:
      "Discover our premium collection of handcrafted jewellery and exquisite fashion wear for every occasion.",
    url: "https://jewellery-clothing-store-2gop24zdn.vercel.app",
    siteName: "Ultimate Collections",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ultimate Collections - Premium Jewellery & Fashion",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ultimate Collections",
    description: "Premium handcrafted jewellery and fashion wear",
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
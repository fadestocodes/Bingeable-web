import type { Metadata } from "next";
import { Geist, Geist_Mono, Courier_Prime } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { colors } from "@/constants/Colors";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-courier-prime",
});

export const metadata: Metadata = {
  title: "Bingeable: Social Media for Film Lovers",
  description: "A community to discuss your latest binge",
  icons : {
    icon : '/favicon.png'
  },
  openGraph: {
    title: 'Bingeable: Social Media for Film Lovers',
    description: 'A community to discuss your latest binge',
    url: 'https://www.bingeable.app/',
    siteName: 'Bingeable',
    images: [
      {
        url: 'https://www.bingeable.app/favicon.png',
        alt: 'Logo for Bingeable',
      },
    ],
    type: 'website',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${courierPrime.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans)" , backgroundColor:colors.primary}}
      >
          <header className="z-50 pt-6 absolute w-full">
            <Navbar />
          </header>
          {children}
          <footer className="z-50  w-full">
            <Footer />
          </footer>
      </body>
    </html>
  );
}

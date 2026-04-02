import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Poppins } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Manaswita Sahoo - Growth Marketing Professional",
  description: "Portfolio of Manaswita Sahoo, Growth Marketing Professional with expertise in Meta Ads, Google Ads, CRM, Brand Partnerships, and Data Analytics. MBA in Marketing.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: "Manaswita Sahoo, Growth Marketing, Brand Partnerships, Digital Marketing, Meta Ads, Google Ads, CRM, Data Analytics, MBA Marketing",
  authors: [{ name: "Manaswita Sahoo" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manaswita.vercel.app/',
    siteName: 'Manaswita Sahoo Portfolio',
    title: 'Manaswita Sahoo - Growth Marketing Professional',
    description: 'Portfolio of Manaswita Sahoo, Growth Marketing Professional with expertise in Meta Ads, Google Ads, CRM, Brand Partnerships, and Data Analytics. MBA in Marketing.',
    images: [
      {
        url: 'src/assets/images/manaswita_logo.png',
        width: 1200,
        height: 630,
        alt: 'Manaswita Sahoo Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manaswita Sahoo - Growth Marketing Professional',
    description: 'Growth Marketing Professional specializing in Meta Ads, Google Ads, and Brand Partnerships',
    images: ['src/assets/images/manaswita_logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

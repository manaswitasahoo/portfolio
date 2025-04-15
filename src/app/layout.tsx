import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Apoorv Abhishek -  Product Manager | Restauranteur | Vibe Coder",
  description: "Portfolio of Apoorv Abhishek, an experienced Product Manager, Restauranteur and Developer with experience in AI/ML, Data Analytics, and Web Development. Explore my work experience, projects, and skills.",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: "Apoorv Abhishek, Product Manager, Cloud Kitchen, Full Stack Developer, AI/ML, Data Analytics, Portfolio",
  authors: [{ name: "Apoorv Abhishek" }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-git-main-apoorvsinha1397-gmailcoms-projects.vercel.app/',
    siteName: 'Apoorv Abhishek Portfolio',
    title: 'Apoorv Abhishek -  Product Manager | Restauranteur | Vibe Coder',
    description: 'Portfolio of Apoorv Abhishek, an experienced Product Manager, Restauranteur and Developer with experience in AI/ML, Data Analytics, and Web Development. Explore my work experience, projects, and skills.',
    images: [
      {
        url: 'src/assets/images/apoorv_logo3_cropped.png',
        width: 1200,
        height: 630,
        alt: 'Apoorv Abhishek Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apoorv Abhishek - Product Manager & Full Stack Developer',
    description: 'Product Manager and Full Stack Developer specializing in AI/ML and Data Analytics',
    images: ['/path-to-your-twitter-image.jpg'],
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

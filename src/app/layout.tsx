import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "Apoorv Abhishek - Product Manager | Developer | Restauranteur | Vibe Coder",
  description: "Portfolio of Sumanth Samala, a Senior Ruby on Rails Developer with expertise in full-stack development across high-impact, large-scale applications.",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> {/* Corrected property name */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script 
          src="https://static.elfsight.com/platform/platform.js" 
          async
        />
      </head>
      <body className="font-poppins">
      {/* <body> */}
        {children}
      </body>
    </html>
  );
}

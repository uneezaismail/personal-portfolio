import type { Metadata } from "next";
import { Roboto, Cookie, Parisienne, Tangerine } from '@next/font/google';
import localFont from "next/font/local";
import './globals.css';
import Navbar from "./components/navbar/page";
import Footer from "./components/footer/page";


const roboto = Roboto({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-roboto',
});
const cookie = Cookie({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cookie',
});
const parisienne = Parisienne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-parisienne',
});
const tangerine = Tangerine({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-tangerine',
});

// Local fonts
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cookie.variable} ${roboto.variable} ${parisienne.variable} ${tangerine.variable} antialiased`}
      ><Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

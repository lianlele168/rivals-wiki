import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roblox Rivals Wiki 2026 | Crosshair Generator, Weapon TTK & Codes',
  description: 'The official interactive database for Roblox Rivals. Customize crosshair codes, compare weapon TTK & damage stats, view 2026 meta tier lists, and claim active codes.',
  keywords: [
    'Roblox Rivals',
    'Roblox Rivals codes',
    'Rivals crosshair generator',
    'Rivals weapon tier list',
    'Rivals TTK calculator',
    'Roblox FPS guide',
    'Rivals map callouts',
    'Rivals slide cancel'
  ],
  authors: [{ name: 'Roblox Wiki Hub' }],
  metadataBase: new URL('https://rivals.robloxwikihub.com'),
  openGraph: {
    title: 'Roblox Rivals Wiki & Database 2026',
    description: 'Customize crosshair codes, compare weapon TTK stats, and view 2026 meta rankings for Roblox Rivals.',
    url: 'https://rivals.robloxwikihub.com',
    siteName: 'Roblox Rivals Wiki',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roblox Rivals Wiki & Database',
    description: 'Roblox Rivals Crosshair Generator & Weapon TTK Calculator'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-[#060a12] text-slate-100 min-h-screen flex flex-col justify-between antialiased selection:bg-red-600 selection:text-white`}>
        <StructuredData />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

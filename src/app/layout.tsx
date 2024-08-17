import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='bg-[#1c2541] text-slate-100'>
      <body className={font.className}>{children}</body>
    </html>
  );
}

import './globals.css';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'High-Volume Residential Proxies | 2extract',
  description: 'Enterprise proxies from $0.70/GB. The premium, reliable network for your high-volume data operations.',
  icons: {
    icon: '/icons/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}

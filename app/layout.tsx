import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2extract Promo',
  description: 'High-volume residential proxies landing page rebuilt on Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

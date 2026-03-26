import type { Metadata } from 'next';
import PromoPage from '@/components/PromoPage';

export const metadata: Metadata = {
  title: 'High-Volume Residential Proxies | Exclusive Rate from $0.70/GB | 2extract',
  description: 'Enterprise proxies from $0.70/GB. The premium, reliable network for your high-volume data operations.',
};

export default function Page() {
  return <PromoPage />;
}

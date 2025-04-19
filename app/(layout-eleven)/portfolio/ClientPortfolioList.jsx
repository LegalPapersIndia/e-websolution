'use client';

import dynamic from 'next/dynamic';

const PortfolioList = dynamic(() => import("@/components/portfolio/PortfolioList"), {
	ssr: false,
});

export default function ClientPortfolioList() {
  return <PortfolioList />;
}

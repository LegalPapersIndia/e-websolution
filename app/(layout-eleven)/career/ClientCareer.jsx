'use client';

import dynamic from 'next/dynamic';

const Career = dynamic(() => import("@/components/career-page"), {
	ssr: false,
});
export default function ClientCareer() {
  return <Career />;
}

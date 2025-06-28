'use client';

import { usePathname } from 'next/navigation';
import { ProgressBar } from './progress-bar';
import { Navbar } from './nav';
import Footer from './footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBlogPost = pathname.startsWith('/blog/') && pathname.split('/').length > 2;

  return (
    <>
      {isBlogPost && <ProgressBar />}
      <div className="max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </div>
    </>
  );
}

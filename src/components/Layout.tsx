import React from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { CursorGlow } from '@/src/components/CursorGlow';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue">
      <CursorGlow />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

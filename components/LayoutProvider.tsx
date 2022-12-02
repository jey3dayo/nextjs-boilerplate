import type { AppProps } from 'next/app';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function LayoutProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

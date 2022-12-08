import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoadedState } from '@/atoms/appAtom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

export default function Layout({ children }: ReactProps) {
  const isLoaded = useRecoilValue(isLoadedState);

  return (
    <>
      <Header />
      {isLoaded ? children : <Loading />}
      <Footer />
    </>
  );
}

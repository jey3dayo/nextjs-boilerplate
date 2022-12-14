import { ReactNode } from 'react';
import Head from '@/components/Head';
import StateProvider from '@/components/Provider/StateProvider';
import SwrProvider from '@/components/Provider/SwrProvider';
import TrackProvider from '@/components/Provider/TrackProvider';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <Head />
      <SwrProvider>
        <StateProvider>
          <TrackProvider>{children}</TrackProvider>
        </StateProvider>
      </SwrProvider>
    </>
  );
}

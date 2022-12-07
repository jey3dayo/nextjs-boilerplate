import { ReactNode } from 'react';
import Head from '@/components/Head';
import StateProvider from '@/components/StateProvider';
import TrackProvider from '@/components/TrackProvider';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <Head />
      <StateProvider>
        <TrackProvider>{children}</TrackProvider>
      </StateProvider>
    </>
  );
}

import { ReactNode } from 'react';
import StateProvider from 'src/components/StateProvider';
import TrackProvider from 'src/components/TrackProvider';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <StateProvider>
      <TrackProvider>{children}</TrackProvider>
    </StateProvider>
  );
}

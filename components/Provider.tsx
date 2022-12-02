import { ReactNode } from 'react';
import StateProvider from 'components/StateProvider';
import TrackProvider from 'components/TrackProvider';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <StateProvider>
      <TrackProvider>{children}</TrackProvider>
    </StateProvider>
  );
}

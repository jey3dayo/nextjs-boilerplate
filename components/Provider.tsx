import { ReactNode } from 'react';
import StateProvider from './StateProvider';
import TrackProvider from './TrackProvider';

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <StateProvider>
      <TrackProvider>{children}</TrackProvider>
    </StateProvider>
  );
}

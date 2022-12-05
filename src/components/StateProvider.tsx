import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

export default function StateProvider({ children }: { children: ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}

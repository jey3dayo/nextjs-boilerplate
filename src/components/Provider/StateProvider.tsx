import { ReactNode } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import useSWR from 'swr';
import { isLoadedState } from '@/atoms/appAtom';
import { userState } from '@/atoms/userAtom';

export default function StateProvider({ children }: { children: ReactNode }) {
  return (
    <RecoilRoot>
      <Initializer>{children}</Initializer>
    </RecoilRoot>
  );
}

function Initializer({ children }: { children: ReactNode }) {
  const [_, setupCompleted] = useRecoilState(isLoadedState);
  const [__, setUser] = useRecoilState<User | null | undefined>(userState);
  const { data, error } = useSWR('/api/init');

  if (error) return <div>Failed to load</div>;

  if (data) {
    setUser(data.user);
    setupCompleted(true);
  }

  return <>{children}</>;
}

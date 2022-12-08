import { ReactNode, useEffect } from 'react';
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
  const [, setupCompleted] = useRecoilState(isLoadedState);
  const [, setUser] = useRecoilState<User | null | undefined>(userState);
  const { data, error } = useSWR('/api/init');

  useEffect(() => {
    if (data) {
      setUser(data.user);
      setupCompleted(true);
    }
  }, [data, setUser, setupCompleted]);

  if (error) return <div>Failed to load</div>;

  return <>{children}</>;
}

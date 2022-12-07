import React from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';

import { userState } from '@/atoms/userAtom';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';

export default function Layout({ children }: ReactProps) {
  const [user, setUser] = useRecoilState<User | null | undefined>(userState);
  const { data, error } = useSWR('/api/init');

  if (error) return <div>Failed to load</div>;
  if (data) setUser(data.user);

  return (
    <>
      <Header />
      <div>name: {user?.name ?? 'loading'}</div>
      {user ? children : <Loading />}
      <Footer />
    </>
  );
}

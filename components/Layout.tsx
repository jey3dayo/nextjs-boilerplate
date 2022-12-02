import { ReactElement } from 'react';
import useSWR from 'swr';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { fetcher } from 'lib/fetcher';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Loading = () => <div>Loading...</div>;

export default function Layout({ children }: LayoutProps) {
  const { data, error } = useSWR('/api/init', fetcher);
  if (error) return <div>Failed to load</div>;

  return (
    <>
      <Header />
      {data ? children : <Loading />}
      <Footer />
    </>
  );
}

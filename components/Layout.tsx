import { ReactElement } from 'react';
import useSWR from 'swr';
import Footer from 'components/Footer';
import Head from 'components/Head';
import Header from 'components/Header';
import Loading from 'components/Loading';
import { fetcher } from 'lib/fetcher';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export default function Layout({ children }: LayoutProps) {
  const { data, error } = useSWR('/api/init', fetcher);
  if (error) return <div>Failed to load</div>;

  return (
    <>
      <Head />
      <Header />
      {data ? children : <Loading />}
      <Footer />
    </>
  );
}

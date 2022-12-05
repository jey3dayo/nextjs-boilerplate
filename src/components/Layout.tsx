import { ReactElement } from 'react';
import useSWR from 'swr';
import Footer from 'src/components/Footer';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import Loading from 'src/components/Loading';
import { fetcher } from 'src/lib/fetcher';

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

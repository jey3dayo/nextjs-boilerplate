import useSWR from 'swr';
import Footer from 'src/components/Footer';
import Head from 'src/components/Head';
import Header from 'src/components/Header';
import Loading from 'src/components/Loading';
import { fetcher } from 'src/lib/fetcher';

export default function Layout({ children }: ReactProps) {
  // TODO: save state
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

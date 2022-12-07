import useSWR from 'swr';
import { ReactProps } from '@/@types/index';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import { fetcher } from '@/lib/fetcher';

export default function Layout({ children }: ReactProps) {
  // TODO: save state
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

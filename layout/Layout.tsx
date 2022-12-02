import { ReactElement } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

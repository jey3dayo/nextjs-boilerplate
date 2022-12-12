import type { NextPageWithLayout } from 'next';
import Layout from '@/components/Layout';
import Provider from '@/components/Provider';
import styles from '@/styles/Example.module.css';

function Title({ children }: ReactProps) {
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
      <hr />
    </>
  );
}

const LayoutExample: NextPageWithLayout = () => {
  return (
    <>
      <Title>title</Title>
      <div className={styles.container}>hello</div>
    </>
  );
};

// state管理とレイアウト層を分離
LayoutExample.getLayout = content => (
  <Provider>
    <Layout>{content}</Layout>
  </Provider>
);

export default LayoutExample;

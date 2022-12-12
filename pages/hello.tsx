import styles from '@/styles/Example.module.css';

function Title({ children }: ReactProps) {
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
      <hr />
    </>
  );
}

export default function Hello() {
  return (
    <>
      <Title>title</Title>
      <div className={styles.container}>hello</div>
    </>
  );
}

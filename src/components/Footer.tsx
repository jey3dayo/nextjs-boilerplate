import { appName } from '@/config/index';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className="px-0.5">©</span>
      <span>2022 {appName ?? ''}, Inc.</span>
    </footer>
  );
}

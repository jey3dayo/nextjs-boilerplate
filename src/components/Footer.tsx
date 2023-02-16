import { appName } from '@/config/index';
import classNames from '@/lib/classNames';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={classNames(styles.footer, 'flex justify-center py-2 text-sm')}>
      <span className="px-0.5">©</span>
      <span>2022 {appName ?? ''}, Inc.</span>
    </footer>
  );
}

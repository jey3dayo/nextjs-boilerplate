import { Bars as Loader } from 'react-loader-spinner';
import styles from 'styles/Example.module.css';
import { palette } from 'styles/index';

const color = palette.primary;
const size = 80;

export default function Loading() {
  return <Loader height={size} width={size} color={color} ariaLabel="読込中" wrapperClass={styles.main} />;
}

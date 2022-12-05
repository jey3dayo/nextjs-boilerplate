import { Bars as Loader } from 'react-loader-spinner';
import styles from 'src/styles/Example.module.css';
import { palette } from 'src/styles/index';

const color = palette.primary;
const size = 80;

export default function Loading() {
  return <Loader height={size} width={size} color={color} ariaLabel="読込中" wrapperClass={styles.main} />;
}

import { appName } from 'src/config';

export default function Header() {
  return <div className={'bg-primary p-2 text-secondary'}>{appName}</div>;
}

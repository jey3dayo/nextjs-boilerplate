import { useRecoilValue } from 'recoil';
import { userState } from '@/atoms/userAtom';
import { appName } from '@/config';

export default function Header() {
  const user = useRecoilValue(userState);
  return (
    <div className={'flex'}>
      <div className="flex-none bg-primary p-2 text-secondary">{appName}</div>
      <div className="flex-1 bg-secondary p-2 text-secondary">{appName}</div>
      <div className={'flex-none bg-primary p-2 text-right text-secondary'}>wlecome {user?.name ?? ''}.</div>
    </div>
  );
}

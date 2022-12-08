import Link from 'next/link';
import { appName } from '@/config';

const contents = [
  { name: 'Home', link: '/' },
  { name: 'content1', link: '/example' },
  { name: 'content2', link: '/example' },
];

export default function Header() {
  return (
    <nav className="flex">
      <div className="m-5 flex-none text-2xl font-bold text-secondary sm:flex-1 md:flex-1 lg:flex-1 xl:flex-1">
        <Link href="/">
          <div className="p-4">{appName}</div>
        </Link>
      </div>

      <div className="m-5 flex-initial font-bold text-[#abc5c5] ">
        <ul className="hidden flex-initial text-left md:flex">
          {contents.map((value, i) => (
            <li key={i} className="p-4">
              <Link href={value.link}>{value.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

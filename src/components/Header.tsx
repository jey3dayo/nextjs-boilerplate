import { Menu, Transition, Popover } from '@headlessui/react';
import { UserIcon, Bars3Icon as BarsIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment } from 'react';
import { Logo } from '@/components/Svg';
import { appName } from '@/config';
import classNames from '@/lib/classNames';

type Navigation = {
  name: string;
  href: string;
  current?: boolean;
};

const navigation: Navigation[] = [
  { name: 'example', href: '/example', current: true },
  { name: 'example1', href: '/example1', current: false },
  { name: 'example2', href: '/example2', current: false },
  { name: 'example3', href: '/example3', current: false },
];

const profileNavigation: Navigation[] = [
  { name: '設定', href: '#' },
  { name: 'サインアウト', href: '#' },
];

export default function Header() {
  const handleMenu = () => {
    // TODO: preview menu
    console.log('handle menu');
  };

  return (
    <nav className="flex flex-wrap items-center justify-between bg-teal-500 p-3">
      <Link href="/">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <Logo size={8} />
          <span className="text-xl font-semibold tracking-tight">{appName}</span>
        </div>
      </Link>

      <div className="block md:hidden lg:hidden">
        <button
          className="flex items-center rounded border border-teal-400 px-3 py-2 text-teal-200 hover:border-white hover:text-white"
          onClick={handleMenu}
        >
          <BarsIcon className="h-3 w-3" />
        </button>
      </div>

      <div className="hidden w-full grow md:flex md:w-auto md:items-center lg:flex lg:w-auto lg:items-center">
        <div className="grow text-lg">
          {navigation.map((v, i) => (
            <Link
              key={i}
              href={v.href}
              className="mx-3 mt-0 inline-block rounded-md px-3 py-2 font-medium text-teal-200 hover:bg-teal-400 hover:text-white"
              aria-current="page"
            >
              {v.name}
            </Link>
          ))}
        </div>

        <Menu as="div" className="relative ml-3">
          <Menu.Button className="flex rounded-full bg-teal-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-teal-800">
            <span className="sr-only">ユーザメニュー</span>
            <UserIcon className="h-8 w-8" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
              {profileNavigation.map((v, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <Link
                      href={v.href}
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                    >
                      {v.name}
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}

import { Menu, Transition, Popover } from '@headlessui/react';
import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '@/atoms/userAtom';
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
  // const [user, setUser] = useRecoilState(userState);
  const user = useRecoilValue(userState);

  return (
    <nav className="flex flex-wrap items-center justify-between bg-primary p-3 @container">
      <Link href="/">
        <div className="mr-6 flex shrink-0 items-center text-white">
          <span className="fill-current">
            <Logo size={8} />
          </span>
          <span className="text-xl font-semibold tracking-tight">{appName}</span>
        </div>
      </Link>
      <Popover>
        {({ open }) => (
          <>
            <div className="@md:hidden">
              <Popover.Button
                className={classNames(
                  open ? 'bg-teal-400' : '',
                  'inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-teal-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500',
                )}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>

            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="absolute top-0 left-0 w-full origin-top-right p-2 transition @md:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-teal-50 shadow-lg ring-1 ring-black/5">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div className="fill-teal-500">
                        <Logo className="h-8 w-auto" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                          <span className="sr-only">Close menu</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {navigation.map(item => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 hover:bg-teal-100"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                  <div className="py-6 px-5">
                    <div>
                      <Link
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-400"
                      >
                        ログイン
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <div className="hidden w-full grow @md:flex @md:w-auto @md:items-center">
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
        <div>{user?.name ? `こんにちは${user.name}さん` : null}</div>
        <Menu as="div" className="relative ml-3">
          <Menu.Button className="flex rounded-full bg-teal-400 text-sm focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-teal-800">
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

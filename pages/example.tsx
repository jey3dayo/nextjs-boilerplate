import type { NextPageWithLayout } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Layout from '@/components/Layout';
import Provider from '@/components/Provider';
import { fetcher } from '@/lib/fetcher';
import styles from '@/styles/Example.module.css';

const DEFAULT_VOL = 50;
const DEFAULT_DESCRIPTION =
  "Tailwind CSS is the only framework that I've seen scale on large teams.It’s easy to customize, adapts to any design, and the build size is tiny.";

const Example: NextPageWithLayout = () => {
  const [action, setAction] = useState('');
  const [text, setText] = useState('');
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [vol, setVol] = useState(DEFAULT_VOL);
  const { data } = useSWR('/api/init', fetcher);

  useEffect(() => {
    if (data) {
      setText(data.user.name);
      setVol(data.params.vol);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="hidden text-blue-600 lg:block">large</div>
        <div className="hidden text-blue-600 md:block">medium</div>
        <div className="hidden text-blue-600 sm:block">small</div>
        <div className="dark: space-y-8 bg-gray-900 md:p-2">
          <div className="w-96 rounded shadow">
            <div className="py-4">
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold" htmlFor="text">
                  Text
                </label>
                <input
                  className="w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
                  id="text"
                  type="text"
                  placeholder="Text"
                  value={text}
                  onChange={({ target: { value } }) => setText(value)}
                  // onChange={({ target }) => {
                  //   const v = target?.value ?? '';
                  //   setText(v);
                  // }}
                />
              </div>
            </div>

            <div className="py-4">
              <div className="mb-4">
                <label className="mb-2 block text-sm font-bold" htmlFor="text">
                  Description
                </label>
                <input
                  className="w-full appearance-none rounded border py-2 px-3 leading-tight shadow focus:outline-none"
                  id="text"
                  type="text"
                  placeholder="Text"
                  value={description}
                  onChange={({ target: { value } }) => setDescription(value)}
                />
              </div>
            </div>

            <div className="py-4">
              <label
                htmlFor="default-range"
                className="mb-2 block space-y-4 text-sm font-medium text-gray-900 dark:text-white"
              >
                Volume
              </label>
              <div>vol: {vol}</div>
              <input
                id="default-range"
                type="range"
                value={vol}
                onChange={({ target }) => {
                  const v = Number(target?.value ?? 0);
                  setVol(v);
                }}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
              />
            </div>

            <div>action: {action}</div>
            <div className="grid w-96 grid-cols-2 gap-x-6">
              <button onClick={() => setAction('Decline')} className={[styles.btn, styles['btn--secondary']].join(' ')}>
                Decline
              </button>
              <button onClick={() => setAction('Accept')} className={[styles.btn, styles['btn--primary']].join(' ')}>
                Accept
              </button>
            </div>
          </div>

          <figure className="rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0">
            <Image
              className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
              src="/sarah-dayan.jpg"
              alt=""
              width="384"
              height="512"
              priority
            />
            <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
              <blockquote>
                <p className="text-lg font-medium">{description}</p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">{text}</div>
                <div className="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </main>
    </div>
  );
};

// state管理とレイアウト層を分離
Example.getLayout = content => (
  <Provider>
    <Layout>{content}</Layout>
  </Provider>
);

export default Example;

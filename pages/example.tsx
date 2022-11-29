import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Example.module.css';

export default function sample() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className="space-y-4">
          <div className="w-96 rounded bg-slate-800 shadow">w-96</div>
        </div>
        <div className="dark: space-y-8 bg-gray-900 md:p-1">
          <figure className="rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0">
            <Image
              className="mx-auto h-24 w-24 rounded-full md:h-auto md:w-48 md:rounded-none"
              src="/sarah-dayan.jpg"
              alt=""
              width="384"
              height="512"
            />
            <div className="space-y-4 pt-6 text-center md:p-8 md:text-left">
              <blockquote>
                <p className="text-lg font-medium">
                  “Tailwind CSS is the only framework that I&apos;ve seen scale on large teams. It’s easy to customize,
                  adapts to any design, and the build size is tiny.”
                </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
                <div className="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
              </figcaption>
            </div>
          </figure>
        </div>
      </main>

      <Footer />
    </div>
  );
}

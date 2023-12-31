import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Button from '@/components/Button';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import ThemeToggle from '@/components/ThemeToggle';
import styles from '@/styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.container + ' bg-skin-fill transition'}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Genno" />
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title + ' text-skin-base transition'}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className={
                styles.card + ' hover:duation-hover transition duration-hover hover:transition'
              }
            >
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </div>

          <div>
            <Button className="bg-skin-button-muted transition hover:bg-skin-button-muted-hover" />
            <Button className="bg-skin-button-accent text-skin-base transition hover:bg-skin-button-accent-hover" />
          </div>

          <div>
            <ThemeToggle />
          </div>

          <div>
            <ConnectWalletButton />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Home;

import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Tan Lennoh';
export const siteTitle = 'Next.js Sample Blog';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <LayoutHead />
      <header className={styles.header}>
        {home ? <LayoutHomeHeader /> : <LayoutPostHeader />}
      </header>
      <main>{children}</main>
      {!home && <BackToHome />}
    </div>
  );
}

function LayoutHead() {
  return (
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%
          2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%
          2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
  );
}

function LayoutHomeHeader() {
  return (
    <>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt="Profile picture"
      />
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </>
  );
}

function LayoutPostHeader() {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt="profile Picture"
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {name}
        </Link>
      </h2>
    </>
  );
}

function BackToHome() {
  return (
    <div className={styles.backToHome}>
      <Link href="/">← Back to home</Link>
    </div>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Lee</title>
        <meta name="description" content="Web development services for " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.name}>Alexander Lee</h1>
        <h2 className={styles.jobTitle}>UX Engineer</h2>
      </header>
      <main className={styles.main}></main>

      <footer className={styles.footer}>
        <a
          href="mailto:alex@surelee.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get in touch!
        </a>
      </footer>
    </div>
  );
};

export default Home;

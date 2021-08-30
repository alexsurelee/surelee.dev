import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Lee</title>
        <meta name="description" content="Web development services for " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alexander Lee</h1>

        <p className={styles.description}>
          Custom website packages, tailored for you.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Experience &rarr;</h2>
            <p>
              See why I&apos;m qualified to develop a solution for your needs.
            </p>
          </a>

          <a href="https://github.com/alexsurelee" className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>
              Review some of my public projects and open source contributions.
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Portfolio &rarr;</h2>
            <p>Play around with some of my recent projects!</p>
          </a>

          <a href="https://linkedin.com/in/alexsurelee" className={styles.card}>
            <h2>LinkedIn &rarr;</h2>
            <p>Check out my journey so far, and connect with me!</p>
          </a>
        </div>
      </main>

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

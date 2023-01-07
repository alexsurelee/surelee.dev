import { Card, CardTitle } from "components/Card";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alexander Lee</title>
        <meta name="description" content="Alexander Lee - Portfolio " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Alexander Lee</h1>
        <Card>
          <CardTitle>Yellow</CardTitle>
        </Card>
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

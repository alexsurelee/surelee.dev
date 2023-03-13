import { Card, CardBody, CardTitle } from "components/Card";
import { GridContainer } from "components/GridContainer";
import { Header } from "components/Header";
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

      <Header />

      <main className={styles.main}>
        <GridContainer>
          <Card>
            <CardTitle>Technology</CardTitle>
            <CardBody>
              <ul>
                <li>React</li>
              </ul>
            </CardBody>
          </Card>
        </GridContainer>
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

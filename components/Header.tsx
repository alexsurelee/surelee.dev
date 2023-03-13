import Link from "next/link";
import * as React from "react";

import styles from "styles/components/header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link href="/">Alexander Lee</Link>
      </h1>
      <nav className={styles.nav}>
        <Link className={styles.link} href="timeline">
          Timeline
        </Link>
      </nav>
    </header>
  );
}

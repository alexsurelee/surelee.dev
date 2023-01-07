import * as React from "react";
import styles from "styles/components/card.module.scss";

export function Card({ children }) {
  return <div className={styles.card}>{children}</div>;
}

export function CardTitle({ children }) {
  return <span className={styles.title}>{children}</span>;
}

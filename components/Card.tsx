import * as React from "react";
import styles from "styles/components/card.module.scss";

export type CardProps = {
  children: React.ReactNode;
};

export function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}

export type CardTitleProps = {
  children: React.ReactNode;
};

export function CardTitle({ children }: CardTitleProps) {
  return <h3 className={styles.title}>{children}</h3>;
}

import * as React from "react";
import styles from "styles/components/gridcontainer.module.scss";

export type GridContainerProps = {
  children: React.ReactNode;
};

export function GridContainer({ children }: GridContainerProps) {
  return <div className={styles.grid}>{children}</div>;
}

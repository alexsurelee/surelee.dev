import * as React from "react";

import styles from "styles/components/timeline.module.scss";

export type TimelineProps = {
  children: React.ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return (
    <div className={styles.timeline}>
      <div className={styles.ruler} />
      <div className={styles.entries}>{children}</div>
    </div>
  );
}

export type TimelineEntryProps = {
  children: React.ReactNode;
};

export function TimelineEntry({ children }: TimelineEntryProps) {
  return <div className={styles.entry}>{children}</div>;
}

export function TimelineDate({ children }: { children: React.ReactNode }) {
  return <div className={styles.date}>{children}</div>;
}

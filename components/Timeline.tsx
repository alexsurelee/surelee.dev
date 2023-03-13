import * as React from "react";

import styles from "styles/components/timeline.module.scss";

export type TimelineProps = {
  children: React.ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return <div className={styles.timeline}>{children}</div>;
}

export type TimelineEntryProps = {
  children: React.ReactNode;
  date: React.ReactNode;
};

export function TimelineEntry({ children, date }: TimelineEntryProps) {
  return (
    <div className={styles.entry}>
      {date}
      {children}
    </div>
  );
}

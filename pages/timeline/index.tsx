import * as React from "react";

import { Header } from "components/Header";
import { Timeline, TimelineDate, TimelineEntry } from "components/Timeline";

import styles from "styles/pages/timeline.module.scss";

export default function TimelinePage() {
  return (
    <>
      <Header />
      <main className={styles.timeline}>
        <Timeline>
          <TimelineEntry>
            <TimelineDate>11/2018</TimelineDate>
            <h2>Developer Intern at Xero</h2>
          </TimelineEntry>
          <TimelineEntry>
            <TimelineDate>11/2019</TimelineDate>
            <h2>Developer Intern at Xero</h2>
          </TimelineEntry>
          <TimelineEntry>
            <TimelineDate>02/2020</TimelineDate>
            <h2>Graduate Developer at Xero</h2>
          </TimelineEntry>
          <TimelineEntry>
            <TimelineDate>02/2021</TimelineDate>
            <h2>Associate Engineer at Xero</h2>
          </TimelineEntry>
          <TimelineEntry>
            <TimelineDate>03/2022</TimelineDate>
            <h2>Engineer at Xero</h2>
          </TimelineEntry>
        </Timeline>
      </main>
    </>
  );
}

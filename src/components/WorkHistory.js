import React from 'react';
import { format } from 'fecha';
import jobs from '../data/jobs.json';
import styles from './WorkHistory.module.css';

const WorkHistory = () => {
  const positions = jobs.map((job, i) => {
    const from = format(new Date(job.start), 'MMMM, YYYY');
    const to = job.end && format(new Date(job.end), 'MMMM, YYYY');

    return (
      <div key={i} className={styles.item}>
        <div>
          <h3>
            <a href={job.url}>{job.name}</a>
          </h3>
          <p>{job.highlight}</p>
        </div>
        <div className={styles.date}>
          {to && (
            <i>
              From {from} to {to}
            </i>
          )}
          {!to && <i>Since {from}</i>}
        </div>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <h3>Companies worked with.</h3>
      <div className={styles.list}>{positions}</div>
    </div>
  );
};
export default WorkHistory;

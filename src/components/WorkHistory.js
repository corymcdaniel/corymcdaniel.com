import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'fecha';
import jobs from '../data/jobs.json';
import styles from './WorkHistory.module.css';

const WorkHistory = (props) => {
  const positions = jobs.map((job, i) => {
    const from = format(new Date(job.start), 'MMMM, YYYY');
    const to = format(new Date(job.end), 'MMMM, YYYY');

    return (
      <div key={i} className={styles.item}>
        <h3>
          <a href={job.url}>{job.name}</a>
        </h3>
        <p>{job.highlight}</p>
        <div>
          <i>
            From {from} to {to}
          </i>
        </div>
      </div>
    );
  });
  return (
    <div>
      <h3>Companies worked with.</h3>
      <div className={styles.list}>{positions}</div>
    </div>
  );
};

WorkHistory.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default WorkHistory;

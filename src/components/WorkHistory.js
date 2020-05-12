import React from "react"
import PropTypes from "prop-types"
import jobs from "../data/jobs.json"
import styles from "./WorkHistory.module.css"

const WorkHistory = props => {
  const positions = jobs.map((job, i) => {
    return (
      <div key={i} className={styles.item}>
        <h3>{job.name}</h3>
        <cite>
          <a href={job.url}>{job.url}</a>
        </cite>
        <p>{job.highlight}</p>
      </div>
    )
  })
  return (
    <div>
      <h3>Companies worked with.</h3>
      <div className={styles.list}>{positions}</div>
    </div>
  )
}

WorkHistory.propTypes = {
  // myProp: PropTypes.string.isRequired
}

export default WorkHistory

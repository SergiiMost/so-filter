import React from 'react'
import styles from './Spinner.module.scss'

const Spinner = () => {
  return(
    <div className={`${styles.sp} ${styles.spCircle}`} ></div>
  )
}

export default Spinner
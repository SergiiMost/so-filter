import React from 'react'
import { MdClose } from "react-icons/md"
import { IoIosCloseCircleOutline, IoIosCheckmarkCircleOutline } from "react-icons/io"
import data from '../../assets/data'
import styles from './Tag.module.scss'

const Tag = (props) => {
  return (
    <div className={styles.container} onClick={() => props.deleteTag(props.id)}>
      {data[props.tag] !== undefined ? <IoIosCheckmarkCircleOutline className={styles.tagGreen} /> : <IoIosCloseCircleOutline className={styles.tagRed} />}
      <span>{props.tag}</span>
      <MdClose />
    </div>
  )
}

export default Tag
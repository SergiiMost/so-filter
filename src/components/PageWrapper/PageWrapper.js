import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './PageWrapper.module.scss'

const PageWrapper = (props) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <>
    <div className={` ${styles.container} ${isDarkMode ? styles.dark : styles.white}`} >
      {props.children}
    </div>
    </>
  )
}

export default PageWrapper
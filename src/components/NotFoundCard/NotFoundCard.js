import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './NotFoundCard.module.scss'

const InfoCard = () => {
  const { isDarkMode } = useContext(ThemeContext)
  
  return (
    <div className={`${styles.container} ${isDarkMode === true ? styles.containerDark : styles.containerLight}`}>
      <p>No questions found.</p>
      <p>Can be due to:</p>
      <ul>
        <li>Too high number of upvotes</li>
        <li>Small time window</li>
        <li>Invalid tags</li>
        <li>Invalid date selection</li>
        <li>Too many tags ( a question has to have all provided tags )</li>
      </ul>
    </div>
  )
}

export default InfoCard
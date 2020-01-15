import React, { useContext } from 'react'
import { FaUserAlt } from "react-icons/fa"
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './Question.module.scss'

const Question = (props) => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <div className={`${styles.container} ${isDarkMode === true ? styles.containerDark : styles.containerLight}`}>
      <div className={`${styles.upvotes} ${isDarkMode === true ? styles.upvotesDark : styles.upvotesLight}`}  >
        <span>{props.score}</span>
        <span>upvotes</span>
      </div>
      <div className={`${styles.questionBody} ${isDarkMode === true ? styles.questionBodyLinkDarkTheme : styles.questionBodyLinkLightTheme} `}>
        <a href={props.link} target="_blank" >{props.title}</a>
        <div className={styles.questionData}>
          <div className={styles.tagsContainer}>Tags:
            {props.tags.map(tag => {
            return (
              <span className={styles.tag} key={tag}>
                {tag}
              </span>
            )
          })
            }
          </div>
          <div>
            <FaUserAlt />
            <span> {props.username}, {props.rep} rep.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
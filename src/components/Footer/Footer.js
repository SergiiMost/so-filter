import React,{useContext} from 'react'
import { FaGithub } from "react-icons/fa"
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './Footer.module.scss'

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <div className={` ${styles.container} ${isDarkMode ? styles.dark : styles.white}`} >
      <a href="#"><FaGithub/> code</a>
      <span>, 2020.</span>
    </div>
  )
}

export default Footer
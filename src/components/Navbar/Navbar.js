import React, { useContext } from 'react'
import { WiMoonWaxingCrescent3, WiDaySunny } from 'react-icons/wi'
import { FaStackOverflow } from 'react-icons/fa'
import { ThemeContext } from '../../contexts/ThemeContext'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`${styles.navBar} ${isDarkMode ? styles.navBarDark : styles.navBarLight}`}>
      <div className={styles.container}>
        <div className={`${styles.logo} ${isDarkMode && styles.textWhite}`}>
          <FaStackOverflow className={styles.icon} />
          <span className={styles.logoText}>stackoverflow's filter</span>
        </div>
        {isDarkMode ?
          <div className={styles.themeToggler}>
            <WiDaySunny
              className={`${styles.icon} ${styles.iconToggleTheme} ${styles.textWhite}`}
              onClick={toggleTheme} />
            <p>Light Theme</p>
          </div> 
          :
          <div className={styles.themeToggler}>
            <WiMoonWaxingCrescent3
              className={`${styles.icon} ${styles.iconToggleTheme}`}
              onClick={toggleTheme} />
            <p>Dark Theme</p>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
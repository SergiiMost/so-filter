import React, { useContext, useState} from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io"
import useFormInput from '../../hooks/useFormInput'
import { ThemeContext } from '../../contexts/ThemeContext'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import styles from './Form.module.scss'

const Form = (props) => {
  const { isDarkMode } = useContext(ThemeContext)
  const [from, setFrom] = useFormInput('')
  const [to, setTo] = useFormInput('')
  const [upvotes, setUpvotes] = useFormInput(3)
  const [tags, setTags, setTagsDirect] = useFormInput('')
  const [tagsArr, setTagsArr] = useState([])

  const splitTags = () => {
    const arrClean = tags.split(',').map(tag => tag.trim())
    setTagsArr(arrClean)
  }

  const deleteTag = (id) => {
    const updatedArr = tagsArr.filter(tag => tag !== id)
    setTagsArr(updatedArr)
    setTagsDirect(updatedArr.join(', '))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const timeStart = new Date(from).getTime() / 1000
    const timeEnd = new Date(to).getTime() / 1000
    const tagsStr = tagsArr.join(';')
    const url = `https://api.stackexchange.com/2.2/search/advanced?fromdate=${timeStart}&todate=${timeEnd}&order=desc&min=${upvotes}&sort=votes&tagged=${tagsStr}&site=stackoverflow&page=${1}`
    if(props.currentUrl !== url) props.handleClickSubmit()
    props.setUrl(url)
  }

  return (
    <div className={`${styles.container} ${isDarkMode ? styles.textWhite : styles.textBlack} `}>
      <h1>Learn from good questions on Stack Overflow </h1>
      <form onSubmit={handleFormSubmit}  >
        <div className={`${styles.input} ${styles.inputTags}`}>
          <label htmlFor="tags" >Tags:</label>
          <input type="text" id="tags" required value={tags} onBlur={splitTags} onChange={setTags} />
          <div className={styles.inputTagsHelper}>
            <div className={styles.inputTagInstructions}>
              <span>Comma separated tags</span>
              <span><IoIosCloseCircleOutline />&nbsp;- invalid tag</span>
            </div>
            <div className={styles.tagsContainer}>
              {tagsArr.map(tag => tag !== "" && <Tag tag={tag} key={tag} id={tag} deleteTag={deleteTag} />)}
            </div>
          </div>
        </div>
        <div className={styles.inputGroup}>
          <div className={styles.input}>
            <label htmlFor="dateStart">From:</label>
            <input type="date" id="dateStart" onChange={setFrom} required />
          </div>
          <div className={styles.input}>
            <label htmlFor="dateEnd" >To:</label>
            <input type="date" id="dateEnd" onChange={setTo} required />
          </div>
          <div className={styles.input}>
            <label htmlFor="upvotes">Minimum Upvotes:</label>
            <input type="number" id="upvotes" min="0" style={{ textAlign: 'center' }} value={upvotes} onChange={setUpvotes} required />
          </div>
        </div>
        <Button text="Find Questions" isDarkMode={isDarkMode} type="submit" />
      </form>
    </div>
  )
}

export default Form
import React, { useState, useEffect, useContext } from 'react'
import Form from '../Form/Form'
import Question from '../Question/Question'
import Spinner from '../Spinner/Spinner'
import InfoCard from '../NotFoundCard/NotFoundCard'
import Button from '../Button/Button'
import { ThemeContext } from '../../contexts/ThemeContext'
import uuidv4 from 'uuid/v4'

const Filter = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const [infoCard, showInfoCard] = useState(false)
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [hasMoreQuestions, setHasMoreQuestions] = useState(false)

  const handleClickMore = () => {
    let digit = parseInt(url[url.length - 1]) + 1
    let newUrl = url.slice(0, -1) + digit
    setUrl(newUrl)
  }

  const handleClickSubmit = () => {
    setQuestions([])
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      showInfoCard(false)
      setHasMoreQuestions(false)
      setLoading(true)
      let questionsAPI = await fetch(url).then(response => response.json())
      questionsAPI.items.length === 0 && showInfoCard(true)
      questionsAPI.has_more === true && setHasMoreQuestions(true)
      setQuestions([...questions, ...questionsAPI.items])
      setLoading(false)
    }

    if (url !== '') {
      try {
        fetchQuestions()
      }
      catch (err) {
        console.log(err)
      }
    }
  }, [url])
  
  return (
    <>
      <Form setUrl={setUrl} handleClickSubmit={handleClickSubmit} currentUrl={url} />
      {loading && <Spinner />}
      {infoCard && <InfoCard />}
      {questions.map(question =>
        <Question tags={question.tags}
          link={question.link}
          title={question.title}
          score={question.score}
          username={question.owner.display_name}
          rep={question.owner.reputation}
          key={uuidv4()}
        />)
      }
      {hasMoreQuestions && <Button text={'Load More'} isDarkMode={isDarkMode} type="button" handleClick={handleClickMore} short={true} />}
    </>
  )
}

export default Filter
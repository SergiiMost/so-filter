import React from 'react'
import { MdClose } from "react-icons/md"
import styles from './InfoCard.module.scss'


const InfoCard = (props) => {
  return(
    <div className={styles.container}>
      <div className={styles.close} ><MdClose onClick={props.displayInfo}/></div>
      <p>Application was created for personal use with an idea of being able to filter out 
        good questions from Stack Overflow on a daily basis. </p>
      <p>Generally, questions that have <b>3</b> or more  upvotes are good questions,  and you can learn 
        from them.
      </p>
      <p>The most popular tag <b>javascript</b> has around 10-15 questions with 3 or more upvotes per day.
       Therefore, it's not too hard to  go through good questions 
         every day.  </p>
    </div>
  )
}

export default InfoCard
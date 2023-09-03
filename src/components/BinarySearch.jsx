import React from 'react'
import questions from '../data/binary_search'

const BinarySearch = () => {

    const questionElement = questions.map((question, index) => {
        return <li key={index}> <a href={question} target='_blank'> {index + 1}. { question }</a> </li>
    })

  return (
    <div>
        <h1>Binary Search</h1>
        <ul>
            {questionElement}
        </ul>
    </div>
  )
}

export default BinarySearch

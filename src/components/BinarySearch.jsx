import React from 'react'
import {questions_type_1, questions_type_2} from '../data/binary_search'

const BinarySearch = () => {

    const questionElementType1 = questions_type_1.map((question, index) => {
        return <li key={index}> <a href={question} target='_blank'> {index + 1}. { question }</a> </li>
    });

    const questionElementType2 = questions_type_2.map((question, index) => {
        return <li key={index}> <a href={question} target='_blank'> {index + 1}. { question }</a> </li>
    });

  return (
    <div>
        <h1>Binary Search</h1>
        <ul>
            <h3>Type 1</h3>
            { questionElementType1 }
            <h3>Type 2</h3>
            { questionElementType2 }
        </ul>
    </div>
  )
}

export default BinarySearch

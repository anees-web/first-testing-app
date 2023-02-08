import React from 'react'
import {quizData} from '../Data/quizData'

function Quiz() {
  return (
    <div>
    <p className='heading-text text-center fw-bold fs-2 text-white'>Quiz App</p>
    <div className='container'>
        
     <div className='question'>
         <span id='question-number'>1. </span>
         <span id='question-text'>{quizData[0].question} </span>
     </div>
       <div className='option-container'>
         {quizData[0].options.map((options,i)=>{
          return(
            <button className='option-btn'>
              {options}
              
            </button>
          )
         })}
       </div>
       <button class="btn btn-success text-white fs-5">Next</button>
							
    </div>
    </div>
  )

}

export default Quiz;
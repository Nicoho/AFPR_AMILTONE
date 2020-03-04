import React from 'react';
import QuestionLibre from './QuestionLibre'
import QuestionSimple from './QuestionSimple'

function Question({ question, ValidateResponse, answeringTime }) {

  let type = question.type
  return (
    <div className='Question container-fluid'>
      <div className='row'>

        <div className='enonce  col-md-4'>
          <div className='question_title'>
            {
              question.question
            }
          </div >
        </div>
        <div className='reponse col-md-8'>
          <div className='answer_title'>
            Votre (vos) réponse(s):
          </div>

          {
            type === 'libre' && <QuestionLibre ValidateResponse={ValidateResponse} answeringTime={answeringTime} />
          }
          {
            type === 'simple' && <QuestionSimple question={question} ValidateResponse={ValidateResponse} answeringTime={answeringTime} />
          }
        </div>
      </div>
    </div>
  )
}

export default Question
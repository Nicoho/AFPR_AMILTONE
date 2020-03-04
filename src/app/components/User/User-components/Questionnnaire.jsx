import React from 'react';

import Chrono from './Chrono'
import QuestionLibre from './QuestionLibre';
import QuestionSimple from './QuestionSimple'


function Questionnaire({ handlePageChange, test, isEnded, ValidateResponse, setVisible }) {


  let question = test.questions[test.indexQuestion]
  let type = question.type

  return (
    <div className='Questionnaire container-fluid'>
      <div className='row'>
        <div className='question col-md-4'>
          <div className='questionnaire_progression'>
            question {test.indexQuestion + 1} / {test.questions && test.questions.length}
          </div>
          <div className='question_title'>
            {
              question.question
            }
          </div >
        </div>
        <div className='answer col-md-8'>
          <div className=' questionnaire_chrono'>
            <Chrono ValidateResponse={ValidateResponse} timer={test.timer} />
          </div>
          <div className='answer_title'>
            Votre (vos) réponse(s):
          </div>
          <div className="answers">
            {
              type === 'libre' && <QuestionLibre ValidateResponse={ValidateResponse} />
            }
            {
              type === 'simple' && <QuestionSimple question={question} ValidateResponse={ValidateResponse} />
            }
          </div>
        </div>

      </div>
      <div >
        {
          isEnded && handlePageChange()
        }
      </div>
    </div>
  )

}

export default Questionnaire
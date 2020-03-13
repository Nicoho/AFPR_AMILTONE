import React from 'react';

import Chrono from './Chrono'
import QuestionLibre from './QuestionLibre';
import ChoixMultiple from './ChoixMultiple'
import ChoixUnique from './ChoixUnique';



function Questionnaire({ test, ValidateResponse }) {



  let question = test.questions[test.indexQuestion]
  let type = question.question_type


  return (
    <div className='Questionnaire container-fluid'>
      <div className='row'>
        <div className='question col-md-4'>
          <div className='questionnaire_progression'>
            question {test.indexQuestion + 1} / {test.questions && test.questions.length}
          </div>
          <div className='question_title'>
            {
              question.wording_q
            }
          </div >
        </div>
        <div className='answer col-md-8'>
          <div className=' questionnaire_chrono'>
            <Chrono ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} timer={test.timer} indexQuestion={test.indexQuestion} />
          </div>
          <div className='answer_title'>
            Votre réponse:
          </div>
          {
            type === 'cm' && <div className='ChoixMultiple_text'>Plusieurs réponses sont attendues</div>
          }

          <div className="answers">
            {
              type === 'libre' && <QuestionLibre ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} id_propo={question.propositions[0].id_propositions} />}

            {
              type === 'cm' && <ChoixMultiple question={question} ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} />
            }
            {
              type === 'cu' && <ChoixUnique question={question} ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} />
            }
          </div>
        </div>

      </div>

    </div>
  )

}

export default Questionnaire
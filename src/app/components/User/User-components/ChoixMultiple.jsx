import React, { useState, useEffect } from 'react';
import { setCheckedPossibilities } from '../../../../reducers/user.reducer/reducer';

function ChoixMultiple({ question, ValidateResponse }) {
  const [Answers, setAnswers] = useState([])
  const [Sol, setSol] = useState([])

  useEffect(() => {
    setSol(setCheckedPossibilities(question.propositions))
  }, [question.propositions])


  const getChecked = (ind, answer) => {
    let result = [...Answers]
    let solTemp = [...Sol]
    solTemp[ind].isChecked = !Sol[ind].isChecked
    setSol(solTemp)
    if (Sol[ind].isChecked) {
      result.push(answer)
    } else {
      result = result.filter(ans => ans !== answer)
    }
    setAnswers(result)
  }

  const checkSubmit = () => {
    ValidateResponse(answer, false)
    setAnswers([])
  }



  const { id_questions, question_type } = question
  const answer = {
    id_questions: id_questions,
    question_type: question_type,
    id_propositions: Answers,
  }

  return (
    <div className='ChoixMultiple'>
      <form >
        <div className='reponses'>
          {
            Sol.map((answer, ind) => {
              return (
                <div key={answer.id_propositions} className='answer_check' >
                  <label className='answer_label'>
                    <input type='checkbox' className="answer_input" checked={Sol[ind].isChecked} onChange={() => getChecked(ind, answer.id_propositions)}
                    />
                    <span className={answer.isChecked ? "answerChecked-text" : "answer_text"} > {answer.wording}</span>
                  </label>
                </div>
              )
            })
          }
        </div>

        <div className="btn" onClick={() => checkSubmit()}>
          <div className="isBtn">
            <span>
              valider la réponse
          </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChoixMultiple;
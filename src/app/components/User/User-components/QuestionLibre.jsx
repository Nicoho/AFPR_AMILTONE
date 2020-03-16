import React, { useState, useEffect } from 'react';

function QuestionLibre({ ValidateResponse, question }) {
  const [rep, setRep] = useState('')

  useEffect(() => {
    return () => setRep('')
  }, [])

  let getAnswer = (e) => {
    e.preventDefault();
    setRep(e.target.value)
  }


  const { id_questions, question_type } = question
  const answer = {
    id_questions: id_questions,
    question_type: question_type,
    id_propositions: question.propositions[0].id_propositions,
    value: rep
  }

  return (
    <div className='QuestionLibre'>
      <form >
        <div className='reponses'>
          <input value={rep} onChange={e => getAnswer(e)} />
        </div>
        <div className="btn" onClick={(e) => ValidateResponse(answer, false)}>
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

export default QuestionLibre
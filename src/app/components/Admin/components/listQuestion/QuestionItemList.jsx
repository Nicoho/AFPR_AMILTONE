import React from 'react';
import { format_date } from '../../../../../app/utils/utils.generic'



const QuestionItemList = ({ question }) => {

  const { date_creation, level, language, wording_q, question_type } = question
  console.log(date_creation)
  return (

    <tr className="QuestionItemList">
      <td className="wording_q col-4">{wording_q}</td>
      <td className="language col-2">{language}</td>
      <td className="level col-1" >{level}</td>
      <td className="question_type col-1">{question_type}</td>
      <td className="creation_date col-2">{format_date(date_creation)}</td>
      <td className="actions col-2">
        <div>Sup</div>
        <div>Edite</div>
      </td>
    </tr>




  )
}

export default QuestionItemList;
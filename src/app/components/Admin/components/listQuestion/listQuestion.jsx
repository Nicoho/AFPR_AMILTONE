import React, { useState, useEffect } from 'react';
import { getQuestions } from '../../../../../reducers/admin.reducer/reducer'

import "./listQuestion.style.scss"
import QuestionItemList from './QuestionItemList';


const ListQuestion = () => {

    const [questionsList, setQuestionsList] = useState(null)

    useEffect(() => {
        getQuestions(callback => setQuestionsList(callback))
    }, [])


    return (
        <div className="listQuestion container-fluid">
            <h3 className="listQuestion-heading">Liste des Questions</h3>

            <table className="table  table-striped ">
                <thead>
                    <tr>
                        <th className="wording_q col-4">Question</th>
                        <th className="language col-2">Langage</th>
                        <th className="level col-1" >Dificulté</th>
                        <th className="question_type col-1" >Type</th>
                        <th className="creation_date col-2" >Date de création</th>
                        <th className="actions col-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        questionsList && questionsList.map((q) => <QuestionItemList key={q.id_questions} question={q} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListQuestion;
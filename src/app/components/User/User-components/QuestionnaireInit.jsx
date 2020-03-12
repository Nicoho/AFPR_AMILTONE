import React, { useState, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { questionnaire, initialState, getTestforMounting, postAnswer, putTestIsStarted } from '../../../../reducers/user.reducer/reducer'
import Questionnaire from './Questionnnaire';
import Fin from './Fin'
import Debut from './Debut';
import '../user-style.scss'
import TimeOutModal from '../TimeOutModal';




const QuestionnaireInit
  = () => {
    const [state, dispatch] = useReducer(questionnaire, initialState);
    const [page, setPage] = useState(1)
    const [visible, setVisible] = useState(false)
    const { id_test, id_user, id_result } = useParams()

    useEffect(() => {
      getTestforMounting(dispatch, id_test)
    }, [id_test])

    useEffect(() => {
      state.isEnded && postAnswer(JSON.stringify(state.answers), id_user, id_test, id_result)
    }, [state.isEnded, state, id_result, id_user, id_test])

    let handlePageChange = () => {
      page === 1 ? setPage(2) : setPage(1)
    }
    console.log((state));

    const navigateInTest = () => {
      if (state.indexQuestion === state.questions.length - 1) {
        endTest()
        //setTestIsEnded(true)
      } else {
        dispatch({ type: 'setIndex' })
      }
    }

    const endTest = () => {
      dispatch({ type: 'endTest' })
    }

    const ValidateResponse = (answer, visible) => {
      dispatch({ type: 'getAnswer', payload: answer })
      visible ? setVisible(visible) : navigateInTest()
    }

    const TimedOutNav = () => {
      navigateInTest()
      setVisible(false)
    }

    let handleComponent = () => {
      switch (page) {
        case 1:
          return <Debut handlePageChange={() => handlePageChange()} test={state} putTestIsStarted={() => putTestIsStarted(id_result)} />;
        case 2:
          return <Questionnaire handlePageChange={() => handlePageChange()} test={state} ValidateResponse={(answer, visible) => ValidateResponse(answer, visible)} isEnded={state.isEnded} />;
        default:
          return 'erreur d affichage'
      }
    }
    return (

      <div className="QuestionnaireInit
         container-fluid">

        <div className={visible ? 'modalOpacity' : undefined}>
          {
            state.isEnded ? <Fin /> : handleComponent()
          }
        </div>
        <TimeOutModal visible={visible} TimedOutNav={() => TimedOutNav()} />
      </div>

    )
  }

export default QuestionnaireInit
  ;
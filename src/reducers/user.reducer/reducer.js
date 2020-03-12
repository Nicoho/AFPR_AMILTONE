import axios from 'axios';
import { getTest } from '../../app/utils/utils.user'

const initialState = {
  id_test: 1,
  level: "",
  language: "",
  duration: "",
  questions: [],
  isEnded: false,
  answers: [],
  indexQuestion: 0,
  timer: "",
  loading: false,
  error: null
};

const questionnaire = (state, action) => {
  switch (action.type) {
    case "getQuestionnaire":
      return {
        ...state,
        ...action.payload,
        questions: action.payload.questions,
        timer: action.payload.questions[0].duration
      };
    case "getAnswer":
      let answersTemp = [...state.answers];
      answersTemp.push(action.payload);
      return {
        ...state,
        answers: answersTemp
      };
    case "setIndex":
      return {
        ...state,
        indexQuestion: state.indexQuestion + 1,
        timer: state.questions[state.indexQuestion + 1].duration
      };
    case "decreaseTime":
      return { ...state, timer: state.timer - 1000 };
    case "apiCallStart":
      return { ...state, loading: true };
    case "apiCallSucess":
      return { ...state, loading: false };
    case "apiCallError":
      return { ...state, error: action.payload };
    case "endTest":
      return { ...state, isEnded: true };
    default:
      return state;
  }
};

const setCheckedPossibilities = answers => {
  let result = [...answers];
  return result.map(answer => {
    return { ...answer, isChecked: false };
  });
};


const getTestforMounting = (dispatch, quiz_id) => {
  //dispatch({ type: "apiCallStart" })
  axios.get(`${getTest}tests/${quiz_id}`)
    .then(res => {
      dispatch({ type: "getQuestionnaire", payload: res.data })
    }).catch(err => console.log('err', err))
}

const postAnswer = (responses_user, id_user, id_test, id_result) => {
  axios.put(`${getTest}user/${id_user}/test/${id_test}/result/${id_result}`, { responses_user },
    { headers: { 'Content-Type': 'application/json' } })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}


const putTestIsStarted = (id_result) => {
  axios.put(`${getTest}start/${id_result}`)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

const IsStartedCheck = (id_result, callback) => {

  axios.get(`${getTest}check/${id_result}`)
    .then(res => callback(res.data))
    .catch(err => console.log('err', err))
}

export { initialState, questionnaire, setCheckedPossibilities, getTestforMounting, postAnswer, putTestIsStarted, IsStartedCheck };



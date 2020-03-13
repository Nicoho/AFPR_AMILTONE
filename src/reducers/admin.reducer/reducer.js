import axios from 'axios';
import { getTest } from '../../app/utils/utils.user'

const initialState = {
  dashbord: "listQuestion"
};

const admin = (state, action) => {
  switch (action.type) {
    case "CHANGE_DASH":
      return { ...state, dashbord: action.payload };
    default:
      return state;
  }
};

const getQuestions = (callback) => {
  axios.get(`${getTest}questions`)
    .then(res => callback(res.data))
    .catch(err => console.log('err', err))
}


export { initialState, admin, getQuestions };

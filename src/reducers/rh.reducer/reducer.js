import Axios from 'axios'


const initialState = {
  dashbord: "list",
  modalVisibel: false,
  userID: "",
  userData: [],
  detailInModal: []
};

const rh = (state, action) => {
  switch (action.type) {
    case "CHANGE_DASH":
      return { ...state, dashbord: action.payload };
    case "SET_MODAL_VISIBLE":
      return { ...state, modalVisibel: action.payload };
    case "SET_ID_USER":
      return {
        ...state,
        userID: action.payload
      };
    case "DETAILS_IN_MODAL":
      return { ...state, detailInModal: action.payload };
    default:
      return state;
  }
};

// recupere les info user
const getUser = (userID) => {
  return Axios.get(`http://192.168.1.52:5000/users/${userID}`);
};

// recupere tout les resultat user
const getUserResult = (userID) => {
  return Axios.get(`http://192.168.1.52:5000/users/${userID}/result`);
}

export { initialState, rh, getUser, getUserResult };

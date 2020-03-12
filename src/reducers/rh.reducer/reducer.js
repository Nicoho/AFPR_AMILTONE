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

export { initialState, rh };

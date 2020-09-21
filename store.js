import { createStore } from "redux";

let lastid = 10000;
// reducer
const registerReducer = (state = [], action) => {
  if (action.type === "REGISTER_SUCCESS") {
    return [
      ...state,
      {
        id: ++lastid,
        details: action.payload,
      },
    ];
  } else if (action.type === "REGISTER_FAIL") {
    return state;
  }

  return state;
};

// store create
const store = createStore(registerReducer);

export default store;

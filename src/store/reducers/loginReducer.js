import { CHECK_FORM } from "../types";

const initialState = {
  username: "developer21",
  password: "123456",
  loginStatus: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_FORM:
      if (
        action.payload.username === state.username &&
        action.payload.password === state.password
      ) {
        return {
          ...state,
          loginStatus: true,
        };
      } else {
        return {
          ...state,
          loginStatus: false,
        };
      }
    default:
      return state;
  }
};

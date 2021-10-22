import { CHECK_FORM } from "../types";

export const checkForm = (state) => async (dispatch) => {
  dispatch({
    type: CHECK_FORM,
    payload: state,
  });
};

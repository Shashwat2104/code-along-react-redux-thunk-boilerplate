import { SUCCESS, ERROR } from "./actionTypes";

const initialData = {
  users: [],
  error: null,
};

export const reducer = (state = initialData, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

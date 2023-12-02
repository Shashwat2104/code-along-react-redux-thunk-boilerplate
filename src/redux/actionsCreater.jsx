import { ERROR, SUCCESS } from "./actionTypes";
import axios from "axios";

export const getData = (data) => {
  return {
    type: SUCCESS,
    payload: data,
  };
};

export const setError = () => {
  return {
    type: ERROR,
    payload: "Something went wrong",
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(getData(data));
    } catch (error) {
      dispatch(setError());
    }
  };
};

import axios from "axios";
import { loadData, loadDataErr, loading } from "./todoSlice";
export function getData() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));
      let res = await axios.get(
        "https://669b082e276e45187d347a71.mockapi.io/todos"
      );
      let data = res.data;
      dispatch(loadData(data));
      dispatch(loadDataErr(""));
    } catch (error) {
      dispatch(loadDataErr(error.message));
    } finally {
      dispatch(loading(false));
    }
  };
}

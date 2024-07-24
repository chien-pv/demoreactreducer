import { DELELE } from "./reducer";
export function deleteTodo(id) {
  console.log(DELELE);
  return {
    type: DELELE,
    payload: id,
  };
}

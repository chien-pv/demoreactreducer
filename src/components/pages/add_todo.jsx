import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useId } from "react";
import { addTodo } from "../../redux/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  let dispatch = useDispatch();
  let [taskName, setTaskName] = useState("");

  return (
    <>
      <TextField
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
        label="Task Name"
        id="outlined-size-small"
        size="small"
      />
      <Button
        onClick={() => {
          let obj = {
            id: 12,
            taskName,
          };

          dispatch(addTodo(obj));
        }}
        variant="outlined"
      >
        Add
      </Button>
    </>
  );
}

export default AddTodo;

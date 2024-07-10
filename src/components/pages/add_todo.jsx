import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function AddTodo({ handleClick }) {
  let [taskName, setTaskName] = useState("");
  function handleChaneTask(e) {
    setTaskName(e.target.value);
  }

  return (
    <>
      <TextField
        value={taskName}
        onChange={handleChaneTask}
        label="Task Name"
        id="outlined-size-small"
        size="small"
      />
      <Button onClick={() => handleClick(taskName)} variant="outlined">
        Add
      </Button>
    </>
  );
}

export default AddTodo;

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function AddTodo() {
  return (
    <>
      <TextField label="Task Name" id="outlined-size-small" size="small" />
      <Button variant="outlined">Add</Button>
    </>
  );
}

export default AddTodo;

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../../redux/todoSlice";
import { useState } from "react";
function ItemTodo({ id, taskName, index }) {
  let dispatch = useDispatch();
  let [isEdit, setIsEdit] = useState(false);
  let [text, setText] = useState("");
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="right">{id}</TableCell>
        {isEdit ? (
          <TableCell align="right">
            <input
              onChange={(e) => {
                setText(e.target.value);
              }}
              defaultValue={taskName}
            ></input>
          </TableCell>
        ) : (
          <TableCell align="right">{taskName}</TableCell>
        )}

        <TableCell align="right">
          <Button
            onClick={() => {
              if (isEdit) {
                dispatch(editTodo({ index, taskName: text }));
                setIsEdit(false);
              } else {
                setIsEdit(true);
              }
            }}
            size="small"
            variant="outlined"
            color="success"
          >
            {isEdit ? "Save" : <EditIcon />}
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteTodo(id));
            }}
            size="small"
            variant="outlined"
            color="error"
          >
            <DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default ItemTodo;

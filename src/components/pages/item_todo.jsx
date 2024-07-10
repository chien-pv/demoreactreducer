import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function ItemTodo({ id, taskName, handleDelete }) {
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell align="right">{id}</TableCell>
        <TableCell align="right">{taskName}</TableCell>
        <TableCell align="right">
          <Button size="small" variant="outlined" color="success">
            <EditIcon />
          </Button>
          <Button
            onClick={() => handleDelete(id)}
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

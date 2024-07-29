import ItemTodo from "./item_todo";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../redux/action_thunk";
// import { getData } from "../../redux/action";
import Alert from "@mui/material/Alert";

function ListTodo() {
  let dispatch = useDispatch();
  let todos = useSelector((state) => state.todos.todosData);
  let errMessage = useSelector((state) => state.todos.mesageErrors);
  let isLoading = useSelector((state) => state.todos.isloading);

  console.log(todos);

  let datas = todos.map((item, index) => (
    <ItemTodo index={index} key={item.id} {...item} />
  ));

  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <>
      {isLoading && <span className="loader"></span>}
      {errMessage && <Alert severity="error">{errMessage}</Alert>}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Task Name</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{datas}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListTodo;

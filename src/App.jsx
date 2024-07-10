import "./App.css";
import AddTodo from "./components/pages/add_todo";
import ListTodo from "./components/pages/list_todo";
import "./styles/index.scss";
import { useState, useReducer } from "react";

let initState = [
  {
    id: 1,
    taskName: "Học JS",
  },
  {
    id: 2,
    taskName: "Học CSS",
  },
  {
    id: 3,
    taskName: "Học HTML",
  },
];

function App() {
  const [todos, dispatch] = useReducer(todosReducer, initState);

  function todosReducer(todos, action) {
    switch (action.type) {
      case "add":
        let obj = {
          id: 12,
          taskName: action.payload,
        };
        return [...todos, obj];
      case "delete":
        return todos.filter((a) => a.id !== action.payload);
      default:
        return todos;
    }
  }

  function handleDelete(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  function handleClick(taskName) {
    dispatch({
      type: "add",
      payload: taskName,
    });
  }

  return (
    <>
      <h1>List TODO</h1>
      <div className="content">
        <AddTodo handleClick={handleClick} />
        <ListTodo handleDelete={handleDelete} todos={todos} />
      </div>
    </>
  );
}
export default App;

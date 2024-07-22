import "./App.css";
import ResponsiveAppBar from "./components/app-bar";
import ColorInversionFooter from "./components/footer";
import "./styles/index.scss";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
import { TodoContext } from "./contexts/todo_context";

const instance = axios.create({
  baseURL: "https://66934fa8c6be000fa07ab9ab.mockapi.io/",
});

const InitState = ["Hoc JS", "Hoc CSS"];

function App() {
  // let [todos, setTodo] = useState(["Hoc JS", "Hoc CSS"]);

  const [todos, dispatch] = useReducer(reducer, InitState);
  function reducer(state, action) {
    switch (action.type) {
      case "UPDATE":
        return [];
      default:
        return state;
    }
  }

  // function updateTodo() {
  //   setTodo([]);
  // }
  useEffect(() => {
    instance
      .get("/todos", {
        params: {
          page: 1,
          limit: 4,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <TodoContext.Provider value={{ datas: todos, dispatch }}>
        <ResponsiveAppBar />
        <main>
          <Outlet />
        </main>
        <ColorInversionFooter />
      </TodoContext.Provider>
    </>
  );
}
export default App;

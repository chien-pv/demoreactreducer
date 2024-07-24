import AddTodo from "./pages/add_todo";
import ListTodo from "./pages/list_todo";

function Home() {
  return (
    <div className="container">
      <AddTodo />
      <ListTodo />
    </div>
  );
}
export default Home;

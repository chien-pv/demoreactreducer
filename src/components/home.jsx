import { useForm } from "react-hook-form";
import { TodoContext } from "../contexts/todo_context";
import { useContext } from "react";

function Home() {
  let { datas, dispatch } = useContext(TodoContext);
  console.log("Data Todo: ", datas);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(watch("uname"));

  function login(data) {
    console.log(data);
  }
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "UPDATE" });
        }}
      >
        Update Todo
      </button>
      <br />

      <form onSubmit={handleSubmit(login)}>
        <label> User Name</label>
        <input {...register("uname")} />
        <label> Password</label>
        <input
          {...register("pass", { required: true, minLength: 8 })}
          type="password"
        />
        {errors.pass && <span>Du lieu nhap khong dung</span>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
export default Home;

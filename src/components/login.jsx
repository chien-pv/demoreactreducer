import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form-login">
      <h2>Login</h2>
      <br />
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
        id="outlined-required"
        label="Email"
      />
      <br /> <br />
      <TextField
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        required
        id="outlined-required"
        label="Pasword"
      />
      <br />
      <br />
      <Button
        onClick={async () => {
          try {
            let res = await axios.post("http://localhost:8000/auth/login", {
              email,
              password,
            });
            let access_token = res.data.access_token;
            localStorage.setItem("access_token", access_token);
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }}
        variant="outlined"
      >
        Submit
      </Button>
    </div>
  );
}

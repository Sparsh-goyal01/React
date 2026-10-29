import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const { setUser } = useContext(UserContext); // setUser comes from UserContextProvider.jsx where we are passing the state of user

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ Username, Password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={Username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {"  "}
      <input
        type="text"
        placeholder="Password"
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

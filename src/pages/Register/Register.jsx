import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Register.scss";

import bg from "../../assets/component.png";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleCreateLogin(e) {
    e.preventDefault();

    const data = {
      name,
      username,
      password,
    };

    console.log(data)
    history.push("/");
  }

  return (
    <div className="login-container">
      <div className="content">
        <img src={bg} alt="laranjinha e acerola" />
      </div>
      <div className="login-form">
        <span>Getting started</span>
        <form onSubmit={handleCreateLogin}>
          <label>Full name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Users name or email</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Create password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../Login/apiRoute";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate('/home/index', { replace: true });
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = { username, password };
      const loginResponse = await loginUser(user);
      localStorage.setItem("isLoggedIn", "true"); 
      navigate('/home/index', { replace: true });
      console.log(loginResponse);
      setError(null);
    } catch (error) {
      setError("Invalid username or password.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

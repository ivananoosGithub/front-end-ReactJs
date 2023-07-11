import React, { useState } from "react";
import "../../App.css";
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../Login/apiRoute";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); 
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = { username, password };
      const loginResponse = await loginUser(user);

      // Handle successful login response
      navigate('/home/index', { replace: true }); // Navigate to the Home page and replace the current URL
      console.log(loginResponse);
      setError(null)
    } catch (error) {
      // Handle error response
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

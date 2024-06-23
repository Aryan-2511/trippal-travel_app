import { useState } from "react";
import Button from "../utils/Button";
import "./Login.css";
import { loginUser } from "../services/api";
function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error,setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateInput(credentials)) {
      try {
        const response = await loginUser(credentials);
        console.log("Login successful:", response);
        onLogin(false); // Close the form after successful login
      } catch (error) {
        console.error("Login failed:", error);
        setError("Login failed. Please try again.");
      }
    } else {
      setError("Please enter valid credentials.");
    }
  }

  function handleInput(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  function validateInput({ username, password }) {
    if (!username || !password) return false;
    if (username.length < 2) return false;
    return true;
  }
  return (
    <form method="POST" onSubmit={handleSubmit} className="LoginForm">
      <div className="login-input">
        <input
          type="text"
          required
          name="username"
          placeholder="Enter your username"
          onChange={handleInput}
        />
        <input
          type="password"
          required
          name="password"
          placeholder="Enter your password"
          onChange={handleInput}
        />
      </div>
      <div className="login-btns ">
        <Button
          size="large"
          variation="secondary"
          onClick={() => onLogin(false)}
        >
          Back
        </Button>
        <Button size="large" variation="primary">
          Login
        </Button>
      </div>
    </form>
  );
}

export default Login;

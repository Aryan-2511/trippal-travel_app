import Button from "../utils/Button";
import "./Login.css";
function Login({ isLoginActive, onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log();
  }
  return (
    <form method="POST" onSubmit={handleSubmit} className="LoginForm">
      <div className="login-input">
        <input
          type="text"
          required
          name="username"
          placeholder="Enter your username"
        />
        <input
          type="password"
          required
          name="password"
          placeholder="Enter your password"
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

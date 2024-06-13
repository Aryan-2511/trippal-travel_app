import "./Login.css";
function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log();
  }
  return (
    <form method="POST" onSubmit={handleSubmit} className="LoginForm">
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
    </form>
  );
}

export default Login;

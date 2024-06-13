import { useState } from "react";
import "./SignupForm.css";
import Button from "../utils/Button";

function SignupForm({ isFormOpen, handleForm }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    origin: "",
    username: "",
    password: "",
  });

  function handleInput(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  function onFormChange() {
    handleForm(!isFormOpen);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
  }
  return (
    <>
      <form className="SignupForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          name="username"
          placeholder="Set your username"
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          name="password"
          placeholder="Set your password"
          onChange={(e) => handleInput(e)}
        />
        <input type="text" />
        <input type="text" />
        <Button size="large" variation="secondary" onClick={onFormChange}>
          &larr; Back
        </Button>
        <Button size="large" variation="primary">
          Create account
        </Button>
      </form>
    </>
  );
}

export default SignupForm;

import { useState } from "react";
import "./SignupForm.css";
import Button from "../utils/Button";

function SignupForm({ isFormOpen, handleForm }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  });

  function handleChange(e) {
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
      <form className="SignupForm" method="POST" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Set your username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            placeholder="Set your password"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter your contact"
            name="contact"
            onChange={handleChange}
          />
        </div>
        <div className="form-btns flex-center">
          <Button size="large" variation="secondary" onClick={onFormChange}>
            &larr; Back
          </Button>
          <Button size="large" variation="primary">
            Create account
          </Button>
        </div>
      </form>
    </>
  );
}

export default SignupForm;

import { useState } from "react";
import "./SignupForm.css";
import Button from "../utils/Button";
import { registerUser } from "../services/api";

function SignupForm({ isFormOpen, handleForm }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    username: "",
    password: "",
  });

  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");
  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }
  function onFormChange() {
    handleForm(!isFormOpen);
  }
  function validateInput({ name, email, contact, username, password }) {
    if (!name || !password || !email || !contact || !username) return false;
    if (
      username.length < 2 ||
      email.length < 2 ||
      contact.length != 10 ||
      password.length < 2
    ) {
      return false;
    }
    if (!email.includes("@")) {
      return false;
    }
    return true;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (validateInput(userData)) {
      try {
        const response = await registerUser(userData);
        setSuccess("Signup successful! You can now log in.");
        setError("");
        console.log("Signup successful:", response);
      } catch (error) {
        setError("Signup failed. Please try again.");
        setSuccess("");
        console.error("Signup failed:", error);
      }
    } else {
      setError("Invalid value entered!");
      setSuccess("");
    }
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
            type="password"
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

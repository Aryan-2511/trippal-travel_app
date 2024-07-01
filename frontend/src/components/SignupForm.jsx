import "./SignupForm.css";
import { useState } from "react";
import Button from "../ui/Button";
import { registerUser } from "../services/api";
import useLoading from "../hooks/useLoading";
import Loader from "../components/Loader";
import SuccessFulSignup from "./SuccessfulSignup";

const initialData = {
  name: "",
  email: "",
  contact: "",
  username: "",
  password: "",
};

function SignupForm({ isFormOpen, handleForm }) {
  const [userData, setUserData] = useState(initialData);
  const [isLoading, withLoading] = useLoading();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      await withLoading(async () => {
        try {
          const response = await registerUser(userData);
          setSuccess("Signup successful! You can now log in.");
          setError("");
          setUserData(initialData);
          console.log("Signup successful:", response);
        } catch (error) {
          setError("Signup failed. Please try again.");
          setSuccess("");
          console.error("Signup failed:", error);
        }
      });
    } else {
      setError("Invalid value entered!");
      setSuccess("");
    }
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form className="SignupForm" method="POST" onSubmit={handleSubmit}>
          <div className="form-inputs">
            <input
              type="text"
              name="name"
              value={userData.name}
              placeholder="Enter your name"
              onChange={handleChange}
            />
            <input
              type="text"
              name="email"
              value={userData.email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              value={userData.username}
              placeholder="Set your username"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={userData.password}
              placeholder="Set your password"
              onChange={handleChange}
            />
            <input
              type="number"
              name="contact"
              value={userData.contact}
              placeholder="Enter your contact"
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
      )}

      {!error && <SuccessFulSignup message={success} />}
    </>
  );
}

export default SignupForm;

import "./Signup.css";
import Logo from "../components/Logo";
import BigLogo from "../components/BigLogo";
import Button from "../utils/Button";
import { useState } from "react";
import SignupForm from "../components/SignupForm";
import SignupCreateAccountButtons from "../components/SignupCreateAccountButtons";
import Login from "./Login";
// import Loader from "../components/Loader";

function Signup() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(true);

  function handleFormOpen() {
    setIsFormOpen(true);
  }
  function handleIsLoginActive(val) {
    setIsLoginActive(val);
  }
  return (
    <div className="Signup">
      <div className="signup-nav">
        <Logo width={70} height={38} />
        {isLoginActive || (
          <Button variation="primary" onClick={() => handleIsLoginActive(true)}>
            Login &rarr;
          </Button>
        )}
      </div>
      <div className="signup-main flex-column-center">
        <div className="signup-header flex-column-center">
          <h2 className="signup-header-heading">
            Sign up and Let Your <span>Adventures</span> Begin!
          </h2>
          {isFormOpen && !isLoginActive ? (
            <SignupForm isFormOpen={isFormOpen} handleForm={setIsFormOpen} />
          ) : (
            <BigLogo />
          )}
        </div>
        {isLoginActive ? (
          <Login isLoginActive={isLoginActive} onLogin={handleIsLoginActive} />
        ) : (
          <SignupCreateAccountButtons
            isFormOpen={isFormOpen}
            onFormOpen={handleFormOpen}
          />
        )}
      </div>
    </div>
  );
}

export default Signup;

import "./Signup.css";
import Logo from "../components/Logo";
import BigLogo from "../components/BigLogo";
import Button from "../utils/Button";
import GoogleLogo from "../utils/GoogleLogo";
import { useState } from "react";
import SignupForm from "../components/SignupForm";
// import Loader from "../components/Loader";

function Signup() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  function handleClick() {
    setIsFormOpen(true);
  }
  return (
    <div className="Signup">
      <div className="signup-nav">
        <Logo width={70} height={38} />
        <Button variation="primary">Login &rarr;</Button>
      </div>
      <div className="signup-main flex-column-center">
        <div className="signup-header flex-column-center">
          <h2 className="signup-header-heading">
            Sign up and Let Your <span>Adventures</span> Begin!
          </h2>
          {isFormOpen ? (
            <SignupForm isFormOpen={isFormOpen} handleForm={setIsFormOpen} />
          ) : (
            <BigLogo />
          )}
        </div>

        <div className="signup-create_account flex-column">
          {isFormOpen || (
            <p className="create_account_text">
              Let&apos;s start by creating your account first
            </p>
          )}
          <div className="create_account-btns flex-column">
            {isFormOpen || (
              <Button size="large" onClick={() => handleClick()}>
                Signup
              </Button>
            )}
            <p>or</p>
            <Button size="large" variation="secondary">
              <GoogleLogo />
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

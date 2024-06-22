import "./SignupCreateAccountButtons.css";
import Button from "../utils/Button";
import GoogleLogo from "../utils/GoogleLogo";

function SignupCreateAccount({ isFormOpen, onFormOpen }) {
  return (
    <div className="signup-create_account flex-column">
      {isFormOpen || (
        <p className="create_account_text">
          Let&apos;s start by creating your account first
        </p>
      )}
      <div className="create_account-btns flex-column">
        {isFormOpen || (
          <Button size="large" onClick={() => onFormOpen()}>
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
  );
}

export default SignupCreateAccount;

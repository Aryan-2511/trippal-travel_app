import styled from "styled-components";

const StyledAccount = styled.div`
  background-image: linear-gradient(135deg, #e0e0e0 0%, #cfcfcf 100%);
  box-shadow: 2px 3px 16px rgba(0, 0, 0, 0.12);
  color: #0a2e36;
  width: 50rem;
  padding: 2.4rem;
  margin: 0 auto;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 18.8rem);

  .account-header {
    text-align: center;
    font-size: 1.6rem;
    flex-basis: 20%;
    border-bottom: 0.5px solid #c0c0c0;
    padding-bottom: 1rem;
  }

  .account-header-subtext {
    font-size: 1.4rem;
    margin-top: 0.6rem;
    color: #717171;
  }

  .account-information {
    flex-basis: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .account-info-item {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 1.4rem;
  }

  .account-info-label {
    font-weight: bold;
    color: #0a2e36;
  }

  .account-info-value {
    color: #717171;
  }
`;

function Account() {
  return (
    <StyledAccount>
      <div className="account-header">
        <h3>Account Info</h3>
        <p className="account-header-subtext">
          Your account information is displayed below
        </p>
      </div>
      <div className="account-information">
        <div className="account-info-item">
          <p className="account-info-label">Name</p>
          <p className="account-info-value">Aman Singh</p>
        </div>
        <div className="account-info-item">
          <p className="account-info-label">Username</p>
          <p className="account-info-value">aman26singh48</p>
        </div>
        <div className="account-info-item">
          <p className="account-info-label">Password</p>
          <p className="account-info-value">******</p>
        </div>
        <div className="account-info-item">
          <p className="account-info-label">Email</p>
          <p className="account-info-value">aman@gmail.com</p>
        </div>
        <div className="account-info-item">
          <p className="account-info-label">Contact</p>
          <p className="account-info-value">Aman Singh</p>
        </div>
      </div>
    </StyledAccount>
  );
}

export default Account;

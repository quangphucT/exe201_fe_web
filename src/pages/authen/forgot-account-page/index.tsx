import './index.scss';

const ForgotPasswordPage = () => {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-content">
        <h1 className="main-title">Reset your password</h1>
        <p className="description">
          Enter your email address and we’ll send you instructions to reset your password.
        </p>

        <form className="forgot-password-form">
          <input
            type="email"
            placeholder="Email address"
            className="email-input"
            required
          />
          <button type="submit" className="continue-button">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
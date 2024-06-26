import './Security.css';

function Security() {
  return (
    <div class="body">
      <div class="login-container">
        <div class="login-header">
            <h4>SECURITY</h4>
            <h2>Email verification</h2>
            <p>Enter the 6-digit code sent to jas***@zentactics.io</p>
        </div>
        <div class="login-form">
            <form>
                <div class="form-group">
                    <label for="username">Email Verification code</label>
                    <input type="number" id="username" placeholder="Enter the code"></input>
                </div>
                <div class="button-group">
                    <button class="submit-button">SUBMIT</button>
                    <button class="verification_unavailable">Security verification unavailable?</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Security;

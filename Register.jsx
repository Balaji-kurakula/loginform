import './Register.css';

function Register() {
  return (
    <div class="body">
      <div class="login-container">
        <div class="login-header">
            <h4>REGISTER</h4>
            <h2>Create an Account</h2>
            <p >Use one of the following options to register</p>
        </div>
        <div class="login-form">
            <form>
                <div class="form-group">
                    <label for="username">Email/Phone number</label>
                    <input type="text" id="username" placeholder="mobile number or E-mail"></input>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password"></input>
                </div>
                <form action="/action_page.php" class='form-group dateofbirth'>
                    <label for="birthday">Date of Birth</label>
                    <input type="date" id="birthday" name="birthday"></input>
                </form>
                <div class="button-group">
                    <button class="continue-button">CONTINUE</button>
                    <div class="or"><h3>or</h3></div>
                    <button class="google">CONTINUE WITH GOOGLE</button>
                    <button class="telegram">CONTINUE WITH TELEGRAM</button>
                </div>
                
            </form>
            <div class="forgot-password_and_sign_up">
                <a href="" class="forgot-password">Forgot Password?</a>
                <a href="">Login</a>
            </div>
            <div>
              <h6>By clicking Sign Up, you are agreeing to <span>Terms of Service</span> and are acknowledging our <span>Privacy Policy</span>applies</h6>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Register;

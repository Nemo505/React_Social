import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Maple Social</h3>
                <span className="loginDesc">
                    Connect With people around the World
                </span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                <input type="Email" className="loginInput" />
                <input type="Password" className="loginInput" />
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create New Account</button>
              </div>
            </div>
        </div>
    </div>
  )
}

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(credentials); // Pass the whole 'credentials' object
    navigate("/dashboard"); // Redirect to dashboard after successful login
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="title">Login</h1>
          <p className="subtitle">Please enter your login details to sign in</p>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
              required
            />
          </div>
          <div className="input-wrapper">
            <div className="password-container">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
              <button type="button" className="eye-button">
                <img
                  src="https://dashboard.codeparrot.ai/api/image/Z8oNNqwi-41-yX-6/🦆-icon.png"
                  alt="toggle password"
                  className="eye-icon"
                />
              </button>
            </div>
          </div>
          <div className="options-row">
            <label className="checkbox-label">
              <input type="checkbox" name="keepLoggedIn" />
              <span>Keep me logged in</span>
            </label>
            <button type="button" className="forgot-password">
              Forgot password?
            </button>
          </div>
          <button type="submit" className="login-button">
            Log In
          </button>
          <div className="signup-container">
            <span className="signup-text">Don't have an account? </span>
            <Link to="/register">
              <button type="button" className="signup-button">
                Sign up
              </button>
            </Link>
          </div>
        </form>
        <div className="social-login-options">
          <div className="divider-container">
            <div className="line" />
            <span className="text">or continue with</span>
            <div className="line" />
          </div>
          <div className="social-buttons-container">
            <button className="social-button">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z8oNNqwi-41-yX-6/rectangl-4.png"
                alt="Google"
                className="social-icon"
              />
            </button>
            <button className="social-button">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z8oNNqwi-41-yX-6/rectangl-3.png"
                alt="Microsoft"
                className="social-icon"
              />
            </button>
            <button className="social-button">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z8oNNqwi-41-yX-6/rectangl-2.png"
                alt="Apple"
                className="social-icon"
              />
            </button>
            <button className="social-button">
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z8oNNqwi-41-yX-6/rectangl-5.png"
                alt="Github"
                className="social-icon"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img
          src="../assets/zdadaza.png"
          alt="Background"
          className="background-image"
        />
      </div>
    </div>
  );
};

export default LoginPage;

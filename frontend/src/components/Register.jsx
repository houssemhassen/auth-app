import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const signup = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signup({ email, password });
    navigate("/dashboard");
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <form className="login-form" onSubmit={handleSubmit}>
          <h1 className="title">Sign up</h1>
          <p className="subtitle">Please enter your  details to sign up</p>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              placeholder="Full Name" 
              value={fullname} 
              onChange={(e) => setFullname(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <input 
              type="email" 
              name="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="input-wrapper">
            <div className="password-container">
              <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
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
          <div className="input-wrapper">
            <div className="password-container">
              <input 
                type="password" 
                name="confirmpassword" 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChange={(e) => setPassword(e.target.value)} 
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
          <button type="submit" className="login-button">Sign up</button>
          <div className="signup-container">
            <span className="signup-text">have an account already? </span>
            <Link to="/login">
              <button type="button" className="signup-button">Login</button>
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
        <img src="../assets/zdadaza.png" alt="Background" className="background-image" />
      </div>
    </div>
  );
};

export default signup;

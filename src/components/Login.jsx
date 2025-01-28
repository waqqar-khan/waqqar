import { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function Login({ onLogin, error, resetError }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
    setIsSubmitted(true);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    resetError(); // Reset error when user starts typing
  };

  if (isSubmitted && localStorage.getItem("isLoggedIn") === "true") {
    return <Navigate to="/admin/adminPage" />;
  }

  return (
    <div className="login-page-container">
      <h2 className="login-h2">Login to your account</h2>
      <form onSubmit={handleSubmit} className="login-page-form">
        <input
          type="text"
          value={username}
          onChange={(e) => handleInputChange(e, setUsername)}
          placeholder="Username"
          className="login-page-input-field"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
          placeholder="Password"
          className="login-page-input-field"
          required
        />
        <button type="submit" className="login-page-button">
          Login
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
  resetError: PropTypes.func.isRequired,
};

export default Login;

import { useState } from "react";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username, password });
    setIsSubmitted(true);
  };

  if (isSubmitted && localStorage.getItem("isLoggedIn") === "true") {
    return <Navigate to="/admin/adminPage"/>;
  }  

  return (
    <div className="login-page-container">
      <h2 className="login-h2">Login to your account</h2>
      <form onSubmit={handleSubmit} className="login-page-form">
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
          className="login-page-input-field"
          required
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          className="login-page-input-field"
          required
        />
        <button type="submit" className="login-page-button">Login</button>
      </form>
    </div>
  );
}

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;

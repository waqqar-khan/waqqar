import { useState, useEffect } from "react";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [loginError, setLoginError] = useState("");

  const loginUser = (credentials) => {
    if (
      credentials.username === "admin" &&
      credentials.password === "password5"
    ) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("lastActive", Date.now().toString());
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const resetError = () => setLoginError("");

  const logoutUser = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("lastActive");
  };

  useEffect(() => {
    const checkInactivity = () => {
      const lastActive = localStorage.getItem("lastActive");
      if (
        lastActive &&
        Date.now() - parseInt(lastActive, 10) > 48 * 60 * 60 * 1000
      ) {
        logoutUser();
      }
    };

    checkInactivity();
    const interval = setInterval(checkInactivity, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("lastActive", Date.now().toString());
    }
  }, [isLoggedIn]);

  return { isLoggedIn, loginError, loginUser, resetError, logoutUser };
};

export default useAuth;

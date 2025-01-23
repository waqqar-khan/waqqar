import { useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import DummyAPI from "./components/DummyAPI";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import ReactJSBlog from "./components/blogs/ReactJSBlog";
import JavaScriptBlog from "./components/blogs/JavaScriptBlog";
import NextJSBlog from "./components/blogs/NextJSBlog";
import SystemDesignBlog from "./components/blogs/SystemDesignBlog";
import MiscellaneousBlog from "./components/blogs/MiscellaneousBlog";
import ErrorBoundary from "./utils/ErrorBoundary";
import NotFound from "./utils/NotFound";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const loginUser = (credentials) => {
    if (credentials.username === "admin" && credentials.password === "password") {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
    } else {
      console.error("Invalid credentials");
    }
  };

  const logoutUser = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/javascript" element={<JavaScriptBlog />} />
            <Route path="/reactjs" element={<ReactJSBlog />} />
            <Route path="/nextjs" element={<NextJSBlog />} />
            <Route path="/system-design" element={<SystemDesignBlog />} />
            <Route path="/miscellaneous" element={<MiscellaneousBlog />} />
            <Route path="/login" element={<Login onLogin={loginUser} />} />
            <Route
              path="/admin/adminPage"
              element={isLoggedIn ? <AdminPage onLogout={logoutUser} /> : <Navigate to="/login"/>}
            />
            <Route path="/admin/dummyAPI" element={isLoggedIn ? <DummyAPI onLogout={logoutUser} /> : <Navigate to="/login"/>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

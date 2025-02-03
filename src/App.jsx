import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Login from "./components/Login";
import AdminPage from "./components/AdminPage";
import ReactJSBlog from "./components/blogs/ReactJSBlog";
import JavaScriptBlog from "./components/blogs/JavaScriptBlog";
import NextJSBlog from "./components/blogs/NextJSBlog";
import SystemDesignBlog from "./components/blogs/SystemDesignBlog";
import MiscellaneousBlog from "./components/blogs/MiscellaneousBlog";
import ErrorBoundary from "./utils/ErrorBoundary";
import NotFound from "./utils/NotFound";
import PracticeAPI from "./components/PracticeAPI";
import ReactInterviewCode from "./components/ReactInterviewCode";
import JavaScriptInterviewCode from "./components/JavaScriptInterviewCode";
import DailyRandomCode from "./components/DailyRandomCode";
import PracticeInterviewCode from "./components/PracticeInterviewCode";
import useAuth from "./hooks/useAuth";
import "./App.css";

function App() {
  const { isLoggedIn, loginError, loginUser, resetError, logoutUser } =
    useAuth();

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
            <Route
              path="/login"
              element={
                <Login
                  onLogin={loginUser}
                  error={loginError}
                  resetError={resetError}
                />
              }
            />
            <Route
              path="/admin/AdminPage"
              element={
                isLoggedIn ? (
                  <AdminPage onLogout={logoutUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/Practice+API"
              element={
                isLoggedIn ? (
                  <PracticeAPI onLogout={logoutUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/React+Interview+Coding+Questions"
              element={
                isLoggedIn ? (
                  <ReactInterviewCode onLogout={logoutUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/JavaScript+Interview+Coding+Questions"
              element={
                isLoggedIn ? (
                  <JavaScriptInterviewCode onLogout={logoutUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/Daily+Random+Interview+Coding+Questions"
              element={
                isLoggedIn ? (
                  <DailyRandomCode onLogout={logoutUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/admin/Practice+Interview+Coding+Questions"
              element={
                isLoggedIn ? (
                  <PracticeInterviewCode onLogout={logoutUser} />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

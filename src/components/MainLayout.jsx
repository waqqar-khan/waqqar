import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";
import "./Login.css";
import { useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app-container">
      <Header />
      <main className="content">
        {isLoginPage ? (
          <div className="form-container">
            <Outlet />
          </div>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;


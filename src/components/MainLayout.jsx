import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../App.css";

const MainLayout = () => {
  return (
    <div className="app-container">
      <Header />
      <main className="content">
        <div className="form-container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlogButton from "./blogs/BlogButton";
import "../App.css";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isBlogPath = [
    "/javascript",
    "/reactjs",
    "/nextjs",
    "/system-design",
    "/miscellaneous"
  ].includes(location.pathname);

  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed w-full flex justify-between items-center p-4 bg-purple-700 text-white z-50">
      <div className="header-content">
        <Link to="/">
          <h1
            className={`text-2xl font-bold font-sans transition-colors ${
              isHomePage ? "text-white cursor-default" : "text-white hover:cursor-pointer hover:text-yellow-500"
            }`}
          >
            WAQQAR KHAN
          </h1>
        </Link>
      </div>
      <div className="flex items-center">
        {isBlogPath && (
          <div className="hidden md:flex">
            <BlogButton />
          </div>
        )}
        {isBlogPath && (
          <button
            className="md:hidden text-xl font-medium pr-4"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        )}
      </div>
      {isMobileMenuOpen && isBlogPath && (
        <div className="md:hidden absolute top-full right-0 w-full bg-custom-header-hex pb-2 transition-transform transform">
          <BlogButton />
        </div>
      )}
    </header>
  );
};

export default Header;

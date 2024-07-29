import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import BlogButton from "./blogs/BlogButton";
import "../App.css";

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  const isBlogPath =
    currentPath === "/javascript" ||
    currentPath === "/reactjs" ||
    currentPath === "/nextjs" ||
    currentPath === "/system-design" ||
    currentPath === "/miscellaneous";

  return (
    <header className="fixed w-full flex justify-between items-center p-4 bg-custom-header-hex text-white z-50">
      <div className="header-content">
        <Link to="/" className="hover:cursor-pointer focus:outline-none">
          <h1 className="text-xl font-bold font-sans transition-colors hover:text-yellow-500 focus:text-white">
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
        <div className="md:hidden absolute top-full right-0 w-full bg-custom-header-hex pb-2">
          <BlogButton />
        </div>
      )}
    </header>
  );
};

export default Header;

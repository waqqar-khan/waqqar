import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <h1>WAQQAR KHAN</h1>
      </div>
      <div className="pr-4 text-xl font-medium">
        <Link to="/">Home</Link>
      </div>
    </header>
  );
};

export default Header;

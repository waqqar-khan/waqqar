import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function AdminPage({ onLogout }) {
  return (
    <div className="adminPage-container">
      <h2 className="adminPage-admin-heading">
        Welcome to the Admin Page!{" "}
        <span
          style={{
            marginLeft: "4rem",
            display: "inline-flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <button
            onClick={onLogout}
            style={{
              position: "relative",
              top: "-10px",
              padding: "0.5rem 1rem",
            }}
            className="adminPage-logout-button"
          >
            Logout
          </button>
        </span>
      </h2>

      <div className="adminPage-cards">
        <div className="adminPage-card">
          <h3>Dummy API</h3>
          <p>Access and test various dummy APIs for your needs.</p>
          <Link to="/admin/Practice+API">
            <button className="adminPage-nav-button">Go to Dummy API</button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>React Interview</h3>
          <p>Practice React interview questions and improve your skills.</p>
          <Link to="/admin/React+Interview+Coding+Questions">
            <button className="adminPage-nav-button">React Interview</button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>JavaScript Interview</h3>
          <p>
            Test your JavaScript knowledge with challenging interview questions.
          </p>
          <Link to="/admin/JavaScript+Interview+Coding+Questions">
            <button className="adminPage-nav-button">
              JavaScript Interview
            </button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>Practice Interview Code</h3>
          <p>
            Practice your JavaScript and React knowledge with challenging coding
            interview questions.
          </p>
          <Link to="/admin/Practice+Interview+Coding+Questions">
            <button className="adminPage-nav-button">
              Practice Interview Code
            </button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>Daily Random Questions</h3>
          <p>Practice your skills with random coding challenges every day.</p>
          <Link to="/admin/Daily+Random+Interview+Coding+Questions">
            <button className="adminPage-nav-button">
              Daily Random Questions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

AdminPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AdminPage;

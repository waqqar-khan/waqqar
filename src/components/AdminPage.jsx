import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Login.css";

function AdminPage({ onLogout }) {
  return (
    <div className="adminPage-container">
      <h2 className="adminPage-admin-heading">Welcome to the Admin Page!</h2>

      <div className="adminPage-cards">
        <div className="adminPage-card">
          <h3>Dummy API</h3>
          <p>Access and test various dummy APIs for your needs.</p>
          <Link to="/admin/dummyAPI">
            <button className="adminPage-nav-button">Go to Dummy API</button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>React Interview</h3>
          <p>Practice React interview questions and improve your skills.</p>
          <Link to="/admin/reactInterview">
            <button className="adminPage-nav-button">React Interview</button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>JavaScript Interview</h3>
          <p>
            Test your JavaScript knowledge with challenging interview questions.
          </p>
          <Link to="/admin/javaScriptInterview">
            <button className="adminPage-nav-button">
              JavaScript Interview
            </button>
          </Link>
        </div>
        <div className="adminPage-card">
          <h3>Daily Random Questions</h3>
          <p>Practice your skills with random coding challenges every day.</p>
          <Link to="/admin/DailyRandomQuestions">
            <button className="adminPage-nav-button">
              Daily Random Questions
            </button>
          </Link>
        </div>
      </div>

      <button className="adminPage-logout-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

AdminPage.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default AdminPage;

import PropTypes from 'prop-types';
import "./Login.css";

function AdminPage({ onLogout }) {
    return (
      <div>
        <h2 className="adminPage-admin-heading">Welcome to the Admin Page!</h2>
        <button className="adminPage-logout-button" onClick={onLogout}>Logout</button>
      </div>
    );
  }

AdminPage.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  export default AdminPage;
  
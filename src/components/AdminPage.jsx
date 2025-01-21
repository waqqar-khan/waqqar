import PropTypes from 'prop-types';

function AdminPage({ onLogout }) {
    return (
      <div>
        <h2>Welcome to the Admin Page!</h2>
        <button onClick={onLogout}>Logout</button>
      </div>
    );
  }

AdminPage.propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  export default AdminPage;
  
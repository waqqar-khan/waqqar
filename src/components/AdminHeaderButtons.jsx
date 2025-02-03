import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const AdminHeaderButtons = ({backPath = "/admin/AdminPage" }) => {
  const navigate = useNavigate();
  

  return (
    
      <button
        onClick={() => navigate(backPath)}
        style={{
          position: "relative",
          top: "0",
          padding: "0.5rem 1rem",
          marginRight: "3rem",
        }}
        className="adminPage-back-button"
      >
        Back
      </button>
  );
};

AdminHeaderButtons.propTypes = {
  backPath: PropTypes.string,
};

export default AdminHeaderButtons;

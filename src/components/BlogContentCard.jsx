import PropTypes from "prop-types";
import "../App.css";

const BLogContentCard = ({ blog }) => {
  return (
    <div className="project-card">
      <a href={blog.link} target="_blank" rel="noopener noreferrer">
        <h3>{blog.title}</h3>
      </a>
    </div>
  );
};

BLogContentCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default BLogContentCard;

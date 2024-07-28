import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const BlogContentCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h3 className="text-xl text-center font-bold text-pink-800">
        {blog.title}
      </h3>
      <Link to={blog.internalLink}>Read Blog</Link>
    </div>
  );
};

BlogContentCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    internalLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogContentCard;

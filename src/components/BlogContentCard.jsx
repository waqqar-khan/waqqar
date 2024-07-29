import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../App.css";

const BlogContentCard = ({ blog }) => {
  return (
    <div className="blog-card bg-purple-400">
      <h3 className="text-xl text-center font-bold text-yellow-300">
        {blog.title}
      </h3>
      <div>
        <Link to={blog.internalLink} className="blog-card-link font-semibold text-white bg-purple-500 mt-4 px-4 py-2 hover:bg-purple-600 hover:text-yellow-500">Click to Read Blog</Link>
      </div>
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

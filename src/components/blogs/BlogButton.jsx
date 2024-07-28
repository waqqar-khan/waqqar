import { Link, useLocation } from "react-router-dom";

const BlogButton = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      <Link to="/javascript">
        <button
          className={`px-4 py-2 rounded ${
            currentPath === "/javascript"
              ? "bg-custom-rgba italic font-medium"
              : "bg-custom-hex hover:bg-custom-rgba"
          } text-white`}
          disabled={currentPath === "/javascript"}
        >
          JavaScript
        </button>
      </Link>
      <Link to="/reactjs">
        <button
          className={`px-4 py-2 rounded ${
            currentPath === "/reactjs"
              ? "bg-custom-rgba italic font-medium"
              : "bg-custom-hex hover:bg-custom-rgba"
          } text-white`}
          disabled={currentPath === "/reactjs"}
        >
          React JS
        </button>
      </Link>
      <Link to="/nextjs">
        <button
          className={`px-4 py-2 rounded ${
            currentPath === "/nextjs"
              ? "bg-custom-rgba italic font-medium"
              : "bg-custom-hex hover:bg-custom-rgba"
          } text-white`}
          disabled={currentPath === "/nextjs"}
        >
          Next JS
        </button>
      </Link>
      <Link to="/system-design">
        <button
          className={`px-4 py-2 rounded ${
            currentPath === "/system-design"
              ? "bg-custom-rgba italic font-medium"
              : "bg-custom-hex hover:bg-custom-rgba"
          } text-white`}
          disabled={currentPath === "/system-design"}
        >
          System Design
        </button>
      </Link>
      <Link to="/miscellaneous">
        <button
          className={`px-4 py-2 rounded ${
            currentPath === "/miscellaneous"
              ? "bg-custom-rgba italic font-medium"
              : "bg-custom-hex hover:bg-custom-rgba"
          } text-white`}
          disabled={currentPath === "/miscellaneous"}
        >
          Miscellaneous
        </button>
      </Link>
    </div>
  );
};

export default BlogButton;

import { Link, useLocation } from "react-router-dom";

const BlogButton = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <Link to="/javascript">
        <button
          className={`px-4 py-1 rounded font-semibold ${
            currentPath === "/javascript"
              ? "bg-purple-500 italic"
              : "bg-purple-800 hover:text-yellow-500 hover:bg-purple-500"
          } text-white`}
          disabled={currentPath === "/javascript"}
        >
          JavaScript
        </button>
      </Link>
      <Link to="/reactjs">
        <button
          className={`px-4 py-1 rounded font-semibold ${
            currentPath === "/reactjs"
              ? "bg-purple-500 italic"
              : "bg-purple-800 hover:text-yellow-500 hover:bg-purple-500"
          } text-white`}
          disabled={currentPath === "/reactjs"}
        >
          React JS
        </button>
      </Link>
      <Link to="/nextjs">
        <button
          className={`px-4 py-1 rounded font-semibold ${
            currentPath === "/nextjs"
              ? "bg-purple-500 italic"
              : "bg-purple-800 hover:text-yellow-500 hover:bg-purple-500"
          } text-white`}
          disabled={currentPath === "/nextjs"}
        >
          Next JS
        </button>
      </Link>
      <Link to="/system-design">
        <button
          className={`px-4 py-1 rounded font-semibold ${
            currentPath === "/system-design"
              ? "bg-purple-500 italic"
              : "bg-purple-800 hover:text-yellow-500 hover:bg-purple-500"
          } text-white`}
          disabled={currentPath === "/system-design"}
        >
          System Design
        </button>
      </Link>
      <Link to="/miscellaneous">
        <button
          className={`px-4 py-1 rounded font-semibold ${
            currentPath === "/miscellaneous"
              ? "bg-purple-500 italic"
              : "bg-purple-800 hover:text-yellow-500 hover:bg-purple-500"
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

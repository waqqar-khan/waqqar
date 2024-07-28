import { Link, useLocation } from "react-router-dom";

const BlogButton = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <Link to="/javascript">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            currentPath === "/javascript"
              ? "bg-custom-rgba italic"
              : "bg-custom-hex hover:text-yellow-500"
          } text-white`}
          disabled={currentPath === "/javascript"}
        >
          JavaScript
        </button>
      </Link>
      <Link to="/reactjs">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            currentPath === "/reactjs"
              ? "bg-custom-rgba italic"
              : "bg-custom-hex hover:text-yellow-500"
          } text-white`}
          disabled={currentPath === "/reactjs"}
        >
          React JS
        </button>
      </Link>
      <Link to="/nextjs">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            currentPath === "/nextjs"
              ? "bg-custom-rgba italic"
              : "bg-custom-hex hover:text-yellow-500"
          } text-white`}
          disabled={currentPath === "/nextjs"}
        >
          Next JS
        </button>
      </Link>
      <Link to="/system-design">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            currentPath === "/system-design"
              ? "bg-custom-rgba italic"
              : "bg-custom-hex hover:text-yellow-500"
          } text-white`}
          disabled={currentPath === "/system-design"}
        >
          System Design
        </button>
      </Link>
      <Link to="/miscellaneous">
        <button
          className={`px-4 py-2 rounded font-semibold ${
            currentPath === "/miscellaneous"
              ? "bg-custom-rgba italic"
              : "bg-custom-hex hover:text-yellow-500"
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

import PropTypes from "prop-types";

const Search = ({ value, onChange }) => (
  <div className="flex items-center border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white mb-4 sm:mb-2">
    <span className="text-gray-500 p-2 text-lg">🔍</span>
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className="flex-1 p-2 outline-none text-gray-800 text-sm sm:text-base"
    />
  </div>
);

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;

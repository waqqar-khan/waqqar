import PropTypes from "prop-types";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 px-4 py-2 bg-white shadow-md rounded-md">
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-start space-x-1 sm:space-x-4">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-base transition 
            ${
              currentPage === 1
                ? "bg-purple-300 text-gray-500"
                : "bg-purple-500 text-white hover:bg-purple-800"
            } 
            ${currentPage === 1 ? "disabled:opacity-50" : ""}`}
        >
          First
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-base transition 
            ${
              currentPage === 1
                ? "bg-purple-300 text-gray-500"
                : "bg-purple-500 text-white hover:bg-purple-800"
            } 
            ${currentPage === 1 ? "disabled:opacity-50" : ""}`}
        >
          Prev
        </button>
        <span className="text-gray-700 text-xs sm:text-base">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-base transition 
            ${
              currentPage === totalPages
                ? "bg-purple-300 text-gray-500"
                : "bg-purple-500 text-white hover:bg-purple-800"
            } 
            ${currentPage === totalPages ? "disabled:opacity-50" : ""}`}
        >
          Next
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-base transition 
            ${
              currentPage === totalPages
                ? "bg-purple-300 text-gray-500"
                : "bg-purple-500 text-white hover:bg-purple-800"
            } 
            ${currentPage === totalPages ? "disabled:opacity-50" : ""}`}
        >
          Last
        </button>
      </div>
      <div className="flex-shrink-0 mt-2 sm:mt-0 sm:ml-2">
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
          className=" px-2 py-1 sm:px-3 sm:py-2 border border-purple-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition text-md sm:text-base bg-white text-gray-700"
        >
          <option value={10} className="text-purple-600">
            10
          </option>
          <option value={20} className="text-purple-600">
            20
          </option>
          <option value={30} className="text-purple-600">
            30
          </option>
        </select>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onItemsPerPageChange: PropTypes.func.isRequired,
};

export default Pagination;

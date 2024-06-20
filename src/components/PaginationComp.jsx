
export const PaginationComp = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
		<div className="flex justify-center items-center mt-4 space-x-4">
			<button
				onClick={handlePrevious}
				className={`px-3 py-1 bg-gray-300 rounded ${
					currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
				}`}
				disabled={currentPage === 1}
			>
				Previous
			</button>
			<span className="text-gray-700">
				Page {currentPage} of {totalPages}
			</span>
			<button
				onClick={handleNext}
				className={`px-3 py-1 bg-gray-300 rounded ${
					currentPage === totalPages
						? "opacity-50 cursor-not-allowed"
						: ""
				}`}
				disabled={currentPage === totalPages}
			>
				Next
			</button>
		</div>
  );
};
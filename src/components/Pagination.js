const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="flex justify-center mt-4">
     {[...Array(totalPages)].map((_, index) => (
        <button
           key={index}
           className={`mx-1 px-3 py-1 ${index === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
           onClick={() => onPageChange(index)}
        >
           {index + 1}
        </button>
     ))}
  </div>
);

export default Pagination;

import React from 'react';

function Pagination({ page, pageHandler, totalPages }) {
  const prevPage = () => {
    if (page > 1) pageHandler(page - 1);
  };
  const nextPage = () => {
    if (page < totalPages) pageHandler(page + 1);
  };

  return (
    <div className="flex justify-center mt-8 gap-2">
      <button
        onClick={prevPage}
        disabled={page === 1}
        className={`px-4 py-2 rounded ${page === 1 ? "bg-gray-400" : "bg-red-500 text-white"}`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => pageHandler(i + 1)}
          className={`px-4 py-2 rounded ${page === i + 1 ? "bg-red-500 text-white" : "bg-gray-200"}`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={nextPage}
        disabled={page === totalPages}
        className={`px-4 py-2 rounded ${page === totalPages ? "bg-gray-400" : "bg-red-500 text-white"}`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;

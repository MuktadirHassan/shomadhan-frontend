export default function Pagination({ data, setPage }) {
  const setPagination = (e, val) => {
    if (val === "next") {
      setPage(data?.next?.page);
    }
    if (val === "prev") {
      setPage(data?.previous?.page);
    }
  };
  console.log(data);
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 sm:px-6">
      <div className="flex items-center justify-between flex-1 mx-auto">
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            {data?.previous && (
              <button
                className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium border-2 hover:text-indigo-600 hover:border hover:border-indigo-500 hover:bg-indigo-50"
                onClick={(e) => setPagination(e, "prev")}
              >
                Previous
              </button>
            )}
            {data?.next && (
              <button
                className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium border-2 hover:text-indigo-600 hover:border hover:border-indigo-500 hover:bg-indigo-50"
                onClick={(e) => setPagination(e, "next")}
              >
                Next
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

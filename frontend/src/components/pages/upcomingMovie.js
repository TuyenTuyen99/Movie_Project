import { useEffect, useState } from "react";
import api from "../../config/api";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function NowShowingMovie() {
  // hooks
  const [movies, setMovies] = useState([]);
  const [limit] = useState(4);
  const [totalCount, setTotalCount] = useState(0);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const totalPage = Math.ceil(totalCount / limit);

  useEffect(() => {
    fetchMovies(offset);
  }, []);

  const fetchMovies = async (offset) => {
    try {
      const response = await api.get("/movies/upcoming", {
        params: {
          limit,
          offset,
        },
      });
      if (response.status === 200) {
        setMovies(response.data.rows);
        setTotalCount(response.data.count);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const prevPage = () => {
    const pg = currentPage === 1 ? 1 : currentPage - 1;
    setCurrentPage(pg);
    setOffset((pg - 1) * limit);
    fetchMovies((pg - 1) * limit);
  };

  const nextPage = () => {
    const pg = currentPage < totalPage ? currentPage + 1 : totalPage;
    setCurrentPage(pg);
    setOffset((pg - 1) * limit);
    fetchMovies((pg - 1) * limit);
  };

  const handlePaging = (currentPosition) => {
    setOffset((currentPosition - 1) * limit);
    setCurrentPage(currentPosition);
    fetchMovies((currentPosition - 1) * limit);
  };

  useEffect(() => {
    let pg = [];
    for (let i = 1; i <= totalPage; i++) {
      pg.push(i);
    }
    setPages(pg);

  }, [movies]);

  return (
    <section className="bg-gradient-to-b from-purple-200 to-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-purple-900 dark:text-white text-left">
            Upcoming
          </h2>
        </div>
        <div className="flex flex-row-reverse border-t-2">
          <Link to={"/movies/now-showing"}>
            <span className="mb-3 ml-3 px-5 py-2.5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 font-bold overflow-hidden hover:text-gray-900 text-purple-800">
              Now Showing
              <AiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2 ">
          {movies.length &&
            movies.map((movie) => (
              <div
                className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-purple-800 dark:border-purple-700"
                key={movie.id}
              >
                <Link to={`/movies/${movie.id}`}>
                  <img
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={`${movie.movieImage}`}
                    alt={movie.title}
                    style={{ height: 235 }}
                  />
                </Link>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-purple-900 dark:text-white ">
                    <b>{movie.title}</b>
                  </h3>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    <b>Genre:</b> {movie.genre}
                  </p>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    <b>Director:</b> {movie.director}
                  </p>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                    <b>Release Date:</b> {movie.releaseDate}
                  </p>
                </div>
              </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="px-5 py-5 border-t flex flex-col xs:flex-row items-center xs:justify-between">
          <span className="text-xs xs:text-sm text-gray-900">
            Showing {totalCount === 0 ? 0 : offset + 1} to{" "}
            {offset + limit > totalCount ? totalCount : offset + limit} of{" "}
            {totalCount} Records
          </span>
          <div className="inline-flex mt-2 mt-0">
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <button
                  onClick={prevPage}
                  className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
              {pages.map((position) => (
                <li key={position}>
                  <button
                    onClick={() => handlePaging(position)}
                    className={
                      currentPage === position
                        ? " text-blue-600 bg-blue-50  py-2 px-3 leading-tight hover:bg-blue-100 hover:text-blue-700 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                  >
                    {position}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={nextPage}
                  className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NowShowingMovie;
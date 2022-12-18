import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../config/api";

function UpcomingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies/upcoming");
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <section className="bg-gradient-to-b from-purple-200 to-white bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-purple-900 dark:text-white text-left">
          Upcoming
        </h2>
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
      </div>
    </section>
  );
}

export default UpcomingMovie;

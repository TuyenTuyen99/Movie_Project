import { Link } from "react-router-dom";

function MovieGallery({ movies }) {
  return (
    <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
      {5 &&
        movies.map((movie, key) => {
          return (
            <div
              key={key}
              className="items-center bg-gray-50 rounded-lg shadow-2xl sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to={`/movies/${movie.id}`}>
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={`${movie.movieImage}`}
                  alt={movie.title}
                  style={{height:235}}
                />
              </Link>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                </h3>
                <span className="text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded-full">
                  {movie.releaseDate}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Director: {movie.director}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MovieGallery;

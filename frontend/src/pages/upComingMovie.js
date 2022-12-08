import { useEffect, useState } from "react";
import api from "../config/api";

function UpComingMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movie/upcoming");
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Upcoming</h2>
        <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {movies.length &&
            movies.map((movie) => (
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src={`${movie.movieImage}`}
                alt="Jese Avatar"
              />
            </a>
            <div class="p-5">
              <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <b>{movie.title}</b>
              </h3>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              <b>Genre:</b> {movie.genre}
              </p>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
              <b>Director:</b> {movie.director}
              </p>
              <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
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

export default UpComingMovie;

import { useEffect, useState } from "react";
import api from "../config/api";

function NowShowingMovie() {
        
    const [movies, setMovies] = useState([]);
      
        useEffect(() => {
          const fetchMovies = async () => {
            try {
              const response = await api.get("/movie/now-showing");
              setMovies(response.data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchMovies();
        }, []);
    console.log(movies);
  return (
    <>
    <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Now Showing Movie</h2>
      </div> 
      {/* < class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2"> */}
        
      <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
      {movies.length &&
          movies.map((movie) => (
            <div className="flex justify-center" key={movie.id}>
              <a href="#">
                  <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={`${movie.movieImage}`}/>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Bonnie Green</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                  
              </div>
            </div>
      ))};
          </div> 
  </div>
</section>





      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        {movies.length &&
          movies.map((movie) => (
            <div className="flex justify-center" key={movie.id}>
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                
                  <img
                    className="rounded-t-lg"
                    src={`${movie.movieImage}`}
                    alt=""
                  />
                <div className="p-6 max-h-full">
                  <h5 className="text-gray-900 text-xl font-medium mb-2 h-fit">
                    {movie.title}
                  </h5>

                  <p className="text-gray-700 text-base mb-4">{movie.actors}</p>

                  <p className="text-gray-700 text-base mb-4 h-fit">
                    {movie.derector}
                  </p>
                  <div className="px-4 mt-8">
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
</>
  );
};

export default NowShowingMovie;
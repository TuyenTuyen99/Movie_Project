import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieGallery from "../MovieGallery";
import api from "../../config/api";
import { NOWSHOWING_MOVIE, UPCOMING_MOVIE } from "../../constants/categories";
import Carousel from "../main/carousel/carousel";
import { AiOutlineArrowRight } from "react-icons/ai";

function Homepage() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const navigate = useNavigate();
  const handleGoToUpcoming = () => {
    navigate("/movies/upcoming");
  };
  const handleGoToNowShowing = () => {
    navigate("/movies/now-showing");
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies");

        if (response.status === 200) {
          const nowShowingMovies = response.data.filter(
            (movies) => movies.categoryId === NOWSHOWING_MOVIE
          );
          const upcomingMovies = response.data.filter(
            (movies) => movies.categoryId === UPCOMING_MOVIE
          );

          setNowShowingMovies(
            nowShowingMovies.slice(
              nowShowingMovies.length - 6,
              nowShowingMovies.length
            )
          );
          setUpcomingMovies(upcomingMovies.slice(0, 6));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  console.log(nowShowingMovies);

  return (
    <div className="">
      <Carousel />
      <section className="dark:bg-gray-900 bg-gradient-to-b from-purple-200 to-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2
              className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-purple-800"
              onClick={handleGoToNowShowing}
            >
              Now Showing
            </h2>
            <p className="font-light text-purple-500 italic lg:mb-16 sm:text-xl dark:text-gray-400">
              Keeping up the latest movie from all over around the world!
            </p>
          </div>
          <MovieGallery movies={nowShowingMovies} />
          <div className="flex flex-row-reverse">
            <button
              className="mb-3 ml-3 px-5 py-2.5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              onClick={handleGoToNowShowing}
            >
              View More
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>

      <section className="dark:bg-gray-900 bg-gradient-to-b to-purple-200 from-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 leading-10">
            <h2
              className="mb-4 text-4xl tracking-tight font-extrabold text-purple-800 dark:text-white"
              onClick={handleGoToUpcoming}
            >
              Upcoming
            </h2>
            <p className="font-light text-purple-500 italic lg:mb-16 sm:text-xl dark:text-gray-400">
              Keeping up the latest movie from all over around the world!
            </p>
          </div>
          <MovieGallery movies={upcomingMovies} />
          <div className="flex flex-row-reverse">
            <button
              className="mb-3 ml-3 px-5 py-2.5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              onClick={handleGoToUpcoming}
            >
              View More
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Homepage;

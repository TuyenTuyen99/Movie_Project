import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieGallery from "../components/FilmGallery";
import api from "../config/api";
import { NOWSHOWING_MOVIE, UPCOMING_MOVIE } from "../constants/categories";

function Homepage() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowShowingMovies, setNowShowingMovies] = useState([]);
  const navigate = useNavigate();
  const handleGoToUpcoming = () => {
    navigate("/movies/upcoming");
  };
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get("/movies");

        if (response.status === 200) {
          const nowShowingMovies = response.data.filter(
            (movie) => movie.categoryId === NOWSHOWING_MOVIE
          );
          const upcomingMovies = response.data.filter(
            (movie) => movie.categoryId === UPCOMING_MOVIE
          );

          setNowShowingMovies(nowShowingMovies);
          setUpcomingMovies(upcomingMovies);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="">
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://cdn.galaxycine.vn/media/2022/11/25/hpmposter-w2048xh682-2_1669346515140.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center"></div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://cdn.galaxycine.vn/media/2022/11/29/3_1669689258217.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center"></div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://cdn.galaxycine.vn/media/2022/11/29/combo-avatar2-digital-2048x682_1669695949280.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center"></div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://cdn.galaxycine.vn/media/2022/11/30/2048wx682h_1669796219006.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-purple-800">
              Now Showing
            </h2>
            <p className="font-light text-purple-500 italic lg:mb-16 sm:text-xl dark:text-gray-400">
              Keeping up the latest movie from all over around the world!
            </p>
          </div>
          <MovieGallery movies={nowShowingMovies} />
        </div>
      </section>

      <section className="dark:bg-gray-900 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16 leading-10">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-purple-800 dark:text-white" onClick={handleGoToUpcoming}>
              Upcoming
            </h2>
            <p className="font-light text-purple-500 italic lg:mb-16 sm:text-xl dark:text-gray-400">
              Keeping up the latest movie from all over around the world!
            </p>
          </div>
          <MovieGallery movies={upcomingMovies} />
        </div>
      </section>
    </div>
  );
}
export default Homepage;

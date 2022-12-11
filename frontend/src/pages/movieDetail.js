import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../config/api";

const MovieDetail = () => {
  // use hook useParams to get MovieId from Browser URL
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await api.get(`/movies/${id}`);

        if (response.status === 200) {
          setMovie(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="bg-gradient-to-bl from-purple-700 to-white">
      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={movie.movieImage}
              style={{width:300}} 
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="border-b-2 border-gray-200 pb-5 mb-5 text-white font-bold text-5xl title-font font-medium mb-1">
                {movie.title}
              </h1>
              <p><span className="leading-relaxed font-bold text-black">
                Director: 
              </span>
              <span className="leading-relaxed"> {movie.director} </span></p>
              <p><span className="leading-relaxed font-bold text-black">
                Actors: 
              </span>
              <span className="leading-relaxed"> {movie.actors} </span></p>
              <p><span className="leading-relaxed font-bold text-black">
                Release Date: 
              </span>
              <span className="leading-relaxed"> {movie.releaseDate} </span></p>
              <p><span className="leading-relaxed font-bold text-black">
                Description: 
              </span>
              <span className="leading-relaxed"> {movie.description} </span></p>
              
              <div className="flex border-t-2 border-gray-200 pt-5 mt-6">
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;

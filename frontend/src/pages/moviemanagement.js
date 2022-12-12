import { useState } from "react";
import axios from "axios";

function MovieManagement() {
  const [title, setTitle] = useState("");
  const [actors, setActors] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [country, setCountry] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [description, setDescription] = useState("");
  const [movieImage, setMovieImage] = useState("");

  // handle function
  const handleAddNewTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAddNewActors = (e) => {
    setActors(e.target.value);
  };
  const handleAddNewDirector = (e) => {
    setDirector(e.target.value);
  };
  const handleAddNewGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleAddNewCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleAddNewReleasingDate = (e) => {
    setReleaseDate(e.target.value);
  };
  const handleAddNewDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleAddNewMovieImage = (e) => {
    setMovieImage(e.target.value);
  };

  const handleAddNewMovie = async (e) => {
    e.preventDefault();
    const addingData = {
      title,
      actors,
      director,
      genre,
      country,
      releaseDate,
      description,
      movieImage,
      categoryId:1,
    };
    await axios
      .post("http://localhost:8080/movies/new-movie", addingData)
      .then(function (response) {
        const {
          data: { msg },
        } = response;
        alert(msg);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  
  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white" onSubmit={handleAddNewMovie}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Movie Management</h1>
        <p className="text-sm font-normal text-gray-600 mb-7"></p>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Title"
            onChange={handleAddNewTitle}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Actors"
            onChange={handleAddNewActors}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Director"
            onChange={handleAddNewDirector}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Genre"
            onChange={handleAddNewGenre}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Country"
            onChange={handleAddNewCountry}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Releasing date"
            onChange={handleAddNewReleasingDate}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="Description"
            onChange={handleAddNewDescription}
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name=""
            id=""
            placeholder="imageUrl"
            onChange={handleAddNewMovieImage}
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          onClick={handleAddNewMovie}
        >
          Add new movie
        </button>
      </form>
    </div>
  );
}

export default MovieManagement;

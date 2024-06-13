import React from "react";
import { img_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleMovieCardClick = () => {
    navigate(`/movieDetails/${movie.id}`);
  };
  return (
    <div
      className="w-32 md:w-44 overflow-hidden flex items-center justify-center rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
      onClick={handleMovieCardClick}
    >
      <img
        className="object-cover w-full h-full rounded-lg"
        alt="movie poster"
        src={img_CDN_URL + movie.poster_path}
      />
    </div>
  );
};

export default MovieCard;

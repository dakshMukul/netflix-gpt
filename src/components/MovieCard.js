import React from "react";
import { img_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviePoster }) => {
  return (
    <div className="w-44 overflow-hidden flex items-center justify-center rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
      <img
        className="object-cover w-full h-full rounded-lg"
        alt="movie poster"
        src={img_CDN_URL + moviePoster}
      />
    </div>
  );
};

export default MovieCard;

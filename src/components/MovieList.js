import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  return (
    <div className="p-1 m-4 md:pl-6 ">
      <h1 className="text-2xl pl-2 text-white font-semibold">{title}</h1>
      <div className="p-2 mt-3 overflow-x-scroll scrollbar-hide ">
        <div className="grid grid-flow-col gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

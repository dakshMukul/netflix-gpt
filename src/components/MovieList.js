import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  // console.log(title, movies);
  return (
    <div className="pl-4 pt-4">
      {" "}
      <h1 className="text-2xl text-white font-semibold">{title}</h1>
      <div className="mt-5 flex overflow-x-scroll scrollbar-hide snap-x ">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviePoster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

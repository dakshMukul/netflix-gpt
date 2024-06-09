import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies = [] }) => {
  // console.log(title, movies);
  return (
    <div className="pl-4 md:pl-6 pt-10">
      {" "}
      <h1 className="text-2xl text-white font-semibold">{title}</h1>
      <div className="mt-6 flex overflow-x-scroll scrollbar-hide snap-x">
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

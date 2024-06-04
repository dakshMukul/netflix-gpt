import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("movies state: ", movies);
  const { nowPlayingMovies = [], TopRatedMovies = [] } = movies;

  if (!nowPlayingMovies || !TopRatedMovies) {
    console.error(`One or more movie categories are not defined`);
    return <div>Loading movies...</div>;
  }
  return (
    <div className="bg-black">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies} />
    </div>
  );
};

export default SecondaryContainer;

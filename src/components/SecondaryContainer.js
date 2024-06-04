import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  if (!movies.nowPlayingMovies) {
    console.error(`movies is not defined`);
    return <div>Loading movies...</div>;

    const { nowPlayingMovies, popularMovies } = movies;

    if (!nowPlayingMovies || !popularMovies) {
      console.error(`One or more movie categories are not defined`);
      return <div>Loading movies...</div>;
    }
  }
  return (
    <div className="bg-black">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Pupular"} movies={movies.popular} />
      {/* <MovieList title={"Popular"} movies={movies} /> */}
      {/* <MovieList title={"Horror"} movies={movies} /> */}
    </div>
  );
};

export default SecondaryContainer;

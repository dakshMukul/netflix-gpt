import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log("movies state: ", movies);
  const {
    nowPlayingMovies = [],
    TopRatedMovies = [],
    popularMovies = [],
    upComingMovies = [],
  } = movies;

  if (
    !nowPlayingMovies ||
    !TopRatedMovies ||
    !popularMovies ||
    !upComingMovies
  ) {
    console.error(`One or more movie categories are not defined`);
    return <div>Loading movies...</div>;
  }
  return (
    <div className="">
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={TopRatedMovies} />
      <MovieList title={"Upcoming"} movies={upComingMovies} />
      <MovieList title={"Pupular"} movies={popularMovies} />
    </div>
  );
};

export default SecondaryContainer;

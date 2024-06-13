import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, img_CDN_URL } from "../utils/constants";
import Header from "../components/Header";
import useSimilerMovies from "../hooks/useSimilerMovies";
import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetail, setMovieDetail] = useState(null);

  const getMovieDetails = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieDetail(json);
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  const similarMovies = useSimilerMovies(movieId);

  if (!movieDetail) {
    return <div>Loading movies...</div>;
  }

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
    runtime,
    backdrop_path,
  } = movieDetail;

  return (
    <div className="relative text-white">
      <Header />
      <div className="relative h-screen">
        <img
          src={img_CDN_URL + backdrop_path}
          alt="Movie Poster"
          className="w-full h-screen object-cover mt-16 md:mt-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

        <div className="absolute top-[5%] sm:top-[15%] md:top-[20%] flex flex-wrap justify-center items-center gap-5">
          <div></div>
          <img
            src={img_CDN_URL + poster_path}
            alt="poster path"
            className="w-36 md:w-52 border-4 border-white rounded-md"
          />
          <div className="p-4 bg-black bg-opacity-60 rounded-lg w-[90%] md:w-[70%]">
            <h1 className="text-2xl md:text-4xl font-bold">{original_title}</h1>
            <div className="mt-2 flex flex-wrap items-center space-x-2 text-sm md:text-base">
              <span>{release_date}</span>
              <span>|</span>
              <span>{runtime} mins</span>
              <span>|</span>
              <span className="flex items-center">
                ⭐ {vote_average.toFixed(1)}
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center space-x-2 text-sm md:text-base">
              <span className="font-bold">Genres:</span>
              {genres.map((item, index) => (
                <span key={index}>
                  {item.name}
                  {index < genres.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm md:text-base">{overview}</p>
          </div>
        </div>
        <div className="bg-gray-900">
          <MovieList title={"Similar Movies"} movies={similarMovies} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

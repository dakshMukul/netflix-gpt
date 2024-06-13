import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS, img_CDN_URL } from "../utils/constants";
import Header from "../components/Header";

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
  }, []);

  console.log(movieDetail);
  if (!movieDetail) {
    return (
      <>
        <div>Loading movies...</div>
      </>
    );
  }

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
    runtime,
    adult,
    backdrop_path,
    belongs_to_collection,
  } = movieDetail;

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-900 text-white p-8 flex mt-16">
        <div className="MoviePoster bg-green-300 4/12">
          <img
            src={img_CDN_URL + backdrop_path}
            alt="Movie Poster"
            className="object-cover"
          />
        </div>
        <div className="MovieDetails bg-red-300 8/12">
          <div className="Heading">
            <h1>{original_title}</h1>
            <span>{release_date}</span> |<span>{runtime}mins</span>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

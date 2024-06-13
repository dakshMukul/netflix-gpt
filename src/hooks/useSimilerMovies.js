import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useSimilerMovies = (movieId) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  const getSimilerMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar`,
      API_OPTIONS
    );
    const json = await data.json();
    setSimilarMovies(json.results);
  };

  useEffect(() => {
    if (movieId) {
      getSimilerMovies();
    }
  }, [movieId]);

  return similarMovies;
};

export default useSimilerMovies;

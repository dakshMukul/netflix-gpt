import React from "react";
import { useSelector } from "react-redux";
import VideoTtile from "./VideoTitle";
import VideoBackground from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[1];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-[100%]">
      <VideoTtile className="" title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
}

export default MainContainer;

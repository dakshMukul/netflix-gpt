// Shimmer.js
import React from "react";
import MovieListShimmer from "./MovieListShimmer";

const MovieDetailsShimmer = () => {
  return (
    <div className="relative text-white animate-pulse">
      <div className="h-screen">
        <div className="w-full h-screen bg-gray-700 mt-16 md:mt-0"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div className="absolute top-[5%] sm:top-[15%] md:top-[20%] flex flex-wrap justify-center items-center gap-5">
          <div className="w-36 md:w-52 h-52 bg-gray-700 border-4 border-gray-700 rounded-md"></div>
          <div className="p-4 bg-gray-800 bg-opacity-60 rounded-lg w-[90%] md:w-[70%]">
            <div className="h-8 bg-gray-700 w-3/4 mb-4"></div>
            <div className="mt-2 flex flex-wrap items-center space-x-2 text-sm md:text-base">
              <div className="h-4 bg-gray-700 w-20"></div>
              <div className="h-4 bg-gray-700 w-10"></div>
              <div className="h-4 bg-gray-700 w-20"></div>
              <div className="h-4 bg-gray-700 w-20"></div>
            </div>
            <div className="mt-2 flex flex-wrap items-center space-x-2 text-sm md:text-base">
              <div className="font-bold h-4 bg-gray-700 w-20"></div>
              <div className="h-4 bg-gray-700 w-32"></div>
              <div className="h-4 bg-gray-700 w-32"></div>
            </div>
            <div className="mt-4 h-16 bg-gray-700"></div>
          </div>
        </div>
        <MovieListShimmer />
      </div>
    </div>
  );
};

export default MovieDetailsShimmer;

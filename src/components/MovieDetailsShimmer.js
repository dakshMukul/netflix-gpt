// Shimmer.js
import React from "react";
import MovieListShimmer from "./MovieListShimmer";

const MovieDetailsShimmer = () => {
  return (
    <div className="bg-gray-900 text-white flex flex-col w-full animate-pulse">
      {/* <Header /> */}
      <div className="mt-24 relative flex flex-col gap-5 items-center">
        {/* Shimmer for Movie Detail Section */}
        <div className="movie_detail w-[70%] flex flex-wrap justify-center items-center gap-5">
          {/* Shimmer for Movie Poster */}
          <div className="Movie_poster w-36 md:w-52 h-52 md:h-72 bg-gray-700 rounded-md"></div>

          {/* Shimmer for Movie Info */}
          <div className="p-4 bg-black bg-opacity-60 h-full rounded-lg w-[90%] md:w-[70%] space-y-4">
            {/* Shimmer for Title */}
            <div className="w-3/4 h-8 bg-gray-700 rounded-md"></div>

            {/* Shimmer for Sub-Info */}
            <div className="flex space-x-2">
              <div className="w-20 h-4 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-4 bg-gray-700 rounded-md"></div>
              <div className="w-20 h-4 bg-gray-700 rounded-md"></div>
              <div className="w-8 h-4 bg-gray-700 rounded-md"></div>
            </div>

            {/* Shimmer for Genres */}
            <div className="flex space-x-2">
              <div className="w-16 h-4 bg-gray-700 rounded-md"></div>
              <div className="w-16 h-4 bg-gray-700 rounded-md"></div>
              <div className="w-16 h-4 bg-gray-700 rounded-md"></div>
            </div>

            {/* Shimmer for Overview */}
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-700 rounded-md"></div>
              <div className="w-full h-4 bg-gray-700 rounded-md"></div>
              <div className="w-full h-4 bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Shimmer for Similar Movies */}
        <div className="w-full">
          <h1 className="w-32 h-6 bg-gray-700 rounded-md"></h1>
          <div className="similarMovie w-full p-4 overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="grid grid-flow-col gap-4">
              {/* Shimmer for Similar Movie Cards */}
              {Array(10)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="w-32 h-48 bg-gray-700 rounded-md"
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsShimmer;

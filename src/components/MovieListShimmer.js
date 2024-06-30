import React from "react";

const MovieListShimmer = () => {
  return (
    <div className="p-1 m-4 md:pl-6  animate-pulse ">
      <div className="h-4 bg-gray-700 w-20"></div>
      <div className="p-2 mt-3 flex overflow-x-scroll scrollbar-hide snap-x ">
        <div className="w-32 md:w-44 overflow-hidden flex items-center justify-center rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"></div>
      </div>
    </div>
  );
};

export default MovieListShimmer;

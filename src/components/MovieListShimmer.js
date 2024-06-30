import React from "react";

const MovieListShimmer = () => {
  return (
    <div className="p-1 m-4 md:pl-6 ">
      <div className="h-6 bg-gray-700 w-32 animate-pulse"></div>
      <div className="p-2 mt-3 overflow-x-scroll scrollbar-hide ">
        <div className="grid grid-flow-col gap-4 overflow-x-scroll scrollbar-hide snap-x">
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
          <div className="w-32 md:w-44 h-56 rounded-lg bg-gray-700 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MovieListShimmer;

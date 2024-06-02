import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen pt-[20%] aspect-video bg-gradient-to-r from-black text-white">
      <div className="pl-5 md:w-1/4 w-1/2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="py-1">{overview}</p>
        <div className="flex items-center gap-2">
          <button className="bg-white p-2 text-black font-bold  rounded-md hover:opacity-60">
            ▶ Play
          </button>
          <button className="bg-white p-2 text-black font-bold bg-opacity-50 rounded-md">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute hidden md:block bottom-0 inset-0 text-white pt-[20%]   bg-gradient-to-r from-black">
      <div className="pl-10 md:w-2/6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="my-5">{overview}</p>
        <div className="flex items-center gap-2 my-10">
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
//p-[10%]  aspect-video bg-gradient-to-r from-black text-white
export default VideoTitle;

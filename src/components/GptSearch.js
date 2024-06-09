import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { bg_img } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <img
        className="w-full h-screen object-cover"
        src={bg_img}
        alt="background"
      />
      <div className="absolute mt-[30%] md:mt-[10%] bg-black opacity-85 w-12/12 md:w-2/4 min-h-44 flex flex-col items-center rounded-lg">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;

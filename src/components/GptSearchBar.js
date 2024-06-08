import React from "react";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="w-full">
      <form className="grid grid-cols-12">
        <input
          className="col-span-9 p-2 m-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="col-span-3 text-white bg-red-700 rounded-md p-2 m-2">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

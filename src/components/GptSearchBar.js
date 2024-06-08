import React, { useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);

  return (
    <div className="w-full">
      <form className="grid grid-cols-12">
        <input
          className="col-span-9 p-2 m-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 text-white bg-red-700 rounded-md p-2 m-2">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

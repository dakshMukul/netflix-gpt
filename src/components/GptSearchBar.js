import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { openAiKey } from "../utils/constants";
import openAi from "../utils/openAi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const inputBoxValue = useRef(null);

  const handleGptSearchClick = async () => {
    const chatCompletion = await openAi.chat.completions.create({
      messages: [{ role: "user", content: "What is the capital of Lucknow?" }],
      model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
  };

  return (
    <div className="w-full">
      <form className="grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={inputBoxValue}
          className="col-span-10 p-2 m-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-2 text-white bg-red-700 rounded-md p-2 m-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

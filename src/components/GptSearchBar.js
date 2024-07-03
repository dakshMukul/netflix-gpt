import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
// import { openAiKey } from "../utils/constants";
// import openAi from "../utils/openAi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const inputBoxValue = useRef(null);

  console.log(langKey);

  // const handleGptSearchClick = async () => {
  //   const chatCompletion = await openAi.chat.completions.create({
  //     messages: [{ role: "user", content: "What is the capital of Lucknow?" }],
  //     model: "gpt-3.5-turbo",
  //   });

  //   console.log(chatCompletion);
  // };

  return (
    <form className="grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
      <input
        ref={inputBoxValue}
        className="col-span-9 p-2 m-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button className="col-span-3 text-white bg-red-700 rounded-md p-2 m-2">
        {lang[langKey].search}
      </button>
    </form>
  );
};

export default GptSearchBar;

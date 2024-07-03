import React from "react";
import { useNavigate } from "react-router-dom";

const GptMovieSuggestion = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-5 flex flex-col items-center justify-center text-white">
      <i className="fas fa-tools fa-3x mb-4 animate-spin"></i>
      <h1 className="text-3xl font-bold mb-2">Page Under Development</h1>
      <p className="text-lg mb-4">
        I'm working hard to bring you this feature. Stay tuned!
      </p>
    </div>
  );
};

export default GptMovieSuggestion;

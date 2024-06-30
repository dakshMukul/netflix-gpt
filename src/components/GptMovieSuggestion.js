import React from "react";

const GptMovieSuggestion = () => {
  return (
    <div className="mb-5 flex flex-col items-center justify-center text-white">
      <i className="fas fa-tools fa-3x mb-4 animate-spin"></i>
      <h1 className="text-3xl font-bold mb-2">Page Under Development</h1>
      <p className="text-lg mb-4">
        I'm working hard to bring you this feature. Stay tuned!
      </p>
      <button
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        onClick={() => (window.location.href = "/browse")}
      >
        Return to Home
      </button>
    </div>
  );
};

export default GptMovieSuggestion;

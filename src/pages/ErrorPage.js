import React from "react";

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="text-center">
        {/* Your logo */}
        <img
          src="your-logo.png"
          alt="Logo"
          className="mx-auto mb-4 w-32 h-32"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We're sorry, but the page you are looking for cannot be found.
        </p>
        <button
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

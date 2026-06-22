import { Link } from "react-router-dom";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4">
      <div className="text-center max-w-2xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
            <FaExclamationTriangle className="text-5xl text-blue-600" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-lg leading-relaxed">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaHome />
            Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-300/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-300/20 rounded-full blur-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default Error;
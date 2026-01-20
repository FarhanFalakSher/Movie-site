import React from "react";
import { FaFilm, FaStar, FaPlay } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image or Icon */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-purple-700 rounded-xl p-10 flex items-center justify-center shadow-xl animate-pulse">
            <FaFilm size={80} className="text-yellow-400" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-yellow-400">
            About MovieFlix
          </h2>
          <p className="text-gray-300 text-lg">
            MovieFlix is a modern movie streaming web app built with React.js and Tailwind CSS. 
            You can browse trending, popular, and top-rated movies with high-quality poster previews. 
            Click any movie poster to watch the trailer instantly in an elegant overlay.
          </p>
          <p className="text-gray-300 text-lg">
            Powered by the TMDB API, MovieFlix provides real-time movie data and trailers. 
            Designed to be fully responsive, it works beautifully on mobile, tablet, and desktop screens.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-4">
            <span className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md">
              <FaStar /> Top Rated
            </span>
            <span className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md">
              <FaPlay /> Instant Trailer
            </span>
            <span className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md">
              <FaFilm /> Trending
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, trailerUrl, onPlay }) => {
  return (
    <div className="relative rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden">
      {/* Movie Poster */}
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-xl"
        onClick={() => trailerUrl && onPlay?.(trailerUrl)} // Safely play trailer on click
      />

      {/* Movie Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
        <h3 className="text-lg font-bold truncate">{movie.title}</h3>
        <p className="text-sm text-gray-300">{movie.release_date}</p>
      </div>

      {/* Rating Badge */}
      <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded-full text-sm shadow-lg">
        {movie.vote_average.toFixed(1)}
      </div>
    </div>
  );
};

export default MovieCard;

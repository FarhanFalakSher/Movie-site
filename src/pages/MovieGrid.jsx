import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieGrid = ({ category, searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [trailers, setTrailers] = useState({});
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url;
        if (searchQuery) {
          // Search query URL
          url = `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(
            searchQuery
          )}`;
        } else {
          // Category URL
          const endpoints = {
            trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`,
            popular: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
            toprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`,
          };
          url = endpoints[category];
        }

        const { data } = await axios.get(url);
        setMovies(data.results);

        // Fetch trailers for displayed movies
        const trailerData = {};
        await Promise.all(
          data.results.map(async (movie) => {
            try {
              const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
              );
              const trailer = res.data.results.find(
                (v) => v.type === "Trailer" && v.site === "YouTube"
              );
              trailerData[movie.id] = trailer
                ? `https://www.youtube.com/embed/${trailer.key}?autoplay=1&controls=1`
                : null;
            } catch {
              trailerData[movie.id] = null;
            }
          })
        );
        setTrailers(trailerData);
      } catch (err) {
        console.error("Failed to fetch movies:", err);
      }
    };

    fetchMovies();
  }, [category, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {searchQuery ? (
        <h2 className="text-2xl font-bold mb-6 text-white">
          Search results for: "{searchQuery}"
        </h2>
      ) : (
        <h2 className="text-3xl font-bold mb-6 text-white capitalize">
          {category} Movies
        </h2>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              trailerUrl={trailers[movie.id]}
              onPlay={(url) => setSelectedTrailer(url)}
            />
          ))
        ) : (
          <p className="text-white col-span-full text-center">
            No movies found.
          </p>
        )}
      </div>

      {/* Fullscreen Trailer Overlay */}
      {selectedTrailer && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold hover:text-yellow-400"
            onClick={() => setSelectedTrailer(null)}
          >
            ✕
          </button>
          <iframe
            title="Movie Trailer"
            width="80%"
            height="80%"
            src={selectedTrailer}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;

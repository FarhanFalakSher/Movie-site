import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieGrid from "./pages/MovieGrid";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-16">
      <Navbar />

      {/* Search Box */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          {["trending", "popular", "toprated"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setSearchQuery(""); // reset search
              }}
              className={`px-4 py-2 rounded-md font-semibold transition-colors duration-300 ${
                category === cat && !searchQuery
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 hover:bg-yellow-400 hover:text-black"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          className="px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Movie Grid */}
      <MovieGrid category={category} searchQuery={searchQuery} />
      <Footer/>
    </div>
  );
}

export default App;

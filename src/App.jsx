import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieGrid from "./pages/MovieGrid";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("trending");
  const [searchQuery, setSearchQuery] = useState(""); // <-- Search state

  return (
    <div className="bg-gray-900 min-h-screen text-white pt-16">
      <Navbar onSearch={setSearchQuery} />

      {/* Category Buttons */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex space-x-4 justify-center">
        {["trending", "popular", "toprated"].map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setSearchQuery(""); // reset search when changing category
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

      {/* Movie Grid */}
      <MovieGrid category={category} searchQuery={searchQuery} />

      {/* About Section */}
      <About />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;

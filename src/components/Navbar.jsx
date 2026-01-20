import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== "") {
      onSearch(searchText.trim());
      setSearchText(""); // Clear input
    }
  };

  return (
    <nav className="w-full bg-gradient-to-r from-purple-700 to-indigo-600 shadow-lg fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 text-white font-bold text-2xl cursor-pointer">
            MovieFlix
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {["trending", "popular", "toprated", "about"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}

            {/* Search Form */}
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-700 to-indigo-600 shadow-lg p-4">
          {["trending", "popular", "toprated", "about"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="block px-4 py-3 text-white hover:bg-purple-800 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* Mobile Search */}
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-bold mb-4">MovieFlix</h3>
          <p className="text-gray-200">
            Explore trending, popular, and top-rated movies with real-time trailers.  
            Your ultimate streaming companion built with React and TMDB API.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#trending" className="hover:text-yellow-400 transition-colors duration-300">
                Trending
              </a>
            </li>
            <li>
              <a href="#popular" className="hover:text-yellow-400 transition-colors duration-300">
                Popular
              </a>
            </li>
            <li>
              <a href="#toprated" className="hover:text-yellow-400 transition-colors duration-300">
                Top Rated
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors duration-300">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-300">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} MovieFlix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

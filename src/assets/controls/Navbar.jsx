// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, X, Languages } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext"; // ← Import from correct path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const { isKhmer, toggleLanguage, t } = useLanguage(); // ← Use context instead of local state

  const closeMenu = () => setIsOpen(false);

  // Load favorites count
  useEffect(() => {
    const updateFavorites = () => {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavoritesCount(storedFavorites.length);
    };
    updateFavorites();
    window.addEventListener("storage", updateFavorites);
    return () => window.removeEventListener("storage", updateFavorites);
  }, []);

  const linkClasses =
    "relative text-sm font-semibold uppercase tracking-wide text-gray-200 transition-all duration-300 hover:text-red-500 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 before:transition-all before:duration-300 hover:before:w-full";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-sm border-b border-gray-800 shadow-[0_2px_20px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-extrabold text-white"
            onClick={closeMenu}
          >
            <img
              src="/videos/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <span className="hidden sm:block tracking-wide">
              Lotus<span className="text-red-500">Cinema</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className={linkClasses}>
              {t("Home", "ទំព័រដើម")}
            </Link>
            <Link to="/products" className={linkClasses}>
              {t("Products", "ផលិតផល")}
            </Link>
            <Link to="/Movie" className={linkClasses}>
              {t("Movies", "ភាពយន្ត")}
            </Link>
            <Link to="/contact" className={linkClasses}>
              {t("Contact", "ទាក់ទង")}
            </Link>

            {/* Favorites */}
            <Link
              to="/favorites"
              className="relative flex items-center justify-center text-gray-200 hover:text-red-500 transition"
              title={t("Favorite Movies", "ភាពយន្តចំណូលចិត្ត")}
            >
              <Heart size={22} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                  {favoritesCount}
                </span>
              )}
            </Link>

            {/* Language Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-white bg-gray-800 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
            >
              <Languages size={17} />
              <span>{isKhmer ? "EN" : "KM"}</span>
            </button>

            {/* Login Button */}
            <Link
              to="/Login"
              className="text-white bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-500 hover:to-red-700 transition duration-300"
            >
              {t("Login", "ចូលគណនី")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-gray-800/70 rounded focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md border-l border-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800">
          <span className="text-xl font-bold text-white">
            Lotus<span className="text-red-500">Cinema</span>
          </span>
          <button
            onClick={closeMenu}
            aria-label="Close Menu"
            className="p-2 text-gray-400 hover:text-red-500 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col space-y-6 p-6 text-center">
          <Link to="/" onClick={closeMenu} className={linkClasses}>
            {t("Home", "ទំព័រដើម")}
          </Link>
          <Link to="/products" onClick={closeMenu} className={linkClasses}>
            {t("Products", "ផលិតផល")}
          </Link>
          <Link to="/Movie" onClick={closeMenu} className={linkClasses}>
            {t("Movies", "ភាពយន្ត")}
          </Link>
          <Link to="/contact" onClick={closeMenu} className={linkClasses}>
            {t("Contact", "ទាក់ទង")}
          </Link>

          <Link
            to="/favorites"
            onClick={closeMenu}
            className="flex items-center justify-center space-x-2 text-gray-200 hover:text-red-500 transition"
          >
            <Heart size={22} />
            {favoritesCount > 0 && (
              <span className="text-sm font-semibold">
                {favoritesCount} {t("Favorites", "ចំណូលចិត្ត")}
              </span>
            )}
          </Link>

          {/* Language Button (Mobile) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center space-x-2 text-white bg-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
          >
            <Languages size={18} />
            <span>{isKhmer ? "EN" : "KM"}</span>
          </button>

          {/* Login Button */}
          <Link
            to="/Login"
            onClick={closeMenu}
            className="text-white bg-gradient-to-r from-red-600 to-red-800 px-4 py-2 rounded-lg text-sm font-semibold hover:from-red-500 hover:to-red-700 transition duration-300"
          >
            {t("Login", "ចូលគណនី")}
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
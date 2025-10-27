import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = () => {
      const stored = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(stored);
    };
    loadFavorites();
    window.addEventListener("storage", loadFavorites);
    return () => window.removeEventListener("storage", loadFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((movie) => movie.id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white pt-24 px-6 sm:px-12">
      <h1 className="text-4xl font-extrabold mb-10 text-center tracking-wide">
        ❤️ My Favorite Movies
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400 text-lg text-center">
          No favorite movies yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {favorites.map((movie, index) => (
            <div
              key={movie.id}
              className="group relative flex flex-col bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.03] animate-fade-in"
              style={{
                animationDelay: `${index * 0.05}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Thumbnail (no nested Link now) */}
              <div className="relative block">
                <Link to={`/Detail/${movie.id}`}>
                  <img
                    src={movie.poster || movie.image || "/videos/default.jpg"}
                    alt={movie.title}
                    className="w-full aspect-[2/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold text-white truncate drop-shadow-md">
                    {movie.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <Link
                      to={`/Detail/${movie.id}`}
                      className="text-blue-400 text-sm font-medium hover:underline"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFavorite(movie.id);
                      }}
                      className="text-gray-300 hover:text-red-500 transition"
                      title="Remove from favorites"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Title under poster */}
              <div className="p-3 bg-gray-800/70 backdrop-blur-sm rounded-b-2xl">
                <h4 className="text-sm font-medium text-gray-300 truncate group-hover:text-white">
                  {movie.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

/* Optional Tailwind animation */
<style jsx>{`
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease forwards;
  }
`}</style>

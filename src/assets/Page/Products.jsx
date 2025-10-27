// src/pages/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";


const movies = [
  {
    id: 1,
    title: "Inception",
    titleKm: "ចាប់ផ្តើម",
    genre: "Sci-Fi",
    genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
    price: "$12.99",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
  },
  {
    id: 2,
    title: "The Dark Knight",
    titleKm: "អ្នកការពារងងឹត",
    genre: "Action",
    genreKm: "សកម្មភាព",
    price: "$14.99",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
  },
  {
    id: 3,
    title: "Interstellar",
    titleKm: "អន្តរប្រតិបត្តិការ",
    genre: "Adventure",
    genreKm: "ផ្សងព្រេង",
    price: "$13.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    titleKm: "អ្នកសងសឹក: បញ្ចប់",
    genre: "Superhero",
    genreKm: "វីរបុរស",
    price: "$15.99",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnXEwQlva93WuBdWDK6LlOSf4f96CB5OxToqcdkHiWBnn2p5WOjaOGKo_t6i9F-gQ2tYUp",
  },
  {
    id: 5,
    title: "Titanic",
    titleKm: "ទីតានិក",
    genre: "Romance",
    genreKm: "រ៉ូមែនទិក",
    price: "$11.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA",
  },
  {
    id: 6,
    title: "Joker",
    titleKm: "ចោមពណ៌",
    genre: "Drama",
    genreKm: "រឿងនាដកម្ម",
    price: "$13.49",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ",
  },
  {
    id: 7,
    title: "Pacific Rim",
    titleKm: "ចំណុចប៉ាស៊ីហ្វិក",
    genre: "Sci-Fi",
    genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
    price: "$15.00",
    image: "https://i.pinimg.com/1200x/3f/9d/0f/3f9d0f0f5004590d6cf081ac189b7ab3.jpg",
  },
  {
    id: 8,
    title: "Transformers: Rise of the Beasts",
    titleKm: "ត្រាន់ហ្វ័រមើ: កើនឡើងសត្វ",
    genre: "Action",
    genreKm: "សកម្មភាព",
    price: "$15.00",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Transformers-_Rise_of_the_Beasts.jpg/250px-Transformers-_Rise_of_the_Beasts.jpg",
  },
  {
    id: 9,
    title: "Venom: The Last Dance",
    titleKm: "វេណុម: រាំចុងក្រោយ",
    genre: "Superhero",
    genreKm: "វីរបុរស",
    price: "$15.00",
    image: "https://i.pinimg.com/1200x/9a/46/7c/9a467c736670a8a620ddca9a6571b40b.jpg",
  },
  {
    id: 10,
    title: "Bumblebee",
    titleKm: "កញ្ឆឹង",
    genre: "Action",
    genreKm: "សកម្មភាព",
    price: "$20.00",
    image: "https://m.media-amazon.com/images/M/MV5BMjUwNjU5NDMyNF5BMl5BanBnXkFtZTgwNzgxNjM2NzM@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 11,
    title: "Nezha",
    titleKm: "នេហ្សា",
    genre: "Fantasy",
    genreKm: "ប្រលោមលោក",
    price: "$15.00",
    image: "https://wellgousa.com/sites/default/files/2023-02/NeZha-EpicKidsChineseAnimationActionFantasyAdventure-WellGoUSA-KeyArtPoster-812x1200_0.jpg",
  },
  {
    id: 12,
    title: "Jurassic World",
    titleKm: "ពិភពជូរ៉ាស៊ីក",
    genre: "Adventure",
    genreKm: "ផ្សងព្រេង",
    price: "$15.00",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/Jurassic_World_poster.jpg/250px-Jurassic_World_poster.jpg",
  },
  {
    id: 13,
    title: "Jurassic Park: New Reborn",
    titleKm: "ជូរ៉ាស៊ីកផាក: កើតជាថ្មី",
    genre: "Adventure",
    genreKm: "ផ្សងព្រេង",
    price: "$15.00",
    image: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 14,
    title: "The Black Phone 2",
    titleKm: "ទូរស័ព្ទខ្មៅ ២",
    genre: "Horror",
    genreKm: "រន្ធត់",
    price: "$15.00",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Black_Phone_2_poster.jpg/250px-Black_Phone_2_poster.jpg",
  },
  {
    id: 15,
    title: "Iron Man 2",
    titleKm: "មនុស្សដែក ២",
    genre: "Superhero",
    genreKm: "វីរបុរស",
    price: "$15.00",
    image: "https://images.moviesanywhere.com/f63168b72788f0d189548e7130d3ffac/78720b79-de19-4d10-b80b-1172b068328a.jpg",
  },
  {
    id: 16,
    title: "Top Gun: Maverick",
    titleKm: "កាំភ្លើងកំពូល: អ្នកមិនស្តាប់បង្គាប់",
    genre: "Action",
    genreKm: "សកម្មភាព",
    price: "$15.00",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/250px-Top_Gun_Maverick_Poster.jpg",
  },
  {
    id: 17,
    title: "Transformers: One",
    titleKm: "ត្រាន់ហ្វ័រមើ: មួយ",
    genre: "Animation",
    genreKm: "គំនូរជីវចល",
    price: "$15.00",
    image: "https://i.ebayimg.com/images/g/ruAAAOSw0VZmouJs/s-l1200.jpg",
  },
  {
    id: 18,
    title: "Avengers: Infinity War",
    titleKm: "អ្នកសងសឹក: សង្គ្រាមអនន្ត",
    genre: "Action",
    genreKm: "សកម្មភាព",
    price: "$15.00",
    image: "https://m.media-amazon.com/images/S/pv-target-images/3307ca0df325da35692128a6703a4bff5a5cf8c60bb719f221cadd6c03834358.jpg",
  },
  {
    id: 19,
    title: "Transformers: Dark of the Moon",
    titleKm: "ត្រាន់ហ្វ័រមើ: ងងឹតនៃព្រះចន្ទ",
    genre: "Sci-Fi",
    genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
    price: "$15.00",
    image: "https://m.media-amazon.com/images/I/91bxF4jgMTL._AC_UF1000,1000_QL80_.jpg",
  }
];

function Products() {
  const { t, isKhmer } = useLanguage();

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-10 text-center pt-5">
          🎬 {t("Movie Store", "ហាងភាពយន្ត")}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Poster */}
              <img
                src={movie.image}
                alt={isKhmer ? movie.titleKm : movie.title}
                className="w-full h-64 object-cover hover:scale-105 transition duration-500"
              />

              {/* Card Body */}
              <div className="p-5">
                <h2 className="text-xl font-semibold text-white">
                  {isKhmer ? movie.titleKm : movie.title}
                </h2>
                <p className="text-sm text-gray-400">
                  {isKhmer ? movie.genreKm : movie.genre}
                </p>
                <p className="text-lg font-bold text-blue-400 mt-2">
                  {movie.price}
                </p>

                {/* Buy Button */}
                <Link to={`/Buynow/${movie.id}`}>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition">
                    {t("Buy Now", "ទិញឥឡូវនេះ")}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
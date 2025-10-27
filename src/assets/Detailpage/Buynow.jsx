import React from "react";
import { useParams } from "react-router-dom";
import { CreditCard, Wallet, Lock } from "lucide-react";

// 👇 you can import the same movies data here or keep it in a separate file to reuse
const movies = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    price: "$12.99",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw",
  },
  {
    id: 2,
    title: "The Dark Knight",
    genre: "Action",
    price: "$14.99",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfE_qrYMBZ_JB8om-34WGaZARhpX26yWRttqIDvn4_7l--UzX8mxKcPrc59IcvTpEA_G8gPA",
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Adventure",
    price: "$13.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX",
  },
  {
    id: 4,
    title: "Avengers: Endgame",
    genre: "Superhero",
    price: "$15.99",
    image:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRnXEwQlva93WuBdWDK6LlOSf4f96CB5OxToqcdkHiWBnn2p5WOjaOGKo_t6i9F-gQ2tYUp",
  },
  {
    id: 5,
    title: "Titanic",
    genre: "Romance",
    price: "$11.99",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlcQXin_CNozAFkv_SSihe5eZ_lvDD5nBqCmQT3xPf6KLlqHloIo5cBRGqwuy8pjuIiZrqoA",
  },
  {
    id: 6,
    title: "Joker",
    genre: "Drama",
    price: "$13.49",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkNeYGwWeQEwOoPhxW93QIeNUWnLmEvMPwTw9AlDBGN4uXjIAcOEwz2z2yZL8BpXHp3ZYyjQ",
  },
  {
    id: 7,
    title: "pacific rim",
    genre: "Sci-Fi",
    price: "15$",
    image: "https://i.pinimg.com/1200x/3f/9d/0f/3f9d0f0f5004590d6cf081ac189b7ab3.jpg",
  },
  [
  {
    id: 7,
    title: "Pacific Rim",
    genre: "Sci-Fi",
    price: "15$",
    image: "https://i.pinimg.com/1200x/3f/9d/0f/3f9d0f0f5004590d6cf081ac189b7ab3.jpg",
  },
  {
    id: 8,
    title: "Transformers: Rise of the Beasts",
    genre: "Action",
    price: "15$",
    image: "https://i.pinimg.com/1200x/2a/ef/8f/2aef8f9f6e0a5f5d9db4c787ee2f869d.jpg",
  },
  {
    id: 9,
    title: "Venom: The Last Dance",
    genre: "Superhero",
    price: "15$",
    image: "https://i.pinimg.com/1200x/9a/46/7c/9a467c736670a8a620ddca9a6571b40b.jpg",
  },
  {
    id: 10,
    title: "Bumblebee",
    genre: "Action",
    price: "15$",
    image: "https://i.pinimg.com/1200x/cc/8e/a7/cc8ea7f5b42a94b67657b7efb24b174a.jpg",
  },
  {
    id: 11,
    title: "Nezha",
    genre: "Fantasy",
    price: "15$",
    image: "https://i.pinimg.com/1200x/27/26/34/272634b2b40bdfd1a3442a9059c6df88.jpg",
  },
  {
    id: 12,
    title: "Jurassic World",
    genre: "Adventure",
    price: "15$",
    image: "https://i.pinimg.com/1200x/9b/1a/1b/9b1a1b8b4c88af4c49cb412f5d9c8c61.jpg",
  },
  {
    id: 13,
    title: "Jurassic Park: New Reborn",
    genre: "Adventure",
    price: "15$",
    image: "https://i.pinimg.com/1200x/35/6f/91/356f91b648ff4dbe0fa85cb8c3734c36.jpg",
  },
  {
    id: 14,
    title: "The Black Phone 2",
    genre: "Horror",
    price: "15$",
    image: "https://i.pinimg.com/1200x/a8/51/6e/a8516ef080d8a5a73318b5149f67b0ed.jpg",
  },
  {
    id: 15,
    title: "Iron Man 2",
    genre: "Superhero",
    price: "15$",
    image: "https://i.pinimg.com/1200x/9d/f2/4e/9df24ee739ff37b61e84e529dc1bca5e.jpg",
  },
  {
    id: 16,
    title: "Top Gun: Maverick",
    genre: "Action",
    price: "15$",
    image: "https://i.pinimg.com/1200x/fd/67/7b/fd677b0d00a6886c0562e676bdb7f4aa.jpg",
  },
  {
    id: 17,
    title: "Transformers: One",
    genre: "Animation",
    price: "15$",
    image: "https://i.pinimg.com/1200x/05/a2/76/05a2765ccfae2a4102bdb6f8c35b1d15.jpg",
  },
  {
    id: 18,
    title: "Avengers: Infinity War",
    genre: "Action",
    price: "15$",
    image: "https://i.pinimg.com/1200x/59/3c/ed/593ced5dbed4a57bfa17e4e2820ac2cf.jpg",
  },
  {
    id: 19,
    title: "Transformers: Dark of the Moon",
    genre: "Sci-Fi",
    price: "15$",
    image: "https://i.pinimg.com/1200x/d5/2b/8c/d52b8cf734ed51a6c1762442e57a36db.jpg",
  }
]

]

function Buynow() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <div className="text-white text-center">Movie not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-6">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-lg p-6 space-y-6">
        {/* Movie Info */}
        <div className="flex items-center space-x-4">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-20 h-28 object-cover rounded-lg shadow"
          />
          <div>
            <h2 className="text-xl font-semibold">{movie.title}</h2>
            <p className="text-gray-400 text-sm">{movie.genre}</p>
            <p className="text-green-400 font-bold text-lg">{movie.price}</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-medium mb-3">Payment Method</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-xl">
              <CreditCard className="w-5 h-5" />
              <span>Visa</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-xl">
              <CreditCard className="w-5 h-5" />
              <span>MasterCard</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-xl">
              <Wallet className="w-5 h-5" />
              <span>PayPal</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 p-3 rounded-xl">
              <Wallet className="w-5 h-5" />
              <span>Apple Pay</span>
            </button>
          </div>
        </div>

        {/* Card Details */}
        <div>
          <h3 className="text-lg font-medium mb-3">Card Details</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Pay Button */}
        <button className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-500 p-3 rounded-lg text-lg font-semibold">
          <Lock className="w-5 h-5" />
          <span>Pay {movie.price}</span>
        </button>
      </div>
    </div>
  );
}

export default Buynow;

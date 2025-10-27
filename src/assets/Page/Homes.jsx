import React, { useState, useEffect, useRef } from "react";
import { Play, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

function Homes() {
  const { t, isKhmer } = useLanguage();
  const [loading, setLoading] = useState(true);

  // Movie data (without translations)
  const moviesData = {
    trending: [
      { id: 1, image: "https://i.pinimg.com/1200x/87/6d/92/876d924e14276c0eb1e05b685ba5e104.jpg" },
      { id: 2, image: "https://i.pinimg.com/1200x/0f/6e/f5/0f6ef55b30c8bae3ac82e58a5fa95800.jpg" },
      { id: 3, image: "https://i.pinimg.com/1200x/08/c1/d3/08c1d3100061b1f6302ead6106d4910f.jpg" },
      { id: 4, image: "https://i.pinimg.com/736x/b4/58/2e/b4582e13bbc96a3c0460ba3296b72978.jpg" },
      { id: 5, image: "https://i.pinimg.com/736x/de/ff/20/deff20e1bd6b1892464517ea970122d4.jpg" },
      { id: 6, image: "https://i.pinimg.com/736x/1e/99/5a/1e995ae5e1efa2596325855b9333ebf4.jpg" },
      { id: 7, image: "https://i.pinimg.com/1200x/76/00/03/760003d38f99d6730335a44800a8b433.jpg" },
      { id: 8, image: "https://i.pinimg.com/1200x/37/78/c2/3778c2a171ff8791d7cfaf53106fea55.jpg" },
      { id: 9, image: "https://i.pinimg.com/1200x/92/8e/10/928e1015a9e1a3e8020e6b119ed84c92.jpg" },
      { id: 10, image: "https://i.pinimg.com/1200x/97/40/9b/97409b4758456ff8148f35bc475e4302.jpg" },
      { id: 31, image:"https://i.ebayimg.com/images/g/oX4AAOSwDPRoEkFD/s-l1200.jpg"},
      { id: 32, image:"https://www.syfy.com/sites/syfy/files/styles/scale_600/public/what_if_s1_ka_ultron_v2_lg_0.jpg"},
      { id: 33, image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Black_Phone_2_poster.jpg/250px-Black_Phone_2_poster.jpg"},
    ],
    topRated: [
      { id: 11, image: "https://i.pinimg.com/736x/39/9b/83/399b83aa72375e3e8aad65b57656f646.jpg" },
      { id: 12, image: "https://i.pinimg.com/1200x/78/cd/1f/78cd1f465881553dcbf8c8c2450db0bb.jpg" },
      { id: 13, image: "https://i.pinimg.com/736x/62/47/0a/62470a6ffa8fcc0e473017970541425d.jpg" },
      { id: 14, image: "https://i.pinimg.com/736x/a0/6f/1d/a06f1d7d112830066f37a5c69ebe3550.jpg" },
      { id: 15, image: "https://m.media-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_.jpg" },
      { id: 16, image: "https://m.media-amazon.com/images/M/MV5BMjI3Nzg0MTM5NF5BMl5BanBnXkFtZTgwOTE2MTgwNTM@._V1_.jpg" },
      { id: 17, image: "https://posterspy.com/wp-content/uploads/2022/07/dfthfthj.jpg" },
      { id: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaoh2VAvxaxPG3A4JwgMTMa-PukvLv68IBcA&s" },
      { id: 19, image: "https://img2.wallspic.com/previews/1/0/8/7/6/167801/167801-marvel_cinematic_universe-moon_knight_poster-moon_knight-disney_movies-poster-500x.jpg" },
      { id: 20, image: "https://m.media-amazon.com/images/I/51kO0GWyCIL._AC_UF894,1000_QL80_.jpg" },
      { id: 34, image:"https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_.jpg" },
      { id: 35, image:"https://m.media-amazon.com/images/M/MV5BMDBkZDNjMWEtOTdmMi00NmExLTg5MmMtNTFlYTJlNWY5YTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      { id: 36, image:"https://static0.moviewebimages.com/wordpress/wp-content/uploads/sharedimages/2024/09/transformers-one-2024-film-official-poster.jpg?q=49&fit=contain&w=480&dpr=2" },
    ],
    action: [
      { id: 21, image: "https://i.pinimg.com/1200x/e2/f6/4c/e2f64ccb0db8649365e11761b6130fcd.jpg" },
      { id: 22, image: "https://i.pinimg.com/1200x/da/98/e8/da98e862bb97de8ff6007d369b33157a.jpg" },
      { id: 23, image: "https://i.pinimg.com/1200x/3f/19/d0/3f19d03d2201a933fecad3739faef651.jpg" },
      { id: 24, image: "https://i.pinimg.com/1200x/a4/01/c9/a401c922dfcf52f84f035930d289ea17.jpg" },
      { id: 25, image: "https://i.pinimg.com/1200x/80/a0/87/80a0879c393e45082e5182dbf5986506.jpg" },
      { id: 26, image: "https://i.pinimg.com/1200x/1c/f4/b6/1cf4b60ca866f7054efa4ad0d33de77f.jpg" },
      { id: 27, image: "https://i.pinimg.com/1200x/98/e0/cb/98e0cbd641648451624fcea310fbccc7.jpg" },
      { id: 28, image: "https://i.pinimg.com/1200x/be/fa/5c/befa5c5667befde6fa9206d885cbc7a7.jpg" },
      { id: 29, image: "https://i.pinimg.com/1200x/6b/85/c8/6b85c8d558afcebbaa38bd09a5942b06.jpg" },
      { id: 30, image: "https://i.pinimg.com/736x/f8/a0/29/f8a029a695867f7194b713794c26b88c.jpg" },
      { id: 37, image: "https://m.media-amazon.com/images/S/pv-target-images/3307ca0df325da35692128a6703a4bff5a5cf8c60bb719f221cadd6c03834358.jpg"},
      { id: 38, image: "https://m.media-amazon.com/images/M/MV5BZTVkZWY5MmItYjY3OS00OWY3LTg2NWEtOWE1NmQ4NGMwZGNlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"},
      { id: 39, image: "https://m.media-amazon.com/images/I/81uX++AhwyL._AC_UF1000,1000_QL80_.jpg"},
    ]
  };

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // === Hero Slider ===
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      autoplayRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % moviesData.trending.length);
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [loading, moviesData.trending.length]);

  // Render movie section
  const renderMovieSection = (title, movies) => (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 whitespace-nowrap animate-marquee"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...movies, ...movies].map((movie, idx) => (
            <Link
              key={`${movie.id}-${idx}`}
              to={`/Detail/${movie.id}`}
              className="flex-none transform hover:scale-105 transition duration-300"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-52 h-72 object-cover rounded-lg shadow-lg"
                draggable={false}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  // Show loading screen
  if (loading) {
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50 overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 grid-background" />
        </div>

        {/* Flying energy particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
                boxShadow: '0 0 10px rgba(239, 68, 68, 0.8)'
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 1000],
                y: [0, (Math.random() - 0.5) * 1000],
                opacity: [1, 0],
                scale: [1, 0]
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Speed lines effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`line-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                width: `${100 + Math.random() * 200}px`,
                top: `${Math.random() * 100}%`,
                left: '-200px'
              }}
              animate={{
                x: ['0vw', '120vw'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 1 + Math.random() * 1,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Explosion rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute border-2 border-red-500 rounded-full"
              initial={{ width: 0, height: 0, opacity: 0.8 }}
              animate={{
                width: [0, 800],
                height: [0, 800],
                opacity: [0.8, 0],
                borderWidth: [4, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Scanning lines effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none scan-line"
          animate={{ y: ['-200px', '100vh'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />

        {/* Hexagonal particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`hex-${i}`}
              className="absolute w-8 h-8 border border-red-500 opacity-30 hexagon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -150],
                rotate: [0, 360],
                opacity: [0, 0.5, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
          ))}
        </div>

        {/* Logo with holographic frame and shake effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            rotate: [0, -2, 2, -2, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 },
            rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
          }}
          className="relative mb-12 z-10"
        >
          {/* Outer frame corners with glow */}
          <div className="absolute -inset-4">
            <motion.div 
              className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.25 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-red-500"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.75 }}
            />
          </div>

          {/* Glowing pulse effect */}
          <motion.div
            className="absolute inset-0 blur-2xl bg-red-500"
            animate={{ 
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />

          <img 
            src="/videos/logo.png" 
            alt="Logo" 
            className="relative z-10 h-24 w-auto logo-glow"
          />

          {/* Multiple scanning lines */}
          <motion.div className="absolute inset-0 overflow-hidden">
            {[0, 0.3, 0.6].map((delay, i) => (
              <motion.div
                key={`scan-${i}`}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{ opacity: 0.6 }}
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Advanced circular HUD spinner with trails */}
        <div className="relative w-40 h-40 mb-8">
          {/* Outer ring segments with trails */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`segment-${i}`}
              className="absolute inset-0"
              style={{ rotate: `${i * 30}deg` }}
              animate={{ 
                opacity: [0.2, 1, 0.2],
                scale: [0.9, 1.1, 0.9]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: i * 0.08 
              }}
            >
              <div className="w-1.5 h-8 bg-gradient-to-b from-red-500 to-transparent rounded-full mx-auto" />
            </motion.div>
          ))}

          {/* Fast rotating outer ring */}
          <motion.div
            className="absolute inset-2 border-2 border-red-500 rounded-full rotating-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />

          {/* Counter-rotating middle ring */}
          <motion.div
            className="absolute inset-6 border-2 border-cyan-400 rounded-full"
            style={{ borderTopColor: 'transparent', borderLeftColor: 'transparent' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner pulsing circle with energy */}
          <motion.div
            className="absolute inset-10 border-2 border-red-400 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 1, 0.3],
              rotate: 360
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Center energy core */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-4 h-4 bg-red-500 rounded-full"
              animate={{ 
                scale: [1, 1.8, 1],
                boxShadow: [
                  '0 0 10px rgba(239, 68, 68, 0.8)',
                  '0 0 30px rgba(239, 68, 68, 1)',
                  '0 0 10px rgba(239, 68, 68, 0.8)'
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </div>

        {/* System status text with glitch effect */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 font-mono text-cyan-400 text-sm">
            <motion.span 
              className="text-red-500 text-lg"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ●
            </motion.span>
            <motion.span
              animate={{ 
                opacity: [0.5, 1, 0.5],
                textShadow: [
                  '0 0 5px rgba(6, 182, 212, 0.5)',
                  '0 0 10px rgba(6, 182, 212, 1)',
                  '0 0 5px rgba(6, 182, 212, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              INITIALIZING SYSTEM
            </motion.span>
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.span
                key={`dot-${i}`}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay, times: [0, 0.5, 1] }}
              >
                .
              </motion.span>
            ))}
          </div>

          <motion.div
            className="font-mono text-red-500 text-xs tracking-widest"
            animate={{ 
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            LOADING PROTOCOL
          </motion.div>
        </motion.div>

        {/* Dynamic progress bars with energy flow */}
        <div className="mt-8 space-y-2 w-80">
          {[60, 80, 45].map((width, i) => (
            <motion.div
              key={`bar-${i}`}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <div className="w-full h-1.5 bg-gray-900 border border-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-600 via-red-500 to-cyan-400 rounded-full progress-bar relative"
                  initial={{ width: "0%" }}
                  animate={{ width: `${width}%` }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                >
                  {/* Energy spark at the end */}
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 5px rgba(255, 255, 255, 1)',
                        '0 0 15px rgba(255, 255, 255, 1)',
                        '0 0 5px rgba(255, 255, 255, 1)'
                      ]
                    }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corner UI elements with animation */}
        <motion.div 
          className="absolute top-8 left-8 font-mono text-xs text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div>VER 2.0.1</div>
          <motion.div 
            className="text-red-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ONLINE
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 right-8 font-mono text-xs text-gray-600 text-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div>SYS_ID: {Date.now().toString().slice(-6)}</div>
          <motion.div 
            className="text-cyan-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ACTIVE
          </motion.div>
        </motion.div>

        <style>{`
          .grid-background {
            background-image: linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 20s linear infinite;
          }
          @keyframes gridMove {
            0% { transform: translateY(0); }
            100% { transform: translateY(50px); }
          }
          .scan-line {
            background: linear-gradient(180deg, transparent 0%, rgba(239, 68, 68, 0.1) 50%, transparent 100%);
            height: 200px;
          }
          .hexagon {
            clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
          }
          .logo-glow {
            filter: drop-shadow(0 0 20px rgba(239, 68, 68, 0.5));
          }
          .rotating-ring {
            border-top-color: transparent;
            border-right-color: transparent;
          }
          .progress-bar {
            box-shadow: 0 0 15px rgba(239, 68, 68, 0.7);
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* ===== HERO SLIDER ===== */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0">
          {moviesData.trending.map((movie, i) => (
            <img
              key={movie.id}
              src={movie.image}
              alt={`Slide ${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl p-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            {t("Up Coming Movie !!", "ភាពយន្តដែលនឹងមកដល់ឆាប់ៗនេះ !!")}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mb-6">
            {t(
              "A thief who enters the dreams of others to steal secrets from their subconscious is offered a chance to have his past crimes forgiven.",
              "ចោរម្នាក់ដែលចូលទៅក្នុងក្តីសុបិនរបស់អ្នកដទៃ ដើម្បីលួចការសម្ងាត់ពីចិត្តរបស់ពួកគេ ត្រូវបានផ្តល់ឱកាសឱ្យអភ័យទោសលើបទឧក្រិដ្ឋកាលពីអតីតរបស់គាត់។"
            )}
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-red-700 transition"
            >
              <Play size={18} /> {t("Play", "លេង")}
            </a>
            <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-600 transition">
              <Info size={18} /> {t("More Info", "ព័ត៌មានបន្ថែម")}
            </button>
          </div>
        </div>
      </section>

      {/* ===== MOVIE SECTIONS ===== */}
      {renderMovieSection(t("Trending Now", "កំពុងពេញនិយម"), moviesData.trending)}
      {renderMovieSection(t("Top Rated", "ពិន្ទុខ្ពស់បំផុត"), moviesData.topRated)}
      {renderMovieSection(t("Action & Adventure", "សកម្មភាព និងផ្សងព្រេង"), moviesData.action)}

      {/* ===== CUSTOM STYLES ===== */}
      <style>{`
        .animate-marquee {
          display: inline-flex;
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export default Homes;
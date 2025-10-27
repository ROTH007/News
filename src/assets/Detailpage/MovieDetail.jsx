// src/Page/MovieDetail.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Play, Heart, Plus, Star, Clock } from "lucide-react";

function MovieDetail() {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  // get the movie ID from URL

  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      releaseYear: "2019",
      runtime: "3h 2m",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 8.5,
      tagline: "Part of the journey is the end.",
      overview:
        "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions.",
      language: "English",
      releaseDate: "April 26, 2019",
      production: "Marvel Studios, USA",
      banner:
        "https://i.pinimg.com/1200x/42/00/da/4200dae9ac7b15a5c65375cbfaceaa69.jpg",
      poster:
        "https://i.pinimg.com/736x/bb/f7/0c/bbf70cc9a56b19eb7faf60bdf76bc99d.jpg",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    },
    {
      id: 2,
      title: "LIVIATAN RISING",
      releaseYear: "2025",
      runtime: "1h 55m",
      genres: ["Action", "Monster", "Horror"],
      rating: 8.0,
      tagline: "We are not alone",
      overview:
        "Is about the living Creature that live under the Sea since human not Already born on this Earth.",
      language: "English",
      releaseDate: "March 4, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://i.pinimg.com/1200x/fa/13/a7/fa13a76b1dd7ad8c56f28d751fdfdc91.jpg",
      poster:
        "https://i.pinimg.com/1200x/0f/6e/f5/0f6ef55b30c8bae3ac82e58a5fa95800.jpg",
      trailer: "https://www.youtube.com/embed/nv1_osavrq4?si=VF0LCQ71ntAl6OTs",
    },
    {
      id: 3,
      title: "TRON",
      releaseYear: "2025",
      runtime: "2h 5m",
      genres: ["Action", "SI-FI", "Drama"],
      rating: 8.0,
      tagline: "No going back.",
      overview:
        "Mankind encounters AI beings for the first time when a highly sophisticated programme, Ares, leaves the digital world for a dangerous mission in the real world.",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://mouseinfo.com/wp-content/uploads/2025/04/TRON_ARES_KA_DIGITAL_1SHT_TSR_sRGB_V9-cover.jpg",
      poster:
        "https://i.pinimg.com/1200x/08/c1/d3/08c1d3100061b1f6302ead6106d4910f.jpg",
      trailer: "https://www.youtube.com/embed/YShVEXb7-ic?si=yTUQckYXHFUTL-Bx",
    },
    {
      id: 4,
      title: "Marvel Zombie",
      releaseYear: "2025",
      runtime: "2h 5m",
      genres: ["Action", "SI-FI", "Drama"],
      rating: 8.0,
      tagline: "All hero are becoming Zombie.",
      overview:
        "Mankind encounters AI beings for the first time when a highly sophisticated programme, Ares, leaves the digital world for a dangerous mission in the real world.",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://riot-us.com/wp-content/uploads/2025/09/Marvel-Zombies-Banner.jpg",
      poster:
        "https://i.pinimg.com/1200x/82/27/ef/8227ef1107c9484114cf49eb6b91143a.jpg",
      trailer: "https://www.youtube.com/embed/twHYF506-9Y?si=WCkPFgbpct00OPFF",
    },
    {
      id: 5,
      title: "Wednesday Season2",
      releaseYear: "2025",
      runtime: "12 Ep",
      genres: ["Action", "Horror", "Drama"],
      rating: 8.0,
      tagline: "Wednesday new journey",
      overview:
        "Wednesday is a supernatural mystery series about Wednesday Addams, who attends Nevermore Academy for outcasts. The plot follows her attempts to master her psychic abilities, solve a monstrous killing spree, and uncover a supernatural mystery from her parents' past, all while navigating new relationships at the academy. ",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://i.pinimg.com/736x/35/a5/f1/35a5f1d758196f704d789bb4cab841b1.jpg",
      poster:
        "https://i.pinimg.com/736x/01/ab/88/01ab8894c1bf33f4a0bb87b41c9d0839.jpg",
      trailer: "https://www.youtube.com/embed/ueCc-AYUMRs?si=yHaT1HoTPfKee4jE",
    },
    {
      id: 6,
      title: "DUNE",
      releaseYear: "2025",
      runtime: "2h 30mn",
      genres: ["Action", "SI-FI", "SPACE"],
      rating: 8.0,
      tagline: "Life on the last planet",
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to a dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of a precious resource in existence, only those who can conquer their own fear will survive. ",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://i.pinimg.com/736x/33/df/c2/33dfc2e6594d0d3be4a8b65906875537.jpg",
      poster:
        "https://i.pinimg.com/736x/9a/6a/dd/9a6add70b773e23723f1bb4536417b7c.jpg",
      trailer: "https://www.youtube.com/embed/Way9Dexny3w?si=8yiICm7zEOHuTbZh",
    },
    {
      id: 7,
      title: "LOKI",
      releaseYear: "2023",
      runtime: "12 Ep",
      genres: ["Action", "SI-FI", "Drama"],
      rating: 8.0,
      tagline: "From king of lie to King of Time",
      overview:
        "The Loki series has concluded, with its second season and final episode airing in 2023, although the character may return in future projects like Avengers films. The series, starring Tom Hiddleston, explored the character's journey after Avengers ",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://i.pinimg.com/736x/89/af/5c/89af5c95b09df49d9a67153fc67ac101.jpg",
      poster:
        "https://i.pinimg.com/736x/8c/b3/6f/8cb36f4cd2295e0009dcdb5c6c75905f.jpg",
      trailer: "https://www.youtube.com/embed/nW948Va-l10?si=bqREFRkQfPsZZ3X5",
    },
    {
      id: 8,
      title: "ANTMAN & WARP",
      releaseYear: "2025",
      runtime: "2h 30mn",
      genres: ["Action", "Horror", "Drama"],
      rating: 8.0,
      tagline: "Welcome to quontim side ",
      overview:
        "Wednesday is a supernatural mystery series about Wednesday Addams, who attends Nevermore Academy for outcasts. The plot follows her attempts to master her psychic abilities, solve a monstrous killing spree, and uncover a supernatural mystery from her parents' past, all while navigating new relationships at the academy. ",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://criticscocktail.com/wp-content/uploads/2018/07/ant-man-wasp-banner-3.jpg",
      poster:
        "https://i.pinimg.com/1200x/c4/a0/35/c4a035685a053270fee1209e819deffd.jpg",
      trailer: "https://www.youtube.com/embed/ZlNFpri-Y40?si=x7FEDpArjE38wIF6",
    },
    {
      id: 9,
      title: "WHAT IF SEASON 2",
      releaseYear: "2022",
      runtime: "8 Ep",
      genres: ["Action", "Horror", "Drama"],
      rating: 8.0,
      tagline: "Big change in Marvel World",
      overview:
        "What If...? Season 2 is an anthology of alternate reality stories from the Marvel Cinematic Universe, where The Watcher guides viewers through various timelines with new and familiar faces.",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://preview.redd.it/my-personal-review-for-what-if-season-2-v0-abukhb8ptk9c1.png?auto=webp&s=6b4c327b514a6dfdf8b1ed6eafd328935f7e8de8",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhx2JuHzeqYiIUpLBJuXCH8vThK-11VvMZw&s",
      trailer: "https://www.youtube.com/embed/TiEVqZ2Bc_c?si=E4P51xEsccbd2U_F",
    },
    {
      id: 10,
      title: "WHAT IF SEASON 3",
      releaseYear: "2025",
      runtime: "8 Ep",
      genres: ["Action", "Horror", "Drama"],
      rating: 8.0,
      tagline: "New version of Our hero",
      overview:
        "What If...? Season 3 is an anthology of alternate reality stories from the Marvel Cinematic Universe, where The Watcher guides viewers through various timelines with new and familiar faces. ",
      language: "English",
      releaseDate: "October 10, 2025",
      production: "Warner Bros. Pictures",
      banner:
        "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/what-if-season-3-mecha-avengers.jpg?w=1600&h=900&fit=crop",
      poster:
        "https://preview.redd.it/new-poster-for-what-if-season-3-episode-1-what-if-the-hulk-v0-pmjv33kzhu7e1.jpeg?width=640&crop=smart&auto=webp&s=4c0624587238c0a020cb5992f061e84ee3ef34af",
      trailer: "https://www.youtube.com/embed/umiKiW4En9g?si=tyRgTAncwaeF2lhZ",
    },
    {
      id: 11,
      title: "Demon Slayer: INFINITY CASTLE",
      releaseYear: "2025",
      runtime: "117 min",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 8.2,
      tagline: "With your blade, bring an end to the nightmare.",
      overview:
        "After his family is brutally murdered and his sister turned into a demon, Tanjiro Kamado joins the Demon Slayer Corps to find a cure for her. On the Mugen Train, Tanjiro and his allies face a powerful demon that threatens the lives of everyone on board.",
      language: "Japanese",
      releaseDate: "October 16, 2020",
      production: "Ufotable, Aniplex, Shueisha",
      banner:
        "https://movieswetextedabout.com/wp-content/uploads/2025/09/Demon-Slayer-Infinity-Castle-Banner.jpg",
      poster:
        "https://dx35vtwkllhj9.cloudfront.net/crunchy-roll/demon-slayer-infinity-castle/images/regions/intl/onesheet.jpg",
      trailer: "https://www.youtube.com/embed/x7uLutVRBfI?si=I17naInANPaVuPcN",
    },

    {
      id: 12,
      title: "Thor: Ragnarok",
      releaseYear: "2017",
      runtime: "130 min",
      genres: ["Action", "Adventure", "Comedy"],
      rating: 7.9,
      tagline: "No hammer. No problem.",
      overview:
        "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarok—the destruction of his homeworld and the end of Asgardian civilization—at the hands of the powerful and ruthless Hela.",
      language: "English",
      releaseDate: "November 3, 2017",
      production: "Marvel Studios",
      banner:
        "https://ntvb.tmsimg.com/assets/p12402331_v_h8_am.jpg?w=1280&h=720",
      poster:
        "https://i.pinimg.com/1200x/16/5d/39/165d391974b0eabf27a3e90c12420d93.jpg",
      trailer: "https://www.youtube.com/embed/ue80QwXMRHg?si=wUUKcTDrWy2icZ7f",
    },
    {
      id: 13,
      title: "Doctor Strange in the Multiverse of Madness",
      releaseYear: "2022",
      runtime: "126 min",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 7.0,
      tagline: "Enter a new dimension of Strange.",
      overview:
        "Dr. Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too great for him and his team to handle, forcing him to confront alternate realities and his own darker side.",
      language: "English",
      releaseDate: "May 6, 2022",
      production: "Marvel Studios",
      banner:
        "https://multiverseofcolor.com/wp-content/uploads/2019/07/Doctor-Strange-2-Movie-Multiverse-Of-Madness-banner.jpg",
      poster:
        "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90329/98876/doctor-strange-in-the-multiverse-of-madness-original-marvel-movie-poster-one-sheet-buy-now-at-starstills__20801.1698922344.jpg?c=2",
      trailer: "https://www.youtube.com/embed/aWzlQ2N6qqg?si=0gEGym_evccZFOK4",
    },
    {
      id: 14,
      title: "Black Panther",
      releaseYear: "2018",
      runtime: "134 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 7.3,
      tagline: "Long live the king.",
      overview:
        "After the death of his father, T'Challa returns home to Wakanda to take his rightful place as king. When a powerful enemy reappears, T'Challa must harness the full power of the Black Panther to protect his people and secure the future of his nation.",
      language: "English",
      releaseDate: "February 16, 2018",
      production: "Marvel Studios",
      banner: "https://theknockturnal.com/wp-content/uploads/2022/11/scale.jpg",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
      trailer: "https://www.youtube.com/embed/xjDjIWPwcPU?si=xr-hEngoBIT7jv7i",
    },
    {
      id: 15,
      title: "Pacific Rim",
      releaseYear: "2013",
      runtime: "131 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.9,
      tagline: "To fight monsters, we created monsters.",
      overview:
        "As monstrous creatures known as Kaiju rise from the sea to attack humanity, humans build massive robots called Jaegers to combat them. A washed-up pilot and an untested trainee are teamed up to drive a legendary Jaeger and save the world from apocalypse.",
      language: "English",
      releaseDate: "July 12, 2013",
      production: "Legendary Pictures, Warner Bros.",
      banner: "https://www.scannain.com/media/pacific-rim-banner.jpg",
      poster:
        "https://lh3.googleusercontent.com/proxy/WbUkJZDacVzPZqs-Y_4bUPSC3M1-VO8X4MBBGgmb4NGv8Br42sLuqG7BJBrh-EMqVjqUdn2CPW8VinjfS3h5NSO5PnUsvBRoqJ1x2YY",
      trailer: "https://www.youtube.com/embed/Ef6vQBGqLW8?si=hI8AJeCOLcIYZyTf",
    },
    {
      id: 16,
      title: "Pacific Rim: Uprising",
      releaseYear: "2018",
      runtime: "111 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 5.6,
      tagline: "Rise up.",
      overview:
        "Ten years after the Battle of the Breach, the world has changed, but the Kaiju threat returns stronger than ever. A new generation of Jaeger pilots, led by Jake Pentecost—the son of Stacker Pentecost—must unite to save humanity once again.",
      language: "English",
      releaseDate: "March 23, 2018",
      production:
        "Legendary Pictures, Double Dare You Productions, Universal Pictures",
      banner:
        "https://www.superherohype.com/wp-content/uploads/sites/4/gallery/pacific-rim-2/pacific_rim_uprising_ver26_xlg.jpg",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/1/12/Pacific_Rim_-_Uprising_%282018_film%29.jpg",
      trailer: "https://www.youtube.com/embed/8BAhwgjMvnM?si=rYqTJt2_SRwIb9Yh",
    },
    {
      id: 17,
      title: "John Wick: Chapter 4",
      releaseYear: "2023",
      runtime: "169 min",
      genres: ["Action", "Thriller", "Crime"],
      rating: 8.0,
      tagline: "No way back. One way out.",
      overview:
        "With the price on his head ever increasing, legendary hitman John Wick uncovers a path to defeating the High Table. But before he can earn his freedom, Wick must face a new enemy with powerful alliances across the globe—and forces that turn old friends into foes.",
      language: "English",
      releaseDate: "March 24, 2023",
      production:
        "Summit Entertainment, Thunder Road Pictures, 87North Productions",
      banner:
        "https://sm.ign.com/ign_ap/gallery/j/john-wick-/john-wick-4-the-cast-of-the-action-sequel_s323.jpg",
      poster:
        "https://media.themoviedb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      trailer: "https://www.youtube.com/embed/qEVUtrk8_B4?si=pECFQix2oxOsX-yq",
    },
    {
      id: 18,
      title: "Shang-Chi and the Legend of the Ten Rings",
      releaseYear: "2021",
      runtime: "132 min",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 7.4,
      tagline: "You can’t outrun your destiny.",
      overview:
        "Shang-Chi, a skilled martial artist trained since childhood to be an assassin by his father, escapes his past to live a normal life in San Francisco. But when he is drawn back into the mysterious Ten Rings organization, he must confront the legacy he thought he left behind.",
      language: "English",
      releaseDate: "September 3, 2021",
      production: "Marvel Studios",
      banner:
        "https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/08/shang-chi-ending-credits-explained.jpg",
      poster:
        "https://preview.redd.it/02ypdtot7oy71.jpg?width=640&crop=smart&auto=webp&s=4b47e34ea651d7612245410be06f1555ba1fd1ce",
      trailer: "https://www.youtube.com/embed/8YjFbMbfXaQ?si=W3VXWo_geuUZaazd",
    },
    {
      id: 19,
      title: "Moon Knight",
      releaseYear: "2022",
      runtime: "45 min per episode",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 7.3,
      tagline: "Embrace the chaos.",
      overview:
        "Steven Grant, a mild-mannered gift shop employee, begins to experience blackouts and memories of another life. He soon discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector, who becomes the conduit for the Egyptian moon god Khonshu.",
      language: "English",
      releaseDate: "March 30, 2022",
      production: "Marvel Studios, Disney+",
      banner:
        "https://knightedgemedia.com/wp-content/uploads/2021/11/moon-knight-teaser-trailer-banner1.jpg",
      poster:
        "https://cdn.marvel.com/content/1x/halfstack_busshelter_48x70_moonknight_v7_lg_0.jpg",
      trailer: "https://www.youtube.com/embed/x7Krla_UxRg?si=RxU8QxX_mNx3oPwb",
    },
    {
      id: 20,
      title: "Superman",
      releaseYear: "2025",
      runtime: "129 min",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 7.0,
      tagline: "For truth, justice and the human way.",
      overview:
        "After crash-landing on Earth as a baby, Kal-El is raised in Smallville as Clark Kent. As he comes into his super-powers, he must reconcile his alien Kryptonian heritage with his human upbringing, and ultimately become the iconic protector known as Superman when a new threat to humanity emerges.",
      language: "English",
      releaseDate: "July 11, 2025",
      production: "DC Studios, Troll Court Entertainment, The Safran Company",
      banner:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/078277ed-5380-4deb-b166-997beba79634/diufooh-3562c6e6-1022-46e8-9885-a8a4ff5cd02a.jpg/v1/fill/w_1469,h_544,q_70,strp/superman__2025__banner_by_crillyboy25_diufooh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAzNiIsInBhdGgiOiIvZi8wNzgyNzdlZC01MzgwLTRkZWItYjE2Ni05OTdiZWJhNzk2MzQvZGl1Zm9vaC0zNTYyYzZlNi0xMDIyLTQ2ZTgtOTg4NS1hOGE0ZmY1Y2QwMmEuanBnIiwid2lkdGgiOiI8PTgxOTIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ue5GKMIgaxfdsBIIuPvY8_c6JO41VHLvFJapPD0ANkY ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer: "https://www.youtube.com/embed/Ox8ZLF6cGM0?si=51-pzZ1O-emKEGYU",
    },
    {
      id: 21,
      title: "How to Train Your Dragon",
      releaseYear: "2025",
      runtime: "125 min",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 8.0,
      tagline: "From fear… to friendship.",
      overview:
        "In a Viking village where dragons are seen as enemies, young Hiccup dreams of proving himself a true warrior. But when he befriends a mysterious Night Fury dragon, he discovers that friendship and understanding can change both their worlds forever.",
      language: "English",
      releaseDate: "June 13, 2025",
      production:
        "DreamWorks Animation, Universal Pictures, Marc Platt Productions",
      banner:
        "https://dx35vtwkllhj9.cloudfront.net/universalstudios/how-to-train-your-dragon-intl/images/regions/us/share.jpg",
      poster:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-",
      trailer: "https://www.youtube.com/embed/22w7z_lT6YM?si=A4qkLw0wisc5R3kE",
    },
    {
      id: 22,
      title: "Beyond Skyline",
      releaseYear: "2017",
      runtime: "106 min",
      genres: ["Action", "Sci-Fi", "Adventure"],
      rating: 5.3,
      tagline: "Survive. Fight. Evolve.",
      overview:
        "When alien ships invade Earth and begin abducting people, tough-as-nails Los Angeles detective Mark Corley fights to rescue his son from an alien warship. As he leads a desperate human resistance, he discovers that the key to saving humanity might lie within the aliens themselves.",
      language: "English",
      releaseDate: "December 15, 2017",
      production:
        "Hydraulx Entertainment, Infinite Frameworks Studios, M45 Productions",
      banner:
        "https://vijayvarman.wordpress.com/wp-content/uploads/2017/10/beyond-skyline-banner-1.jpg?w=960&h=540",
      poster:
        " https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/09/beyond_skyline_ver2_xlg.jpg?resize=740%2C1097",
      trailer: "https://www.youtube.com/embed/s7UvEOzK8FQ?si=21AtYkWtxzLCwqOR",
    },
    {
      id: 23,
      title: "Solo Leveling",
      releaseYear: "2024",
      runtime: "24 episodes (Season 1: 12 episodes, Season 2: 12 episodes)",
      genres: ["Action", "Adventure", "Fantasy", "Anime"],
      rating: 8.9, // Based on Crunchyroll user ratings
      tagline: "Level up or be left behind.",
      overview:
        "In a world where dungeons and monsters threaten humanity, weak hunter Sung Jinwoo gains the ability to level up after a near-death experience. As he grows in power, he uncovers dark secrets about the dungeons and his own origins.",
      language: "Japanese (Original), English (Dub)",
      releaseDate: "January 7, 2024",
      production: "A-1 Pictures",
      banner:
        "https://i.ytimg.com/vi/aLBQZsj1YBE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCqL8V5Yg0kEJuNSFnj83CMFhoHbw",
      poster:
        "https://i.pinimg.com/474x/79/36/da/7936dae2f934776f2e8e8f580be98317.jpg",
      trailer: "https://www.youtube.com/embed/I6JIwjWOhnQ?si=bULxmxzKTqy1-WWe",
    },
    {
      id: 24,
      title: "Battleship",
      releaseYear: "2012",
      runtime: "131 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 5.8,
      tagline: "The fate of the world is in their hands.",
      overview:
        "When alien ships threaten to destroy Earth, a fleet of naval ships led by Lieutenant Alex Hopper must defend humanity. As the aliens unleash their superior technology, Hopper and his team risk everything in a desperate fight for survival.",
      language: "English",
      releaseDate: "May 18, 2012",
      production: "Universal Pictures, Hasbro, Roth Films",
      banner:
        " https://tvovermind.com/wp-content/uploads/2022/04/thumb-1920-673209-750x422.jpg",
      poster:
        "https://lh3.googleusercontent.com/proxy/1vbvubeK15NIsvecVLJY1UTgmptIAUTfn0zC69OdtBRCdVN3XKKUf3Rzax54urEuJWsKFF1FlN2JpJYZ83DH_lvToxSJ-BF_hs9fKvXrAd7D",
      trailer: "https://www.youtube.com/embed/JpoabtbEJOI?si=mWn9oHFBv_9_nDBT",
    },
    {
      id: 25,
      title: "Rampage",
      releaseYear: "2018",
      runtime: "107 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.1,
      tagline: "The bigger they are, the harder they fall.",
      overview:
        "When a genetic experiment goes horribly wrong, three animals—an albino gorilla, a wolf, and a crocodile—mutate into massive, aggressive beasts. Primatologist Davis Okoye teams up with a genetic engineer to stop them from wreaking havoc on Chicago.",
      language: "English",
      releaseDate: "April 13, 2018",
      production:
        "Warner Bros. Pictures, New Line Cinema, RatPac-Dune Entertainment",
      banner:
        "https://moviebabble.com/wp-content/uploads/2018/04/Rampage-1.jpg",
      poster:
        "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2876328/5956911/MOVCB51655__48142.1679600709.jpg?c=2",
      trailer: "https://www.youtube.com/embed/xeaN9kgEUJM?si=7-gipUw_enf_lS2R",
    },
    {
      id: 26,
      title: "Venom: The Last Dance",
      releaseYear: "2024",
      runtime: "97 min",
      genres: ["Action", "Sci-Fi", "Superhero"],
      rating: 5.2,
      tagline: "'Til death do they part.",
      overview:
        "Eddie Brock and Venom are on the run, hunted by both of their worlds. Forced into a devastating decision, they confront a cosmic threat that could end all life on Earth.",
      language: "English",
      releaseDate: "October 25, 2024",
      production: "Sony Pictures, Marvel Entertainment, Arad Productions",
      banner:
        "https://bleedingcool.com/wp-content/uploads/2024/06/VNM3_OnLine_6072x9000_TSR_02_1349x2000_thumbnail-2000x1125.jpg",
      poster:
        " https://i.pinimg.com/736x/9a/46/7c/9a467c736670a8a620ddca9a6571b40b.jpg",
      trailer: "https://www.youtube.com/embed/D42iEo8605Y?si=YhNW0tvvuucrAu7R",
    },
    {
      id: 27,
      title: "Ne Zha",
      releaseYear: "2019",
      runtime: "110 min",
      genres: ["Animation", "Adventure", "Fantasy"],
      rating: 7.7,
      tagline: "'Destined to defy fate.'",
      overview:
        "Born under a demon curse, the boy Ne Zha must fight his fate and protect his people when a destructive threat rises — forging his own path from outcast to hero.",
      language: "Mandarin (with English subtitles/dub available)",
      releaseDate: "July 26, 2019 (China)",
      production:
        "Chengdu Coco Cartoon, Beijing Enlight Media, Beijing Enlight Pictures",
      banner:
        "https://news.cgtn.com/news/2025-02-16/-Ne-Zha-2-captivates-North-America-audiences-including-Oscar-judges-1B2u9uI58fC/img/f5d744fe74dd422ea534078497f42197/f5d744fe74dd422ea534078497f42197.jpeg",
      poster:
        "https://image.tmdb.org/t/p/original/vhnxaQel1CwfcwLtCkTNpSdjte1.jpg",
      trailer: " https://www.youtube.com/embed/ETlOSBR92Fs?si=ArUX3Wz0E-xtvWXM",
    },
    {
      id: 28,
      title: "Jurassic World",
      releaseYear: "2015",
      runtime: "124 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.9,
      tagline: "'The park is open.'",
      overview:
        "Twenty-two years after the events of Jurassic Park, a fully functioning dinosaur theme park—Jurassic World—on Isla Nublar has operated for years, until a new genetically modified hybrid dinosaur escapes, putting everyone in peril and forcing the park’s security chief and two children to fight for survival.",
      language: "English",
      releaseDate: "June 12, 2015 (US)",
      production:
        "Universal Pictures, Amblin Entertainment, Legendary Pictures",
      banner:
        "https://images.squarespace-cdn.com/content/v1/54e310f0e4b0f4a6ba3ac899/1537729294782-QU0TL6K89FS9QLTNGMBT/Jurassic+Park+Fallen+Kingdom+Banner.jpg ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BNzBhNzlkM2UtZTQyOC00NjUyLTkzMmMtNDQ1YTM5N2NmMGE5XkEyXkFqcGc@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/vn9mMeWcgoM?si=CEbLxWXRJbavA549",
    },
    {
      id: 29,
      title: "Bumblebee",
      releaseYear: "2018",
      runtime: "114 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.8,
      tagline: "'Every hero has a beginning.'",
      overview:
        "On the run in the year 1987, Bumblebee finds refuge in a junkyard in a small California beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken. When the Decepticons hunt him down, Bumblebee and Charlie team up to protect Earth and each other.",
      language: "English",
      releaseDate: "December 21, 2018 (USA)",
      production:
        "Paramount Pictures, Hasbro, Tencent Pictures, Di Bonaventura Pictures",
      banner: "https://rare-gallery.com/uploads/posts/370364-4k-wallpaper.jpg ",
      poster:
        "https://m.media-amazon.com/images/I/91s+7+OhpxL._UF1000,1000_QL80_.jpg ",
      trailer: "https://www.youtube.com/embed/bO6qIGmwLpE?si=mLTj9cZekAidipvf",
    },
    {
      id: 30,
      title: "Jurassic World: Rebirth",
      releaseYear: "2025",
      runtime: "133 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 5.0, // approximate score (e.g., 50% on Rotten Tomatoes) :contentReference[oaicite:1]{index=1}
      tagline: "'A new era is born.'",
      overview:
        "Five years after the events of Jurassic World: Dominion, the planet’s ecology is largely inhospitable to dinosaurs. A covert extraction team races to an island that once housed a research facility for Jurassic Park — inhabited by the most dangerous dinosaurs left behind. :contentReference[oaicite:2]{index=2}",
      language: "English",
      releaseDate: "July 2, 2025 (US) :contentReference[oaicite:3]{index=3}",
      production:
        "Universal Pictures, Amblin Entertainment :contentReference[oaicite:4]{index=4}",
      banner:
        "https://4kwallpapers.com/images/wallpapers/jurassic-world-5120x2880-22719.jpg", // placeholder: you may replace with actual URL
      poster:
        "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg ", // placeholder: replace with actual poster URL
      trailer: " https://www.youtube.com/embed/1H1Da2j2OGc?si=hfxCyt_rIesiH11q",
    },
    {
      id: 31,
      title: "Weapons",
      releaseYear: "2025",
      runtime: "128 min",
      genres: ["Horror", "Mystery", "Thriller"],
      rating: 7.5,
      tagline:
        "'Every child woke up. Got out of bed. Went downstairs. Opened the front door. Walked into the dark. And they never came back.'",
      overview:
        "In the small town of Maybrook, 17 third-grade students mysteriously vanish at exactly 2:17 a.m. Their teacher, Justine, and a concerned father, Archer, delve into the eerie disappearance, uncovering unsettling truths that challenge their perceptions of reality.",
      language: "English",
      releaseDate: "August 8, 2025 (US)",
      production:
        "New Line Cinema, Subconscious, Vertigo Entertainment, BoulderLight Pictures",
      banner:
        " https://npr.brightspotcdn.com/dims4/default/3c0ad65/2147483647/strip/true/crop/1280x720+0+0/resize/880x495!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff2%2F97%2Fcc89726444d382bf8e849eb8b92d%2Fweapons-movie.jpg",
      poster:
        " https://m.media-amazon.com/images/M/MV5BNTBhNWJjZWItYzY3NS00M2NkLThmOWYtYTlmNzBmN2UxZWFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      trailer: "https://www.youtube.com/embed/QKHySfXqN0I?si=HaUFi0FIauLMB-vo ",
    },
    {
      id: 32,
      title: "What If... the Watcher Disappeared?",
      releaseYear: "2024",
      runtime: "30 min",
      genres: ["Animation", "Action", "Adventure"],
      rating: 8.5,
      tagline: "'When the Watcher is gone, who will protect the multiverse?'",
      overview:
        "In this pivotal episode, Captain Carter assembles a team of multiversal heroes, including Storm, Kahhori, and Byrdie, to rescue the Watcher, Uatu, who has been captured by a faction of Watchers. As they navigate the Fifth Dimension, they confront existential threats and uncover deeper mysteries of the multiverse.",
      language: "English",
      releaseDate: "December 28, 2024 (Disney+)",
      production: "Marvel Studios",
      banner:
        "https://images.thedirect.com/media/article_full/mcu-marvel-studios-hot-toys-vision-ultron-what-if.jpg ",
      poster:
        "https://preview.redd.it/1r1l7j48b2q71.jpg?width=640&crop=smart&auto=webp&s=6ba7eede860989ce77da66e1cbd32a11d18a6dcb ",
      trailer: "https://www.youtube.com/embed/0tMMzqWIbcw?si=-WZjCylKckOl9l58",
    },
    {
      id: 33,
      title: "The Black Phone 2",
      releaseYear: "2025",
      runtime: "114 min",
      genres: ["Horror", "Supernatural", "Thriller"],
      rating: 7.2,
      tagline: "'Dead is just a word.'",
      overview:
        "Four years after surviving the Grabber's captivity, 17-year-old Finney Blake and his sister Gwen return to confront a resurrected Grabber, now a vengeful spirit haunting Alpine Lake Youth Camp. As Gwen's psychic abilities intensify, they uncover a disturbing family secret and battle new horrors that transcend death.",
      language: "English",
      releaseDate: "October 17, 2025 (USA)",
      production: "Blumhouse Productions, Crooked Highway",
      banner:
        "https://popped.blog/wp-content/uploads/2025/10/black_phone_2_mobile.jpg",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWVkYjMxNzUtOTA1Yy00Y2UyLWExOTAtZmQ1Nzk2MTA4ZjE2XkEyXkFqcGc@._V1_.jpg",
      trailer: "https://www.youtube.com/embed/szKBR8NLPAk?si=5htjlh5NJAba2RrB",
    },
    {
      id: 34,
      title: "Iron Man 2",
      releaseYear: "2010",
      runtime: "124 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.9,
      tagline:
        "'It's not about how much we lost. It's about how much we have left.'",
      overview:
        "With the world now aware of his identity as Iron Man, Tony Stark must contend with both his declining health and a vengeful madman with ties to his father's legacy. As he faces new challenges, Stark must forge new alliances and confront a powerful new enemy.",
      language: "English",
      releaseDate: "May 7, 2010 (USA)",
      production: "Marvel Studios, Paramount Pictures",
      banner:
        "https://image.tmdb.org/t/p/original/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg ",
      poster:
        " https://i.pinimg.com/736x/87/13/22/871322558f56cc8df0d6d793f8991872.jpg",
      trailer: "https://www.youtube.com/embed/qsRZghNciIo?si=liEIb9aG8j0xCX53 ",
    },
    {
      id: 35,
      title: "Top Gun",
      releaseYear: "1986",
      runtime: "109 min",
      genres: ["Action", "Drama", "Romance"],
      rating: 6.9,
      tagline: "'Up there with the best of the best.'",
      overview:
        "Hotshot pilot Pete 'Maverick' Mitchell is sent to the U.S. Navy's elite Fighter Weapons School, Top Gun, where he competes to be best in the class, while dealing with personal issues and a budding romance with his civilian instructor.",
      language: "English",
      releaseDate: "May 16, 1986",
      production: "Don Simpson/Jerry Bruckheimer Films",
      banner:
        "https://artofthemovies.co.uk/cdn/shop/articles/Banner_1-696896_1044x.png?v=1653437938",
      poster: "https://m.media-amazon.com/images/I/71BokibfVUL._AC_SL1500_.jpg",
      trailer: "https://www.youtube.com/embed/1BJy4aHi_8I?si=-25SbgSbUKWbpS81",
    },
    {
      id: 36,
      title: "Transformers One",
      releaseYear: "2024",
      runtime: "104 min",
      genres: ["Animation", "Action", "Sci-Fi"],
      rating: 7.6,
      tagline: "'Witness the origin.'",
      overview:
        "On the planet Cybertron, miner-bots Orion Pax and D-16 are best friends who aspire to more than their station. But when they uncover a secret artifact, their bond fractures and they must face the consequences of ambition and power — ultimately becoming the legendary leaders Optimus Prime and Megatron.",
      language: "English",
      releaseDate: "September 20, 2024 (US)",
      production:
        "Paramount Pictures, Paramount Animation, Hasbro Entertainment, Bayhem Films, di Bonaventura Pictures",
      banner:
        "https://thecosmiccircus.com/wp-content/uploads/2024/09/Transformers-One-Banner.jpg ",
      poster:
        " https://upload.wikimedia.org/wikipedia/en/a/a4/Transformers_One_Official_Poster.jpg",
      trailer: "https://www.youtube.com/embed/j3qqAbL6KD4?si=w_fVjEreieO26Dtu ",
    },
    {
      id: 37,
      title: "Avengers: Infinity War",
      releaseYear: "2018",
      runtime: "149 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 8.4,
      tagline: "'An entire universe. Once and for all.'",
      overview:
        "As the Avengers and their allies continue to protect the world from threats too large for any one hero to handle, a new danger emerges from the cosmic shadows — Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment.",
      language: "English",
      releaseDate: "April 27, 2018 (USA)",
      production: "Marvel Studios",
      banner:
        " https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dc6erc1-e4a127f9-e6e8-4cc1-ae35-6b0971fd7544.png/v1/fill/w_1024,h_428,q_80,strp/avengers___infinity_war_banner___textless_by_mintmovi3_dc6erc1-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDI4IiwicGF0aCI6Ii9mLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMC9kYzZlcmMxLWU0YTEyN2Y5LWU2ZTgtNGNjMS1hZTM1LTZiMDk3MWZkNzU0NC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.JBaZBn7nsvK4Ylz-edrGiLwWVMdtjs5L58fz2aUZ7I8",
      poster:
        "https://m.media-amazon.com/images/I/A1t8xCe9jwL._AC_UF894,1000_QL80_.jpg ",
      trailer: "https://www.youtube.com/embed/hYW8dPjSfZ8?si=lrIcQYm1dWejlJdD ",
    },
    {
      id: 38,
      title: "Transformers: Rise of the Beasts",
      releaseYear: "2023",
      runtime: "127 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.0,
      tagline: "'Unite or fall.'",
      overview:
        "In the 1990s, a new faction of Transformers — the Maximals — join the Autobots as allies in the battle for Earth. When a powerful planet-eating enemy named Unicron threatens existence itself, Optimus Prime and his team must work together with the human race to protect the world from destruction.",
      language: "English",
      releaseDate: "June 9, 2023 (USA)",
      production:
        "Paramount Pictures, Skydance, Hasbro, New Republic Pictures, Di Bonaventura Pictures",
      banner:
        " https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2023/12/GRM_transformers-rise-beasts-web-e1702011245303.webp?resize=860%2C280&ssl=1",
      poster:
        " https://lh4.googleusercontent.com/proxy/2JQX6gaatpLG4KP171SVPqCzEckVb9-qHMc2hx1Ggn68hHqcFJkLD5d63QZcVyawOfAsGzYyeGAGkYFu8f_GL87Zvac8B-e-r12RwquD57mwMst2VrjvDLfw53szlMIrXxw",
      trailer: "https://www.youtube.com/embed/LxWhQ1BsFYs?si=ArxKCVgPuHJCbvUw ",
    },
    {
      id: 39,
      title: "Transformers: Dark of the Moon",
      releaseYear: "2011",
      runtime: "154 min",
      genres: ["Action", "Adventure", "Sci-Fi"],
      rating: 6.2,
      tagline: "'The war is here.'",
      overview:
        "The Autobots learn of a Cybertronian spacecraft hidden on the Moon and race against the Decepticons to reach it and learn its secrets. As tensions rise and the battle for Earth begins once more, Optimus Prime and his team must uncover the hidden truth of Cybertron’s final hope — and humanity’s last chance for survival.",
      language: "English",
      releaseDate: "June 29, 2011 (USA)",
      production:
        "Paramount Pictures, Hasbro, Di Bonaventura Pictures, Ian Bryce Productions",
      banner: "https://m.media-amazon.com/images/M/MV5BMTk5ODM0NTY5OF5BMl5BanBnXkFtZTcwODkyOTg5NA@@._V1_.jpg ",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_.jpg ",
      trailer: "https://www.youtube.com/embed/E-Sg_zJrDxc?si=WiHxz4TaPgtdamLL ",
    },
  ];

  const m = movies.find((movie) => movie.id === parseInt(id));

  if (!m) {
    return <h1 className="text-white text-center mt-20">Movie not found!</h1>;
  }

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans pt-[60px]">
      {/* Breadcrumb */}
      <div className="text-gray-400 text-xs sm:text-sm px-4 sm:px-8 py-3 sm:py-4">
        Home &gt; Movies &gt; <span className="text-white">{m.title}</span>
      </div>

      {/* Header Section */}
      <section
        className="relative h-[60vh] sm:h-[70vh] flex flex-col sm:flex-row items-end justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(${m.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end justify-between w-full px-4 sm:px-8 pb-8 sm:pb-10 gap-6 sm:gap-8">
          <img
            src={m.poster}
            alt={m.title}
            className="w-36 sm:w-48 md:w-56 rounded-xl sm:rounded-2xl shadow-lg"
          />

          <div className="text-center sm:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              {m.title}
            </h1>

            <p className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-4 text-gray-300 text-sm sm:text-base">
              <span>{m.releaseYear}</span> •
              <Clock className="w-4 h-4" /> {m.runtime} • {m.genres.join(" | ")}
            </p>

            <p className="flex justify-center sm:justify-start items-center gap-1 mt-2 text-yellow-400 text-sm sm:text-base">
              <Star className="w-4 h-4 fill-yellow-400" /> {m.rating}/10
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 mt-6">
              <button className="bg-red-600 hover:bg-red-700 px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base">
                <Play /> Watch Trailer
              </button>
              <button
                onClick={() => {
                  const storedFavorites =
                    JSON.parse(localStorage.getItem("favorites")) || [];

                  if (isFavorite) {
                    // Remove from favorites
                    const updated = storedFavorites.filter(
                      (fav) => fav.id !== m.id
                    );
                    localStorage.setItem("favorites", JSON.stringify(updated));
                  } else {
                    // Add to favorites
                    localStorage.setItem(
                      "favorites",
                      JSON.stringify([...storedFavorites, m])
                    );
                  }

                  setIsFavorite(!isFavorite);

                  // Trigger storage event for other components to update
                  window.dispatchEvent(new Event("storage"));
                }}
                className={`${
                  isFavorite
                    ? "bg-red-600 hover:bg-red-700"
                    : "bg-gray-800 hover:bg-gray-700"
                } px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base`}
              >
                {isFavorite ? (
                  <Heart className="fill-red-500 text-red-500" />
                ) : (
                  <Heart />
                )}
                {isFavorite ? "Favorited" : "Favorite"}
              </button>

              <button className="bg-gray-800 hover:bg-gray-700 px-5 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base">
                <Plus /> Watchlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Description */}
      <section className="px-4 sm:px-8 py-8 sm:py-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          {m.overview}
        </p>
        <p className="italic text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
          “{m.tagline}”
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base">
          <p>
            <strong className="text-white">Language:</strong> {m.language}
          </p>
          <p>
            <strong className="text-white">Release Date:</strong>{" "}
            {m.releaseDate}
          </p>
          <p>
            <strong className="text-white">Production:</strong> {m.production}
          </p>
        </div>
      </section>

      {/* Trailer */}
      <section className="px-4 sm:px-8 py-8 sm:py-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
          Trailer
        </h2>
        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={m.trailer}
            title="Trailer"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default MovieDetail;

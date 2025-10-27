
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Play, Star, Calendar } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

function Movie() {
  const { t, isKhmer } = useLanguage();
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Complete movie database with MORE movies
  const movies = [
    // ACTION MOVIES (30+ movies)
    {
      id: 1,
      title: "Avengers: Endgame",
      titleKm: "អ្នកសងសឹក: ចប់ហ្គេម",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2019",
      rating: 8.5,
      image: "https://i.pinimg.com/736x/bb/f7/0c/bbf70cc9a56b19eb7faf60bdf76bc99d.jpg",
    },
    {
      id: 17,
      title: "John Wick: Chapter 4",
      titleKm: "ចន វីក: ជំពូកទី៤",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 8.0,
      image: "https://media.themoviedb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    },
    {
      id: 37,
      title: "Avengers: Infinity War",
      titleKm: "អ្នកសងសឹក: សង្គ្រាមអនន្ត",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2018",
      rating: 8.4,
      image: "https://m.media-amazon.com/images/I/A1t8xCe9jwL._AC_UF894,1000_QL80_.jpg",
    },
    {
      id: 12,
      title: "Thor: Ragnarok",
      titleKm: "ថរ: រ៉ាកណារក់",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2017",
      rating: 7.9,
      image: "https://i.pinimg.com/1200x/16/5d/39/165d391974b0eabf27a3e90c12420d93.jpg",
    },
    {
      id: 14,
      title: "Black Panther",
      titleKm: "ខ្លាខ្មៅ",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2018",
      rating: 7.3,
      image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg",
    },
    {
      id: 38,
      title: "Transformers: Rise of the Beasts",
      titleKm: "ត្រាន់ហ្វ័រមើ: កើនឡើងសត្វ",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 6.0,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Transformers-_Rise_of_the_Beasts.jpg/250px-Transformers-_Rise_of_the_Beasts.jpg",
    },
    {
      id: 29,
      title: "Bumblebee",
      titleKm: "កញ្ឆឹង",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2018",
      rating: 6.8,
      image: "https://m.media-amazon.com/images/I/91s+7+OhpxL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 24,
      title: "Battleship",
      titleKm: "នាវាចម្បាំង",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2012",
      rating: 5.8,
      image: "https://m.media-amazon.com/images/M/MV5BMjI5NTM5MDA2N15BMl5BanBnXkFtZTcwNjkwMzQxNw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 18,
      title: "Shang-Chi",
      titleKm: "សាំងជី",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2021",
      rating: 7.4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnrImVYD_pqkqzxMQZECbakjvmKNVkPhOugQ&s",
    },
    {
      id: 26,
      title: "Venom: The Last Dance",
      titleKm: "វេណុម: រាំចុងក្រោយ",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2024",
      rating: 5.2,
      image: "https://i.pinimg.com/736x/9a/46/7c/9a467c736670a8a620ddca9a6571b40b.jpg",
    },
    {
      id: 34,
      title: "Iron Man 2",
      titleKm: "មនុស្សដែក ២",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2010",
      rating: 6.9,
      image: "https://i.pinimg.com/736x/87/13/22/871322558f56cc8df0d6d793f8991872.jpg",
    },
    {
      id: 36,
      title: "Transformers One",
      titleKm: "ត្រាន់ហ្វ័រមើ: មួយ",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2024",
      rating: 7.6,
      image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Transformers_One_Official_Poster.jpg",
    },
    {
      id: 40,
      title: "Fast X",
      titleKm: "លឿនខ្លាំង ១០",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 5.7,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26cCz4laFQinmeRZIyUj2rC-QUheFbYyhtg&s",
    },
    {
      id: 41,
      title: "Mission: Impossible - Dead Reckoning",
      titleKm: "បេសកកម្ម: មិនអាចទៅរួច - ការគណនាស្លាប់",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 7.7,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg/250px-Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg",
    },
    {
      id: 42,
      title: "Extraction 2",
      titleKm: "ការដកស្រង់ ២",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 7.0,
      image: "https://play-lh.googleusercontent.com/Olo7Y0ecRX2ctZUVp_FvJ041ZCUQo-q6etKEO9BVq4mAgeEN4mcrTmmMyy7uusr-g8tu4nTI8r2uXua2QA",
    },
    {
      id: 43,
      title: "The Equalizer 3",
      titleKm: "អ្នកធ្វើសមភាព ៣",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 6.8,
      image: "https://cdn.kinocheck.com/i/1v7su0cgh3.jpg",
    },
    {
      id: 44,
      title: "Expendables 4",
      titleKm: "អ្នកចំណាយ ៤",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 4.9,
      image: "https://m.media-amazon.com/images/M/MV5BZjgyMmRmM2EtYWY5ZC00ZTllLWJhM2QtMGRlNGEzMWEzYzllXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 45,
      title: "Aquaman 2",
      titleKm: "អាក្វាម៉ែន ២",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2023",
      rating: 5.6,
      image: "https://m.media-amazon.com/images/M/MV5BYjQ1ZTUzMWMtY2VkNS00ZDRjLWEwODYtYmFkMWJiNTQxMDUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 46,
      title: "The Matrix Resurrections",
      titleKm: "ម៉ាទ្រីក: ការរស់ឡើងវិញ",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2021",
      rating: 5.7,
      image: "https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 47,
      title: "Suicide Squad",
      titleKm: "ក្រុមសម្លាប់ខ្លួនឯង",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2021",
      rating: 7.2,
      image: "https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 48,
      title: "Dune",
      titleKm: "ឌូន",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2021",
      rating: 8.0,
      image: " https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 49,
      title: "No Time to Die",
      titleKm: "គ្មានពេលវេលាស្លាប់",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2021",
      rating: 7.3,
      image: "https://m.media-amazon.com/images/M/MV5BZGZiOGZhZDQtZmRkNy00ZmUzLTliMGEtZGU0NjExOGMxZDVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 50,
      title: "Deadpool 3",
      titleKm: "ដេដផូល ៣",
      genre: "Action",
      genreKm: "សកម្មភាព",
      year: "2024",
      rating: 7.9,
      image: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_.jpg",
    },

    // COMEDY MOVIES (20+ movies)
    {
      id: 35,
      title: "Top Gun",
      titleKm: "កាំភ្លើងកំពូល",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "1986",
      rating: 6.9,
      image: "https://m.media-amazon.com/images/I/71BokibfVUL._AC_SL1500_.jpg",
    },
    {
      id: 100,
      title: "Top Gun: Maverick",
      titleKm: "កាំភ្លើងកំពូល: អ្នកមិនស្តាប់បង្គាប់",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2022",
      rating: 8.6,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/250px-Top_Gun_Maverick_Poster.jpg",
    },
    {
      id: 8,
      title: "Ant-Man & The Wasp",
      titleKm: "មនុស្សស្រមោច និងតាំបិច",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2018",
      rating: 7.0,
      image: "https://i.pinimg.com/1200x/c4/a0/35/c4a035685a053270fee1209e819deffd.jpg",
    },
    {
      id: 51,
      title: "Deadpool",
      titleKm: "ដេដផូល",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2016",
      rating: 8.0,
      image: "https://play-lh.googleusercontent.com/8IRAJantwDju48RC42P-x07gdRXRYfDmxSmNtUD7ul8CbMM0EfHMFYvxOZH0QN2fu6ZW=w240-h480-rw",
    },
    {
      id: 52,
      title: "Deadpool 2",
      titleKm: "ដេដផូល ២",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2018",
      rating: 7.7,
      image: "https://br.web.img2.acsta.net/pictures/18/04/19/15/31/2232385.jpg",
    },
    {
      id: 53,
      title: "Thor: Ragnarok",
      titleKm: "ថរ: រ៉ាកណារក់",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2017",
      rating: 7.9,
      image: "https://i.pinimg.com/1200x/16/5d/39/165d391974b0eabf27a3e90c12420d93.jpg",
    },
    {
      id: 54,
      title: "Guardians of the Galaxy",
      titleKm: "ពួកអ្នកការពារកាឡាក់ស៊ី",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2014",
      rating: 8.0,
      image: "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg",
    },
    {
      id: 55,
      title: "Guardians of the Galaxy Vol. 2",
      titleKm: "ពួកអ្នកការពារកាឡាក់ស៊ី ២",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2017",
      rating: 7.6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6yRAg3N2Xr0dnUJu4qsbxXog05VnDBscGUA&s",
    },
    {
      id: 56,
      title: "Guardians of the Galaxy Vol. 3",
      titleKm: "ពួកអ្នកការពារកាឡាក់ស៊ី ៣",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2023",
      rating: 7.9,
      image: "https://cdn.europosters.eu/image/1300/173488.jpg",
    },
    {
      id: 57,
      title: "Spider-Man: No Way Home",
      titleKm: "ស្ប៉ាយឌឺម៉ែន: គ្មានផ្លូវត្រឡប់",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2021",
      rating: 8.2,
      image: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 58,
      title: "Free Guy",
      titleKm: "បុរសសេរី",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2021",
      rating: 7.1,
      image: "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 59,
      title: "The Lego Movie",
      titleKm: "ភាពយន្តលេហ្គោ",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2014",
      rating: 7.7,
      image: "https://m.media-amazon.com/images/M/MV5BMTg4MDk1ODExN15BMl5BanBnXkFtZTgwNzIyNjg3MDE@._V1_.jpg",
    },
    {
      id: 60,
      title: "Shazam!",
      titleKm: "សាហ្សាម!",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2019",
      rating: 7.0,
      image: "https://resizing.flixster.com/Hm4c08vS5kceTzWphzzqJN2FtNY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzUxMDhmN2IxLTE0OWYtNDIwYy05ZjVlLTk1MWUwNzJhYjEwMi53ZWJw",
    },
    {
      id: 61,
      title: "Sonic the Hedgehog",
      titleKm: "សូនីក",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2020",
      rating: 6.5,
      image: "https://m.media-amazon.com/images/M/MV5BYTg2Yjc5MzItNzVmMi00MTllLWI2MDQtOTYyOWNjYWIxNzEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 62,
      title: "Sonic 2",
      titleKm: "សូនីក ២",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2022",
      rating: 6.5,
      image: "https://m.media-amazon.com/images/M/MV5BMDBiYzk0YTMtNWRiYi00YWY0LWE3NjgtYmJiYTAwZmYzOTM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 63,
      title: "Jumanji: Welcome to the Jungle",
      titleKm: "ចូម៉ានជី: សូមស្វាគមន៍មកព្រៃ",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2017",
      rating: 6.9,
      image: "https://imusic.b-cdn.net/images/item/original/738/5035822306738.jpg?jumanji-welcome-to-the-jungle-2018-jumanji-welcome-to-the-jungle-dvd&class=scaled&v=1524929731",
    },
    {
      id: 64,
      title: "Red Notice",
      titleKm: "សេចក្តីជូនដំណឹងក្រហម",
      genre: "Comedy",
      genreKm: "កំប្លែង",
      year: "2021",
      rating: 6.3,
      image: "https://m.media-amazon.com/images/M/MV5BOGNjNGQ3MmItYTM5NS00NjBiLWI0ZTItZDE5ZjQyNjg3ODBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },

    // SCI-FI MOVIES (30+ movies)
    {
      id: 3,
      title: "TRON",
      titleKm: "ត្រុន",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2025",
      rating: 8.0,
      image: "https://i.pinimg.com/1200x/08/c1/d3/08c1d3100061b1f6302ead6106d4910f.jpg",
    },
    {
      id: 2,
      title: "LIVIATAN RISING",
      titleKm: "លីវីយាតាន កើនឡើង",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2025",
      rating: 8.0,
      image: "https://i.pinimg.com/1200x/0f/6e/f5/0f6ef55b30c8bae3ac82e58a5fa95800.jpg",
    },
    {
      id: 15,
      title: "Pacific Rim",
      titleKm: "ចំណុចប៉ាស៊ីហ្វិក",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2013",
      rating: 6.9,
      image: "https://i.pinimg.com/1200x/3f/9d/0f/3f9d0f0f5004590d6cf081ac189b7ab3.jpg",
    },
    {
      id: 16,
      title: "Pacific Rim: Uprising",
      titleKm: "ចំណុចប៉ាស៊ីហ្វិក: កើនឡើង",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2018",
      rating: 5.6,
      image: "https://upload.wikimedia.org/wikipedia/en/1/12/Pacific_Rim_-_Uprising_%282018_film%29.jpg",
    },
    {
      id: 39,
      title: "Transformers: Dark of the Moon",
      titleKm: "ត្រាន់ហ្វ័រមើ: ងងឹតនៃព្រះចន្ទ",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2011",
      rating: 6.2,
      image: "https://m.media-amazon.com/images/M/MV5BMTkwOTY0MTc1NV5BMl5BanBnXkFtZTcwMDQwNjA2NQ@@._V1_.jpg",
    },
    {
      id: 22,
      title: "Beyond Skyline",
      titleKm: "លើសពីផ្ទៃមេឃ",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2017",
      rating: 5.3,
      image: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2017/09/beyond_skyline_ver2_xlg.jpg",
    },
    {
      id: 20,
      title: "Superman",
      titleKm: "ស៊ូប៉ឺម៉ែន",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2025",
      rating: 7.0,
      image: "https://m.media-amazon.com/images/M/MV5BOGMwZGJiM2EtMzEwZC00YTYzLWIxNzYtMmJmZWNlZjgxZTMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 25,
      title: "Rampage",
      titleKm: "ការឆ្កួតឆ្កាន",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2018",
      rating: 6.1,
      image: "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2876328/5956911/MOVCB51655__48142.1679600709.jpg",
    },
    {
      id: 28,
      title: "Jurassic World",
      titleKm: "ពិភពជូរ៉ាស៊ីក",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2015",
      rating: 6.9,
      image: "https://m.media-amazon.com/images/M/MV5BNzBhNzlkM2UtZTQyOC00NjUyLTkzMmMtNDQ1YTM5N2NmMGE5XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 30,
      title: "Jurassic World: Rebirth",
      titleKm: "ជូរ៉ាស៊ីកផាក: កើតជាថ្មី",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2025",
      rating: 5.0,
      image: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 31,
      title: "Jurassic World: Rebirth",
      titleKm: "ជូរ៉ាស៊ីកផាក: កើតជាថ្មី",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2025",
      rating: 5.0,
      image: "https://m.media-amazon.com/images/M/MV5BMGM3ZmI3NzQtNzU5Yi00ZWI1LTg3YTAtNmNmNWIyMWFjZTBkXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 65,
      title: "Interstellar",
      titleKm: "អន្តរប្រតិបត្តិការ",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2014",
      rating: 8.7,
      image: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 66,
      title: "Inception",
      titleKm: "ចាប់ផ្តើម",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2010",
      rating: 8.8,
      image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: 67,
      title: "The Matrix",
      titleKm: "ម៉ាទ្រីក",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "1999",
      rating: 8.7,
      image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 68,
      title: "Avatar",
      titleKm: "អាវាតា",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2009",
      rating: 7.9,
      image: "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 69,
      title: "Avatar: The Way of Water",
      titleKm: "អាវាតា: ផ្លូវទឹក",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2022",
      rating: 7.6,
      image: "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    },
    {
      id: 70,
      title: "Blade Runner 2049",
      titleKm: "ប្លេដរ៉ាណើ ២០៤៩",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2017",
      rating: 8.0,
      image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
    },
    {
      id: 71,
      title: "Edge of Tomorrow",
      titleKm: "គែមនៃថ្ងៃស្អែក",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2014",
      rating: 7.9,
      image: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg",
    },
    {
      id: 72,
      title: "Arrival",
      titleKm: "ការមកដល់",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2016",
      rating: 7.9,
      image: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_.jpg",
    },
    {
      id: 73,
      title: "Ex Machina",
      titleKm: "អេចម៉ាស៊ីណា",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "2014",
      rating: 7.7,
      image: "https://m.media-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_.jpg",
    },
    {
      id: 74,
      title: "Terminator 2",
      titleKm: "ទែមីណាទ័រ ២",
      genre: "Sci-Fi",
      genreKm: "វិទ្យាសាស្ត្រប្រឌិត",
      year: "1991",
      rating: 8.6,
      image: "https://m.media-amazon.com/images/M/MV5BNGMyMGNkMDUtMjc2Ni00NWFlLTgyODEtZTY2MzBiZTg0OWZiXkEyXkFqcGc@._V1_.jpg",
    },
  ];

  // Genre filter buttons
  const genres = ["All", "Action", "Comedy", "Sci-Fi"];
  const genresKm = {
    "All": "ទាំងអស់",
    "Action": "សកម្មភាព",
    "Comedy": "កំប្លែង",
    "Sci-Fi": "វិទ្យាសាស្ត្រប្រឌិត"
  };

  // Filter movies
  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
    const matchesSearch = 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.titleKm.includes(searchQuery);
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen text-white pt-20">
      {/* Hero Header */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-purple-600 opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          <h1 className="text-5xl md:text-7xl font-black text-center mb-4 bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
            {t("Movie Collection", "បណ្តុំភាពយន្ត")}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
            {t(
              "Explore our curated collection of blockbuster movies",
              "ស្វែងរកបណ្តុំភាពយន្តដែលយើងជ្រើសរើស"
            )}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter Section */}
        <div className="mb-12">
          {/* Search Bar */}
          <div className="mb-8">
            <input
              type="text"
              placeholder={t("Search movies...", "ស្វែងរកភាពយន្ត...")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-2xl mx-auto block px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent backdrop-blur-sm"
            />
          </div>

          {/* Genre Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedGenre === genre
                    ? "bg-gradient-to-r from-red-600 to-purple-600 text-white shadow-lg shadow-red-500/50 scale-105"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {isKhmer ? genresKm[genre] : genre}
              </button>
            ))}
          </div>
        </div>

        {/* Movie Results Count */}
        <div className="mb-6 text-gray-400">
          {t("Showing", "បង្ហាញ")} <span className="text-white font-semibold">{filteredMovies.length}</span> {t("movies", "ភាពយន្ត")}
        </div>

        {/* Movie Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/Detail/${movie.id}`}
              className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
            >
              {/* Movie Poster */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={movie.image}
                  alt={isKhmer ? movie.titleKm : movie.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Play className="w-5 h-5 text-red-500" />
                      <span className="text-sm font-semibold">
                        {t("Watch Now", "មើលឥឡូវ")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold">{movie.rating}</span>
                </div>

                {/* Genre Badge */}
                <div className="absolute top-2 left-2 bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                  {isKhmer ? movie.genreKm : movie.genre}
                </div>
              </div>

              {/* Movie Info */}
              <div className="p-4">
                <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-2 group-hover:text-red-500 transition-colors">
                  {isKhmer ? movie.titleKm : movie.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Calendar className="w-3 h-3" />
                  <span>{movie.year}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-2xl font-bold mb-2">
              {t("No movies found", "រកមិនឃើញភាពយន្ត")}
            </h3>
            <p className="text-gray-400">
              {t("Try adjusting your search or filter", "សាកល្បងកែសម្រួលការស្វែងរក ឬតម្រងរបស់អ្នក")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
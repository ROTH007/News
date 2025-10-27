import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "../../context/LanguageContext"; // ← Fixed path (go up 2 levels)
import Navbar from "./Navbar";
import Homes from "../Page/Homes";
import Products from "../Page/Products";
import Footer from "./Footer";
import Buynow from "../Detailpage/Buynow";
import Movie from "../Page/Movie";
import Login from "../Page/Login";
import MovieDetail from "../Detailpage/MovieDetail";
import Favorites from "../Detailpage/Favorite";
import Contact from "../Page/contact";

function Body() {
  return (
    <LanguageProvider> 
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contact" element={<Contact/>} />

         
          <Route path="/buynow/:id" element={<Buynow />} />

         
          <Route path="/Detail/:id" element={<MovieDetail />} />

          {/* Favorites route */}
          <Route path="/favorites" element={<Favorites />} />

          
        </Routes>

        <Footer />
      </BrowserRouter>
    </LanguageProvider> 
  );
}

export default Body;
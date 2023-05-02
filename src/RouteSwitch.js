import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./Home";
import Musique from "./Musique";
import JeuxVideo from "./JeuxVideo";
import Livres from "./Livres";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/musique" element={<Musique />} />
        <Route path="/jeuxvideo" element={<JeuxVideo />} />
        <Route path="/livres" element={<Livres />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;
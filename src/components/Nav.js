import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (
      <header className="main-header">
        <Link to="/" className="main-header__title" >𝕦𝕟𝕕𝕖𝕣𝕔𝕦𝕣𝕣𝕖𝕟𝕥</Link>
        <nav className="desktop-nav">
            <Link to="/new/" className="desktop-nav__item">Nouveautés</Link>
            <Link className="desktop-nav__item">Sélection</Link>
            <div className="desktop-nav__item separator">|</div>
            <Link to="/musique/" className="desktop-nav__item">Musique</Link>
            <Link to="/jeuxvideo/" className="desktop-nav__item">Jeux vidéo</Link>
            <Link to="/livres/" className="desktop-nav__item">Livres</Link>
        </nav>
        
        
    </header>
  )
}

export default Nav;
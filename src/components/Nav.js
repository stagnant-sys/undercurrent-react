import React from "react";
import './Nav.css';

const Nav = () => {
  return (
      <header class="main-header">
        <a class="main-header__title" href="index.html">𝕦𝕟𝕕𝕖𝕣𝕔𝕦𝕣𝕣𝕖𝕟𝕥</a>
        <nav class="desktop-nav">
            <a href="./index.html" class="desktop-nav__item">Nouveautés</a>
            <a class="desktop-nav__item">Sélection</a>
            <div class="desktop-nav__item separator">|</div>
            <a href="./musique/index.html" class="desktop-nav__item">Musique</a>
            <a href="./jeux-video/index.html" class="desktop-nav__item">Jeux vidéo</a>
            <a class="desktop-nav__item">Livres</a>
        </nav>
    </header>
  )
}

export default Nav;
import React, { useState } from "react";
import Article from "../components/Article";
import database from "../database";
import "../index.css";

const Musique = () => {
  const musicData = database.filter(el => el.category === "mus");
  const articlesList = musicData.map((el) => 
    <Article
      key={el.id}
      category={el.category}
      src={el.src}
      artist={el.artist}
      release={el.release}
      subtitle={el.subtitle}
      content={el.content}
      publication={el.published}
    />
    );

  return (
    <div>
      <header class="header-category">Musique</header>
      {articlesList}
    </div>
  )
}

export default Musique;
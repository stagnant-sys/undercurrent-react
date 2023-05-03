import React, { useState } from "react";
import Article from "./components/Article";
import database from "./database";

const Musique = () => {
  const musicData = database.filter(el => el.category === "musique");
  const articlesList = musicData.map((el) => 
    <Article
      key={el.id}
      category={el.category}
      src={el.src}
      artist={el.artist}
      release={el.release}
      subtitle={el.subtitle}
      content={el.content}
    />
    );

  return (
    <div>
      {articlesList}
    </div>
  )
}

export default Musique;
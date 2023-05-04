import React from "react";
import Article from "../components/Article";
import database from "../database";

const Livres = () => {
  const litData = database.filter(el => el.category === "lit");
  const articlesList = litData.map((el) => 
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
      {articlesList}
    </div>
  )
}

export default Livres;
import React from "react";
import Article from "../components/Article";
import database from "../database";

const JeuxVideo = () => {
  const jvData = database.filter(el => el.category === "jv");
  const articlesList = jvData.map((el) => 
    <Article
      key={el.id}
      category={el.category}
      src={el.src}
      release={el.release}
      artist={el.artist}
      subtitle={el.subtitle}
      content={el.content}
      publication={el.published}
    />
    );

  return (
    <div>
      <header class="header-category jeux-video">Jeux vidéo</header>
      {articlesList}
    </div>
  )
}

export default JeuxVideo;
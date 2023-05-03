import React from "react";
import Article from "./components/Article";
import database from "./database";

const JeuxVideo = () => {
  const jvData = database.filter(el => el.category === "jv");
  const articlesList = jvData.map((el) => 
    <Article
      key={el.id}
      category={el.category}
      src={el.src}
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

export default JeuxVideo;
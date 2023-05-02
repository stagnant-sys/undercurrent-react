import React, { useState } from "react";
import Article from "./components/Article";
import database from "./database";

const Musique = () => {
  const [articles, setArticles] = useState([
    {
      category: "musique",
      id: "mus1",
      src: "https://e.snmc.io/i/fullres/w/99da79efac5f730677513c630e6be9b5/6279815",
      artist: "Chatmonchy",
      release: "耳鳴り (Miminari)",
      subtitle: "Chatmonchy's first album",
      content: "This is the first album from Chatmonchy.",
      published: "Today",

    },
    {
      category: "musique",
      id: "mus2",
      src: "https://e.snmc.io/i/fullres/w/11a369ffd607c17079e4c3459a6325a2/2278249",
      artist: "Chatmonchy",
      release: "生命力 (Seimeiryoku)",
      subtitle: "Chatmonchy's second album",
      content: "This is the second album from Chatmonchy.",
      published: "Today"
    }
  ]);

  const articlesList = database.map((el) => 
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
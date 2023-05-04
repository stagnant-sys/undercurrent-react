import React from "react";
import "./article.css";

const Article = ({ category, id, src, artist, release, subtitle, content, publication }) => {
  const CategoryBadge = () => {
    if (category === "mus") {
      return <div className="card-category mus-category">musique</div>
    } else if (category === "jv") {
      return <div className="card-category jv-category">jeu vidéo</div>
    } else if (category === "lit") {
      return <div className="card-category lit-category">lecture</div>
    }
  };

  const linesBreak = (content) => {
    return content.split('\n');
  }

  const splitText = linesBreak(content);

  const FormattedText = (id) => 
  splitText.map((el, i) => 
    <p key={id + i}>{el}</p>
    );

  return (
    <div id={id} className="content-card">
      <CategoryBadge />
      <img className="content-card__image" src={src} />
      <div className="content-card__title">{release}</div>
      <div className="content-card__artist">{artist}</div>
      <div className="content-card__subtitle">
        {subtitle}
      </div>
      <div className="content-card__text">
        <div><FormattedText /></div>
      </div>
      <div className="content-card__publication-date">Publication : {publication}</div>
    </div>
  )
}

export default Article;
import React from "react";
import "./article.css";

const Article = ({ category, id, src, artist, release, subtitle, content }) => {
  const CategoryBadge = () => {
    if (category === "musique") {
      return <div className="card-category musique-category">musique</div>
    } else if (category === "jv") {
      return <div className="card-category jv-category">jeu vidéo</div>
    } else if (category === "livre") {
      return <div className="card-category livre-category">livre</div>
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
      <div className="content-card__title">
        <div className="content-card__release-name">
          {release} - {artist}
        </div>
      </div>
      <div className="content-card__subtitle">
        {subtitle}
      </div>
      <div className="content-card__text">
        <div><FormattedText /></div>
      </div>
    </div>
  )
}

export default Article;
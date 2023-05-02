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


  return (
    <div id={id} className="content-card">
      <CategoryBadge />
      <img className="content-card__image" src={src} />
      <div className="content-card__title">
        {artist} - {release}
      </div>
      <div className="content-card__subtitle">
        {subtitle}
      </div>
      <div className="content-card__text">
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Article;
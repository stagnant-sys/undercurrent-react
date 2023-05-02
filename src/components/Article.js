import React from "react";
import "./article.css";

const Article = ({ id, src, artist, release, subtitle, content }) => {
  return (
    <div id={id} className="content-card">
      <div className="card-category musique-category">Musique</div>
      <img className="content-card__image" src={src} />
      <div className="content-card__title">
        {artist} - {release}
      </div>
      <div class="content-card__subtitle">
        {subtitle}
      </div>
      <div class="content-card__text">
        <div>{content}</div>
      </div>
    </div>
  )
}

export default Article;
import Article from "../components/Article";
import ArticleNew from "../components/ArticleNew";
import database from "../database";
import "../index.css"

const Nouveautés = () => {
  let data = database.slice();
  let dataList = data.sort((a, b) => (a.published < b.published) ? 1 : (a.published > b.published) ? -1 : 0);

  const articlesList = dataList.slice(0, 5).map((el) => 
    <ArticleNew
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
      <header class="header-category">Nouveautés</header>
      <div className="new-container">
        {articlesList}
      </div>
    </div>
  )
}

export default Nouveautés;
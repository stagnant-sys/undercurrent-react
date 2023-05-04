import Article from "../components/Article";
import database from "../database";

const Nouveautés = () => {
  let data = database.slice();
  let dataList = data.sort((a, b) => (a.published < b.published) ? 1 : (a.published > b.published) ? -1 : 0);

  const articlesList = dataList.slice(0, 5).map((el) => 
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
      {articlesList}
      <button onClick={console.log(dataList)}>Click</button>
    </div>
  )
}

export default Nouveautés;
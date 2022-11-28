import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import NewsItem from "./NewsItem";

function NewsGrid() {
  const { items } = useContext(GlobalContext)
  return (
    <div className="news-grid">
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;

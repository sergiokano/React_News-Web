import React, { useState, useEffect } from "react";
import "./App.css";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
// import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&language=en&from=2022-10-28&sortBy=publishedAt&apiKey=04b6e0e527f84515b53d06f01a8efd4d`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);



  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}
export default App;

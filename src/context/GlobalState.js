import React, { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
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

  const data = {
    items,
    active,
    setActive,
    setCategory,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

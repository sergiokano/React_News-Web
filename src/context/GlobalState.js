import React, { createContext, useEffect, useState } from "react";
import axios from "axios"
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    axios.get(
      `https://newsapi.org/v2/everything?q=${category}&language=en&from=2022-10-28&sortBy=publishedAt&apiKey=04b6e0e527f84515b53d06f01a8efd4d`
    )
      .then((res) => setItems(res.data.articles));
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
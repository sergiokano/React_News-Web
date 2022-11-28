import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <GlobalProvider>
        <Menu />
        <NewsGrid />
      </GlobalProvider>
    </div>
  );
}
export default App;

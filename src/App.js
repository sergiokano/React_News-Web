import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./components/News/News";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <h1 className="title">See The Latest News</h1>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<News />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

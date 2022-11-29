import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./components/News/News";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home/Home";

import Header from "./components/Header/Header";
import CreateNews from "./components/Create-News/Create-News";
import Footer from "./components/Footer/Footer";

import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/create" element={<CreateNews />} />
          </Routes>
          <Footer />
        </GlobalProvider>
      </BrowserRouter>
      <CookieConsent
        enableDeclineButton
        onDecline={() => {
          alert(":(((((((((((((");
        }}
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>plsss :$</span>
      </CookieConsent>
    </div>
  );
}

export default App;

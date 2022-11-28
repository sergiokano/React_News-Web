import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import News from "./components/News/News";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";

import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
      <CookieConsent
      enableDeclineButton
      onDecline={() => {
        alert(":(((((((((((((");
      }}
      location="bottom"
      // border-radius= "5px"
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

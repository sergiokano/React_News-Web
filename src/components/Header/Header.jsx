// import React from 'react'
// import { Link } from "react-router-dom";
// import "./Header.css"
// // import Menu from "../Menu"
// // import NewsGrid from "../NewsGrid";
// // import "../../App.css";

// const Header = () => {
//     return (
//         <header>
//           <nav>
//             <div>Best News Page
//             <span>
//               <Link to="/">News</Link>
//             </span>
//             <span>
//               <Link to="/Contact">Contact</Link>
//             </span>
//             </div>
//           </nav>
//         </header>
//       )
//     }

//     export default Header

import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_meta-news_.png"
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <Link to="/"><img src={logo} alt="Meta News Logo"></img></Link>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <Link to="/">News</Link>
          </p>
          <p>
            <Link to="/Contact">Contact</Link>{" "}
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#black"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

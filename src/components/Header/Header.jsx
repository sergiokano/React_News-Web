import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_meta-news_.png";
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <Link to="/">
            <img src={logo} alt="Meta News Logo"></img>
          </Link>
        </div>
        <div className="navbar-links_container">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/news">News</Link>
          </p>
          <p>
            <Link to="/create">Post an Article</Link>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <p>
          <a href="https://myaccount.nytimes.com/auth/login?response_type=cookie&client_id=vi&redirect_uri=https%3A%2F%2Fwww.nytimes.com%2Fsubscription%2Fonboarding-offer%3FcampaignId%3D7JFJX%26EXIT_URI%3Dhttps%253A%252F%252Fwww.nytimes.com%252F&asset=masthead">
            Sign in
          </a>
        </p>
        <p>
          <a href="http://www.nytimes.com/subscription?campaignId=9YU8R">
            <button type="button">Sign up</button>
          </a>
        </p>
      </div>
      <div className="navbar-menu">
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

        <div className="navbar-menu_container-links-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

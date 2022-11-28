import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <p className="col-sm">
          &copy;{new Date().getFullYear()} designed by theKano-dev_xXX44Xx | 
          <Link to="/">News</Link> | <Link to="/create">Post an Article</Link> |
          All rights reserved | Terms Of Service | Privacy | 
        </p>
      </div>
    </div>
  );
}

export default Footer;

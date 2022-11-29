import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home_container">
      <h1 className="title">Home</h1>
      <p className="home_text">
        This is a news web which is updated every minute. If you like staying
        tuned this is your site.
        <br />
        Moreover, if you want to collaborate posting an article you have a
        section dedicated to it.
        <br />
        Enjoy :)
      </p>
    </div>
  );
};

export default Home;

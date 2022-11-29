import React from 'react'
import Menu from "./Menu"
import NewsGrid from "./NewsGrid";
import "../../App.css";

const News = () => {
    
  return (
    <>
      <h1 className="title">See The Latest News</h1>
    <Menu/>
    <NewsGrid/>
    </>
  )
}

export default News
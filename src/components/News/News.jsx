import React from 'react'
// import { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";
import Menu from "../Menu"
import NewsGrid from "../NewsGrid";
import "../../App.css";

const News = () => {
    
  return (
    <>
    <h1>News</h1>
    <Menu/>
    <NewsGrid/>
    </>
  )
}

export default News
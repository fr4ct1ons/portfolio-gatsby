import React from "react"
import Navbar from "./Navbar";
import "../styles/global.css"
import "../fonts/Arimo-Regular.ttf"

export default function Layout({children}) 
{
    //style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
  return (
    <div>
      <Navbar/>
      <div style={{width: "88%", margin: "auto"}}>
        {children}
      </div>
      <br/>
      <br/>
      <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" style={{color: "rgb(75, 75, 75)", paddingBottom : "2em"}}>Made with Gatsby.js</a>
    </div>
  )
}
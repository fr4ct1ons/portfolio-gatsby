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
    </div>
  )
}
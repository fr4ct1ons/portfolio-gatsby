import React from "react"
import Page from "../components/Page"
import Layout from "../components/layout"
import "../fonts/Arimo-Regular.ttf"
import GalleryEntry from "../components/GalleryEntry"
import artworks from "../images/ArtWorks.png"
import software from "../images/CSRP.png"
import {Link} from 'gatsby';

export default function Home() {
  return<Layout>
    <Page title = "WHO AM I" subtitle = "Introducing who I am, what I work with and my goals"></Page>
    <div className="TextBlock">
      <p>Hi there! I'm Gabriel Lucena, also known as FR4CT1ONS. I'm a brazilian game developer and tech artist.</p>
      <p>I have a bachelor's degree in information technology with experience with 2D and 3D games with Unity and Unreal, as well as with tools such as Blender and Substance Painter.</p>
      <p>Below you can check out some of my past works, such as 2D and 3D artworks including visual effects, games I worked on and other software I made, like tools and other programs.</p>
    </div>
    <div>
    <GalleryEntry url="art" title="ART WORKS" img={artworks}/>
    <GalleryEntry url="games" title="GAMES" img="https://pro2-bar-s3-cdn-cf6.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/72bce5f9-2596-4820-b1b7-dd2a0bd7d964.jpg?h=9446e874cc19b1da82695f7fc0dc722c"/>
    <GalleryEntry url="games" title="SOFTWARE" img={software}/>{/*
    {/*
    <GalleryEntry url="games" title="GAMES" img="https://pro2-bar-s3-cdn-cf6.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/72bce5f9-2596-4820-b1b7-dd2a0bd7d964.jpg?h=9446e874cc19b1da82695f7fc0dc722c"/>{/*
      <div className="inlineDiv">
        <h3>TOOLS</h3>
          <ul>
            <li>Unity</li>
            <li>Unreal</li>
            <li>C#</li>
            <li>C++</li>
            <li>HLSL</li>
            <li>Blender</li>
            <li>Substance Painter</li>
          </ul>
      </div>
      <div className="inlineDiv">
        <h3>SKILLS</h3>
          <ul>
            <li>VFX creation</li>
            <li>3D modelling</li>
            <li>Rigging</li>
            <li>3D Animation</li>
            <li>Shader development</li>
            <li>Unity multiplayer</li>
            <li>Tool development</li>
          </ul>
      </div>
*/}
    </div>

    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer" style={{color: "rgb(75, 75, 75)"}}>Made with Gatsby.js</a>
  </Layout>
}

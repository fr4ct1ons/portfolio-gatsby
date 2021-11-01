import React from "react"
import Page from "../components/Page"
import Layout from "../components/layout"
import "../fonts/Arimo-Regular.ttf"


export default function Home() {
  return<Layout>
    <Page title = "WHO AM I" subtitle = "Introducing who I am, what I work with and my goals"></Page>
      <p>Hey there! My name is Gabriel Lucena, also known as FR4CT1ONS.</p>
      <p>I am a tech artist with an ongoing bachelor's undergraduation program at Universidade Federal do Rio Grande do Norte.</p>
      <p>I am experient in Unity, Unreal, Blender and Substance Painter</p>
      <div>
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
      </div>
  </Layout>
}

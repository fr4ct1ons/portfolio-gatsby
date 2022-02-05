import React from "react"
import Page from "../components/Page"
import Layout from "../components/layout"
import "../fonts/Arimo-Regular.ttf"
import GalleryEntry from "../components/GalleryEntry"
import artworks from "../images/ArtWorks.png"
import software from "../images/software.png"
import games from "../images/games.png"
import vfxes from "../images/visualEffects.png"
import {StaticImage} from "gatsby-plugin-image"
import Skills from "../components/Skills"

import {Link} from 'gatsby';
import SkillItem from "../components/SkillItem"

import "../styles/education.css"
import "../styles/experience.css"

export default function Home() {
  return<Layout>
    <Page title = "WHO AM I" subtitle = "Introducing who I am, what I work with and my goals"></Page>
    <div className="TextBlock">
      <p>Hi there! I'm Gabriel Lucena, also known as FR4CT1ONS. I'm a brazilian game developer and tech artist.</p>
      <p>I have a bachelor's degree in information technology with experience with 2D and 3D games with Unity and Unreal, as well as with tools such as Blender and Substance Painter.</p>
      <p>Below you can check out some of my past works, such as 2D and 3D artworks of mine, games I worked on, visual effects I have created and other software I made, like tools and other programs.</p>
    </div>
    <div>
      <div style={{width: "100%", margin: "0 auto"}}>
      <GalleryEntry url="games" title="GAMES" img={games}/>
      <GalleryEntry url="visualEffects" title="VISUAL EFFECTS" img={vfxes}/>
      <GalleryEntry url="art" title="ART WORKS" img={artworks}/>
      <GalleryEntry url="software" title="SOFTWARE" img={software}/>
      </div>
      <div className="TextBlock">
        <p>You can also follow me on social media, if you would like to. I'd greatly appreciate it! Links below.</p>
        <div className="LinksBlock">
          <Link to="https://twitter.com/fr4ct1ons"><StaticImage src="../images/socialMedia/twitter-icon.png"/></Link>
          <Link to="https://github.com/lucena-fr4ct1ons"><StaticImage src="../images/socialMedia/github-icon.png"/></Link>
          <Link to="https://fr4ct1ons.itch.io/"><StaticImage src="../images/socialMedia/itchio-icon.png"/></Link>
          <Link to="https://sketchfab.com/fr4ct1ons"><StaticImage src="../images/socialMedia/sketchfab-icon.png"/></Link>
          <Link to="https://gamejolt.com/@fr4ct1ons"><StaticImage src="../images/socialMedia/gamejolt-icon.png"/></Link>
        </div>
      </div>
      </div>
      <h1>TOOLS AND SKILLS</h1>
      <h2>You can hover over some of these icons to see their names</h2>
      <Skills style={{width: '70%'}} title="I am highly skilled at">
      <SkillItem size='10%' img="Unity.png" name="Unity"/>
      <SkillItem size='10%' img="Unreal.png" name="Unreal"/>
      <SkillItem size='10%' img="Shader.png" name="Shader Programming"/>
      <SkillItem size='10%' img="Blender.png" name="Blender"/>      
      <SkillItem size='10%' img="cpp.png" name="C++ Programming"/> 
      <SkillItem size='10%' img="cs.png" name="C# Programming"/>
      </Skills>

      <div>
      <Skills title="I am proficient with">
      <SkillItem img="Krita.png" name="Krita"/>
      <SkillItem img="ClipStudioPaint.png" name="Clip Studio Paint"/>
      <SkillItem img="SubstancePainter.png" name="Substance 3D Painter"/> 
      <SkillItem img="Flutter.png" name="Flutter"/> 
      </Skills>

      <Skills title="I know the basics of">
      <SkillItem img="SubstanceDesigner.png" name="Substance 3D Designer"/>
      <SkillItem img="HTML.png" name={"HTML CSS JavaScript"}/>
      <SkillItem img="ReactJS.png" name="React.JS"/>
      <SkillItem img="AffinityDesigner.png" name="Affinity Designer"/>
      </Skills>
      </div>
      <div className="skills" style={{width: "900px", flexWrap: "nowrap"}}>
        <h3>I am knowledgeable in the following topics</h3>
        <ul>
          <li>3D Modelling</li>
          <li>Visual Effects production</li>
          <li>Particle Systems</li>
          <li>Post Processing configuration</li>
          <li>Material configuration</li>
          <li>UV mapping</li>
          <li>Rigging & animation</li>
          <li>In-engine Lighting setup</li>
        </ul>
        <ul>
          <li>General Programming</li>
          <li>HUD configuration</li>
          <li>In-engine environment production</li>
          <li>Tool development</li>
          <li>Unity Multiplayer w/ Mirror</li>
          <li>Basic performance optimization</li>
          <li>Design Patterns</li>
          <li>Procedural mesh generation</li>
        </ul>
      </div>
      <h1>EDUCATION</h1>
      <h2>Info about my professional formation</h2>
      <div className="EducationItem">
        <StaticImage src="../images/logos/UFRN.png"/>
        <div className="Text">
        <h1>BSc. Information Technology</h1>
        <h2>Universidade Federal do Rio Grande do Norte</h2>
        <h3>2018-2022</h3>
        </div>
      </div>

      <div className="EducationItem">
        <StaticImage src="../images/logos/IMD.png"/>
        <div className="Text">
        <h1>Game Dev. Pro. Certification</h1>
        <h2>Instituto Metrópole Digital</h2>
        <h3>2020</h3>
        </div>
      </div>

      <h1>EXPERIENCE</h1>
      <h2>Previous work experiences</h2>
      <div className="ExperienceItem">
        <StaticImage src="../images/logos/Stegosoft.png" height={250}/>
        <div className="Text">
          <h1>VFX Artist</h1>
          <h2>Stegosoft Games | 2021</h2>
          <p>Production of battle visual effects for attacks and buffs, as well as scenery props and environmental effects such as rain, falling leafs and birds, for Rise of the Third Power.</p>
        </div>
      </div>

      <div className="ExperienceItem">
        <StaticImage src="../images/logos/MaleDoll.png" height={250}/>
        <div className="Text">
          <h1>Intern Unity Programmer</h1>
          <h2>Male Doll | 2020</h2>
          <p>Responsible for the development of player controllers, AI programming and scenery elements for Boyfriend's Rescue and editor tools, UI and gameplay for the game Bring me a man, Santa</p>
        </div>
      </div>

      <div className="ExperienceItem">
        <StaticImage src="../images/logos/Baladeira.png" height={250}/>
        <div className="Text">
          <h1>Tech Artist</h1>
          <h2>Baladeira Studio | 2019 - 2022</h2>
          <p>Baladeira Studio is a studio I created with a few friends in 2019, after winning third place at Natal Game Jam 2019. I was responsible for production of visual effects & shaders, 3D models and tool development for the game "1498". I also programmed AI and gameplay for "Poço Frio".</p>
        </div>
      </div>


  </Layout>
}

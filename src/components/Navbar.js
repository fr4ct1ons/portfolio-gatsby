import React from 'react';
import logo from './Logo final.svg';
//import './App.css';
import '../styles/Navbar.css';
import NavbarLink from "./NavbarLink";
import LinkType from "./NavbarLink";
import {Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

class Navbar extends React.Component{

render(){
return(
    <div className="Navbar">
        {/*<div className="imageLinks">
            <Link to="https://twitter.com/fr4ct1ons"><StaticImage src="../images/socialMedia/twitter-icon.png"/></Link>
            <Link to="https://github.com/lucena-fr4ct1ons"><StaticImage src="../images/socialMedia/github-icon.png"/></Link>
            <Link to="https://fr4ct1ons.itch.io/"><StaticImage src="../images/socialMedia/itchio-icon.png"/></Link>
            <Link to="https://sketchfab.com/fr4ct1ons"><StaticImage src="../images/socialMedia/sketchfab-icon.png"/></Link>
            <Link to="https://gamejolt.com/@fr4ct1ons"><StaticImage src="../images/socialMedia/gamejolt-icon.png"/></Link>
</div>*/}
        
        <Link to = "/" className = "Logo"> <img src = {logo} /></Link>
        
        <div className="Links">            
            <NavbarLink route="/software" name="SOFTWARE" linkType={2} index={3} pageLink = "https://fr4ct1ons.myportfolio.com/software"></NavbarLink>
            <NavbarLink route="/art/" name="ART WORKS" linkType={2} index={0} pageLink = "https://fr4ct1ons.myportfolio.com/work"></NavbarLink>
            <NavbarLink route="/" name="WHO AM I" linkType={1} index={1} pageLink = "#"></NavbarLink>
            <NavbarLink route="/visualEffects/" name="VFXES" linkType={2} index={2} pageLink = "https://fr4ct1ons.myportfolio.com/full-gallery"></NavbarLink>
            <NavbarLink route="/games/" name="GAMES" linkType={2} index={2} pageLink = "https://fr4ct1ons.myportfolio.com/full-gallery"></NavbarLink>
        </div>
    </div>
)
}

ChangePage(index)
{
    this.props.pageChangeMethod(index)
}

}

export default Navbar
import React from 'react';
import logo from './Logo final.svg';
//import './App.css';
import '../styles/Navbar.css';
import NavbarLink from "./NavbarLink";
import LinkType from "./NavbarLink";

class Navbar extends React.Component{

render(){
return(
    <div className="Navbar">
        <a href = "fr4ct1ons.myportfolio.com" className = "Logo"> <img src = {logo} /></a>
        <div className="Links">            
            <NavbarLink route="/software" name="SOFTWARE" linkType={2} index={3} pageLink = "https://fr4ct1ons.myportfolio.com/software"></NavbarLink>
            <NavbarLink route="/" name="WHO AM I" linkType={1} index={1} pageLink = "#"></NavbarLink>
            <NavbarLink route="/games/" name="GAMES" linkType={2} index={2} pageLink = "https://fr4ct1ons.myportfolio.com/full-gallery"></NavbarLink>
            <NavbarLink route="/art/" name="ART WORKS" linkType={2} index={0} pageLink = "https://fr4ct1ons.myportfolio.com/work"></NavbarLink>
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
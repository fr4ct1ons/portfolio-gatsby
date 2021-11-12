import React from 'react';
//import data from "./gallery/test.js";
import "../styles/GalleryEntry.css"
import {StaticImage} from 'gatsby-plugin-image'

class GalleryEntry extends React.Component
{

    render()
    {
        var val = "lol";

    return(
        <div className="GalleryEntry" style={{width: "22%"}}>
            <a href={this.props.url}>
                <div className="galleryPage">
                    <img src={this.props.img}/>
                    <p className="pageTitle">{this.props.title}</p>
                </div>
            </a>
        </div>
    )
    }
} export default GalleryEntry
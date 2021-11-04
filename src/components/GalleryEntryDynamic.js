import React from 'react';
//import data from "./gallery/test.js";
import "../styles/GalleryEntry.css"
import {GatsbyImage} from "gatsby-plugin-image"

class GalleryEntryDynamic extends React.Component
{

    render()
    {
        var val = "lol";

    return(
        <div className="GalleryEntry">
            <a href={this.props.url}>
                <div className="galleryPage">
                    <GatsbyImage image={this.props.img}/>
                    <p className="pageTitle">{this.props.title}</p>
                </div>
            </a>
        </div>
    )
    }
} export default GalleryEntryDynamic

//<img src={this.props.img}/>
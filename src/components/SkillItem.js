import React from "react";
import { StaticImage, GatsbyImage, getImage, getImageData } from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";

export default function SkillItem(props)
    {
        //const image = getImage(this.props.img);

        const data = useStaticQuery(graphql`
        query {
            allImageSharp {
              edges {
                node {
                  id
                  gatsbyImageData
                  fixed {
                    originalName
                  }
                }
              }
            }
          }
          
        `);
        
        const imageNode = data.allImageSharp.edges.filter(edge => edge.node.fixed.originalName == props.img);
        //console.log(imageNode[0].node.gatsbyImageData);
        //const image = imageNode.node.gatsbyImageData;

        //console.log(image);
        var style = {};
        if(props.size)
        {
          style.width = props.size
        }

        return (<div className="SkillItem" style={style}>
            <GatsbyImage image={imageNode[0].node.gatsbyImageData}/>
            <div className="imageOverlay">
              <p>{props.name}</p>
            </div>
        </div>)
    }

//export default SkillItem;

/*export const pageQuery = graphql`
query {
    allImageSharp {
      edges {
        node {
          id
          fixed {
            srcWebp
            srcSetWebp
            originalName
            aspectRatio
          }
        }
      }
    }
  }
  
`*/
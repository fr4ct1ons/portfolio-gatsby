import React from "react";
import { StaticImage, GatsbyImage, getImage, getImageData } from "gatsby-plugin-image";
import {graphql, useStaticQuery} from "gatsby";

export default function SkillItem()
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
        
        const imageNode = data.allImageSharp.edges.filter(edge => edge.node.fixed.originalName == "Unity.png");
        console.log(imageNode[0].node.gatsbyImageData);
        //const image = imageNode.node.gatsbyImageData;

        //console.log(image);
        return (<div className="SkillItem">
            <GatsbyImage image={imageNode[0].node.gatsbyImageData}/>
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
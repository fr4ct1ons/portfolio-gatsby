import React from "react";
import Page from "../components/Page";
import GalleryEntryDynamic from "../components/GalleryEntryDynamic"
import Layout from "../components/layout";
import {graphql} from "gatsby"
import {getImage} from "gatsby-plugin-image"

const ArtGallery = ({ 
  data: 
  {
    allMarkdownRemark : { edges },
  }, 
}) => {
  const Posts = edges.filter(edge =>edge.node.frontmatter.gallery == "art" ).map(edge =>
      {
        return(
        <GalleryEntryDynamic title={edge.node.frontmatter.shortTitle}
        img={getImage(edge.node.frontmatter.Image01)}
        url={edge.node.frontmatter.slug}
         />
        )
      }
     )

    console.log(Posts)
    console.log(edges)

  return (
    <Layout>
      <Page title = "ART WORKS" subtitle = "2D, 3D and VFX art works"></Page>
      {Posts}
      {/*<GalleryEntry title="Unreal water shader"
      img="https://pro2-bar-s3-cdn-cf5.myportfolio.com/2e727ec7-f6e9-4fd4-b97f-93196e1208ad/6f71a0c5-8cc3-4d7d-9b74-bf2a0bcc2a8d.png?h=f74f57784e5d1808d20b4f08dbc531de"
  url="https://fr4ct1ons.myportfolio.com/stylized-unreal-ocean-water-shader"></GalleryEntry>*/}
    </Layout>
  )
}

export default ArtGallery

      //<GalleryEntry title={edge.node.frontmatter.title} url={edge.node.frontmatter.slug} img={edge.node.frontmatter.iconImage}/> 

      

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            
            gallery
            slug
            title
            shortTitle
            Image01{
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 100}, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
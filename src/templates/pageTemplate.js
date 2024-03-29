import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/PageTemplate.css"

export default function PageTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Layout>
        <div className="PageTemplate">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.subtitle}</h2>
          <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Layout>
    </div>
  )
}

export const regularPageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
      }
    }
  }
`
import React from "react"
import PostExcerpt from "../components/postExcerpt"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import styled from "styled-components"

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query LatestThreeQuery {
        allMarkdownRemark(
          limit: 3
          sort: { order: DESC, fields: [fields___modifiedTime] }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
              excerpt
              fields {
                slug
                modifiedTime
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`programmer`, `designer`, `explorer`]} />
        <h2>Recent Posts</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return <PostExcerpt node={node} isExcerpt={true} />
        })}
      </Layout>
    )}
  />
)

export default IndexPage

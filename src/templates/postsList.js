import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import PostExcerpt from "../components/postExcerpt"
import styled from "styled-components"

const PostsList = props => {
  let { edges } = props.data.allMarkdownRemark
  return (
    <Layout>
      {edges.map(({ node }, index) => {
        return <PostExcerpt node={node} key={index} />
      })}
      <Paginate>
        <Link to={props.pageContext.previousPagePath}>Previous</Link>
        <Link to={props.pageContext.nextPagePath}>Next</Link>
      </Paginate>
    </Layout>
  )
}

export default PostsList

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [fields___modifiedTime], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          fields {
            modifiedTime
            slug
          }
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`

export const Paginate = styled.div`
  display: flex;
  justify-content: center;

  > * {
    padding: 10px;
  }
`

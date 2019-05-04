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
            sort: { fields: [frontmatter___date], order: DESC }
            skip: $skip
            limit: $limit
            filter: { frontmatter: { tag: { nin: ["about", "use", "links"] } } }
        ) {
            edges {
                node {
                    fields {
                        birthTime(fromNow: true)
                        slug
                    }
                    frontmatter {
                        title
                        date
                    }
                    excerpt
                    timeToRead
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

import React from "react"
import PostExcerpt from "../components/postExcerpt"
import Layout from "../components/layout"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
    <StaticQuery
        query={graphql`
            query LatestThreeQuery {
                allMarkdownRemark(
                    limit: 3
                    sort: { order: DESC, fields: [fields___birthTime] }
                    filter: { frontmatter: { tag: { nin: ["use", "about"] } } }
                ) {
                    edges {
                        node {
                            frontmatter {
                                title
                                date
                            }
                            excerpt
                            timeToRead
                            fields {
                                slug
                                birthTime(fromNow: true)
                            }
                        }
                    }
                }
            }
        `}
        render={data => (
            <Layout>
                <SEO
                    title="Home"
                    keywords={[`programmer`, `designer`, `explorer`]}
                />
                <h2>Recent Posts</h2>
                {data.allMarkdownRemark.edges.map(({ node }) => {
                    return <PostExcerpt node={node} key={node.fields.slug} />
                })}
            </Layout>
        )}
    />
)

export default IndexPage

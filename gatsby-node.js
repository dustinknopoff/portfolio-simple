/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require("gatsby-awesome-pagination")
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
        const fileNode = getNode(node.parent)
        createNodeField({
            node,
            name: "modifiedTime",
            value: fileNode.mtime,
        })
        createNodeField({
            node,
            name: "birthTime",
            value: fileNode.birthTime,
        })
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    let edges = result.data.allMarkdownRemark.edges
    edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/post.js`),
            context: {
                // Data passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
            },
        })
    })
    paginate({
        createPage,
        items: edges,
        itemsPerPage: 10,
        pathPrefix: `/posts`,
        component: path.resolve(`./src/templates/postsList.js`),
    })
}

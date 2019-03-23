import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Moment from "react-moment"

const Post = ({ data }) => {
  console.log(data)
  let { title, link, tag, date } = data.markdownRemark.frontmatter
  let { html } = data.markdownRemark
  return (
    <Layout>
      <h3>{title}</h3>
      <Moment fromNow>{date}</Moment>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <Link to={link}>Go now!</Link>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        link
        date
        tag
      }
    }
  }
`

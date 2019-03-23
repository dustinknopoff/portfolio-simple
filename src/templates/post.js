import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Moment from "react-moment"
import styled from "styled-components"

const Post = ({ data }) => {
  let { title, link, tag, date } = data.markdownRemark.frontmatter
  let { html } = data.markdownRemark
  return (
    <Layout>
      <div style={{ marginBottom: `1rem` }}>
        <TitleTag>
          <h3>{title}</h3>
          <Tag>{tag}</Tag>
        </TitleTag>
        <Moment fromNow>{date}</Moment>
      </div>
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <a href={link}>Go now!</a>
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

export const TitleTag = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Tag = styled.p`
  background-color: #efefef;
  border-radius: 4px;
  padding: 3px;
  color: var(--main-opp-color);
`

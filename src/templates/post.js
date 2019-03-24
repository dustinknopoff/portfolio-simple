import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import Moment from "react-moment"

const Post = ({ data }) => {
    let { title, link, tag, linkText, date } = data.markdownRemark.frontmatter
    let { html } = data.markdownRemark
    let { birthTime } = data.markdownRemark.fields
    console.log(linkText)
    let tagBlacklist = ["about", "use"]
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
            {!tagBlacklist.includes(tag) && (
                <a href={link}>{linkText || "Check it out!"}</a>
            )}
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
                tag
                linkText
                date
            }
            fields {
                birthTime(fromNow: true)
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from "styled-components"
import Search from "../components/search"

const Header = ({ siteTitle, description, pages, searchIndex }) => {
  return (
    <Head>
      <Title>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <p style={{ width: `75%` }}>{description}</p>
      </Title>
      <Info>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dknopoff/image/upload/f_auto/v1523893789/portfolio/profile.jpg"
            style={{
              opacity: `100`,
              transition: `opacity 0.5s ease 0.5s`,
              width: `100px`,
              height: `100px`,
              borderRadius: `50px`,
              margin: `0 auto`,
            }}
            alt="profile"
          />
        </Link>
        <LinksList>
          {pages.map((x, index) => {
            // eslint-disable-next-line
            if (index != pages.length - 1) {
              return (
                <ListElem as={Link} to={x.toLowerCase()} key={index}>
                  {x}
                </ListElem>
              )
            } else {
              return (
                <ListElem as={Link} to={x.toLowerCase()} end key={index}>
                  {x}
                </ListElem>
              )
            }
          })}
        </LinksList>
        <Search searchIndex={searchIndex} />
      </Info>
      <Title />
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
  pages: PropTypes.arrayOf(PropTypes.string),
}

Header.defaultProps = {
  siteTitle: ``,
  description: ``,
  pages: [``],
}

export default Header

export const Head = styled.header`
  grid-column: 2 / span 12;
  grid-row: 1;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4vh;
`

export const Title = styled.div`
  width: 33%;

  @media only screen and (max-width: 712px) {
    width: 100%;
  }
`

export const Info = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 10px;
  }

  @media only screen and (max-width: 712px) {
    width: 100%;
  }
`

export const LinksList = styled.ul`
  list-style-type: none;
  display: flex;
`

export const ListElem = styled.li`
  border-right: 1px solid black;
  padding: 0 5px 0 5px;
  font-style: italic;

  :hover {
    font-style: normal;
  }

  ${props =>
    props.end &&
    css`
      border: none;
    `};
`

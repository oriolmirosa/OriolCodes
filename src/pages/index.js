import React from "react"
import Link from "gatsby-link"
import presets from "../utils/presets"
import styled from "styled-components"
import Summary from "../components/Summary"

const style = {
  date: {
    fontSize: 0.8 + 'em',
    color: '#93cbf9',
    fontFamily: 'Avenir, sans-serif'
  }
}

const StyledLink = styled(Link)`
  font-family: Merriweather;
  font-size: 24px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid black;
    box-shadow: none;
  }
`

const StyledLi = styled.li`
  margin-bottom: 2em;

  &:before {
    content: none;
  }
`

const StyledUl = styled.ul`
  margin-left: 0;
  padding-left: 0;

  @media (max-width: 600px) {
      margin-top: 0px;
  }
`

class Index extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const author = this.props.data.site.siteMetadata.author

    return (
      <div>
        <div>
          <ul>
            {posts.map(post =>
              <StyledLi key={post.node.fields.slug}>
                <StyledLink to={post.node.fields.slug}>
                {post.node.frontmatter.title}
                </StyledLink>
                <div style={style.date}>
                  {post.node.frontmatter.date}
                </div>
                <Summary body={post.node.html} />
              </StyledLi>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        author
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { date: { regex: "/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
        }
      }
    }
  }
`

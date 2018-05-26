import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"
import Summary from "../components/Summary"

const StyledLink = styled(Link)`
  font-family: Titillium Web, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: black;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid black;
    box-shadow: none;
    text-decoration: none;
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
  color: black;
  list-style-type: none;
  margin-bottom: 0;

  @media (max-width: 600px) {
      margin-top: 0px;
  }
`

const DateDiv = styled.div`
  font-size: 0.8em;
  color: #93cbf9;
  font-family: Lato, sans-serif;
`

class Index extends React.Component {
  render() {
    let posts = this.props.data.allMarkdownRemark.edges
    // Horrible hack to filter the posts and leave only the blog entries
    // The following line should be removed, the previous one changed to 'const',
    // and the filter line below in the graphql part uncommented, when this is
    // fixed in gatsby
    posts = posts.filter(post => JSON.stringify(post).indexOf("null") == -1)
    const author = this.props.data.site.siteMetadata.author

    return (
      <div>
          <StyledUl>
            {posts.map(post => (
              <StyledLi key={post.node.fields.slug}>
                <StyledLink to={post.node.fields.slug}>
                {post.node.frontmatter.title}
                </StyledLink>
                <DateDiv>
                  {post.node.frontmatter.date}
                </DateDiv>
                <Summary body={post.node.html} />
              </StyledLi>
            ))}
          </StyledUl>
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
      # filter: { frontmatter: { date: { regex: "/^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM/DD/YYYY")
          }
          html
        }
      }
    }
  }
`

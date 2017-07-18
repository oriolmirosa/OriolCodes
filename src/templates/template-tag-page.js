import React from "react"
import Link from "gatsby-link"
import styled from 'styled-components'
import Summary from '../components/Summary'
import { TagsDiv } from '../components/Tags'

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
  color: black;
  list-style-type: none;
  margin-bottom: 0;

  @media (max-width: 600px) {
      margin-top: 0px;
  }
`

const H2Styled = styled.h2`
  line-height: 2em;
  vertical-align: middle;
`

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post =>
      <StyledLi key={post.node.fields.slug}>
        <StyledLink to={post.node.fields.slug}>
          {post.node.frontmatter.title}
        </StyledLink>
        <Summary body={post.node.html} />
      </StyledLi>
    )

    return (
      <div>
        <H2Styled>
          {this.props.data.allMarkdownRemark.totalCount}
          {` `}posts tagged with &nbsp; <TagsDiv>{this.props.pathContext.tag.toLowerCase()}</TagsDiv>
        </H2Styled>
        <p>
          <Link to="/tags/">Browse all tags</Link>
        </p>
        <StyledUl>
          {postLinks}
        </StyledUl>
      </div>
    )
  }
}

export default TagRoute

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

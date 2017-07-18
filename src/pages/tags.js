import React from "react"
import Link from "gatsby-link"
import kebabCase from "lodash/kebabCase"
import Tags from '../components/Tags'
import styled from 'styled-components'

const TagsUl = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`

const TagCountSpan = styled.span`
  background-color: #93cbf9;
  font-family: avenir;
  font-size: 0.6em;
  font-variant: small-caps;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 400;
  padding-right: 7px;
  padding-left: 7px;
  padding-top: 5px;
  border-radius: 2px;
  padding-bottom: 3px;
`

class TagsPageRoute extends React.Component {
  render() {
    let allTags = this.props.data.allMarkdownRemark.group
    allTags = allTags.filter(x => x.fieldValue != 'null')

    return (
      <div>
        <h1>Tags</h1>
        <TagsUl>
          {allTags.map(tag =>
            <li key={tag.fieldValue}>
              <TagCountSpan>{tag.totalCount}</TagCountSpan>
              &nbsp;&nbsp;&nbsp;
              <Tags
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
              >
                {tag.fieldValue.toLowerCase()}
              </Tags>

            </li>
          )}
        </TagsUl>
      </div>
    )
  }
}

export default TagsPageRoute

export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

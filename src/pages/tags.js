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
  background-color: black;
  font-family: Lato, sans-serif;
  font-size: 0.6em;
  font-variant: small-caps;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: 400;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 5px;
  border-radius: 50%;
  padding-bottom: 5px;
`

class TagsPageRoute extends React.Component {
  render() {
    let allTags = this.props.data.allMarkdownRemark.group
    allTags = allTags.filter(x => x.fieldValue != 'null')
      .sort(function(a, b) {
        var nameA = a.fieldValue.toLowerCase(), nameB = b.fieldValue.toLowerCase()
        if (nameA < nameB)
            return -1
        if (nameA > nameB)
            return 1
        return 0
      })

    return (
      <div>
        <h1>Tags</h1>
        <TagsUl>
          {allTags.map(tag =>
            <li key={tag.fieldValue}>

              <Tags to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue.toLowerCase()}
              </Tags>
              &nbsp;&nbsp;&nbsp;
              <TagCountSpan>{tag.totalCount}</TagCountSpan>

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

import React from "react"
import Link from "gatsby-link"
import presets from "../utils/presets"
import styled from 'styled-components'
import Disqus from '../components/Disqus'
import ReadNext from '../components/ReadNext'
import Tags from '../components/Tags'

const BlogDateParagraph = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
`

const BlogDateSpan = styled.span`
  margin-top: 0px;
  margin-bottom: 5px;
  font-size: 0.8em;
  color: black;
  font-family: Avenir, sans-serif;
`

const TagsParagraph = styled.p`
  margin-top: 0;
`


class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{'    '}</span>
        return (
          <span key={tag}>
            <Tags to={tag}>
              {post.frontmatter.tags[i].toLowerCase()}
            </Tags>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <span>
          {tags}
        </span>
      )
    }

    let header = null
    let footer = null

    if (post.frontmatter.title !== 'About' & post.frontmatter.title !== 'Portfolio' & post.frontmatter.title !== 'Contact') {
      header = (
        <div>
          <h1>{post.frontmatter.title}</h1>
          <BlogDateParagraph>
            <BlogDateSpan>Posted on {post.frontmatter.date} </BlogDateSpan>
            <BlogDateSpan>&middot; {post.timeToRead} min read</BlogDateSpan>
          </BlogDateParagraph>
          <TagsParagraph>{tagsSection}</TagsParagraph>
        </div>
      )

      footer = (
        <div>
          <hr />
          {/* <Disqus
            shortname={this.props.data.site.siteMetadata.disqusShortname}
            title={post.frontmatter.title}
            identifier={post.fields.slug}
            url={post.fields.slug}
          /> */}
        </div>
      )
    }

    return (
        <div>
          {header}
          <div dangerouslySetInnerHTML={{ __html: post.html }} className="post" />
          {footer}
        </div>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        tagSlugs
        slug
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

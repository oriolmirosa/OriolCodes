import React from "react"
import Link from "gatsby-link"
import presets from "../utils/presets"

import { ThemeProvider } from 'styled-components'
import myTheme from '../components/styled-components'
import Disqus from '../components/Disqus'
import ReadNext from '../components/ReadNext'

import '../css/main.css'
import '../css/monokai-sublime.css'

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    let tags
    let tagsSection
    if (post.fields.tagSlugs) {
      const tagsArray = post.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider = i < tagsArray.length - 1 && <span>{`, `}</span>
        return (
          <span key={tag}>
            <Link to={tag}>
              {post.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <span>
          tagged {tags}
        </span>
      )
    }

    let header = null
    let footer = null

    if (post.frontmatter.title !== 'About' & post.frontmatter.title !== 'Portfolio' & post.frontmatter.title !== 'Contact') {
      header = (
        <div>
          <h1>{post.frontmatter.title}</h1>
          <p style={myTheme.date}>Posted on {post.frontmatter.date} &middot; {post.timeToRead} min read &middot;</p>
          <p>{tagsSection}</p>
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
      <ThemeProvider theme={myTheme}>
        <div>
          {header}
          <div dangerouslySetInnerHTML={{ __html: post.html }} className="post" />
          {footer}
        </div>
      </ThemeProvider>
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

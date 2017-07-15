import React from "react"
import Link from "gatsby-link"
import presets from "../utils/presets"

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

    return (
      <div>
        <header>
          <h1>
            {post.frontmatter.title}
          </h1>
          <p>
            {post.timeToRead} min read &middot; {tagsSection}
          </p>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} className="post" />
        <hr/>
        <p>
          <img
            alt={`Avatar of ${post.frontmatter.author.id}`}
            src={
              post.frontmatter.author.avatar.children[0].responsiveResolution
                .src
            }
            srcSet={
              post.frontmatter.author.avatar.children[0].responsiveResolution
                .srcSet
            }
          />
          <span>
            <small>
              {post.frontmatter.author.id}
            </small>
            {` `}
            {post.frontmatter.author.bio}
          </span>
        </p>
      </div>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        author {
          id
          bio
          avatar {
            children {
              ... on ImageSharp {
                responsiveResolution(
                  width: 50
                  height: 50
                  quality: 75
                  grayscale: true
                ) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import Link from 'gatsby-link'
import { prune, include as includes } from 'underscore.string'
import find from 'lodash/find'
import intersect from 'just-intersect'
// import { getTags } from 'utils'
import Summary from './Summary'
import styled from 'styled-components'

const style = {
  h3: {
    marginTop: 0,
    fontFamily: 'Merriweather',
    fontSize: 24 + 'px',
    fontWeight: 'bold',
    color: 'black'
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

class ReadNext extends React.Component {
  render () {
    const { pages, post } = this.props
    let { readNext } = post
    let nextPost

    if (readNext) {
      nextPost = find(pages, (page) => includes(page.path, readNext))
    } else {
      readNext = pages
        .filter(p => p.data.tags && p.data.body !== post.body)
        .map(p => {
          if (post.tags) {
            const t = getTags(p)
            p.diff = intersect(post.tags, t).length
          }
          return p
        })
        .sort((a, b) => a.diff - b.diff)
        .slice(-5)
        .sort((a, b) => Math.random() * -0.5)
        .pop()
      if (readNext) {
        readNext = readNext.path
        nextPost = find(pages, (page) => includes(page.path, readNext))
      }
    }

    if (!nextPost) {
      return React.createElement('noscript', null)
    } else {
      nextPost = find(pages, (page) => includes(page.path, readNext.slice(1, -1))
      )

      return (
      <div>
        <h6>Read this next:</h6>
        <h3 style={style.h3}><StyledLink to={nextPost.path} > {nextPost.data.title} </StyledLink></h3>
        <Summary body={nextPost.data.body} />
        <hr />
      </div>
      )
    }
  }
}

ReadNext.propTypes = {
  post: React.PropTypes.object.isRequired,
  pages: React.PropTypes.array
}

export default ReadNext

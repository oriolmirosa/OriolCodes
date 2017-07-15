import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const TagLink = styled(Link)`
  background-color: #9b9b9b;
  font-family: avenir;
  font-size: 0.9em;
  font-variant: small-caps;
  color: white;
  text-decoration: none;
  font-weight: 400;
  padding-right: 6px;
  padding-left: 7px;
  padding-top: 0px;
  border-radius: 2px;
  padding-bottom: 1px;
`

const Tags = props => {
  const { post, ...rest } = props
  return (
    <div className="Tags" {...rest}>
      {(props.post.tags || []).map((tag, i) => {
         return [i !== 0 ? '    ' : null,
           <TagLink key={i} to={{pathname: '/tags/', hash: '#'+tagMap(tag)}}>
             {tag.toLowerCase()}
           </TagLink>]
       })}
    </div>
  )
}

export default Tags

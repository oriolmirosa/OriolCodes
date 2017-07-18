import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Tags = styled(Link)`
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

export default Tags

export const TagsDiv = styled.div`
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
  vertical-align: middle;
  display: inline;
  white-space: nowrap;
  line-height: 2em;
`
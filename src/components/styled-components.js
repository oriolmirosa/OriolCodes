import { injectGlobal } from 'styled-components'
import styled from 'styled-components'
import { ThemeProvider, withTheme } from 'styled-components'
import React from 'react'
import ReactDOM from 'react-dom'

const myTheme = {
  '*': {
      boxSizing: 'border-box'
  },
  html: {
    fontSize: 18 + 'px',
    lineHeight: 1.65
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'Merriweather, serif'
  },
  h2: {
    fontFamily: 'Merriweather',
    fontSize: 20 + 'px',
    fontWeight: 'bold',
    color: 'black'
  },
  h3: {
    fontFamily: 'Merriweather',
    fontSize: 18 + 'px',
    fontWeight: 'bold',
    color: 'black'
  },
  a: {
    color: '#93cbf9',
    textDecoration: 'none',
  },
  blockquote: {
    color: 'grey',
    fontStyle: 'italic',
    paddingLeft: 0.7 + 'em',
    marginLeft: 0,
    borderLeft: 0.3 + 'em solid grey',
  },
  'blockquote > :lastChild': {
    marginBottom: 0,
  },
  ul: {
    marginLeft: 10 + 'em'
  },
  'ul li': {
    color: 'black',
    listStyleType: 'none',
    marginBottom: 0
  },
  'ul li:before': {
    marginLeft: 0,
    content: "'\\2022'",
    color: '#93cbf9',
    paddingRight: 0.5 + 'em'
  },
  'ul li ul': {
    marginTop: 0,
    marginBottom: 0
  },
  'ul li ul li': {
    color: 'black',
    listStyleType: 'none',
    marginTop: 0,
    marginBottom: 0
  },
  'ul li ul li:before': {
    marginLeft: 0,
    content: "'\\25E6'",
    color: '#93cbf9',
    paddingRight: 0.5 + 'em'
  },
  ol: {
    marginLeft: 2.1 + 'em'
  },
  'ol li': {
    marginBottom: 0
  },
  pre: {
    display: 'block',
    background: '#333333',
    color: '#DCDCDC',
    overflowY: 'hidden'
  },
  'pre code': {
    background: 'none',
    border: 'none',
    borderRadius: 3 + 'px',
    display: 'inline-block',
    overflow: 'inherit',
    whiteSpace: 'inherit',
    wordWrap: 'normal'
  },
  code: {
    '-mozBorderRadius': 3 + 'px',
    '-webkitBorderRadius': 3 + 'px',
    borderRadius: 3 + 'px',
    whiteSpace: 'pre',
    whiteSpace: 'pre-wrap',
    whiteSpace: 'pre-line',
    whiteSpace: '-pre-wrap',
    whiteSpace: '-o-pre-wrap',
    whiteSpace: '-moz-pre-wrap',
    whiteSpace: '-hp-pre-wrap',
    wordWrap: 'break-word',
    background: '#e5e5e5',
    border: '1px solid #cccccc',
    display: 'inline',
    fontFamily: 'PragmataPro, monospace, serif',
    fontSize: 0.8 + 'em',
    maxWidth: 100 + '%',
    overflow: 'auto',
    padding: '0 0.1625rem'
  },
  h1: {
    marginTop: -7,
    // fontFamily: 'exo',
    fontSize: 24 + 'px',
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 0 + 'px'
  },
  hr: {
    marginBottom: 2 + 'em'
  },
  Tags: {
    marginBottom: 1 + 'em'
  },
  date: {
    marginTop: 0 + 'px',
    marginBottom: 5 +'px',
    fontSize: 0.8 + 'em',
    color: '#93cbf9',
    fontFamily: 'Avenir, sans-serif'
  },
  h2: {
    fontFamily: 'Merriweather',
    fontSize: 20 + 'px',
    fontWeight: 'bold',
    color: 'black'
  },
  h3: {
      fontFamily: 'Merriweather',
      fontSize: 18 + 'px',
      fontWeight: 'bold',
      color: 'black'
  }
}

export default myTheme

injectGlobal`

  ${''/* @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700i,700');
  @import url('https://fonts.googleapis.com/css?family=Cookie:400'); */}

  * {
      box-sizing: border-box;
  }

  body {
    font-family: avenir, sans-serif;
    font-size: 18px;
    line-height: 1.65;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Merriweather, serif;
  }

  a {
    color: #93cbf9;
    text-decoration: none;
  }

  blockquote {
    color: grey;
    font-style: italic;
    padding-left: 0.7em;
    margin-left: 0;
    border-left: 0.3em solid grey;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  ul {
    margin-left: 1em;
    padding-left: 0;
  }

  ul li {
    color: black;
    list-style-type: none;
    margin-bottom: 0;
  }

  ul li:before {
    margin-left: 0;
    content: '\\2022';
    color: #93cbf9;
    padding-right: 0.5em;
  }

  ul li ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  ul li ul li {
    color: black;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
  }

  ul li ul li:before {
    margin-left: 0;
    content: '\\25E6';
    color: #93cbf9;
    padding-right: 0.5em;
  }

  ol {
    margin-left: 2.1em;
    padding-left: 0;
  }

  ol li {
    margin-bottom: 0;
  }

  pre {
    display: block;
    background: #333333;
    color: #DCDCDC;
    overflow-y: hidden;
    border-radius: 3px;
  }

  pre code {
    background: none;
    border: none;
    border-radius: 3px;
    display: inline-block;
    overflow: inherit;
    white-space: inherit;
    word-wrap: normal;
  }

  code {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    white-space: pre;
    white-space: pre-wrap;
    white-space: pre-line;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -hp-pre-wrap;
    word-wrap: break-word;
    background: #e5e5e5;
    border: 1px solid #cccccc;
    display: inline;
    font-family: PragmataPro, monospace, serif;
    font-size: 0.8rem;
    max-width: 100%;
    overflow: auto;
  }

  h1 {
    margin-top: 18px;
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-bottom: 0;
  }
  @media (max-width: 600px) {
    h1 {
      margin-top: 0px;
    }
  }

  hr {
    margin-top: 2em;
    margin-bottom: 2em;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    background: hsla(0,0%,0%,0.2);
    border: none;
    height: 1px;
  }

  Tags {
    margin-bottom: 1em;
  }

  date {
    margin-top: 0px;
    margin-bottom: 5px;
    font-size: 0.8em;
    color: #93cbf9;
    font-family: Avenir, sans-serif;
  }

  h2 {
    font-family: Merriweather;
    font-size: 20px;
    font-weight: bold;
    color: black;
  }

  h3 {
    font-family: Merriweather;
    font-size: 18px;
    font-weight: bold;
    color: black;
  }

  h6 {
    margin: 0;
    font-size: 12px;
    ${''/* line-height: 1em; */}
    letter-spacing: -0.25;
  }
`

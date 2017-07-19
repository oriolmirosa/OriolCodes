import React from 'react'
import ReactDOM from 'react-dom'
// import { config } from 'config'
import styled from 'styled-components'

const Header = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: ${props => props.size === 'large' ? '120px' : '60px'};
	width: 100%;
	z-index: 9998;
  transition: height 0.7s;

  @media (max-width: 600px) {
    height: 60px;
  }
`

export default Header

export const Banner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	background-color: rgb(51, 51, 51);
	height: ${props => props.size === 'large' ? '120px' : '60px'};
	transition: height 0.7s;

  @media (max-width: 600px) {
    height: 60px;
  }
`

export const Title = styled.a`
	position: absolute;
	top: 50%;
	left: ${props => props.size === 'large' ? '50%' : props.leftPosition + 'px'};
	transform: translate(-50%, -50%);
	color: white;
	font-family: avenir;
	font-weight: bold;
	font-size: ${props => props.size === 'large' ? '3em' : '1.2em'};
	transition: ${props => props.scroll ? 'left 0.7s, font-size 0.7s' : 'none'};
	z-index: 9999;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    left: 50%;
    font-size: 1.2em;
    transform: translate(-50%, -50%);
  }
`

export const Subtitle = styled.span`
	position: absolute;
	top: 80%;
	left: ${props => props.size === 'large' ? '50%' : props.leftPosition + 'px'};
	transform: translate(-50%, -50%);
	color: white;
	font-family: Cookie;
	font-size: ${props => props.size === 'large' ? '1.4em' : '0.7em'};
	transition: ${props => props.scroll ? 'left 0.7s, font-size 0.7s' : 'none'};
	z-index: 9999;

  @media (max-width: 600px) {
    left: 50%;
    font-size: 0.7em;
    transform: translate(-50%, -50%);
  }
`

export const PercReadBackground = styled.div`

  @media (max-width: 600px) {
    position: fixed;
    top: 60px;
    background-color: white;
    height: .3em;
    width: 100%;
    z-index: 9998;
  }
`

export const PercRead = styled.div`
	position: fixed;
	top: ${props => props.size === 'large' ? '120px' : '60px'};
	background-color: #93cbf9;
	height: .3em;
	${''/* width: ${props => props.width ? props.width + '%' : '0%'}; */}
	transition: top 0.7s;
	z-index: 9999;

  @media (max-width: 600px) {
    top: 60px;
  }
`

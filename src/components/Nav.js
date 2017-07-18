import React from 'react'
import NavLink from './NavLink'
import styled from 'styled-components'

const Navbox = styled.div`
	position: fixed;
	top: ${props => props.size === 'large' ? '130px' : '20px'};
  right: ${props => props.size === 'large' ? '50%' : props.rightPosition + 'px'};
	transform: translateX(50%);
  transition: top 0.9s, right 0.9s;
	display: flex;
	justify-content: center;
	z-index: 9999;

  @media (max-width: 600px) {
    top: 65px;
    right: 0;
    width: 100%;
    height: 32px;
    padding-left: 0;
    padding-right: 0;
    justify-content: space-between;
    transform: none;
    background-color: white;
  }
`

const Nav = (props) => {
  const desktop = {
    fontWeight: 'bold',
    textDecoration: 'underline'
  }

  const mobile = {
    borderBottom: '3px solid black'
  }

  const screen = props.windowWidth > 600 ? desktop : mobile

	return (
		<Navbox size={props.size} rightPosition={props.rightPosition}>
      <NavLink to='/' exact size={props.size} activeStyle={screen}>Blog</NavLink>
      <NavLink to='/portfolio/' size={props.size} activeStyle={screen}>Portfolio</NavLink>
			<NavLink to='/about/' size={props.size} activeStyle={screen}>About</NavLink>
      <NavLink to='/contact/' size={props.size} activeStyle={screen}>Contact</NavLink>
		</Navbox>
	)
}

export default Nav

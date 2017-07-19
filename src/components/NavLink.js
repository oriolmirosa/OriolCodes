import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const NavLink = styled(Link)`
	color: ${props => props.size === 'large' ? 'black' : 'white'};
	font-size: ${props => props.size === 'large' ? '1em' : '0.8em'};
	font-family: avenir;
	text-decoration: ${props => props.selected ? 'underline' : 'none'};
	text-transform: uppercase;
	padding-left: 20px;
	padding-right: 20px;
	transition: color 0.7s, font-size 0.7s;
  border-bottom: 0 none;

	&:hover {
		font-weight: bold;
	}

  @media (max-width: 600px) {
    flex-grow: 1;
    text-align: center;
    line-height: 29.7px;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 0.7em;
    color: black;
    font-weight: bold;
    transition: none;
    border-bottom: 3px solid #D8D8D8;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default NavLink

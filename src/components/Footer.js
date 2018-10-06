import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
	background-color: #333333;
	font-family: Lato, sans-serif;
	font-size: 0.7em;
	color: #fff;
	text-align: center;
	height: 60px;
	line-height: 60px;
`

const Footer = () => <StyledFooter>Copyright © Oriol Mirosa 2018</StyledFooter>

export default Footer;

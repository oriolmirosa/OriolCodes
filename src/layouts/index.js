import React from 'react'
import ReactDOM from 'react-dom'
import Link from "gatsby-link"
import { Container } from 'react-responsive-grid'
import styled from 'styled-components'
import Filler from '../components/Filler'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Header, { Banner, Title, Subtitle, PercReadBackground, PercRead } from '../components/Header'

require(`prismjs/themes/prism-okaidia.css`)
require(`../css/main.css`)

const BodyDiv = styled.div`
  position: relative;
  height: 100%;
`

const StyledContainer = styled(Container)`
  max-width: 713px;
  width: 713px;
  padding: 46px 22px 100px 22px;
  position: relative;
  min-height: 100vh;
  background-color: white;
  z-index: 0;

  @media (max-width: 713px) {
    width: 100%;
  }
`

class DefaultLayout extends React.Component {
  constructor(props) {
		super(props);

    this.calculatePercentScrolled = this.calculatePercentScrolled.bind(this)

		this.state = {
			size: 'large',
			percWidth: 0,
      windowWidth: 900,
      scroll: false
		}
	}

	componentDidMount() {
    this.setState({windowWidth: window.innerWidth})
    let lala = (e) => this.calculatePercentScrolled(e)
    window.addEventListener('scroll', lala)
	}

  componentWillUnmount() {
    window.removeEventListener('scroll', lala)
  }

  calculatePercentScrolled (e) {
    const that = this;
    let h = document.documentElement;
    let b = document.body;
    let	st = 'scrollTop';
    let	sh = 'scrollHeight';

    let distanceY = h[st] || b[st];
    var percDown = distanceY / ((h[sh]||b[sh]) - h.clientHeight) * 100;

    that.setState({percDown: percDown});
    let shrinkOn = 0;
    if (that.state.percDown > 0) {
      that.setState({size: 'small', scroll: true})
    } else {
      if (that.state.size === 'small') {
        that.setState({size: 'large'});
      }
    }
  }

  render () {
    const siteTitle = 'Oriol.Codes'
    const siteSubTitle = 'Data Science and Coding'
    const { location} = this.props
    let textWidth = 713
    let leftPosition = this.state.windowWidth / 2 - textWidth / 2 + 22 + 60
    let rightPosition = this.state.windowWidth / 2 - textWidth / 2 + 22 + 180
    let header
    header = (
      <Header>
				<Banner size={this.state.size}>
					<Title size={this.state.size} scroll={this.state.scroll} leftPosition={leftPosition} href='/'>{siteTitle}</Title>
					<Subtitle size={this.state.size} scroll={this.state.scroll} leftPosition={leftPosition}>{siteSubTitle}</Subtitle>
				</Banner>
        <PercReadBackground size={this.state.size} width={this.state.percDown} />
        <PercRead size={this.state.size} style={{width: this.state.percDown + '%'}} />
			</Header>
    )

    return (
      <BodyDiv>
        <StyledContainer ref={(input) => { this.container = input; }}>
          {header}
    			<Nav size={this.state.size} rightPosition={rightPosition} windowWidth={this.state.windowWidth}/>
    			<Filler />
          {this.props.children()}
        </StyledContainer>
        <Footer />
      </BodyDiv>
    )
  }
}

export default DefaultLayout

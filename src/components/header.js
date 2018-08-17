import React from 'react'
import Link from 'gatsby-link'
import './header.css'
 

class Header extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
    hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
    this.setState({ hasScrolled: true })
    } else {
    this.setState({ hasScrolled: false })
    }
  }
  
  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="Header">
          <div className="HeaderGroup">
              <Link to="/"><img width="30" src="/images/logo.svg"/></Link>
              <Link to="/course">Course</Link>
              <Link to="/downloads">Downloads</Link>
              <Link to="/workshops">Workshops</Link>
              <Link to="/buy"><button>Buy</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header

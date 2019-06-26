import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IconImage } from "./image";

const Header = ({ siteTitle }) => (

  <header
    style={{
      background: `rgba(0, 0, 0, 0)`,
      //marginBottom: `0`,
      height: '80px',
      position: 'fixed',
      top: '0',
      width: '100%'
    }}
  >
    <div
      style={{
        //margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <div
        style={{
          maxWidth: 60,
          margin: 10,
          marginLeft: 60,
        }}
      >
        <Link to="/">
          <IconImage />
        </Link>
      </div>

      <div
        style={{
          position: 'relative',
          textAlign: 'right',
          top: -50,
          color: 'white',
        }}
      >
        <span style={{marginRight: 20}}>Home</span><span style={{marginRight: 20}}>About</span><span style={{marginRight: 20}}>Projects</span><span style={{marginRight: 12}}>Contact</span>
      </div>
      
    </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

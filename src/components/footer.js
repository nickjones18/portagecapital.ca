import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { IconImage } from "./image";

const Footer = ({ siteTitle }) => (

  <footer
    style={{
      background: `rgba(0, 0, 0, 1)`,
      height: 200,
      width: '100%'
    }}
  >

  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

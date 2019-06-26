import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SkylineImage = () => {
  const data = useStaticQuery(graphql`
    query {
      skylineImage: file(relativePath: { eq: "skyline.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.skylineImage.childImageSharp.fluid} />
}

const IconImage = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImage: file(relativePath: { eq: "pc-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.iconImage.childImageSharp.fluid} />
}

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "PortageLogo_colour.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.logoImage.childImageSharp.fluid} />
}

export {LogoImage, IconImage, SkylineImage};
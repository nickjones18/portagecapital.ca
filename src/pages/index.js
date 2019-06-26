import React from "react"
import { Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import {LogoImage, IconImage, SkylineImage} from "../components/image"
import SEO from "../components/seo"

import './index.css';

import Container from '@material-ui/core/Container';

const IndexPage = () => (
  <Layout>
    <SEO title="Portage Capital" />
    
    <div className='backgroundStyle'>
      <div className='centerInPage'>
        <Container maxWidth="sm">
          <LogoImage />
        </Container>
      </div>
    </div>

    <div className='large-text'>
        <Container>
          <h2>
            
          </h2>
        </Container>
    </div>

    <div className='text-over-photo'> 
      
    </div>
    
  </Layout>
)

export default IndexPage

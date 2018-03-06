import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'


import { siteMetadata } from '../../gatsby-config'
import Header from '../components/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"/>
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
    <div id="footer" style={{
      width: "100%",
      margin: '0 auto',
      maxWidth: 960,
    }}>
      <div style={{ float: "left" }}>2016 Exult Rochester - Catholic Diocese of Rochester, NY</div>
      <div style={{ float: "right" }}>SOCIAL BUTTONS</div>

    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

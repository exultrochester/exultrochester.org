import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { SocialIcons } from 'react-social-icons';


import { siteMetadata } from '../../gatsby-config'
import Header from '../components/Header'
import './index.css'

const toValues = o => Object.keys(o).map(k => o[k]);

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
    <div style={{
      backgroundColor: 'white',
      width: '100%',
    }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '55em',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          backgroundColor: 'white',
        }}
      >
        {children()}
      </div>
    </div>
    <footer className="footer">
    <div>2016 Exult Rochester - Catholic Diocese of Rochester, NY</div>
    <div style={{
      textAlign: "right",
      }}>
        <SocialIcons urls={toValues(siteMetadata.social)} color="rgba(0, 0, 0, 0.75)" />
      </div>

    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

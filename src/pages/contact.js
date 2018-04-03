import React from 'react'
import Link from 'gatsby-link'
import { SocialIcon } from 'react-social-icons';

import { siteMetadata } from '../../gatsby-config'
import Logo from '../images/exulttopbar-small.jpg'

// TODO Redirect from /welcome

const SOCIAL = Object
  .keys(siteMetadata.social)
  .map(k => [k, siteMetadata.social[k]])
  .filter(([name, url]) => name != 'Email') // Email is spelled out differently

const ContactPage = () => (
    <div>
      <h2>Contact Us</h2>
      <p>Please contact us at the following address:</p>

      <ul>
        <li>
          <SocialIcon url={siteMetadata.social.Email} />
          &nbsp;
          Email
          &nbsp;
          <Link to="mailto:ExultRochester@gmail.com">ExultRochester@gmail.com</Link>
        </li>
        <li>
          Call 585-270-0850
        </li>
        <li>
          Exult Rochester<br />
          P.O. Box 24588<br/>
          Rochester, NY 14624
        </li>
        { SOCIAL.map(([name, url]) => <li key={url}>
          <SocialIcon url={url} />
          &nbsp;
          {name}
        </li>) }
      </ul>

      <h2>TODO: Guidelines about where's best to contact?</h2>
      <p>May God Bless You and your families.</p>
    </div>
    )

export default ContactPage


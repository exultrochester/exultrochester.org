import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/exulttopbar-small.jpg'
import RegisterLink from '../components/RegisterLink'

const link = (
  <RegisterLink
    href="https://rcmc2019.eventbrite.com/"
  />
)

const IndexPage = () => (
  <div>
    <img src={Logo} style={{ float: 'right', }} />
    <h1>Exult Rochester</h1>

    <h2>2019 Registration is now live!</h2>

    <h3>
      Rebuilding the Family <br />
      At Home, Through the Church, and In Sports
    </h3>

    <ul>
      <li>
        <strong>Dr. Ray Guarendi</strong>, "In the home"
      </li>
      <li>
        <strong>Tom Nash</strong>, "Through the Church"
      </li>
      <li>
        <strong>Fr. Joseph Freedy</strong>, "In Sports"
      </li>
    </ul>

    <Link to="/2019/" style={{ fontWeight: 'bold' }}>
      Our 5th annual conference will be on Saturday, 19 October 2019 at 7:30.
    </Link>
    
    <p>
      {link}
    </p>

    <p>
      May Jesus, ever present in the most Holy Eucharist, remain the source and
      summit of our faith and lead us to live out our daily lives as Christian witnesses. 
    </p>

    <p>
      <a
        href="assets/catholic-men-s-conference-2018-invitation.pdf"
      >
        Last year's (2018) Invitation letter from Bishop Matano
      </a>
    </p>

<div style={{
  clear: 'both',
}}></div>
    {
      // TODO: Mailchimp Sign-up
    }
  </div>
)

/*

    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <iframe
        src="https://player.vimeo.com/video/290275876?title=0&byline=0&portrait=0"
        width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen
        allowfullscreen></iframe>
      <p><a href="https://vimeo.com/290275876">Invitation video from Bishop Matano</a></p>
    </div>


*/

export default IndexPage

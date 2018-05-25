import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/exulttopbar-small.jpg'
import RegisterLink from '../components/RegisterLink'

const IndexPage = () => (
  <div>
    <img src={Logo} style={{ float: 'right', }} />
    <h1>Exult Rochester</h1>

    <p>Registration is now open for our 2018 conference!</p>

    <p>
      <Link to="/2018/" style={{ fontWeight: 'bold' }}>
        Our 4th annual conference will be on Saturday, 13 October 2018.
      </Link>
    </p>

    <RegisterLink
      href="https://www.eventbrite.com/e/rochester-catholic-mens-conference-2018-tickets-44714898465"
    />

    <p>
      <a
        href="assets/catholic-men-s-conference-2018-invitation.pdf"
      >
        Invitation from Bishop Matano
      </a>
    </p>

    {
      // TODO: Mailchimp Sign-up
    }
  </div>
)

export default IndexPage

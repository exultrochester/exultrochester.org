import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/exulttopbar-small.jpg'
import RegisterLink from '../components/RegisterLink'

const link = <RegisterLink
      href="https://www.eventbrite.com/e/rochester-catholic-mens-conference-2018-tickets-44714898465"
    />


const IndexPage = () => (
  <div>
    <img src={Logo} style={{ float: 'right', }} />
    <h1>Exult Rochester</h1>

    <p>
    ExultRochester would like to extend a sincere thank you to all the men who attended the 4th annual Catholic Men's Conference on Saturday October 13th.
    </p>
    
    <p>We also would like to thank the many sponsors and supporters of the event, especially Bishop Matano for his prayers, words of encouragement, and continued support. 
    </p>
    <p>
    May Jesus, ever present in the most Holy Eucharist, remain the source and summit of our faith and lead us to live out daily lives as Christian witnesses. 

    </p>

 

    <p>
      <a
        href="assets/catholic-men-s-conference-2018-invitation.pdf"
      >
        Invitation letter from Bishop Matano
      </a>
    </p>

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

<div style={{
  clear: 'both',
}}></div>
    {
      // TODO: Mailchimp Sign-up
    }
  </div>
)

export default IndexPage

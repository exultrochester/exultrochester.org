import React from 'react'
import Link from 'gatsby-link'
import Logo from '../images/exulttopbar-small.jpg'

const IndexPage = () => (
    <div>
      <img src={Logo} style={{ float: 'right', }} />
      <h1>Exult Rochester</h1>
      <h2>THANK YOU</h2>

      <p>
        Exult Rochester would like to thank all the men who attended the 3rd Annual
        Diocese of Rochester Catholic Men’s Conference on Saturday Oct 14th 2017.
        Nearly 500 men gathered and spent a faith filled day together supporting
        our journey to grow in discipleship with Jesus Christ.
      </p>

      <p>
        If you would like to order CD copies of the talks,
        please visit click the following link to place an order.
      </p>
      <p><a href="http://www.carolfisher.com/">Conference Talks CD Order</a></p>

      <p>
        Many thanks to the Most Reverend Bishop Salvatore Matano, who so graciously
        provides support to our men’s conference and for the beautiful mass and
        encouraging homily. A special thank you to our invited speakers who gave
        testimony to the faith through their talks, and to all those who have
        volunteered their time and talents to make this annual conference a
        success. Exult Rochester would also like to thank St. Judes Catholic
        Church for hosting the event.
      </p>

      <p>
        <Link to="/2018/" style={{ fontWeight: 'bold' }}>
          Our 4th annual conference will be on Saturday, 13 October 2018.
        </Link>
      </p>

      <p>
        May we all be encouraged from this event and go forth to ‘strengthen your brothers’.
        May God bless you.
      </p>

      <p>TODO: Mailchimp Sign-up</p>
    </div>
    )

export default IndexPage

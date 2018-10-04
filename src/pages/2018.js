import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'gatsby-link'
import outdent from 'outdent';

import Speakers from '../components/Speakers'
import RegisterLink from '../components/RegisterLink'

const MAP_URL = `https://www.google.com/maps/place/St.+Jude+Church/@43.1663474,-77.7404722,17z/data=!4m8!1m2!3m1!2sSt.+Jude+Church!3m4!1s0x89d6b2873cfafb47:0x8cb7c6cd2e16ecce!8m2!3d43.1663473!4d-77.7382781`

const DATA = {
  theme: 'The Eucharist',
  map_url: MAP_URL,
  register_url: 'https://www.eventbrite.com/e/rochester-catholic-mens-conference-2018-tickets-44714898465',
  agenda_path: '/assets/RCMC Agenda_2018_Final.pdf',
  speakers: [
    {
      name: "Dr. Marcellino D’Ambrosio",
      image: "/assets/dr-marcellino-dambrosio.png",
      descriptionMarkdown: outdent`
        * Founded the [Crossroads Initiative](https://www.crossroadsinitiative.com/), a website for easily understanding the richness of Catholic tradition.
        * Has hosted the _Early Church Fathers_ series for more than 10 years on EWTN.
        * Also known as as "Dr. Italy" on radio and TV, he has appeared on Fox News' _Geraldo Rivera At Large_ and _The O'Reilly Factor_ to discuss the legacy of Pope John Paul II.
        * His book, _The Guide to the Passion_, answering 100 questions about Mel Gibson's film, hit #6 on the New York Times best-seller list, selling over a million copies.
        * Earned his Ph.D. in theology under the guidance the renowned Jesuit theologian, Avery Cardinal Dulles.
        `
    },
    {
      name: "Dr. John Bergsma",
      image: "/assets/dr-john-bergsma.png",
      descriptionMarkdown: outdent`
        * Grew up a Protestant (Dutch Calvinist), and converted to the Catholic Church in 2001 while pursuing a Ph.D. in Theology from the University of Notre Dame.
        * Today a Professor of Theology at Franciscan University in Steubenville, Ohio, where he has been twice voted Faculty of the Year by graduates.
        * Author of seven books, including _Bible Basics for Catholics_ and _New Testament Basics for Catholics_.
        * Specializes in the Old Testament and the Dead Sea Scrolls, and has published more than 25 articles.
        * Has been a guest on EWTN’s _The Journey Home_, _Franciscan University Presents_, and Relevant Radio’s _Drew Mariani Show_.
        `
    },
    {
      name: "Troy L. Guy",
      image: "/assets/troy-l-guy.png",
      descriptionMarkdown: outdent`
        * For 25 years an anti-Catholic Baptist believer who converted to Catholicism in 2017.
        * Author of _Evangelical Catholic_, a book that tells the story of his conversion and presents the Biblical and historical evidence that led him to become a Catholic.
        * Founded and blogs for his one-man website, [DiscoverHisChurch.com](http://discoverhischurch.com/).
        * His book and website are quickly becoming must-read content for both RCIA novices and cradle Catholics.
        * An electrical engineer with degrees in Nuclear Engineering and Physics, he manages an engineering lab for a commercial space systems company, and is an FAA certified commercial pilot and flight instructor.
        `
    },
  ],
}

const registerLink = (
  <RegisterLink href={register_url} />
);

// TODO Redirect From /2018-2/

const ConferencePage = () => (
  <div>
    <h2>
      2018 Rochester Catholic Men's Conference
    </h2>

    <h1>
      The Eucharist
    </h1>

    <blockquote className="blockquote text-right">
      <p className="mb-0">
        “This is my body…”
      </p>
      <footer className="blockquote-footer">
        <cite title="Source Title">
          Matthew 26:26; Mark 14:23; Luke 22:19; 1 Corinthians 11:24
        </cite>
      </footer>
    </blockquote>

    <p className="text-center">
      <strong>
        Saturday October 13, 2018
      </strong>
      <br/>
      8:30 AM - 4 PM
      <br/>
      Doors open at 7:30
      <br/>
      <a href={agenda_path}>
        Full Agenda
      </a>
    </p>
    <p className="text-center">
      St Jude the Apostle Church<br/>
      <a href={MAP_URL}>4100 Lyell Rd</a><br/>
      Rochester, NY 14606
    </p>

    <div className="text-center">
      <div>
        <strong>
          Early Bird Registration $40
        </strong>
      </div>
      <ul>
        <li
          style={{
            display: 'inline-block',
            marginRight: '2em',
          }}>
          $55 after August 31st
        </li>
        <li
          style={{
            display: 'inline-block',
            marginRight: '2em',
          }}>
          $60 at the door
        </li>
        <li
          style={{
            display: 'inline-block',
          }}>
          $15 student-age men
        </li>
      </ul>
      <p>
        (Includes Morning Snack, Lunch, and Afternoon Snack)
      </p>
    </div>

    <p className="text-center">
      Want to register by mail?
      Print, fill out and send us this
      {' '}
      <a 
        href="/assets/2018-RCMC-Registration-Form.pdf"
      >
        Mail-in Registration Form
      </a>
      .
    </p>

    {registerLink}

    <p className="text-center">
      <a
        href="/assets/catholic-men-s-conference-2018-invitation.pdf"
      >
        Invitation from Bishop Matano
      </a>
    </p>

    <Speakers speakers={DATA.speakers} />

    {registerLink}

  </div>
)

export default ConferencePage

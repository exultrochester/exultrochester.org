import React from 'react'
import outdent from 'outdent';

import Speakers from '../components/Speakers'
import RegisterLink from '../components/RegisterLink'

const MAP_URL = `https://www.google.com/maps/place/St.+Jude+Church/@43.1663474,-77.7404722,17z/data=!4m8!1m2!3m1!2sSt.+Jude+Church!3m4!1s0x89d6b2873cfafb47:0x8cb7c6cd2e16ecce!8m2!3d43.1663473!4d-77.7382781`

const DATA = {
  theme: 'Rebuilding the Family',
  tagline: 'At Home, Through the Church, and In Sports',
  map_url: MAP_URL,
  register_url: 'https://rcmc2019.eventbrite.com/',
  agenda_path: undefined,
  speakers: [
    {
      name: "Dr. Ray Guarendi",
      image: "/assets/dr-ray-guarendi.png",
      website: undefined,
      descriptionMarkdown: outdent`
        ### "In the home"

        Dr. Ray Guarendi is a Catholic father of ten adopted children, a clinical
        psychologist, author, professional speaker, and national radio and
        television host.

        His radio show, "The Dr. Is In" can be heard on over 440 stations and
        Sirius XM channel 130. His TV show, "Living Right With Dr. Ray" can be
        seen on EWTN Global Catholic Network and is aired in 140 countries.
        `
    },
    {
      name: "Tom Nash",
      image: "/assets/tom-nash.png",
      website: undefined,
      descriptionMarkdown: outdent`
        ### "Through the Church"

        Tom Nash is a contributing apologist and speaker for Catholic Answers,
        a contributing blogger for the National Catholic Register and a contributor
        for Catholic World Report. He has served the Church professionally for more
        than 25 years, including 8.5 as a theology advisor at EWTN.

        He is the author of _What Did Jesus Do?: The Biblical Roots of the Catholic Church_
        (Incarnate Word Media) and _The Biblical Roots of the Mass_ (Sophia Institute Press).
        He is also a regular member of the Fellowship of Catholic Scholars.
        `
    },
    {
      name: "Fr. Joseph Freedy",
      image: "/assets/fr-joseph-freedy.png",
      website: undefined,
      descriptionMarkdown: outdent`
        ### "In Sports"

        Father Joseph Freedy was born the youngest of five children in Bethel Park,
        Pennsylvania. Earning a football scholarship to the State University of
        New York at Buffalo, Father Joseph was the starting quarterback for three
        years before graduating with a degree in communications.

        After college, he entered Saint Paul Seminary and earned a master's degree
        in philosophy from Duquesne University. He attended the North American
        College in Rome for theological studies. Father Freedy earned a bachelor's
        degree in sacred theology from the Pontifical Gregorian University and a
        licentiate in sacred theology from the John Paul II Institute.

        In 2008, he was ordained a priest. He is the Parochial Vicar for
        Holy Child and St. Barbara Parishes in Bridgeville, Pennsylvania.
        `
    },
  ],
  promos: [
    // { name: '', path: '' },
    // { name: '', path: '' },
    // { name: '', path: '' },
  ]
}

const registerLink = (
  <RegisterLink href={DATA.register_url} />
);

const Promos = ({ items }) => items && (
  <div className="promotional">
    <h2>Promotional Materials</h2>
    <ul>
      { items.map(({ name, path }) => (
        <li key={name}><a href={path}>{name}</a></li>
      ))}
    </ul>
  </div>
)

// TODO Redirect From /2018-2/

const ConferencePage = () => (
  <div>
    <h2>
      2019 Rochester Catholic Men's Conference
    </h2>

    <h1>
      {DATA.theme}
    </h1>

    {DATA.tagline && (
      DATA.tagline_cite ? (
        <blockquote className="blockquote text-right">
          <p className="mb-0">
            {DATA.tagline}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">
              {DATA.tagline_cite}
            </cite>
          </footer>
        </blockquote>
      ) : (
        <p className="mb-0">
          {DATA.tagline}
        </p>
      )
    )}

    <p className="text-center">
      <strong>
      Saturday, October 19, 2019
      </strong>
      <br/>
      7:30 AM - 4 PM
      <br/>
      Doors open at 7:30
      <br/>
      8:30 AM Mass with The Most Reverend Bishop Salvatore Matano
      <br/>
      {DATA.agenda_path && (
        <a href={DATA.agenda_path}>
          Full Agenda
        </a>
      )}
    </p>
    <p className="text-center">
      St Jude the Apostle Church<br/>
      <a href={MAP_URL}>4100 Lyell Rd</a><br/>
      Rochester, NY 14606
    </p>

    <div className="text-center">
      <div>
        <strong>
          Early Bird Registration $45
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
          }}>
          $15 student-age men
        </li>
      </ul>
      <p>
        (Includes Light Breakfast & Lunch)
      </p>
    </div>

    {registerLink}

    <Speakers speakers={DATA.speakers} />

    {registerLink}

    <Promos items={DATA.promos} />
  </div>
)

export default ConferencePage

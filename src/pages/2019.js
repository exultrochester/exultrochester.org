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
        `
    },
    {
      name: "Tom Nash",
      image: "/assets/tom-nash.png",
      website: undefined,
      descriptionMarkdown: outdent`
        ### "Through the Church"
        `
    },
    {
      name: "Fr. Joseph Freedy",
      image: "/assets/fr-joseph-freedy.png",
      website: undefined,
      descriptionMarkdown: outdent`
        ### "In Sports"
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

    <blockquote className="blockquote text-right">
      <p className="mb-0">
        {DATA.tagline}
      </p>

    </blockquote>

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

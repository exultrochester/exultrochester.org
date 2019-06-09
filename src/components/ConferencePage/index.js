import React from 'react'
import outdent from 'outdent';

import Speakers from '../components/Speakers'
import RegisterLink from '../components/RegisterLink'


const ConferencePage = ({
  theme,
  tagline,
  citation,
  date,
  startTime,
  endTime,
  doorsOpenTime,
  agendaPath,
  pricing: {
    earlyBirdRate,
    earlyBirdDeadline,
    otherTiers: [
      { },
      { },
    ]
  },
  mailInFormPath,
  speakers,
  register_url,
}) => (
  <div>
    <h2>
      2019 Rochester Catholic Men's Conference
    </h2>

    <h1>
      {theme}
    </h1>

    <blockquote className="blockquote text-right">
      <p className="mb-0">
        {tagline}
      </p>
      {citation && (
        <footer className="blockquote-footer">
          <cite title="Source Title">
            {citation}
          </cite>
        </footer>
      )}
    </blockquote>

    <p className="text-center">
      <strong>
      {date}
      </strong>
      <br/>
      7:30 AM - 4 PM
      <br/>
      FIXME
      Doors open at 7:30
      <br/>
      {
        agenda_path ? (
          <a href={DATA.agenda_path}>
            Full Agenda
          </a>
        ) : (
          <span>(Full Agenda coming soon!)</span>
        )
      }
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

    {mailInFormPath && (
      <p className="text-center">
        Want to register by mail?
        Print, fill out and send us this
        {' '}
        <a
          href={mailInFormPath}
        >
          Mail-in Registration Form
        </a>
        .
      </p>
    )}

    <RegisterLink href={DATA.register_url} />

    <p className="text-center">
      <a
        href="/assets/catholic-men-s-conference-2018-invitation.pdf"
      >
        Invitation from Bishop Matano
      </a>
    </p>

    <Speakers speakers={speakers} />

    <RegisterLink href={register_url} />

    <div className="promotional">
      <h2>Promotional Materials</h2>
      <ul>
        <li><a href="/assets/2018-rcmc-poster.pdf">Poster (Portrait)</a></li>
        <li><a href="/assets/2018-rcmc-poster-landscape.pdf">Poster (Landscape)</a></li>
        <li><a href="/assets/2018-rcmc-postcard.pdf">Postcard</a></li>
      </ul>
    </div>
  </div>
)

export default ConferencePage;

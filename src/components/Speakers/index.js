import React from 'react'
import ReactMarkdown from 'react-markdown'

const SpeakerRow = ({ image, name, website, descriptionMarkdown }) => (
  [
    <tr>
      <td colspan="2">
        <h3>
          <a href={website}>{name}</a>
        </h3>
      </td>
    </tr>,

    <tr>
      <td style={{
        width: '160px',
      }}>
        <img src={image} />
      </td>
      <td style={{
      }}>
        <ReactMarkdown>{descriptionMarkdown}</ReactMarkdown>
      </td>
    </tr>,
  ]
)

const Speakers = ({ speakers=[] }) => (
  <table>
    <tbody>
      { speakers.map(SpeakerRow) }
    </tbody>
  </table>
)

export default Speakers


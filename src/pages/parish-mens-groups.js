import React from 'react'
import Link from 'gatsby-link'

const ParagraphIf = ({ children, ...args }) => {
  if (children) {
    return <div {...args}>{children}</div>;
  }
  return null;
}

const MensGroupTable = ({ allAirtableMensGroups }) => {
  if (allAirtableMensGroups && allAirtableMensGroups.edges) {
    const rows = allAirtableMensGroups
      .edges
      .map(row => [row.Parish, row])
      .sort()
      .map(x => x[1])
    console.log('Rows:', rows)
    return (
        <table>
          <thead>
            <tr>
              <th>Town</th>
              <th>Parish</th>
              <th>Group</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ node }) => (
            <tr key={node.id}>
              <td>{node.Town}</td>
              <td>{node.Parish}</td>
              <td>
                {
                  node.Website ? (
                    <Link to={node.Website}>{node.Group_Name || 'Website'}</Link>
                  ) : (
                    node.Group_Name
                  )
                }
              </td>
              <td>
                <ParagraphIf>{node.Contact_Name}</ParagraphIf>
                {node.Contact_Email && (
                    <p>
                      <Link
                        to={`mailto:${node.Contact_Email}`}
                      >{node.Contact_Email}</Link>
                    </p>
                  )
                }
                <ParagraphIf>{node.Contact_Phone__Public_}</ParagraphIf>
                <ParagraphIf style={{
                  whiteSpace: 'pre',
                  }}>{node.Address}</ParagraphIf>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        )
  }
  return null
}

const ParishMensGroups = ({
    data,
    }) => {
  console.log(data);

  return (
      <div>
        <h1>Parish Men's Groups</h1>
        <p>
          Looking to join a men's group? Interested in starting one at your parish?
          Check the list below to see if your parish already has an established Men's Group.
        </p>
        <p>
          The mission of the Exult Rochester Catholic Men's Conference is
          to encourage the formation of parish based groups.
        </p>
        <p>
          If you don't see one and would like to inquire about how to start one
          in your parish, please contact Dan Hilsdorf at:
          {' '}
          <a
            href="mailto:fishers-of-men@saintpiustenth.org"
          >fishers-of-men@saintpiustenth.org</a>
        </p>
        <p>
          Is your parish men's group not listed here?
          {' '}
          <Link to="/list-my-parish-mens-group">Click here to add it!</Link>
        </p>
        <MensGroupTable {...data}/>
      </div>
      );
}

export default ParishMensGroups

export const pageQuery = graphql`
  query MensGroups {
    allAirtableMensGroups {
      edges {
        node {
          Group_Name
          Contact_Name
          # Contact_Phone__Public_
          Contact_Email
          Parish
          Town
          Website
          Address
        }
      }
    }
  }
`;


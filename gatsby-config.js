module.exports = {
  siteMetadata: {
    title: 'Exult Rochester',
    nav: [
      { to: '/2018/', text: '2018' },
      { to: '/past-conferences/', text: 'Past Conferences', disabled: true },
      { to: '/parish-mens-groups/', text: 'Parish Men\'s Groups' },
      { to: '/registration', text: 'Registration', disabled: true },
      { to: '/get-involved/', text: 'Get Involved' },
      { to: '/about/', text: 'About' },
      { to: '/resources/', text: 'Resources' },
      { to: '/contact/', text: 'Contact' },
    ],
    social: [
      'https://www.facebook.com/exultrochester/',
      'https://www.linkedin.com/in/exultrochester/',
      'https://twitter.com/exultrochester/',
      'exultrochester@gmail.com',
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path:  `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        baseId: process.env.AIRTABLE_BASE_ID_GROUPS,
        tableName: `groups`,
        tableView: `verified`,
        queryName: 'MensGroups'
      }
    },
  ],
};

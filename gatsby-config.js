module.exports = {
  siteMetadata: {
    title: 'Exult Rochester',
    nav: [
      { to: '/2019/', text: '2019' },
      { to: '/past-conferences/', text: 'Past Conferences', disabled: true },
      { to: '/parish-mens-groups/', text: 'Parish Men\'s Groups' },
      { to: '/registration', text: 'Registration', disabled: true },
      { to: '/get-involved/', text: 'Get Involved' },
      { to: '/about/', text: 'About' },
      { to: '/resources/', text: 'Resources' },
      { to: '/contact/', text: 'Contact' },
    ],
    social: {
      Facebook: 'https://www.facebook.com/exultrochester/',
      LinkedIn: 'https://www.linkedin.com/in/exultrochester/',
      Twitter: 'https://twitter.com/exultrochester/',
      Email: 'mailto:exultrochester@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
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
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/exult-banner-1500x.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
  ],
};

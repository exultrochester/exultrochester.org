module.exports = {
  siteMetadata: {
    title: 'Exult Rochester',
    nav: [
      { to: '/2018/', text: '2018' },
      { to: '/past-conferences/', text: 'Past Conferences' },
      { to: '/parish-mens-groups/', text: 'Parish Men\'s Groups' },
      { to: '/registration', text: 'TODO', disabled: true },
      { to: '/get-involved/', text: 'Get Involved' },
      { to: '/about/', text: 'About' },
      { to: '/resources/', text: 'Resources' },
      { to: '/contact/', text: 'Contact' },
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
  ],
};

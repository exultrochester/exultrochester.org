/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.modifyWebpackConfig = ({ config, stage }) => {
  console.log("MODIFY WEBPACK CONFIG");
  console.log(stage);
  console.log(config);
  config.merge({
    resolve: {
      extensions: ['.json'],
    }
  });
  return config;
}

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const markdownPageTemplate = path.resolve(`src/templates/markdownPageTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        # sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              redirect_from
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: markdownPageTemplate,
        context: {
          redirect_from: node.frontmatter.redirect_from,
        }, // additional data can be passed via context
      });
    });
  });
};


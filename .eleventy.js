module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('favicons');

  eleventyConfig.setTemplateFormats([
    'html',
    'liquid',
    'ejs',
    'md',
    'hbs',
    'mustache',
    'haml',
    'pug',
    'njk',
    'css',
  ]);

  const markdownIt = require('markdown-it');
  const markdownItAnchor = require('markdown-it-anchor');
  eleventyConfig.setLibrary("md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    }).use(markdownItAnchor, {})
  );


  eleventyConfig.addShortcode("navLink", function({ to, text, disabled, cssClass }, page) {
    if (disabled) {
      return '';
    }
    return `<a href="${to}" class="nav-item nav-link ${cssClass} ${page.url == to ? 'active' : ''}">${text}</a>`;
  });

  eleventyConfig.addShortcode("ExternalLink", function(href, text) {
    if (!href && !text) {
      return '';
    }
    if (!href) {
      return `<span>${text}</span>`;
    }
    const fixedHref = href.includes('://') ? href : `http://${href}`;
    return (
      `<a href="${fixedHref}">${text || 'Website'}</a>`
    );
  });

  eleventyConfig.addFilter("debug", function(value) {
    return `<pre>${JSON.stringify(value, null, 2)}</pre>`;
  });

};

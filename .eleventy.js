module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('images');

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

  eleventyConfig.addShortcode("navLink", function({ to, text, disabled, cssClass }, page) {
    if (disabled) {
      return '';
    }
    return `<a href="${to}" class="nav-item nav-link ${cssClass} ${page.url == to ? 'active' : ''}">${text}</a>`;
  });
};

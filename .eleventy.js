const yaml = require("js-yaml");
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(UpgradeHelper);
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.setLiquidOptions({ strictFilters: true });

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

  const exultRochesterBranding = () => `<span class="exult">Exult</span><span class="rochester">Rochester</span>`;
  eleventyConfig.addShortcode('exultrochester', exultRochesterBranding);

  eleventyConfig.addShortcode("metaProperty", function (name, ...values) {
    const { page } = this;
    // console.log(`in metaProperty('${name}', ${JSON.stringify(values, null, 2)}) at ${page.url}`);
    const result = (v) =>  `<meta property="${name}" content="${v}" />`;
    for (let i = 0; i < values.length; i += 1) {
      const value = values[i];
      // console.log(`Checking value: ${value}`)
      if (value) {
        const answer = result(value);
        // console.log(`Returning: ${answer}`)
        return answer;
      }
    }
  });

  eleventyConfig.addShortcode("navLink", function({ to, text, disabled, cssClass }, page) {
    if (disabled) {
      return '';
    }
    let linkText = text;
    if (text.toLowerCase() === 'exultrochester') {
      linkText = exultRochesterBranding();
    }
    return `<a href="${to}" class="nav-item nav-link ${cssClass} ${page.url == to ? 'active' : ''}">${linkText}</a>`;
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

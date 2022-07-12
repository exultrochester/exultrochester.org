const getConferenceValue = (name) => (data) => {
  // console.log('Computing:', { name, data });
  if (data[name]) {
    return data[name];
  }
  if (data.year) {
    return (data.conference[data.year] || {})[name]
  }
  return undefined;
};

const getShareImage = () => (data) => {
  const { page, site } = data;
  const { siteUrl } = site;
  // console.log(`getShareImage(${JSON.stringify({ page, site }, null, 2)})`);

  const shareImagePath = page.shareImagePath || site.shareImagePath;
  if (!shareImagePath) {
    console.warn(`shareImagePath is not set on ${page.url}`)
    return '';
  }

  if (!siteUrl) {
    console.error(`site.siteUrl is not set!`)
    console.debug(`data is: ${JSON.stringify(data, null, 2)}`);
    throw new Error('site.siteUrl is not set!');
  }

  return `${siteUrl}/${shareImagePath}`;
}

console.log('Loaded eleventyComputed.js!');

module.exports = {
  parent: data => data.parent,
  type: getConferenceValue('type'),
  theme: getConferenceValue('theme'),
  tagline: getConferenceValue('tagline'),
  map_url: getConferenceValue('map_url'),
  register_url: getConferenceValue('register_url'),
  register_by_mail_path: getConferenceValue('register_by_mail_path'),
  speakers: getConferenceValue('speakers'),
  promos: getConferenceValue('promos'),
  agenda: getConferenceValue('agenda'),
  shareImageUrl: getShareImage(),
};

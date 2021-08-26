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

console.log('computed!');

module.exports = {
  parent: data => data.parent,
  type: getConferenceValue('type'),
  theme: getConferenceValue('theme'),
  tagline: getConferenceValue('tagline'),
  map_url: getConferenceValue('map_url'),
  register_url: getConferenceValue('register_url'),
  speakers: getConferenceValue('speakers'),
  promos: getConferenceValue('promos'),
  agenda: getConferenceValue('agenda'),
};

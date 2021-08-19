const Airtable = require('airtable');

module.exports = async () => {
  const answer = [];

  const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID_GROUPS } = process.env;

  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID_GROUPS) {
    console.warn(`AIRTABLE_API_KEY and AIRTABLE_BASE_ID_GROUPS are not set: unable to load Parish Men's Groups!`);
    return [];
  }

  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID_GROUPS);

  return new Promise((resolve, reject) => {
    base('groups').select({
      view: "verified",
      sort: [
        {field: "Town", direction: "asc"},
        {field: "Parish", direction: "asc"},
      ],
    }).eachPage(function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (record) {
        answer.push(record.fields)
      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();

    }, function done(err) {
      if (err) {
        console.error("Error getting Men's groups", err);
        reject(err);
      } else {
        resolve(answer);
      }
    })
  });
};

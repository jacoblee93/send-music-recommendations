const lib = require('lib');

/**
* A simple "hello world" function
*/
module.exports = async (artistName = 'Beyonce', number) => {
  let musicResults = await lib.jacoblee.recommendMusic({
    artist: artistName // (required)
  });
  let smsResult = await lib.utils.sms({
    to: number,
    body: JSON.stringify(musicResults)
  });
  return smsResult;
};
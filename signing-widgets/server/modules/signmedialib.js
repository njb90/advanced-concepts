const crypto = require('crypto');

exports.signmedialib = function () {
  let timestamp = (new Date).getTime();
  let str_to_sign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USERNAME}${process.env.API_SECRET}`
  let signature = crypto.createHash('sha256').update(str_to_sign).digest('hex');
  return ({signature:signature, timestamp:timestamp});
};
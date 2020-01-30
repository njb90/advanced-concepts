const crypto = require('crypto');
const utf8 = require('utf8');

exports.signupload = function () {
  let timestamp = (new Date).getTime();
  let str_to_sign = `source=uw&timestamp=${timestamp}${process.env.API_SECRET}`
  let signature = utf8.encode(crypto.createHash('sha1').update(str_to_sign).digest('hex'));
  return {signature:signature, timestamp: timestamp}
};
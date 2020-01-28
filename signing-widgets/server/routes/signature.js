var crypto = require('crypto')
var express = require('express');
var router = express.Router();

function getSignature() {
  const timestamp = (new Date).getTime();
  const str_to_sign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USERNAME}${process.env.API_SECRET}`
  console.log
  var shasum = crypto.createHash('sha256');
  shasum.update(str_to_sign);
  const signature = shasum.digest('hex');
  return {
    signature: signature,
    timestamp: timestamp
  }
}



/* GET signature . */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(getSignature())); //return authInfo object signature/timestamp
});

module.exports = router;


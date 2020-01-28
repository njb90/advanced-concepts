const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const utf8 = require('utf8');



router.get('/', function (req, res, next) {
  var timestamp = (new Date).getTime();
  var str_to_sign = `source=uw&timestamp=${timestamp}${process.env.API_SECRET}`
  shasum = crypto.createHash('sha1');
  shasum.update(str_to_sign, 'binary');
  var signature =  utf8.encode(shasum.digest('hex'));
  res.render('upload', { 
    title: 'Upload Signed', 
    timestamp: timestamp, 
    signature: signature,
    apikey: process.env.API_KEY,
    cloudname: process.env.CLOUD_NAME });
});

module.exports = router;



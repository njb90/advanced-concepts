const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const utf8 = require('utf8');



router.get('/', function (req, res, next) {
  //generate signature for Upload Widget
  let timestamp = (new Date).getTime();
  let str_to_sign = `source=uw&timestamp=${timestamp}${process.env.API_SECRET}`
  let signature = utf8.encode(crypto.createHash('sha1').update(str_to_sign).digest('hex'));
  res.render('upload', {
    title: 'Signed Upload',
    timestamp: timestamp,
    signature: signature,
    apikey: process.env.API_KEY,
    cloudname: process.env.CLOUD_NAME
  });
});

module.exports = router;



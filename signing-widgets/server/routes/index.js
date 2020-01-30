const express = require('express');
const router = express.Router();
const crypto = require('crypto')

router.get('/', function (req, res, next) {
  // generate signature for Media Library Widget
  let timestamp = (new Date).getTime();
  let str_to_sign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USERNAME}${process.env.API_SECRET}`
  let signature = crypto.createHash('sha256').update(str_to_sign).digest('hex');
  res.render('index', { 
    title: 'Media Library Signed', 
    timestamp: timestamp, 
    signature: signature,
    username: process.env.USERNAME,
    apikey: process.env.API_KEY,
    cloudname: process.env.CLOUD_NAME
  });

  // res.render('index', { title: 'ML Signed'});

});

module.exports = router;



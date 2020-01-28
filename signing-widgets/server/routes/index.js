var express = require('express');
var router = express.Router();
var crypto = require('crypto')

router.get('/', function (req, res, next) {
  var timestamp = (new Date).getTime();
  var str_to_sign = `cloud_name=${process.env.CLOUD_NAME}&timestamp=${timestamp}&username=${process.env.USERNAME}${process.env.API_SECRET}`
  console.log(str_to_sign)
  var shasum = crypto.createHash('sha256');
  shasum.update(str_to_sign);
  var signature = shasum.digest('hex');
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



const express = require('express');
const router = express.Router();
const signature = require('../modules/signupload');
router.get('/', function (req, res, next) {
  let sig = signature.signupload()
  res.render('upload', {
    title: 'Signed Upload',
    timestamp: sig.timestamp,
    signature: sig.signature,
    apikey: process.env.API_KEY,
    cloudname: process.env.CLOUD_NAME
  });
});
module.exports = router;



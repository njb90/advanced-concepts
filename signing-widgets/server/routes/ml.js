const express = require('express');
const router = express.Router();
const signature = require('../modules/signml');
router.get('/', function (req, res, next) {
  let sig = signature.signmedialib()
  res.render('ml', {
    title: 'Media Library Signed',
    timestamp: sig.timestamp,
    signature: sig.signature,
    username: process.env.USERNAME,
    apikey: process.env.API_KEY,
    cloudname: process.env.CLOUD_NAME
  });
});
module.exports = router;



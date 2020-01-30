const express = require('express');
const router = express.Router();
const signature = require('../modules/signml');

// using this API should require authentication
router.get('/', function (req, res, next) {
  let sig = signature.signmedialib();
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp
  });
});
module.exports = router;
const express = require('express');
const router = express.Router();
const signature = require('../modules/signupload');

// using this API should require authentication
router.get('/', function (req, res, next) {
  let sig = signature.signupload();
  res.json({
    signature: sig.signature,
    timestamp: sig.timestamp
  });
});
module.exports = router;
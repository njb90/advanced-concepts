
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const open = require('open');

// goldfish is private and  transformations are allowed unless Strict transformations is on
console.log("cloudinary:", cloudinary.url("goldfish", {
  type: "private",
  secure: true,
  width: 400,
  height: 400,
  quality: "auto",
  fetch_format: "auto",
  crop: "mfit"
}))

// signed: https://res.cloudinary.com/picturecloud7/image/private/s--5dT-_v9m--/c_mfit,f_auto,h_400,q_auto,w_400/goldfish
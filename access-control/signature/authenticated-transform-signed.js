
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const open = require('open');

// dolphin is authenticated and both orignal and transformations are not allowed but signing allows it

console.log("cloudinary:", cloudinary.url("dolphin", {
  type: "authenticated",
  secure: true,
  sign_url: true
}))

console.log("cloudinary:", cloudinary.url("dolphin", {
  type: "authenticated",
  secure: true,
  width: 500,
  height: 500,
  quality: "auto",
  fetch_format: "auto",
  crop: "mfit",
  sign_url: true
}))

// https://res.cloudinary.com/picturecloud7/image/authenticated/s--eK4_eXLe--/c_mfit,f_auto,h_400,q_auto,w_400/dolphin
// https://res.cloudinary.com/picturecloud7/image/authenticated/s--SA8yfTnk--/c_mfit,f_auto,h_500,q_auto,w_500/dolphin
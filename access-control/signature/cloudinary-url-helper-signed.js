// docs: https://cloudinary.com/documentation/upload_images#update_already_uploaded_images
//test public_id is dolphin which is authenticated 
const cloudinary = require('cloudinary').v2;
const open = require('open');
require('dotenv').config();



// dolphin requires signing 
// helper signature
let url = cloudinary.url("dolphin", {
  type: "authenticated",
  secure: true,
  width: 400,
  height: 400,
  fetch_format: "auto",
  quality: "auto",
  crop: "mfit",
  sign_url: true
});
console.log("cloudinary helper:",url )
open(url)

// https://res.cloudinary.com/picturecloud7/image/authenticated/s--eK4_eXLe--/c_mfit,f_auto,h_400,q_auto,w_400/dolphin
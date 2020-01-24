//test public_id is dolphin which is authentications - so transformations are allowed
// docs: https://cloudinary.com/documentation/upload_images#update_already_uploaded_images
const crypto = require('crypto');
const utf8 = require('utf8');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const open = require('open');

//dolphin is authenticated 
//must choose a transformation that already exists 
transformation = "c_mfit,h_400,q_auto,w_400";
public_id = "dolphin";
secret = process.env.API_SECRET;
to_sign = [transformation, public_id].join("/") + secret;
let sha1 = crypto.createHash('sha1').update(to_sign,"binary").digest('hex');
let s = Buffer.from(sha1).toString('base64').slice(0, 8)
let signature = 's--' + s + '--'
url = ['https://res.cloudinary.com/picturecloud7/image/authenticated/',signature,transformation, public_id].join("/")
console.log("hand code:",url)
// open(url)

// dolphin requires signing 
console.log("cloudinary:", cloudinary.url("dolphin", {
  type: "authenticated",
  secure: true,
  width: 400,
  height: 400,
  quality: "auto",
  crop: "mfit",
  sign_url: true
}))

// hand code: https://res.cloudinary.com/picturecloud7/image/authenticated//s--NmNhMWQy--/c_mfit,h_400,q_auto,w_400/dolphin
// cloudinary: https://res.cloudinary.com/picturecloud7/image/authenticated/s--bKHSpZj4--/c_mfit,h_400,q_auto,w_400/dolphin
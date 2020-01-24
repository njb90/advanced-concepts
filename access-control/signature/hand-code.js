//test public_id is dolphin which is authenticated - so transformations are NOT allowed
//transformation is picked up from already dervice transformation
const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

//dolphin is authenticated 
//must choose a transformation that already exists 
//hand coded signature
transformation = "c_mfit,h_400,q_auto,w_400";
public_id = "dolphin";
secret = process.env.API_SECRET;
to_sign = [transformation, public_id].join("/") + secret;
console.log("to_sign",to_sign)
let sha1 = crypto.createHash('sha1').update(to_sign,"binary").digest('hex');
let s = Buffer.from(sha1).toString('base64').slice(0, 8)
let signature = 's--' + s + '--'
url = ['https://res.cloudinary.com/picturecloud7/image/authenticated',signature,transformation, public_id].join("/")
console.log("hand  code:",url)

// dolphin requires signing 
// helper signature
console.log("cloudinary:", cloudinary.url("dolphin", {
  type: "authenticated",
  secure: true,
  width: 400,
  height: 400,
  quality: "auto",
  crop: "mfit",
  sign_url: true
}))

// https://res.cloudinary.com/picturecloud7/image/authenticated/s--eK4_eXLe--/c_mfit,f_auto,h_400,q_auto,w_400/dolphin
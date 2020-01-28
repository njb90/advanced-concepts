// docs: https://cloudinary.com/documentation/upload_images#update_already_uploaded_images
//test public_id is dolphin which is authenticated 

const crypto = require('crypto');
const URLSafeBase64 = require('urlsafe-base64');
const open = require('open')
require('dotenv').config();

//dolphin is authenticated 
//hand coded signature
let transformation = "c_mfit,f_auto,h_300,q_auto,w_300";
let public_id = "dolphin";
let secret = process.env.API_SECRET;
let to_sign = [transformation, public_id].join("/") + secret;
// console.log("to_sign",to_sign)

let s = URLSafeBase64.encode(crypto.createHash('sha1').update(to_sign).digest()).slice(0,8);

let signature = 's--' + s + '--'
url = ['https://res.cloudinary.com/picturecloud7/image/authenticated',signature,transformation, public_id].join("/")
console.log("hand  code:",url)
open(url)


// https://res.cloudinary.com/picturecloud7/image/authenticated/s--Oe58XLUa--/c_mfit,f_auto,h_300,q_auto,w_300/dolphin
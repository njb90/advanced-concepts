let crypto = require('crypto');
let cloudinary = require('cloudinary').v2;
let URLSafeBase64 = require('urlsafe-base64');
transformation = "c_mfit,h_400,q_auto,w_400";
public_id = "dolphin";
secret = "";
to_sign = [transformation, public_id].join("/") + secret;
console.log("to_sign",to_sign)
let s = URLSafeBase64.encode(crypto.createHash('sha1').update(to_sign).digest());
let signature = 's--' + s.slice(0,8) + '--'
url = ['https://res.cloudinary.com/picturecloud7/image/authenticated',signature,transformation, public_id].join("/")
console.log("hand  code:",url)
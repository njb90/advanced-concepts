// 1st arg is an auto uploaded public id
// for example if you're mapped folder is "remote-media"  and auto upload URL is 
// https://res.cloudinary.com/picturecloud7/image/upload/remote-media/934066/pexels-photo-934066.jpeg
// then the arg will be  "remote-media/934066/pexels-photo-934066"
// usage: node url-helper-auto-everything-300-thumb.js remote-media/934066/pexels-photo-934066
require('dotenv').config();
const open = require('open')
const cloudinary = require('cloudinary').v2;
var myArgs = process.argv.slice(2);
if (myArgs.length > 0) {
    let publicId = myArgs[0]
    let url = cloudinary.url(publicId,
        {
            width: 300,
            crop: "thumb",
            fetch_format: "auto",
            gravity: "auto",
            height: 300,
            quality: "auto",

        });
    console.log(url)
    open(url)
}
else console.log("usage: node url-maker-auto-everything-300-thumb <public id>")


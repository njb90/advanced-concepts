require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')


// create url

// signing works but do you have to sign?
// let url = cloudinary.url("killer-whale", {
//   width: 400,
//   height: 400,
//   quality: "auto",
//   fetch_format: "auto",
//   crop: "mfit",
//   sign_url: true
// })

    let url = cloudinary.url("killer-whale", {
      width: 300,
      height: 300,
      quality: "auto",
      fetch_format: "auto",
      crop: "mfit"
    })
    console.log(url)
    open(url)

  
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

//use upload API to upload a private asset


let url =cloudinary.url('goldfish', {
  type: 'private',
  secure: true, 
  width: 300,
  height: 300,
  quality: "auto",
  fetch_format: "auto",
  crop: "mfit"
})
console.log(url)
open(url)

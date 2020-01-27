require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

let url =cloudinary.url('dolphin', {
  type: 'authenticated',
  secure: true, 
  width: 300,
  height: 300,
  quality: "auto",
  fetch_format: "auto",
  crop: "mfit"
})
console.log(url)
open(url)

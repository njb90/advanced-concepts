require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open');

const today = new Date().toISOString();
const oneyearfromtoday = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();



cloudinary.uploader.upload('http://images.pexels.com/photos/3068179/pexels-photo-3068179.jpeg', {
  public_id: "koi",
  type: "upload",
  overwrite: true,
  "access_control": [
    { access_type: "anonymous", start: today, end: oneyearfromtoday }],
})
  .then(uploadResult => {
    console.log(uploadResult)
    let url = uploadResult.secure_url;
    open(url)
  })
  .catch(error => console.error(error));
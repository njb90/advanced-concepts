// upload a file after enabling Strict Transformations
// access via secure_url and cloudinary.url - no signing
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open');

//use upload API to upload a public asset

cloudinary.uploader.upload('https://images.pexels.com/photos/712367/pexels-photo-712367.jpeg', {
  public_id: 'jellyfish',
  type: 'upload',
  overwrite: true
})
  .then(uploadResult => {
    console.log(uploadResult);
    console.log(uploadResult.secure_url);
    // no auth error
    open(uploadResult.secure_url);
    // expect a 401/404 because the strict transform is enabled
    let url = cloudinary.url(`${uploadResult.public_id}`, {})
    console.log("cloudinary url:",url)
    // auth error
    open(url)
  })
  .catch(error => console.error(error));


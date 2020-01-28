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
    // Consider 3 cases: 
    // 1. no transformation and no auth error
    open(uploadResult.secure_url);

    // as long as format is included in URL this is not a transformation
    let url = cloudinary.url(`${uploadResult.public_id}`, {
      format: `${uploadResult.format}`
    })
    console.log("cloudinary url:",url)
    // 2. original format included in Cloudinary URL config - no transformation
    // no auth error
    open(url)

    // expect a 401/404 because the strict transform is enabled
    // this will be considered a transformation
    url = cloudinary.url(`${uploadResult.public_id}`, {})
    console.log("cloudinary url:",url)
    // 3. auth error due to transformation of leaving out format
    open(url)
  })
  .catch(error => console.error(error));


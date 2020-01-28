require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

cloudinary.uploader.upload('https://images.pexels.com/photos/2747248/pexels-photo-2747248.jpeg', {
  public_id: "shark",
  type: "upload",
  overwrite: true
})
  .then(uploadResult => {
    console.log(uploadResult)
    let url = uploadResult.secure_url;
    open(url)
  })
  .catch(error => console.error(error));
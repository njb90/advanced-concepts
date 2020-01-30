require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

cloudinary.uploader.upload('https://images.pexels.com/photos/3309865/pexels-photo-3309865.jpeg', {
  public_id: "killer-whale",
  type: "upload",
  overwrite: true
})
  .then(uploadResult => {
    console.log(uploadResult)
    let url = uploadResult.secure_url;
    open(url)
  })
  .catch(error => console.error(error));
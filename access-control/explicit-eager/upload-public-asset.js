require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

cloudinary.uploader.upload('https://images.pexels.com/photos/34809/loro-park-orca-fish.jpg', {
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
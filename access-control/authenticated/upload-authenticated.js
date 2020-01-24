require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//use upload API to upload a private asset

cloudinary.uploader.upload('https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg', {
  public_id: 'dolphin',
  type: 'authenticated'
})
  .then(uploadResult => { 
    console.log(uploadResult);
    console.log(cloudinary.url(`${uploadResult.public_id}`,{secure:true}))
  })
  .catch (error => console.error(error));
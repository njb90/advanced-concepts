require('dotenv').config();
const cloudinary = require('cloudinary').v2;

//use upload API to upload a private asset

cloudinary.uploader.upload('https://images.pexels.com/photos/45910/goldfish-carassius-fish-golden-45910.jpeg', {
  public_id: 'goldfish',
  type: 'private'
})
  .then(uploadResult => { 
    console.log(uploadResult);
    console.log(cloudinary.url(`${uploadResult.public_id}`,{secure:true}))
  })
  .catch (error => console.error(error));
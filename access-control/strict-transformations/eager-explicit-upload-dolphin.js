require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

// explicit method using eager parameter to create a transformation
// on authenticated image

// run the explicit eager transform creation
cloudinary.uploader.explicit("dolphin",
  {
    type: "authenticated",
    eager: [{
      width: 400,
      height: 400,
      quality: "auto",
      crop: "mfit"
    }]
  },
  function (error, result) { 
    //create a url with the eagerly created transformation
    //from above
    //expect that this will return the transform 200 
    //need to sign the url whether type above is "upload" or "private"

    let url = cloudinary.url("dolphin",{
      type: 'authenticated',
      width: 400,
      height: 400,
      quality: "auto",
      crop: "mfit",
      sign_url: true
    })
    console.log(result, error); 
    console.log(url)
    open(url)
  
  });
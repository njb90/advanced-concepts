require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

// explicit method using eager parameter to create a transformation

// run the explicit eager transform creation
cloudinary.uploader.explicit("killer-whale",
  {
    type: "upload",
    eager: [{
      width: 400,
      height: 400,
      quality: "auto",
      fetch_format: "auto",
      crop: "mfit"
    }]
  },
  function (error, result) { 
    //create a url with the eagerly created transformation
    //from above
    //expect that this will return the transform 200 
    //need to sign the url whether type above is "upload" or "private"

    let url = cloudinary.url("killer-whale",{
      width: 400,
      height: 400,
      quality: "auto",
      fetch_format: "auto",
      crop: "mfit",
      sign_url: true
    })
    console.log(result, error); 
    console.log(url)
    open(url)
  
  });
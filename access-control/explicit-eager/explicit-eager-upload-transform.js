require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// Strict transformations enabled
// explicit method using eager parameter to create a transformation
// creates a disabled "Disallowed" transform
// aleady uploaded assets require that public id and type be provided
cloudinary.uploader.explicit("killer-whale",
  {
    type: "upload",  
    eager: [{
      width: 400,
      height: 400,
      quality: "auto",
      fetch_format: "auto",
      crop: "mfit",
      invalidate: true
    }]
  },
  function (error, result) {
    console.log("error", error)
    console.log("result", result)

  });
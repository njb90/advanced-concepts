require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.uploader.destroy("killer-whale", { invalidate: true },
  function (error, result) {
    console.log("error", error)
    console.log("result", result)

  });

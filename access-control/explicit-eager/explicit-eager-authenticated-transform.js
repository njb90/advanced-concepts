require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')

// create url

    let url = cloudinary.url("killer-whale", {
      width: 400,
      height: 400,
      quality: "auto",
      format: `${result.format}`,
      crop: "mfit"
    })
    console.log(result, error);
    console.log(url)
    open(url)

  
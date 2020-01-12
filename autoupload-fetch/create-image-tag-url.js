require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// create an auto-upload image tag with url with transformations
// add the tag created here to the index.html
console.log(cloudinary.image("/autoupload-test/images/pic", {
    width: 300,
    height: 300,
    quality: "auto",
    fetch_format: "auto",
    crop: "fill"
}))

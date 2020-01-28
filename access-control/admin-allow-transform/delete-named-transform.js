require('dotenv').config();
const cloudinary = require('cloudinary').v2;

const deleteNamedTransformation = (name, options) => {
  return new Promise((resolve, reject) => {
    cloudinary.api.delete_transformation(name,
      options, function (error, result) {
        if (error) throw reject(error);
        else resolve(result);
      })
  })
}

const name = "auto-400-xform";
deleteNamedTransformation(`${name}`)
  .then(result => {
    console.log(result);
  })
  .catch(error =>{
    console.log(error);
  })
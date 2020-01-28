require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')
// Strict transformations enabled
// create/update named transformation and "allow-for-strict"


// promise to get an named transformation that includes a name param
const getNamedTransformation = (name) => {
  return new Promise((resolve, reject) => {
    cloudinary.api.transformations({ named: true }, function (error, result) {
      if (error) return reject(error);
      else {
        console.log("all named transformation:", result.transformations)
        for (let transform of result.transformations) {
          // named transformation are saved as "t_<name of transformation>"
          if (transform.name.includes(name)) {
            console.log("found name ", name)
            return resolve(transform);
          }
        }
        reject(new Error("Transformation not found"))
      }
    })
  })
}

// promise to create a new named transfrom base on a name and options
// options should include "allowed for strict: true"
const createNamedTransform = (name, options) => {
  return new Promise((resolve, reject) => {
    cloudinary.api.create_transformation(name,
      options, function (error, result) {
        if (error) throw reject(error);
        else return resolve(result);
      })
  })
}

// promise to update a named transformation to allowed for strict
// if the transform exists but doesn't have this name
const updateTransformationAllowed = (name) => {
  return new Promise((resolve, reject) => {

    cloudinary.api.update_transformation(name,
      { allowed_for_strict: true }, function (error, result) {
        if (error) return reject(error);
        else return resolve(result)

      })
  })
}
// main logic
//get the transformation if it exists
const name = "auto-400-xform"
console.log("name", name);

// get transform if it includes name
// named transforms have the format t_<name>
getNamedTransformation(`${name}`)
  .then(result => {
    console.log("success getting tranformation", result)
    // do nothing if it already allows for transformation
    // otherwise update to allow for transformation
    if (result.allowed_for_strict !== true) {
      updateTransformationAllowed(`${name}`)
        .then(result => [
          console.log("success updating allow Transformation", result)
        ])
        .catch(error => {
          console.log("fail", error)
        })
    }
  })
  .catch(error => {
    console.log("named transform doesn't exist", error);
    // if it doesn't exist, create it and allow for transformation
    createNamedTransform(name, {
      width: 400,
      height: 400,
      quality: "auto",
      fetch_format: "auto",
      allowed_for_strict: true
    })
      .then(result => [
        console.log("success creating new named transforma", result)
      ])
      .catch(error => {
        console.log("failed to create new named transform", error);
      })
  })




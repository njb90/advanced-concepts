require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open')
// Strict transformations enabled
// create/update named transformation and "allow-for-strict"

// return a transformation if it exists
async function getNamedTransformation(name) {
  let result = null;
  try {
    let response = await cloudinary.api.transformations({ named: true });
    if (response.transformations) {
      for (let transform of response.transformations) {
        // named transformation are saved as "t_<name of transformation>"
        if (transform.name === `t_${name}`) {
          result = transform;
          break;
        }
      }
    }
    return result;
  }
  catch (error) {
    console.log(error)
  }
}

// create a named transformation
async function createNamedTransform(name, options) {
  try {
    let response = await cloudinary.api.create_transformation(name, options);
    return response;
  } catch (error) {
    throw error;
  }
}

// update a transformation
async function updateTransformationAllowed(name) {
  try {
    let response = await cloudinary.api.update_transformation(name, { allowed_for_strict: true });
    return response;
  } catch (error) {
    throw error;
  }
}


// logice - see if transform already exists
//  if it existes check that its allowed for strict
//     if not allowed for strict update it to allow for strict
//  if it doesn't exist create it
// get transform if it includes name
// named transforms have the format t_<name>

async function main(name) {
  try {
    let result = await getNamedTransformation(name);
    if (result) {
      console.log("transformation exists");
      if (!result.allowed_for_strict) {
        console.log("updating transformation");
        await updateTransformationAllowed(name);
      }
    } else {
      console.log("creating tranformation");
      await createNamedTransform(name, {
        width: 400,
        height: 400,
        quality: "auto",
        fetch_format: "auto",
        allowed_for_strict: true
      });
    }
  } catch (error) {
    console.log(error);
  }
}

// run the logic
const name = "auto-400-xform"
main(name)



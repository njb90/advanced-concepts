require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// create an auto-upload image tag with url with transformations
// add the tag created here to the index.html
// console.log(cloudinary.image("/autoupload-test/images/pic", {
//     width: 300,
//     height: 300,
//     quality: "auto",
//     fetch_format: "auto",
//     crop: "fill"
// }))
// https://support.cloudinary.com/hc/en-us/articles/115002589251-How-to-add-upload-options-when-using-Auto-Upload-mappings-
// Using a preset with the same name
// https://cloudinary.com/documentation/fetch_remote_images?query=auto-upload&c_query=Auto-upload%20remote%20resources#auto_uploading_with_upload_presets
// use your file name from the url you mapped to
// e.g. mapped to https://www.pexels.com/photo mapped to remote-media
// /macro-photography-of-strawberry-934066/
// https://images.pexels.com/photos/934066/pexels-photo-934066.jpeg
// https://res.cloudinary.com/picturecloud7/image/upload/remote-media/934066/pexels-photo-934066.jpeg/
cloudinary.uploader.upload('https://res.cloudinary.com/picturecloud7/image/upload/remote-media/934066/pexels-photo-934066.jpeg', {
 
})
    .then(uploadResult => console.log(JSON.stringify(uploadResult, null, 2)))
    .catch(error => console.error(error));

// check the image in the DAM


// get the secure url and auto everything with a thumbnail crop 300 x 300
// console.log(cloudinary.image("/autoupload-test/images/pic", {
//     width: 300,
//     height: 300,
//     quality: "auto",
//     fetch_format: "auto",
//     crop: "fill"
// }))
require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// auto fetch an image using a pexels photo
// https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg
// https://res.cloudinary.com/picturecloud7/image/upload/remote-media/102104/pexels-photo-102104.jpeg
// got look at it in media library - it's cached under with that URL as the key

// rename it 
// Cloudinary::Uploader.upload('<remote URL>', public_id: "<the same public ID>", invalidate: true, callback)

// https://support.cloudinary.com/hc/en-us/community/posts/360048854951-Auto-Upload-and-Public-ID

cloudinary.uploader.rename('https://res.cloudinary.com/picturecloud7/image/upload/remote-media/102104/pexels-photo-102104.jpeg',
    'remote-media/apple',
    { invalidate: true },
    function (error, result) { console.log(result, error) });

    // public id from response ft8kxrzq6xxr7tjrmwvr


require('dotenv').config();
const cloudinary = require('cloudinary').v2;


// auto fetch an image using a pexels photo
// https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg
// https://res.cloudinary.com/picturecloud7/image/upload/remote-media/102104/pexels-photo-102104.jpeg
// got look at it in media library - it's cached under with that URL as the key

// rename it 
// Cloudinary::Uploader.upload('<remote URL>', public_id: "<the same public ID>", invalidate: true, callback)

// https://support.cloudinary.com/hc/en-us/community/posts/360048854951-Auto-Upload-and-Public-ID
// public id is <mapped folder>/<any subfolder>/<asset without extension
cloudinary.uploader.rename('remote-media/102104/pexels-photo-102104',
    'remote-media/apple',
    { invalidate: true },
    function (error, result) { console.log(result, error) });

    // {
    //     public_id: 'remote-media/apple',
    //     version: 1578787178,
    //     signature: '106e70092ebde3700970882d0dbe27ceb880b250',
    //     width: 2827,
    //     height: 2827,
    //     format: 'jpg',
    //     resource_type: 'image',
    //     created_at: '2020-01-11T23:59:38Z',
    //     tags: [],
    //     bytes: 3102216,
    //     type: 'upload',
    //     placeholder: false,
    //     url: 'http://res.cloudinary.com/picturecloud7/image/upload/v1578787178/remote-media/apple.jpg',
    //     secure_url: 'https://res.cloudinary.com/picturecloud7/image/upload/v1578787178/remote-media/apple.jpg',
    //     backup_url: 'api.cloudinary.com/v1_1/picturecloud7/resources/b96cd6594511eed7c36240c3649bed4b/backup/9fffe53c283ceae6f43c811cb557bb47',
    //     access_mode: 'public'
    //   } undefined

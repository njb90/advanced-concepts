require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url("remote-all-types/raw/data.json",
        { type: 'private', secure: true, resource_type: 'raw', sign_url: true }));

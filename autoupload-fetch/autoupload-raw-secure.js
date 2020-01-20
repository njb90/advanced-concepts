require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url("remote-all-types/raw/data.json",
    { resource_type: 'raw', secure: true }));


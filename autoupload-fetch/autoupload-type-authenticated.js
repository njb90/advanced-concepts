require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// authenticated: bothe original and derived are protected
console.log(cloudinary.url("remote-all-types/raw/data.json",
    { type: 'authenticated',resource_type:"raw",sign_url:true, secure: true }));
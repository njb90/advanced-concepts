require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log(cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx",
    { type: 'authenticated', secure: true }));
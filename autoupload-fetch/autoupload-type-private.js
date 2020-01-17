require('dotenv').config();
const cloudinary = require('cloudinary').v2;

console.log("works for everyone:\t",cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx",
    { secure: true, resource_type: 'raw' }));
console.log("private works if you're signed into account:\t",cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx",
    { type: 'private', secure: true, resource_type: 'raw' }));
console.log("signed works if you're signed into account:\t",cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx",
    { sign_url: true, secure: true, resource_type: 'raw' }));
console.log("authenticated fails doesn't make it to kibana:\t",cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx",
    { type: 'authenticated', secure: true, resource_type: 'raw' }));

require('dotenv').config();
const cloudinary = require('cloudinary').v2;

// https://cloudinary.com/blog/how_to_automatically_migrate_all_your_images_to_the_cloud

// upload a spreadsheet
console.log(cloudinary.url("autoupload-test/raw/test-spreadsheet.xlsx", 
               { resource_type: 'raw',secure:true } ));


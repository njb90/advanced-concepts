require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const open = require('open');

const today = new Date().toISOString();

const addDays = days=>{
  let currentDate = new Date();
  return new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate()+days);
}
// set to expire after 1 day
const enddate = addDays(1).toISOString();
console.log('oneweekfromtoday',enddate);


cloudinary.uploader.upload('http://images.pexels.com/photos/3068179/pexels-photo-3068179.jpeg', {
  public_id: "koi",
  type: "upload",
  overwrite: true,
  "access_control": [
    { access_type: "anonymous", start: today, end: enddate }
  ]
})
  .then(uploadResult => {
    console.log(uploadResult)
    let url = uploadResult.secure_url;
    open(url)
  })
  .catch(error => console.error(error));
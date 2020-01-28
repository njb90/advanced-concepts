//set up the widget
const CLOUDNAME = "picturecloud7";
const API_KEY = "944887911222188";
const USERNAME = "rebeccapeltz@gmail.com";
async function getSignature() {
  let response = await fetch("/signature");
  let data = await response.json();
  return data;
}
getSignature().then(data => {
  this.authInfo = data;
  console.log(JSON.stringify(this.authInfo));
  this.mlWidget = cloudinary.createMediaLibrary({
      cloud_name: CLOUDNAME,
      api_key: API_KEY,
      username: USERNAME,
      timestamp: authInfo.timestamp,
      signature: authInfo.signature,
      button_class: "myBtn",
      button_caption: "Select Image or Video",
      insert_transformation: true
    }, {
      insertHandler: function (data) {
        data.assets.forEach(asset => {
          console.log("Inserted asset:", JSON.stringify(asset, null, 2));
        });
      }
    },
    document.getElementById("ml-button")
  );
});
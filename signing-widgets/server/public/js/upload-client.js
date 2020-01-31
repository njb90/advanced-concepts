document.addEventListener("DOMContentLoaded", function (event) {
  // called after successfully retrieving upload signature
  var uploadFn = function (result, textStatus, xhr) {
    let options = {
      cloudName: '<cloud_name>',
      apiKey: '<api_key>',
      uploadSignatureTimestamp: result.timestamp,
      uploadSignature: result.signature,
      cropping: true,
    }
    var myWidget = cloudinary.createUploadWidget(options, (error, result) => {
      if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
      }
    })
    document.getElementById("upload_widget").addEventListener("click", function () {
      myWidget.open();
    }, false);
  }

  var generateSignature = function (callback) {
    fetch('//localhost:3000/api/signupload')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        callback(result)
      })
      .catch((error) => {
        console.log(error)
      })
  };
  generateSignature(uploadFn);
})
document.addEventListener("DOMContentLoaded", function (event) {
  // called after successfully retrieving upload signature
  var uploadFn = function (result, textStatus, xhr) {
    let options = {
      cloudName: 'picturecloud7',
      apiKey: '944887911222188',
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
    $.ajax({
      url: '//localhost:3000/api/signupload',
      type: 'GET',
      dataType: 'json',
      complete: function () {
        console.log("complete")
      },
      success: function (result, textStatus, xhr) {
        callback(result);
      },
      error: function (xhr, status, error) {
        console.log(xhr, status, error);
      }
    });
  }
  generateSignature(uploadFn);
})
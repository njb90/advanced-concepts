document.addEventListener("DOMContentLoaded", function () {
  // called after successfully retrieving upload signature
  var mlFn = function (result, textStatus, xhr) {
    let config = {
      cloud_name: 'picturecloud7',
      api_key: '944887911222188',
      username: 'rebeccapeltz@gmail.com',
      timestamp: result.timestamp,
      signature: result.signature,
      button_class: "ml-btn",
      button_caption: "Open Media Library",
      insert_transformation: true,
    };
    // console.log(result.signature)
    // console.log(result.timestamp)
    window.mlWidget = cloudinary.createMediaLibrary(
      config,
      {
        insertHandler: function (data) {
          data.assets.forEach(asset => {
            console.log("Inserted asset:", JSON.stringify(asset, null, 2));
          });
        }
      },
      "#ml-button"
    );
  }

  var generateSignature = function (callback) {
    $.ajax({
      url: '//localhost:3000/api/signml',
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
  generateSignature(mlFn);
})
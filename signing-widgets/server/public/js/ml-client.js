document.addEventListener("DOMContentLoaded", function () {
  // called after successfully retrieving upload signature
  var mlFn = function (result, textStatus, xhr) {
    let config = {
      cloud_name: '<cloud_name>',
      api_key: '<api_key>',
      username: '<user name email>',
      timestamp: result.timestamp,
      signature: result.signature,
      button_class: "ml-btn",
      button_caption: "Open Media Library",
      insert_transformation: true,
    };
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
    fetch('//localhost:3000/api/signml')
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
  generateSignature(mlFn);
})
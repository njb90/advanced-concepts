const cloudName = "<your cloud name>";
const uploadPreset = "<your unsigned upload preset>";
const apiKey = "<your api key>";
const useremail = "<your user name email>";

document.addEventListener("DOMContentLoaded", function () {
  console.log(cloudinary);
  /* Product Gallery */
  // debugger;
  const myGallery = cloudinary.galleryWidget({
    container: "#my-gallery",
    cloudName: "demo",
    mediaAssets: [{
      tag: "electric_car_product_gallery_demo"
    }, // by default mediaType: "image"
    {
      tag: "electric_car_product_gallery_demo",
      mediaType: "video"
    },
    {
      tag: "electric_car_360_product_gallery_demo",
      mediaType: "spin"
    }
    ]
  });

  myGallery.render();

  /* upload widget*/
  var myWidget = cloudinary.createUploadWidget({
    cloudName: cloudName,
    uploadPreset: uploadPreset
  },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        document.querySelector("#uploaded-image").setAttribute("src", result.info
          .secure_url)
      }
    }
  );
  /* upload widget */
  document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );

  /* media library widget unsigned */
  window.ml = cloudinary.createMediaLibrary({
    cloud_name: cloudName,
    api_key: apiKey,
    username: useremail,
    button_class: 'myBtn',
    button_caption: 'Select Image or Video',
  }, {
      insertHandler: function (data) {
        data.assets.forEach(asset => {
          console.log("Inserted asset:",
            JSON.stringify(asset, null, 2))
          let li = document.createElement('li')
          // Create anchor element. 
          let a = document.createElement('a');
          li.appendChild(a)
          // Create the text node for anchor element. 
          let link = document.createTextNode(asset.public_id);

          // Append the text node to anchor element. 
          a.appendChild(link);

          // Set the title. 
          a.title = "asset.public_id";

          // Set the href property. 
          a.href = asset.secure_url;
          document.querySelector("#inserted-media").appendChild(li)
        })
      }
    },
    document.getElementById("open-btn")
  )

  //video player
  var cld = cloudinary.Cloudinary.new({
      cloud_name: 'demo'
  });
  var demoplayer = cld.videoPlayer('doc-player').width(600);
  demoplayer.source('race_road_car')

});
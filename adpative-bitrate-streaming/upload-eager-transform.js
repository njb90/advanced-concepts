require('dotenv').config();
const cloudinary = require('cloudinary').v2;

var up_options =
{
    resource_type: "video",
    eager: [
        { streaming_profile: "hd", format: "m3u8" },
        { streaming_profile: "hd", format: "mpd" }],
    eager_async: true,
    eager_notification_url: "https://webhook.site/49bd713a-f6e8-4c43-95d9-955d27f4acf4",
    public_id: "whale"
};
cloudinary.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/7/74/Humpbackwhale_singing.webm/Humpbackwhale_singing.webm.360p.vp9.webm",
    up_options,
    function (result) { console.log(result); })


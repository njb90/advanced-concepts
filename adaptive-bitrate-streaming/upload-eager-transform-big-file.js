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
    public_id: "bacteria"
};
cloudinary.uploader.upload(
    "https://ia600303.us.archive.org/18/items/bacteria_friend_and_foe/bacteria_friend_and_foe_512kb.mp4",
    up_options,
    function (result) { console.log(result); })


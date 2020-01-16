# Adaptive Bitrate Streaming

Using the Cloudinary Video player in your client allows you to take advantage of adaptive bitrate streaming.  

## Setup


`npm install lodash cloudinary-core cloudinary-video-player dashjs videojs-contrib-dash`

then to copy rquired fiels to into local `js` and `css` directories using 
`npm run build`

**Note:** The video player does not require the full Cloudinary core library. You can use the "shrinkwrap" version.  

### add to HTML head 
```html 
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link href="./css/cld-video-player.min.css" rel="stylesheet">
<link href="./css/style.css" rel="stylesheet">
```

### add to HTML body  
```html
<script type="text/javascript" src="./js/cloudinary-core-shrinkwrap.min.js"></script>
<script type="text/javascript" src="./js/cld-video-player.min.js"></script>
<script type="text/javascript" src="./js/dash.all.min.js"></script>
<script type="text/javascript" src="./js/videojs-dash.min.js"></script>
```



<link href="https://unpkg.com/cloudinary-video-player@1.3.3/dist/cld-video-player.min.css" 
   rel="stylesheet">
<script src="https://unpkg.com/cloudinary-core@2.6.3/cloudinary-core-shrinkwrap.min.js" 
   type="text/javascript"></script>
<script src="https://unpkg.com/cloudinary-video-player@1.3.3/dist/cld-video-player.min.js" 
   type="text/javascript"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/dashjs/3.0.0/dash.all.min.js" type="text/javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-dash/2.9.2/videojs-dash.min.js" 
    type="text/javascript">  
</script>
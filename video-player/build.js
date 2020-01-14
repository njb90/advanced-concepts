// simple build copies from node_modules to local directories
var fs = require('fs-extra');
var path = require('path')

fs.copySync(path.resolve(__dirname,'./node_modules/cloudinary-video-player/dist/cld-video-player.min.css'), './css/cld-video-player.min.css');
fs.copySync(path.resolve(__dirname,'./node_modules/lodash/lodash.js'), './js/lodash.js');
fs.copySync(path.resolve(__dirname,'./node_modules/cloudinary-core/cloudinary-core-shrinkwrap.js.map'), './js/cloudinary-core-shrinkwrap.js.map');
fs.copySync(path.resolve(__dirname,'./node_modules/cloudinary-core/cloudinary-core-shrinkwrap.min.js'), './js/cloudinary-core-shrinkwrap.min.js');
fs.copySync(path.resolve(__dirname,'./node_modules/cloudinary-video-player/dist/cld-video-player.min.js'), './js/cld-video-player.min.js');
fs.copySync(path.resolve(__dirname,'./node_modules/dashjs/dist/dash.all.min.js'), './js/dash.all.min.js');
fs.copySync(path.resolve(__dirname,'./node_modules/dashjs/dist/dash.all.min.js.map'), './js/dash.all.min.js.map');
fs.copySync(path.resolve(__dirname,'./node_modules/dashjs/dist/dash.all.min.js'), './js/dash.all.min.js');
fs.copySync(path.resolve(__dirname,'./node_modules/videojs-contrib-dash/dist/videojs-dash.min.js'), './js/videojs-dash.min.js');
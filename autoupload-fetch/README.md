Exercise 1
Set up autoload folder
https://cloudinary.com/documentation/fetch_remote_images#configuring_auto_upload_url_mapping

Use Fetch and autoload to display an image on the web

Change the underlying image but leave the name the same.  Do either autofetch or upload pick up the change?

AUTOUPLOAD
https://res.cloudinary.com/picturecloud7/image/upload/autoupload-test/images/pic.jpg
looks like a black pen

FETCH
https://www.beckypeltz.me/advanced-concepts/autoupload-fetch/images/pic.jpg


https://res.cloudinary.com/picturecloud7/image/fetch/https://www.beckypeltz.me/advanced-concepts/autoupload-fetch/images/pic.jpg

https://res.cloudinary.com/picturecloud7/image/fetch/e_colorize,co_red,l_text:Arial_80:Writing%20Tool/https://www.beckypeltz.me/advanced-concepts/autoupload-fetch/images/pic.jpg

https://res.cloudinary.com/picturecloud7/image/fetch/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png

https://res.cloudinary.com/picturecloud7/image/fetch/l_text:Arial_80:Flowers/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png



Upload an image in account A
Create a url that from account B that fetches/remote it
Upload a new image with same public id to account A
Access from Accunt B - using remote and fetch

https://cloudinary.com/documentation/fetch_remote_images


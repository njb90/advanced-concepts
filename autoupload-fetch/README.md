# Advanced Concepts: Auto Upload and Fetch
This folder contains data and scripts to use with exercises in Advanced Concepts workshop.

## Web Server
This folder contains asset folders that can be served using github.io.  To turn on github.io service after copying this repo into your account:
1. go to settings
2. scroll down to github pages
3. select `master branch` from source
4. check enforce HTTPS if you are using a CNAME for your github.io repo
5. you should be able to serve the assets using this URL:
```https://<domain name | accountname.github.io>/advanced-concepts/<images | raw | video>```

## Auto Upload Management

To use the scripts for exercises on Auto Upload management API's 
1. `npm install`
2. add your CLOUDINARY_URL string from your Web UI Dashboard to the .env file in the root of this project
3. make changes to script as needed for your asset and folder names 

// https://cloudinary.com/blog/how_to_automatically_migrate_all_your_images_to_the_cloud
// https://cloudinary.com/documentation/image_transformations?query=cloudinary.url&c_query=Embedding%20images%20in%20web%20pages#embedding_images_in_web_pages

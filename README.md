This exercise project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) (non-ejected), with added node-sass-chokidar as scss loader.

https://hubspot-tribe-landing.herokuapp.com/ - see deployed copy

Installing
1. npm install
2. npm run start
3. if browser tab did not automatically open, open browser and go to http://localhost:3000/

Please take note of the following:
1. The page is built using react, which is a bit of overkill IMO, but I've opted to do it this way to showcase the configurable placeholders
2. No images are stored in this project, all images are from your live site. This means that internet connection is still required to fetch images from the cdn
3. Google Font 'Rubik' import only supports 400 and 300 since mockup only uses those font-weight values
4. Embeded Wistia video has wide screen aspect ratio so it will not be 100% the same with the mockups.
5. Requirements stated that header should be able to accept images for the video container. To test this, I've added a global function that can be called via the developer console and this should toggle Video and Image for the header media. Simply enter > toggleHeaderMedia() on the dev console 
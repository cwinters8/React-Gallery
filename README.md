[![Netlify Status](https://api.netlify.com/api/v1/badges/f098ef7f-dc9c-4bc3-aad2-140b97d3df05/deploy-status)](https://app.netlify.com/sites/react-image-gallery/deploys)

# React-Gallery
A gallery web app built with React. It uses the Flickr API to generate a gallery of photos based on the user's search.

Seventh project in the [Team Treehouse](http://referrals.trhou.se/clarkwinters) Full Stack JavaScript Techdegree.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run this app
This app is running on Netlify. If you'd like to see it, go [here](https://react-image-gallery.netlify.com/).

If you really want to run it yourself, follow these steps.
First, create the file `setupProxy.js` in the src directory, with the following contents. This is needed to run the app in dev, since it is configured to run with a Lambda backend on Netlify.
```js
const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    proxy('/.netlify/functions/', {
      target: 'http://localhost:9000/',
      pathRewrite: {
        '^/\\.netlify/lambda': '',
      },
    }),
  );
};
```
Then, you need to set an environment variable for your API key in the same session where you'll start the app from.
```bash
export APIKEY='yourapikey'
```
Then you can simply install the required packages and run the app.
```bash
npm install
npm start
```

## Technologies Used
React  
React Router  
JavaScript  
Lambda

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

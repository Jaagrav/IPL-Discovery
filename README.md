# [IPL-Discovery](https://ipl-discovery.netlify.app/)

[![IPL-Discovery](https://dev-to-uploads.s3.amazonaws.com/i/248r1b02413gc5bjemg8.png)](https://ipl-discovery.netlify.app/)

This is a discovery page for IPL where users can check various player/team stats. The interface allows the user to use the following features:
- Search Player(s).
- Filter and Sort Players respective of Stats like runs scored, wickets taken, etc.
- View squads of all the teams that participated in IPL2020.
- See extra player info like which arm bowler the player is, when he was born and which hand batsman he is.

## Page Performance

You can share the path links and queries directly from the website. This is a one page website.

---

## Here's how the site performed on Google PageSpeed Insights: 

### On Mobile
![Mobile](https://dev-to-uploads.s3.amazonaws.com/i/vhgkvkccyjwz7q307guu.png)

### On Desktop
![Desktop](https://dev-to-uploads.s3.amazonaws.com/i/1mk6844olnt5nuxqye52.png)

Optimizing the website was challenging since it's loading a lot of visual content, but in order to optimize the website, I am using low res images and a fast API that fetches data at about speeds of 210ms (according to Postman). Over all, the website takes about 2.7s to become fully INTERACTIVE on mobile & desktop devices and 1.3s to load on desktops when tested on Google PageSpeed Insights.

## Technologies Used: 

Here's all the frameworks and libraries I used for this project: 
- [React](https://reactjs.org)
- [Material-UI](https://material-ui.com)
- [Axios](https://www.npmjs.com/package/axios)
- [AOS](https://michalsnik.github.io/aos/)
- [Netlify](https://netlify.com)

## Design

I made the design for this project on Figma. Here's a link to view the Figma Design:
https://www.figma.com/file/uzPQpzz9ZvtJuAGPyvL5Bm/IPL-Discover?node-id=0%3A1

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

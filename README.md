# Product list based on MVVM framework
## To start

`npm install`\
`npm start`\
Runs the app in the development mode\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Design

Models: hold product data\
Views: visualise product information and controls on the screen\
View Models: transform product list from model into values that can be displayed on a view.

## Directory Tree

├── README.md\
├── package-lock.json\
├── package.json\
└── src\
    ├── App.js\
    ├── Controller\
    │   └── ProductController.js\
    ├── Model\
    │   └── ProductModel.js\
    ├── ProductProvider.js\
    ├── Resources\
    │   ├── css\
    │   │   └── app.css\
    │   └── data\
    │       └── ProductData.json\
    ├── View\
    │   ├── ProductView.js\
    │   ├── ProductView.test.js\
    │   └── UIcomponents\
    │       ├── Footer.js\
    │       ├── Header.js\
    │       ├── ProductCard.js\
    │       ├── ProductCardBlock.js\
    │       ├── ProductImg.js\
    │       ├── ProductInfo.js\
    │       └── SaleIcon.js\
    ├── ViewModel\
    │   └── ProductViewModel.js\
    ├── index.js\
    └── setupTests.js

## Tools

CICD: CircleCI (Workflow: build -> style check -> test)
Coding style: Eslint & Prettier
Test: Jest

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
